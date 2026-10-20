/**
 * Minimal, dependency-free allow-list HTML sanitizer for AI-generated or
 * admin-authored article bodies. Removes scripts/styles/iframes, event handler
 * attributes and unsafe URL schemes while keeping basic article formatting.
 */

const ALLOWED_TAGS = new Set([
  "h2", "h3", "h4", "p", "ul", "ol", "li", "strong", "b", "em", "i", "u",
  "a", "blockquote", "br", "hr", "img", "table", "thead", "tbody", "tr", "th", "td",
  "figure", "figcaption", "span", "div", "sup", "sub",
]);

const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ["href", "title", "target", "rel"],
  img: ["src", "alt", "title"],
  "*": ["id"],
};

const DROP_WITH_CONTENT = /<(script|style|iframe|object|embed|form|noscript|template)\b[\s\S]*?<\/\1\s*>/gi;

const isSafeUrl = (value: string, allowRelative = true): boolean => {
  const v = value.trim().replace(/[\u0000-\u001F\u007F\s]+/g, "");
  if (!v) return false;
  if (/^(https?:|mailto:)/i.test(v)) return true;
  if (allowRelative && (v.startsWith("/") || v.startsWith("#"))) return true;
  return false;
};

export function sanitizeHtml(html: string): string {
  if (!html) return "";

  let out = html.replace(DROP_WITH_CONTENT, "").replace(/<!--[\s\S]*?-->/g, "");

  out = out.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g, (match, rawTag: string, attrStr: string) => {
    const tag = rawTag.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) return "";

    if (match.startsWith("</")) return `</${tag}>`;

    const allowed = new Set([...(ALLOWED_ATTRS["*"] || []), ...(ALLOWED_ATTRS[tag] || [])]);
    const attrs: string[] = [];
    const attrRegex = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
    let m: RegExpExecArray | null;
    while ((m = attrRegex.exec(attrStr)) !== null) {
      const name = m[1].toLowerCase();
      const value = m[2] ?? m[3] ?? m[4] ?? "";
      if (!allowed.has(name)) continue;
      if ((name === "href" || name === "src") && !isSafeUrl(value, true)) continue;
      attrs.push(`${name}="${value.replace(/"/g, "&quot;")}"`);
    }

    if (tag === "a") {
      const hrefAttr = attrs.find((a) => a.startsWith("href="));
      if (hrefAttr) {
        const hrefVal = hrefAttr.slice(6, -1);
        const isInternal = hrefVal.startsWith("/") || hrefVal.startsWith("#");
        if (!isInternal) {
          const filtered = attrs.filter((a) => !a.startsWith("rel=") && !a.startsWith("target="));
          filtered.push('target="_blank"', 'rel="noopener noreferrer nofollow"');
          return `<a ${filtered.join(" ")}>`;
        }
        return `<a ${attrs.join(" ")}>`;
      }
    }

    const selfClosing = tag === "br" || tag === "hr" || tag === "img" ? " /" : "";
    return `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}${selfClosing}>`;
  });

  return out;
}

export function slugify(input: string, maxLength = 80): string {
  return (input || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, maxLength)
    .replace(/-+$/g, "");
}
