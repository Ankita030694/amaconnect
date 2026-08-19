/**
 * Strips common brand suffixes to prevent duplication when Next.js layout template is applied.
 */
export function stripBrandSuffix(title: string): string {
  if (!title) return "";
  return title
    .replace(/\s*[|–-]\s*AMA\s*Connect/gi, "")
    .replace(/\s*[|–-]\s*AMA\s*Legal\s*Solutions/gi, "")
    .trim();
}

/**
 * Truncates a string to a maximum length at a word boundary to prevent awkward cut-offs.
 */
export function truncateToWordBoundary(str: string, maxLength: number): string {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  
  // Reserve 3 chars for "..."
  const budget = maxLength - 3;
  let truncated = str.substring(0, budget);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > budget * 0.6) {
    truncated = truncated.substring(0, lastSpace);
  }
  return truncated.trim() + "...";
}

/**
 * Generates an optimal page-level title that fits within the recommended Next.js template
 * to ensure the final browser title (including " | AMA Connect") stays between 45 and 60 characters.
 */
export function getOptimalPageTitle(title: string, fallbackTitle?: string): string {
  let cleanTitle = stripBrandSuffix(title || "");
  
  // If the provided title is too short (< 28 chars) and we have a fallback title, use fallback
  if (cleanTitle.length < 28 && fallbackTitle) {
    const cleanFallback = stripBrandSuffix(fallbackTitle);
    if (cleanFallback.length >= 28) {
      cleanTitle = cleanFallback;
    }
  }
  
  // Layout appends " | AMA Connect" which is 14 characters.
  // Maximum allowed child page title is 60 - 14 = 46 characters.
  return truncateToWordBoundary(cleanTitle, 46);
}

/**
 * Specifically formats draft titles for optimal length, falling back from full Download template
 * to shorter alternatives if the draft title is very long.
 */
export function getOptimalDraftTitle(title: string, cleanTitleFn: (t: string) => string): string {
  const cleanName = cleanTitleFn(title);
  
  // The layout appends " | AMA Connect" (14 characters).
  // Child page's title must be at most 46 characters (60 - 14 = 46).
  
  // Attempt 1: "Download [cleanName] Template"
  const standardTitle = `Download ${cleanName} Template`;
  if (standardTitle.length <= 46) {
    return standardTitle;
  }
  
  // Attempt 2: Drop "Download" -> "[cleanName] Template"
  const noDownloadTitle = `${cleanName} Template`;
  if (noDownloadTitle.length <= 46) {
    return noDownloadTitle;
  }
  
  // Attempt 3: Drop "Template" -> "Download [cleanName]"
  const noTemplateTitle = `Download ${cleanName}`;
  if (noTemplateTitle.length <= 46) {
    return noTemplateTitle;
  }
  
  // Attempt 4: Just "[cleanName]" (truncated to fit)
  return truncateToWordBoundary(cleanName, 46);
}
