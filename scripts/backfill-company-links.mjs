import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const require = createRequire(path.join(rootDir, "package.json"));

const ts = require("typescript");
const { MongoClient } = require("mongodb");

function loadEnvLocal() {
  const envPath = path.join(rootDir, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let val = trimmed.slice(eqIdx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

function loadCompanyLinksModule() {
  const tsPath = path.join(rootDir, "src/lib/companyLinks.ts");
  const source = fs.readFileSync(tsPath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const mod = { exports: {} };
  const fn = vm.runInThisContext(`(function(exports, require, module) {\n${outputText}\n})`, {
    filename: tsPath,
  });
  fn(mod.exports, require, mod);
  return mod.exports;
}

async function main() {
  loadEnvLocal();
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set in .env.local or environment");
  }

  const { injectCompanyWebsiteLinks } = loadCompanyLinksModule();

  const client = new MongoClient(uri);
  await client.connect();
  try {
    const db = client.db("test");
    const collection = db.collection("custom_news");

    const docs = await collection.find({ content: { $type: "string", $ne: "" } }).toArray();
    let updatedCount = 0;

    for (const doc of docs) {
      const updatedContent = injectCompanyWebsiteLinks(doc.content);
      if (updatedContent !== doc.content) {
        await collection.updateOne({ _id: doc._id }, { $set: { content: updatedContent } });
        updatedCount++;
        const beforeLinks = (doc.content.match(/<a\b/gi) || []).length;
        const afterLinks = (updatedContent.match(/<a\b/gi) || []).length;
        console.log(
          `Updated [${doc.slug || doc._id}]: +${afterLinks - beforeLinks} company/firm link(s)`
        );
      }
    }

    console.log(`Done. Checked ${docs.length} article(s), updated ${updatedCount} article(s).`);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
