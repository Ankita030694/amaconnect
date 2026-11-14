/**
 * Registry of companies, investors, and law firms mentioned in AMA Connect news,
 * mapped to their verified official websites.
 *
 * Used to automatically hyperlink company/firm mentions in both newly generated/saved
 * articles and existing articles.
 */

export interface CompanyLinkRule {
  name: string;
  url: string;
  pattern: RegExp;
}

export const COMPANY_LINK_RULES: CompanyLinkRule[] = [
  // --- Law Firms (longer/specific names before short acronyms) ---
  {
    name: "Cyril Amarchand Mangaldas",
    url: "https://www.cyrilshroff.com",
    pattern: /\bCyril\s+Amarchand\s+Mangaldas\b/i,
  },
  {
    name: "Shardul Amarchand Mangaldas",
    url: "https://www.amsshardul.com",
    pattern: /\bShardul\s+Amarchand\s+Mangaldas(?:\s*&\s*Co\.?)?\b/i,
  },
  {
    name: "Herbert Smith Freehills Kramer",
    url: "https://www.hsfkramer.com",
    pattern: /\bHerbert\s+Smith\s+Freehills(?:\s+Kramer)?\b/i,
  },
  {
    name: "Hammurabi & Solomon Partners",
    url: "https://www.hammurabisolomon.com",
    pattern: /\bHammurabi\s*(?:&|&amp;|and)\s*Solomon(?:\s+Partners)?\b/i,
  },
  {
    name: "GameChanger Law Advisors",
    url: "https://www.gamechangerlaw.com",
    pattern: /\bGameChanger\s+Law\s+Advisors\b/i,
  },
  {
    name: "King & Wood Mallesons",
    url: "https://www.kwm.com",
    pattern: /\bKing\s*(?:&|&amp;|and)\s*Wood\s+Mallesons\b/i,
  },
  {
    name: "King Stubb & Kasiva",
    url: "https://ksandk.com",
    pattern: /\bKing\s+Stubb\s*(?:&|&amp;|and)\s*Kasiva\b/i,
  },
  {
    name: "Chandhiok & Mahajan",
    url: "https://chandhiok.com",
    pattern: /\bChandhiok\s*(?:&|&amp;|and)\s*Mahajan\b/i,
  },
  {
    name: "Saraf and Partners",
    url: "https://sarafpartners.com",
    pattern: /\bSaraf\s+(?:and|&|&amp;)\s+Partners\b/i,
  },
  {
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com",
    pattern: /\bAMA\s+Legal\s+Solutions\b/i,
  },
  {
    name: "Desai & Diwanji",
    url: "https://desaidiwanji.com",
    pattern: /\bDesai\s*(?:&|&amp;|and)\s*Diwanji\b/i,
  },
  {
    name: "Rajani Associates",
    url: "https://www.rajaniassociates.net",
    pattern: /\bRajani\s+Associates\b/i,
  },
  {
    name: "Chadha & Chadha",
    url: "https://www.iprattorneys.com",
    pattern: /\bChadha\s*(?:&|&amp;|and)\s*Chadha\b/i,
  },
  {
    name: "King & Spalding",
    url: "https://www.kslaw.com",
    pattern: /\bKing\s*(?:&|&amp;|and)\s*Spalding\b/i,
  },
  {
    name: "Baker McKenzie",
    url: "https://www.bakermckenzie.com",
    pattern: /\bBaker\s+McKenzie\b/i,
  },
  {
    name: "Argus Partners",
    url: "https://www.argus-p.com",
    pattern: /\bArgus\s+Partners\b/i,
  },
  {
    name: "AZB & Partners",
    url: "https://www.azbpartners.com",
    pattern: /\bAZB\s*(?:&|&amp;|and)\s*Partners\b/i,
  },
  {
    name: "S&R Associates",
    url: "https://www.snrlaw.in",
    pattern: /\bS\s*(?:&|&amp;)\s*R\s+Associates\b/i,
  },
  {
    name: "Hogan Lovells",
    url: "https://www.hoganlovells.com",
    pattern: /\bHogan\s+Lovells(?:\s+Cadwalader)?\b/i,
  },
  {
    name: "Quinn Emanuel",
    url: "https://www.quinnemanuel.com",
    pattern: /\bQuinn\s+Emanuel\b/i,
  },
  {
    name: "CMS INDUSLAW",
    url: "https://www.cms-induslaw.com",
    pattern: /\b(?:CMS\s+)?INDUSLAW\b/i,
  },
  {
    name: "Fox & Mandal",
    url: "https://foxandmandal.co.in",
    pattern: /\bFox\s*(?:&|&amp;|and)\s*Mandal\b/i,
  },
  {
    name: "Khaitan & Co",
    url: "https://www.khaitanco.com",
    pattern: /\bKhaitan\s*(?:&|&amp;)\s*Co\.?\b/i,
  },
  {
    name: "Three Crowns",
    url: "https://www.threecrownsllp.com",
    pattern: /\bThree\s+Crowns\b/i,
  },
  {
    name: "White & Case",
    url: "https://www.whitecase.com",
    pattern: /\bWhite\s*(?:&|&amp;|and)\s*Case\b/i,
  },
  {
    name: "Ikigai Law",
    url: "https://www.ikigailaw.com",
    pattern: /\bIkigai\s+Law\b/i,
  },
  {
    name: "Clyde & Co",
    url: "https://www.clydeco.com",
    pattern: /\bClyde\s*(?:&|&amp;)\s*Co\.?\b/i,
  },
  {
    name: "Freshfields",
    url: "https://www.freshfields.com",
    pattern: /\bFreshfields\b/i,
  },
  {
    name: "Debevoise",
    url: "https://www.debevoise.com",
    pattern: /\bDebevoise(?:\s*(?:&|&amp;|and)\s*Plimpton)?\b/i,
  },
  {
    name: "Trilegal",
    url: "https://trilegal.com",
    pattern: /\bTrilegal\b/i,
  },
  {
    name: "Varartha",
    url: "https://varartha.com",
    pattern: /\bVarartha\b/i,
  },
  {
    name: "Skadden",
    url: "https://www.skadden.com",
    pattern: /\bSkadden\b/i,
  },
  {
    name: "Ashurst",
    url: "https://www.ashurst.com",
    pattern: /\bAshurst\b/i,
  },
  {
    name: "Allens",
    url: "https://www.allens.com.au",
    pattern: /\bAllens\b/,
  },
  {
    name: "Pinac",
    url: "https://pinaclaw.com",
    pattern: /\bPinac(?:\s+Law)?\b/,
  },
  // Case-sensitive law firm acronyms (only if full name not already linked)
  {
    name: "JSA",
    url: "https://www.jsalaw.com",
    pattern: /\bJSA\b/,
  },
  {
    name: "AZB",
    url: "https://www.azbpartners.com",
    pattern: /\bAZB\b/,
  },
  {
    name: "CAM",
    url: "https://www.cyrilshroff.com",
    pattern: /\bCAM\b/,
  },
  {
    name: "SAM",
    url: "https://www.amsshardul.com",
    pattern: /\bSAM\b/,
  },
  {
    name: "KSK",
    url: "https://ksandk.com",
    pattern: /\bKSK\b/,
  },

  // --- Companies, Corporates, Startups & Investors ---
  {
    name: "National Stock Exchange of India",
    url: "https://www.nseindia.com",
    pattern: /\bNational\s+Stock\s+Exchange(?:\s+of\s+India(?:\s+Limited)?)?\b/i,
  },
  {
    name: "SFC Environmental Technologies",
    url: "https://sfcenvironment.com",
    pattern: /\bSFC\s+Environmental\s+Technologies(?:\s+Limited)?\b/i,
  },
  {
    name: "Bombay Coated & Special Steels",
    url: "https://www.bcsspl.com",
    pattern: /\bBombay\s+Coated\s*(?:&|&amp;|and)\s*Special\s+Steels(?:\s+Limited)?\b/i,
  },
  {
    name: "Smart Horizon Capital Advisors",
    url: "https://shcapl.com",
    pattern: /\bSmart\s+Horizon\s+Capital\s+Advisors(?:\s+Private\s+Limited)?\b/i,
  },
  {
    name: "Sumitomo Mitsui Trust Bank",
    url: "https://www.smtb.jp/english",
    pattern: /\bSumitomo\s+Mitsui\s+Trust\s+Bank\b/i,
  },
  {
    name: "TKMS ATLAS ELEKTRONIK",
    url: "https://www.tkmsgroup.com",
    pattern: /\bTKMS(?:\s+ATLAS\s+ELEKTRONIK)?\b/,
  },
  {
    name: "Vivro Financial Services",
    url: "https://www.vivro.net",
    pattern: /\bVivro\s+Financial(?:\s+Services)?\b/i,
  },
  {
    name: "OAKS Asset Management",
    url: "https://oaksamc.com",
    pattern: /\bOAKS(?:\s+Asset\s+Management)?\b/,
  },
  {
    name: "Vector Line Capital",
    url: "https://www.vectorlinecapital.com",
    pattern: /\bVector\s+Line\s+Capital\b/i,
  },
  {
    name: "South Park Commons",
    url: "https://www.southparkcommons.com",
    pattern: /\bSouth\s+Park\s+Commons\b/i,
  },
  {
    name: "One Planet Partners",
    url: "https://oneplanetpartners.com",
    pattern: /\bOne\s+Planet\s+Partners\b/i,
  },
  {
    name: "Ravita Engineering",
    url: "https://ravita.co.in",
    pattern: /\bRavita\s+Engineering\b/i,
  },
  {
    name: "CFF Fluid Control",
    url: "https://cffdefensys.com",
    pattern: /\bCFF\s+Fluid\s+Control\b/i,
  },
  {
    name: "Sorin Investments",
    url: "https://www.sorininvestments.com",
    pattern: /\bSorin\s+Investments\b/i,
  },
  {
    name: "The Pant Project",
    url: "https://pantproject.com",
    pattern: /\bThe\s+Pant\s+Project\b/i,
  },
  {
    name: "Paras Healthcare",
    url: "https://www.parashospitals.com",
    pattern: /\bParas\s+Healthcare\b/i,
  },
  {
    name: "Cemindia Projects",
    url: "https://www.cemindia.co.in",
    pattern: /\bCemindia\s+Projects\b/i,
  },
  {
    name: "Operators Studio",
    url: "https://operatorsstudio.com",
    pattern: /\bOperators\s+Studio\b/i,
  },
  {
    name: "Speciale Invest",
    url: "https://specialeinvest.com",
    pattern: /\bSpeciale\s+Invest\b/i,
  },
  {
    name: "IvyCap Ventures",
    url: "https://www.ivycapventures.com",
    pattern: /\bIvyCap(?:\s+Ventures)?\b/i,
  },
  {
    name: "Prestige Group",
    url: "https://www.prestigeconstructions.com",
    pattern: /\bPrestige(?:\s+(?:Group|Estates(?:\s+Projects)?))?\b/,
  },
  {
    name: "Carlsberg India",
    url: "https://www.carlsberg.com",
    pattern: /\bCarlsberg\s+India(?:\s+Limited)?\b/i,
  },
  {
    name: "Jurisphere.ai",
    url: "https://www.jurisphere.ai",
    pattern: /\bJurisphere\.ai\b/i,
  },
  {
    name: "Jio Platforms",
    url: "https://www.jio.com",
    pattern: /\bJio\s+Platforms\b/i,
  },
  {
    name: "Forsee Power",
    url: "https://www.forseepower.com",
    pattern: /\bForsee\s+Power(?:\s+India)?\b/i,
  },
  {
    name: "Diageo India",
    url: "https://www.diageo.com",
    pattern: /\bDiageo(?:\s+India)?\b/i,
  },
  {
    name: "ClickFunnels",
    url: "https://www.clickfunnels.com",
    pattern: /\bClickFunnels\b/i,
  },
  {
    name: "Focus Prism",
    url: "https://focusprism.com",
    pattern: /\bFocus\s+Prism\b/i,
  },
  {
    name: "Venomics AI",
    url: "https://venomics.ai",
    pattern: /\bVenomics\s+AI\b/i,
  },
  {
    name: "Novo Tellus",
    url: "https://www.novotellus.com",
    pattern: /\bNovo\s+Tellus\b/i,
  },
  {
    name: "Mirae Asset",
    url: "https://www.miraeassetmf.co.in",
    pattern: /\bMirae\s+Asset(?:\s+Venture\s+Opportunity\s+Fund\s+II)?\b/i,
  },
  {
    name: "Blackstone",
    url: "https://www.blackstone.com",
    pattern: /\bBlackstone\b/i,
  },
  {
    name: "CE-Invests",
    url: "https://www.crescententerprises.com",
    pattern: /\bCE-Invests\b/i,
  },
  {
    name: "TagMango",
    url: "https://tagmango.com",
    pattern: /\bTagMango\b/i,
  },
  {
    name: "Tessolve",
    url: "https://www.tessolve.com",
    pattern: /\bTessolve\b/i,
  },
  {
    name: "Live2.ai",
    url: "https://live2.ai",
    pattern: /\bLive2\.ai\b/i,
  },
  {
    name: "Foodexo",
    url: "https://foodexo.in",
    pattern: /\bFoodexo(?:\s+Chennai)?\b/i,
  },
  {
    name: "Varroc",
    url: "https://www.varroc.com",
    pattern: /\bVarroc\b/i,
  },
  {
    name: "myTVS",
    url: "https://www.mytvs.com",
    pattern: /\bmyTVS\b/i,
  },
  {
    name: "ASK",
    url: "https://www.askfinancials.com",
    pattern: /\bASK(?:\s+Group)?\b/,
  },
  {
    name: "NSE",
    url: "https://www.nseindia.com",
    pattern: /\bNSE\b/,
  },
];

