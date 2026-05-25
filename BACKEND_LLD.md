# AMA Connect: Custom MongoDB & PayU Low-Level Design (LLD)

This Low-Level Design (LLD) provides the concrete Mongoose schemas, NextAuth configuration, GridFS handlers, and webhook-less PayU gateway code needed to implement the **AMA Connect** website.

---

## 🗃️ 1. Mongoose Collections & Embedded Models

Since we are utilizing MongoDB with **Mongoose**, all relations are denormalized and embedded to achieve maximum query performance.

### A. Core Schema Definitions (`src/lib/models.ts`)

```typescript
import mongoose, { Schema, Document } from "mongoose";

// -------------------------------------------------------------
// 1. Q&A MODULE (EMBEDDED READ-ONLY FEED - NO UPVOTES / NO COMMENTS)
// -------------------------------------------------------------
const AnswerSchema = new Schema({
  verifiedBy: { type: String, required: true },
  logo: { type: String, default: "/logo_qa.png" },
  rating: { type: Number, default: 4.5 },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  author: { type: String, required: true },
  avatar: { type: String, default: "/man.png" },
  tags: [{ type: String }],
  answers: [AnswerSchema],
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 2. LAWYER GUEST STORIES (ADMIN CURATED)
// -------------------------------------------------------------
const StorySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  designation: { type: String, required: true }, // e.g. "Delhi High Court Lawyer"
  court: { type: String, required: true },
  tags: [{ type: String }],
  content: { type: String, required: true }, // Rich text / Markdown
  featuredImageId: { type: Schema.Types.ObjectId, required: true }, // Refers to fs.files (GridFS)
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 3. CLIENT SUCCESS STORIES (AUTO-PUBLISHED)
// -------------------------------------------------------------
const SuccessStorySchema = new Schema({
  clientName: { type: String, required: true },
  clientProfession: { type: String, default: "Client" },
  issueDescription: { type: String, required: true },
  status: { type: String, enum: ["APPROVED", "PENDING"], default: "APPROVED" }, // Auto-publish by default
  createdAt: { type: Date, default: Date.now }
});

// -------------------------------------------------------------
// 4. DRAFTS TRANSACTION & GATEKEEPING
// -------------------------------------------------------------
const DraftSchema = new Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  gridFsFileId: { type: Schema.Types.ObjectId, required: true }, // Refers to PDF binary in GridFS
  downloads: { type: Number, default: 0 }
});

const TransactionSchema = new Schema({
  leadName: { type: String, required: true },
  leadEmail: { type: String, required: true },
  leadPhone: { type: String, required: true },
  draftId: { type: Schema.Types.ObjectId, ref: "Draft", required: true },
  amount: { type: Number, default: 499.00 },
  status: { type: String, enum: ["PENDING", "SUCCESS", "FAILED"], default: "PENDING" },
  payuTxnId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const Question = mongoose.models.Question || mongoose.model("Question", QuestionSchema);
export const Story = mongoose.models.Story || mongoose.model("Story", StorySchema);
export const SuccessStory = mongoose.models.SuccessStory || mongoose.model("SuccessStory", SuccessStorySchema);
export const Draft = mongoose.models.Draft || mongoose.model("Draft", DraftSchema);
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
```

---

## 📂 2. MongoDB GridFS File Streams (`src/lib/gridfs.ts`)

These utility functions handle connection, upload, and downloads streaming from GridFS for PDF templates and guest images:

```typescript
import mongoose from "mongoose";
import { Readable } from "stream";

let gridFSBucket: mongoose.mongo.GridFSBucket | null = null;

export function getGridFSBucket(): mongoose.mongo.GridFSBucket {
  if (gridFSBucket) return gridFSBucket;

  const conn = mongoose.connection;
  if (!conn.db) {
    throw new Error("Mongoose is not connected to the database.");
  }

  gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads", // Creates 'uploads.files' and 'uploads.chunks' collections
  });

  return gridFSBucket;
}

/**
 * Uploads a buffer directly into GridFS, returning the ObjectId reference.
 */
export async function uploadToGridFS(buffer: Buffer, filename: string, contentType: string): Promise<mongoose.Types.ObjectId> {
  const bucket = getGridFSBucket();
  const uploadStream = bucket.openUploadStream(filename, {
    contentType: contentType,
  });

  return new Promise((resolve, reject) => {
    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);

    readableStream
      .pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => {
        resolve(uploadStream.id as mongoose.Types.ObjectId);
      });
  });
}
```

---

## 🔒 3. NextAuth MongoDB Configuration (`src/lib/auth.ts`)

Uses the official MongoDB adapter to store user accounts entirely free of cost:

```typescript
import { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./mongodb-client"; // Standard NextAuth MongoDB Client connector

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  providers: [
    // Support OAuth logins like Google, GitHub or standard Credentials
  ],
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    }
  }
};
```

---

## ⚡ 4. Webhook-Less PayU Transaction API

We bypass silent background webhooks by securely executing a dual mathematical hash check + direct server-to-server PayU transaction status verification poll inside the user's redirect request window.

### SURL Payment Success Redirection Callback API (`src/app/api/payment/callback/route.ts`)

