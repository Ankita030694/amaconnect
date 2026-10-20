/**
 * Helper to ensure news articles have rich, contextual internal links to AMA Connect
 * guides, drafts, interviews, and consultation services.
 */

interface LinkRule {
  pattern: RegExp;
  href: string;
  replacement: (match: string) => string;
}

const LINK_RULES: LinkRule[] = [
  {
    pattern: /\b(cheque\s+bounce|section\s+138(\s+of\s+the\s+ni\s+act)?|dishonou?r\s+of\s+cheque)\b/i,
    href: "/cheque-bounce-legal-notice-section-138-guide",
    replacement: (m) => `<a href="/cheque-bounce-legal-notice-section-138-guide">${m}</a>`,
  },
  {
    pattern: /\b(rera(\s+act|\s+tribunal|\s+authority)?|delayed\s+possession|homebuyer\s+rights?|real\s+estate\s+dispute)\b/i,
    href: "/homebuyer-rights-rera-builder-delay-remedies",
    replacement: (m) => `<a href="/homebuyer-rights-rera-builder-delay-remedies">${m}</a>`,
  },
  {
    pattern: /\b(cyber\s+fraud|online\s+financial\s+scam|cyber\s+crime\s+complaint|phishing\s+scam)\b/i,
    href: "/cyber-fraud-online-scams-legal-recourse",
    replacement: (m) => `<a href="/cyber-fraud-online-scams-legal-recourse">${m}</a>`,
  },
  {
    pattern: /\b(property\s+dispute|partition\s+suit|title\s+dispute|ancestral\s+property)\b/i,
    href: "/property-dispute-resolution-india-legal-remedies",
    replacement: (m) => `<a href="/property-dispute-resolution-india-legal-remedies">${m}</a>`,
  },
  {
    pattern: /\b(loan\s+recovery\s+harassment|recovery\s+agents?|illegal\s+recovery)\b/i,
    href: "/loan-app-debt-settlement-harassment-legal-help",
    replacement: (m) => `<a href="/loan-app-debt-settlement-harassment-legal-help">${m}</a>`,
  },
  {
    pattern: /\b(consumer\s+protection(\s+act)?|consumer\s+court|consumer\s+complaint|defective\s+goods)\b/i,
    href: "/consumer-protection-ecommerce-defective-goods-guide",
    replacement: (m) => `<a href="/consumer-protection-ecommerce-defective-goods-guide">${m}</a>`,
  },
  {
    pattern: /\b(mutual\s+consent\s+divorce|divorce\s+petition|alimony\s+and\s+maintenance)\b/i,
    href: "/how-to-file-divorce-india-legal-guide",
    replacement: (m) => `<a href="/how-to-file-divorce-india-legal-guide">${m}</a>`,
  },
  {
    pattern: /\b(legal\s+notice|statutory\s+notice|demand\s+notice)\b/i,
    href: "/how-to-draft-legal-notice-india-guide",
    replacement: (m) => `<a href="/how-to-draft-legal-notice-india-guide">${m}</a>`,
  },
  {
    pattern: /\b(legal\s+templates?|notice\s+templates?|agreement\s+draft|contract\s+templates?)\b/i,
    href: "/drafts",
    replacement: (m) => `<a href="/drafts">${m}</a>`,
  },
  {
    pattern: /\b(senior\s+advocates?|advocate\s+insights?|lawyer\s+interviews?)\b/i,
    href: "/interviews",
    replacement: (m) => `<a href="/interviews">${m}</a>`,
  },
  {
    pattern: /\b(legal\s+remedy|legal\s+recourse|legal\s+counsel|advocate\s+consultation)\b/i,
    href: "/ask-me-anything",
    replacement: (m) => `<a href="/ask-me-anything">${m}</a>`,
  },
];

/**
 * Injects contextual internal links into HTML paragraphs if not already linked.
 * Maximum of maxLinks links injected per article to prevent over-optimization.
 */
export function injectContextualInternalLinks(html: string, maxLinks = 3): string {
  if (!html) return html;

  // Count existing internal links
  const existingInternalLinks = (html.match(/<a\b[^>]*href=["']\/(?!\/)[^"']*["']/gi) || []).length;
  if (existingInternalLinks >= maxLinks) {
    return html;
  }

  let remaining = maxLinks - existingInternalLinks;
  const appliedHrefs = new Set<string>();

  // Extract existing hrefs so we don't duplicate
  const existingMatches = html.matchAll(/href=["'](\/[^"']*)["']/gi);
  for (const m of existingMatches) {
    appliedHrefs.add(m[1]);
  }

  // Process text only inside <p>...</p> tags, avoiding headers and existing <a> tags
  return html.replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi, (fullP, pAttrs, pInner) => {
    if (remaining <= 0) return fullP;

    // Split paragraph by existing <a>...</a> tags so we never link inside an anchor
    const segments = pInner.split(/(<a\b[\s\S]*?<\/a>)/gi);

    for (let i = 0; i < segments.length; i++) {
      if (remaining <= 0) break;
      // Skip existing links or empty segments
      if (segments[i].startsWith("<a") || !segments[i].trim()) continue;

      for (const rule of LINK_RULES) {
        if (remaining <= 0) break;
        if (appliedHrefs.has(rule.href)) continue;

        if (rule.pattern.test(segments[i])) {
          segments[i] = segments[i].replace(rule.pattern, (matchedText: string) => {
            appliedHrefs.add(rule.href);
            remaining--;
            return rule.replacement(matchedText);
          });
          break; // move to next segment to avoid clustering
        }
      }
    }

    return `<p${pAttrs}>${segments.join("")}</p>`;
  });
}
