import React from "react";

interface MarkdownRendererProps {
  content: string;
}

// Clean inline elements: code, math, bold, italic, links
function renderInline(text: string): React.ReactNode[] {
  // Tokenize text into inline tokens
  // Priority: code (`...`), math ($...$), bold (**...**), italic (*...*), link ([...](...))
  const tokens: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    // 1. Inline Code
    if (remaining.startsWith("`")) {
      const endIdx = remaining.indexOf("`", 1);
      if (endIdx !== -1) {
        const codeText = remaining.slice(1, endIdx);
        tokens.push(
          <code
            key={`code-${keyIdx++}`}
            className="px-1.5 py-0.5 rounded bg-[#0a0b0d] border border-[#22262e] font-mono text-[11px] text-[#c8a15a]"
          >
            {codeText}
          </code>
        );
        remaining = remaining.slice(endIdx + 1);
        continue;
      }
    }

    // 2. Inline Math: $...$
    if (remaining.startsWith("$")) {
      const endIdx = remaining.indexOf("$", 1);
      if (endIdx !== -1) {
        let mathText = remaining.slice(1, endIdx);
        // Clean common LaTeX commands for clean inline text display
        mathText = mathText
          .replace(/\\text\{([^}]+)\}/g, "$1")
          .replace(/\\le/g, "≤")
          .replace(/\\ge/g, "≥")
          .replace(/\\quad/g, " ")
          .replace(/\\times/g, "×")
          .replace(/\\sigma/g, "σ")
          .replace(/\\mathbb\{E\}/g, "E")
          .replace(/\\_/g, "_");
        tokens.push(
          <span
            key={`math-${keyIdx++}`}
            className="font-mono text-xs text-[#c8a15a] px-1 bg-[#0a0b0d] border border-[#22262e]/70 rounded font-semibold"
          >
            {mathText}
          </span>
        );
        remaining = remaining.slice(endIdx + 1);
        continue;
      }
    }

    // 3. Bold: **...**
    if (remaining.startsWith("**")) {
      const endIdx = remaining.indexOf("**", 2);
      if (endIdx !== -1) {
        const boldText = remaining.slice(2, endIdx);
        tokens.push(
          <strong key={`bold-${keyIdx++}`} className="text-[#f2efe8] font-semibold">
            {renderInline(boldText)}
          </strong>
        );
        remaining = remaining.slice(endIdx + 2);
        continue;
      }
    }

    // 4. Italic: *...* (single asterisk, not followed by space)
    if (remaining.startsWith("*") && !remaining.startsWith("**")) {
      const endIdx = remaining.indexOf("*", 1);
      if (endIdx !== -1) {
        const italicText = remaining.slice(1, endIdx);
        tokens.push(
          <em key={`italic-${keyIdx++}`} className="text-[#f2efe8]/90 italic">
            {renderInline(italicText)}
          </em>
        );
        remaining = remaining.slice(endIdx + 1);
        continue;
      }
    }

    // 5. Link: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const linkText = linkMatch[1];
      const linkUrl = linkMatch[2];
      tokens.push(
        <a
          key={`link-${keyIdx++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c8a15a] hover:underline font-medium"
        >
          {linkText}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Regular plain text chunk up to the next special character (` $ * [)
    const nextSpecial = remaining.search(/[`$*[]/);
    if (nextSpecial === -1) {
      tokens.push(<span key={`text-${keyIdx++}`}>{remaining}</span>);
      break;
    } else if (nextSpecial === 0) {
      // Character didn't match full pattern above (e.g. lone bracket), output it as literal text
      tokens.push(<span key={`text-${keyIdx++}`}>{remaining[0]}</span>);
      remaining = remaining.slice(1);
    } else {
      tokens.push(<span key={`text-${keyIdx++}`}>{remaining.slice(0, nextSpecial)}</span>);
      remaining = remaining.slice(nextSpecial);
    }
  }

  return tokens;
}

// Format clean math formulas from LaTeX $$...$$
function formatMathFormula(latex: string): string {
  const s = latex.trim();
  if (s.includes("SMA") && s.includes("sum")) {
    return "SMA(N) on day t = (1 / N) · ∑ P(t-i)  (for i = 0 to N-1)";
  }
  if (s.includes("Signal") && (s.includes(">") || s.includes("le"))) {
    return "Signal(t) = 1 (Long) if SMA_20(t) > SMA_50(t) and SMA_20(t-1) ≤ SMA_50(t-1)";
  }
  if (s.includes("Signal") && (s.includes("<") || s.includes("ge"))) {
    return "Signal(t) = 0 (Cash) if SMA_20(t) < SMA_50(t) and SMA_20(t-1) ≥ SMA_50(t-1)";
  }
  if (s.includes("CAGR")) {
    return "CAGR = (V_final / V_initial)^(1 / Y) - 1";
  }
  if (s.includes("Sharpe")) {
    return "Sharpe Ratio = [ E(Rp - Rf) / σp ] × √252";
  }
  if (s.includes("MDD")) {
    return "MDD(t) = min [ (Equity(τ) - Peak(τ)) / Peak(τ) ]  (for τ ≤ t)";
  }

  // General fallback
  return s
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\sqrt\{([^}]+)\}/g, "√($1)")
    .replace(/\\frac\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, "($1 / $2)")
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1 / $2)")
    .replace(/_\{([^}]+)\}/g, "_$1")
    .replace(/\^\{([^}]+)\}/g, "^($1)")
    .replace(/\\left\(/g, "(")
    .replace(/\\right\)/g, ")")
    .replace(/\\quad/g, " ")
    .replace(/\\times/g, "×")
    .replace(/\\le/g, "≤")
    .replace(/\\ge/g, "≥")
    .replace(/\\sigma/g, "σ")
    .replace(/\\mathbb\{E\}/g, "E")
    .replace(/\\_/g, "_")
    .trim();
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Normalize unescaped template backticks if any
  const normalized = content.replace(/\\`/g, "`");

  // Split content into major blocks
  // Major blocks: Code fences (```...```), Tables (|...|\n|:---|...), Math ($$...$$), Headings (###...), Lists (- ... or 1. ...), Paragraphs
  const blocks: React.ReactNode[] = [];
  const lines = normalized.split("\n");
  let i = 0;
  let blockKey = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 1. Code Block: ```lang
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push(
        <div key={`codeblock-${blockKey++}`} className="my-6 rounded-xl overflow-hidden border border-[#22262e] bg-[#0a0b0d]">
          {lang && (
            <div className="px-4 py-2 bg-[#111317] border-b border-[#22262e] text-[11px] font-mono text-[#8b8f97] uppercase tracking-wider flex items-center justify-between">
              <span>{lang}</span>
              <span className="text-[#c8a15a]">Script</span>
            </div>
          )}
          <pre className="p-4 overflow-x-auto font-mono text-xs text-[#f2efe8] leading-relaxed">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // 2. Math Block: $$
    if (line.trim().startsWith("$$")) {
      let mathContent = line.trim().slice(2);
      if (mathContent.endsWith("$$") && mathContent.length > 2) {
        // Single-line $$ ... $$
        mathContent = mathContent.slice(0, -2);
        i++;
      } else {
        // Multi-line $$ ... $$
        const mathLines: string[] = [];
        if (mathContent.length > 0) mathLines.push(mathContent);
        i++;
        while (i < lines.length && !lines[i].trim().endsWith("$$")) {
          mathLines.push(lines[i]);
          i++;
        }
        if (i < lines.length) {
          const lastLine = lines[i].trim().replace(/\$\$$/, "");
          if (lastLine.length > 0) mathLines.push(lastLine);
          i++;
        }
        mathContent = mathLines.join(" ");
      }

      const formattedFormula = formatMathFormula(mathContent);
      blocks.push(
        <div
          key={`math-block-${blockKey++}`}
          className="my-5 p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] text-center space-y-1 shadow-sm"
        >
          <span className="text-[10px] font-mono text-[#c8a15a] uppercase tracking-wider block font-semibold">
            Formula
          </span>
          <div className="font-mono text-xs sm:text-sm text-[#f2efe8] font-bold tracking-wide overflow-x-auto py-1">
            {formattedFormula}
          </div>
        </div>
      );
      continue;
    }

    // 3. Table: starts with | and next line has |--- or |:---
    if (line.trim().startsWith("|") && i + 1 < lines.length && lines[i + 1].includes("---")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const headerCells = tableLines[0]
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());
      const bodyRows = tableLines.slice(2).map((row) =>
        row
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim())
      );

      blocks.push(
        <div key={`table-${blockKey++}`} className="my-6 overflow-x-auto rounded-xl border border-[#22262e]">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="bg-[#111317] border-b border-[#22262e]">
                {headerCells.map((cell, cIdx) => (
                  <th key={cIdx} className="p-3.5 font-mono font-bold text-[#f2efe8] tracking-wider text-[11px] uppercase">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22262e] bg-[#0a0b0d]/70">
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-[#111317]/50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 text-[#8b8f97] leading-relaxed">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // 4. Heading: ### or ####
    if (line.trim().startsWith("### ")) {
      const headingText = line.trim().replace(/^###\s+/, "");
      blocks.push(
        <h3 key={`h3-${blockKey++}`} className="text-lg sm:text-xl font-bold font-serif-display text-[#f2efe8] mt-8 mb-3 pt-2">
          {renderInline(headingText)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.trim().startsWith("#### ")) {
      const headingText = line.trim().replace(/^####\s+/, "");
      blocks.push(
        <h4 key={`h4-${blockKey++}`} className="text-sm font-bold font-sans text-[#f2efe8] mt-5 mb-2">
          {renderInline(headingText)}
        </h4>
      );
      i++;
      continue;
    }

    // 5. Unordered List: lines starting with "- " or "* "
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul key={`ul-${blockKey++}`} className="space-y-2.5 my-4 pl-5 list-disc text-sm text-[#8b8f97] leading-relaxed font-sans marker:text-[#c8a15a]">
          {listItems.map((item, lIdx) => (
            <li key={lIdx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // 6. Ordered List: lines starting with "1. ", "2. ", etc.
    if (/^\d+\.\s+/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol key={`ol-${blockKey++}`} className="space-y-2.5 my-4 pl-5 list-decimal text-sm text-[#8b8f97] leading-relaxed font-sans marker:text-[#c8a15a] marker:font-mono">
          {listItems.map((item, lIdx) => (
            <li key={lIdx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // 7. Empty line
    if (!line.trim()) {
      i++;
      continue;
    }

    // 8. Regular paragraph (gather consecutive non-empty lines)
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("$$") &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("###") &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      blocks.push(
        <p key={`p-${blockKey++}`} className="text-sm sm:text-base text-[#8b8f97] leading-relaxed font-sans mb-4">
          {renderInline(paraLines.join(" "))}
        </p>
      );
    } else {
      i++;
    }
  }

  return <div className="space-y-2">{blocks}</div>;
}