```typescript
import { NextResponse } from "next/server";
import crypto from "crypto";
import { Transaction, Draft } from "@/lib/models";
import { getGridFSBucket } from "@/lib/gridfs";

// PayU Credentials
const PAYU_SALT = process.env.PAYU_SALT || "YOUR_SALT";
const PAYU_KEY = process.env.PAYU_KEY || "YOUR_KEY";

export async function POST(req: Request) {
  try {
    // PayU redirects back with form-encoded data in a POST request
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());

    // 1. Extract payment parameters
    const { status, txnid, amount, firstname, email, productinfo, hash } = data;

    // 2. Mathematically verify PayU hash to prevent tampering
    // PayU Success Hash formula: sha512(salt|status|||||||||||email|firstname|productinfo|amount|txnid|key)
    const rawString = `${PAYU_SALT}|${status}|||||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${PAYU_KEY}`;
    const calculatedHash = crypto.createHash("sha512").update(rawString).digest("hex");

    if (calculatedHash !== hash) {
      return NextResponse.json({ error: "Tampered Hash signature." }, { status: 400 });
    }

    if (status !== "success") {
      return NextResponse.json({ error: "Payment failed." }, { status: 400 });
    }

    // 3. Fail-Safe: Perform a direct API Poll query to PayU to double check
    const payuPollUrl = `https://info.payu.in/merchant/postservice?form=2`; // Production URL
    const command = "verify_payment";
    const pollHash = crypto.createHash("sha512").update(`${PAYU_KEY}|${command}|${txnid}|${PAYU_SALT}`).digest("hex");

    const payuResponse = await fetch(payuPollUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        key: PAYU_KEY,
        command: command,
        var1: txnid as string,
        hash: pollHash
      })
    });

    const pollResult = await payuResponse.json();
    const isPaymentConfirmed = pollResult?.transaction_details?.[txnid as string]?.status === "success";

    if (!isPaymentConfirmed) {
      return NextResponse.json({ error: "Verification rejected by PayU APIs." }, { status: 400 });
    }

    // 4. Update transaction in database
    const txn = await Transaction.findOneAndUpdate(
      { payuTxnId: txnid },
      { status: "SUCCESS" },
      { new: true }
    );

    if (!txn) {
      return NextResponse.json({ error: "Transaction record not found." }, { status: 404 });
    }

    // 5. Fetch file details & stream binary PDF directly to the browser
    const draft = await Draft.findById(txn.draftId);
    const bucket = getGridFSBucket();
    const fileId = new mongoose.Types.ObjectId(draft.gridFsFileId);

    // Increment download statistics
    draft.downloads += 1;
    await draft.save();

    const fileStream = bucket.openDownloadStream(fileId);

    // Set headers to trigger an immediate browser PDF stream download
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set("Content-Disposition", `attachment; filename="${draft.title}.pdf"`);

    // Stream the binary chunks from GridFS directly back in the redirect response
    return new Response(fileStream as any, { headers });

  } catch (error) {
    console.error("Payment validation failed", error);
    return NextResponse.redirect(new URL("/drafts/failed", req.url));
  }
}
```

---

## 🔍 5. Typo-Tolerant Atlas Search Config

We map an **Atlas Search Index** on the `drafts` collection in your MongoDB cloud console. Once set up, we query fuzzy typos instantly:

### Atlas Search API Endpoint (`src/app/api/drafts/search/route.ts`)

```typescript
import { NextResponse } from "next/server";
import { Draft } from "@/lib/models";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ drafts: [] });
    }

    // Atlas Search fuzzy query pipeline (Lucene-backed)
    const searchPipeline = [
      {
        $search: {
          index: "default", // Matches index name in Atlas dashboard
          text: {
            query: query,
            path: ["title", "category", "subCategory"],
            fuzzy: {
              maxEdits: 2,          // Allows up to 2 character typos (e.g. "legla" -> "legal")
              prefixLength: 1,      // Prevents typos on the very first letter
              maxExpansions: 50
            }
          }
        }
      },
      {
        $limit: 9 // Pagination limit
      }
    ];

    const results = await Draft.aggregate(searchPipeline);
    return NextResponse.json({ drafts: results });

  } catch (error) {
    console.error("Atlas search query failed", error);
    return NextResponse.json({ error: "Search failed" }, { status: 500 });
  }
}
```

---

## 📶 6. Dynamic Q&A Pull Service (`src/app/api/qa/route.ts`)

Pulls Q&A data dynamically in real time from your main application database, secured by a shared `x-api-key`:

```typescript
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const MAIN_APP_API = process.env.MAIN_APP_API_URL || "https://api.amaconnect.com";
    const SHARED_SECRET = process.env.AMA_CONNECT_SECRET_KEY || "SECRET_KEY";

    // Call your primary application API securely
    const response = await fetch(`${MAIN_APP_API}/api/v1/qa/external`, {
      method: "GET",
      headers: {
        "x-api-key": SHARED_SECRET,
        "Content-Type": "application/json"
      },
      next: { revalidate: 60 } // Cache results for 60 seconds
    });

    if (!response.ok) {
      throw new Error("Primary app Q&A fetch failed");
    }

    const data = await response.json();
    return NextResponse.json({ questions: data.questions });

  } catch (error) {
    console.error("Dynamic QA pull failed", error);
    // Return gracefully cached fallback QA mock data if main server is down
    return NextResponse.json({ questions: [] });
  }
}
```