/**
 * Normalizes a URL for deduplication (strips trailing slash & www.).
 */
function normalizeUrlKey(url: string): string {
  return url
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/+$/, "");
}

/**
 * Hyperlinks the first body-text mention of each known company or law firm
 * to its official website, without touching headings, existing <a> tags, or HTML attributes.
 */
export function injectCompanyWebsiteLinks(html: string): string {
  if (!html) return html;

  const appliedUrls = new Set<string>();

  // Record any company URLs already linked in the article so we don't duplicate
  const existingHrefMatches = html.matchAll(/href=["'](https?:\/\/[^"']+)["']/gi);
  for (const m of existingHrefMatches) {
    appliedUrls.add(normalizeUrlKey(m[1]));
  }

  // Split HTML into protected blocks (<a...>...</a>, <h1..6>...</h1..6>) and other content
  const protectedBlockRegex = /(<a\b[\s\S]*?<\/a>|<h[1-6]\b[\s\S]*?<\/h[1-6]>)/gi;
  const blocks = html.split(protectedBlockRegex);

  const processedBlocks = blocks.map((block) => {
    if (!block) return block;
    // Leave existing <a>...</a> and <h1..6>...</h1..6> untouched
    if (/^<(a|h[1-6])\b/i.test(block)) {
      return block;
    }

    // Split non-protected block into HTML tags vs text nodes so we never touch tag attributes
    const tagOrTextParts = block.split(/(<[^>]+>)/g);

    for (let i = 0; i < tagOrTextParts.length; i++) {
      const part = tagOrTextParts[i];
      if (!part || part.startsWith("<")) continue;

      let updatedText = part;
      // We may match multiple different companies in the same text node,
      // but we must NOT replace inside an <a> tag we just inserted in this loop.
      for (const rule of COMPANY_LINK_RULES) {
        const urlKey = normalizeUrlKey(rule.url);
        if (appliedUrls.has(urlKey)) continue;

        // Split by any <a> tags already inserted in this text node during this loop
        const subSegments = updatedText.split(/(<a\b[\s\S]*?<\/a>)/gi);
        let replaced = false;

        for (let j = 0; j < subSegments.length; j++) {
          if (subSegments[j].startsWith("<a") || !subSegments[j]) continue;
          if (rule.pattern.test(subSegments[j])) {
            subSegments[j] = subSegments[j].replace(rule.pattern, (matched) => {
              appliedUrls.add(urlKey);
              replaced = true;
              return `<a href="${rule.url}" target="_blank" rel="noopener noreferrer nofollow">${matched}</a>`;
            });
            break;
          }
        }

        if (replaced) {
          updatedText = subSegments.join("");
        }
      }

      tagOrTextParts[i] = updatedText;
    }

    return tagOrTextParts.join("");
  });

  return processedBlocks.join("");
}
