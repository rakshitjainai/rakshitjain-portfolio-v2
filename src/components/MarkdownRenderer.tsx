import React from "react";

interface MarkdownRendererProps {
  content: string;
}

// Render math formulas with subscripts (<sub>) and superscripts (<sup>)
function renderMathWithSubs(str: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Tokenize using regex matching subscripts or superscripts:
  // 1. Variable with brace subscript: ([A-Za-zσ]+)_\{([^}]+)\} => e.g. N_{fast} -> N<sub>fast</sub>
  // 2. Named subscripts: SMA_20(t) -> SMA<sub>20</sub>(t), SMA_50(t-1) -> SMA<sub>50</sub>(t-1)
  // 3. Simple subscripts: ([A-Za-zσ]+)_([0-9a-zA-Z]+) => e.g. R_p -> R<sub>p</sub>, R_f -> R<sub>f</sub>, σ_p -> σ<sub>p</sub>, V_final -> V<sub>final</sub>
  // 4. Exponents: \^\(([^)]+)\) or \^([0-9a-zA-Z]+) => <sup>...</sup>
  const tokenRegex = /([A-Za-zσ]+)_\{([^}]+)\}|(SMA)_(20|50)(\((?:t(?:-[0-9]+)?)?\))|([A-Za-zσ]+)_([0-9a-zA-Z]+)|\^\{([^}]+)\}|\^(\([^)]+\)|[0-9a-zA-Z]+)/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = tokenRegex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      // e.g. N_{fast}
      parts.push(
        <span key={`sub-${key++}`}>
          {match[1]}
          <sub className="text-[10px]">{match[2]}</sub>
        </span>
      );
    } else if (match[3] && match[4]) {
      // e.g. SMA_20(t)
      parts.push(
        <span key={`sma-${key++}`}>
          {match[3]}
          <sub className="text-[10px]">{match[4]}</sub>
          {match[5] || ""}
        </span>
      );
    } else if (match[6] && match[7]) {
      // e.g. R_p, R_f, σ_p, V_final, V_initial
      parts.push(
        <span key={`sub-simp-${key++}`}>
          {match[6]}
          <sub className="text-[10px]">{match[7]}</sub>
        </span>
      );
    } else if (match[8] || match[9]) {
      // e.g. ^(1 / Y) or ^{...}
      const exp = match[8] || match[9];
      const cleanExp = exp.startsWith("(") && exp.endsWith(")") ? exp.slice(1, -1) : exp;
      parts.push(
        <sup key={`sup-${key++}`} className="text-[10px]">
          {cleanExp}
        </sup>
      );
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < str.length) {
    parts.push(str.slice(lastIndex));
  }

  return parts;
}

// Clean inline elements: code, math, bold, italic, links, subscripts
function renderInline(text: string): React.ReactNode[] {
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
            className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[11px] text-[#1d4ed8]"
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
            className="font-mono text-xs text-[#0f172a] px-1 bg-blue-50 border border-blue-200/70 rounded font-semibold inline-flex items-center gap-0.5"
          >
            {renderMathWithSubs(mathText)}
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
          <strong key={`bold-${keyIdx++}`} className="text-[#0f172a] font-semibold">
            {renderInline(boldText)}
          </strong>
        );
        remaining = remaining.slice(endIdx + 2);
        continue;
      }
    }

    // 4. Italic: *...*
    if (remaining.startsWith("*") && !remaining.startsWith("**")) {
      const endIdx = remaining.indexOf("*", 1);
      if (endIdx !== -1) {
        const italicText = remaining.slice(1, endIdx);
        tokens.push(
          <em key={`italic-${keyIdx++}`} className="text-[#334155] italic">
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
          className="text-[#2563eb] hover:underline font-medium"
        >
          {linkText}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // 6. Subscript in plain text e.g. N_{fast}, SMA_20(t), R_p
    const subMatch = remaining.match(/^([A-Za-zσ]+)_\{([^}]+)\}|^SMA_(20|50)(\((?:t(?:-[0-9]+)?)?\))|^([A-Za-zσ]+)_([0-9a-zA-Z]+)/);
    if (subMatch) {
      tokens.push(renderMathWithSubs(subMatch[0]));
      remaining = remaining.slice(subMatch[0].length);
      continue;
    }

    // Regular plain text chunk up to next special character
    const nextSpecial = remaining.search(/[`$*[]/);
    if (nextSpecial === -1) {
      tokens.push(<span key={`text-${keyIdx++}`}>{remaining}</span>);
      break;
    } else if (nextSpecial === 0) {
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
    return "Sharpe Ratio = [ E(R_p - R_f) / σ_p ] × √252";
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

function renderListItemContent(itemLines: string[]): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  let k = 0;
  let idx = 0;

  while (idx < itemLines.length) {
    const l = itemLines[idx];
    if (l.startsWith("$$")) {
      let math = l.slice(2);
      if (math.endsWith("$$") && math.length > 2) {
        math = math.slice(0, -2);
        idx++;
      } else {
        const formulaParts: string[] = [];
        if (math.length > 0) formulaParts.push(math);
        idx++;
        while (idx < itemLines.length && !itemLines[idx].endsWith("$$")) {
          formulaParts.push(itemLines[idx]);
          idx++;
        }
        if (idx < itemLines.length) {
          formulaParts.push(itemLines[idx].replace(/\$\$$/, ""));
          idx++;
        }
        math = formulaParts.join(" ");
      }
      const formula = formatMathFormula(math);
      elements.push(
        <div
          key={`li-math-${k++}`}
          className="my-3 p-3 rounded-lg bg-[#f8fafc] border border-[#e3e8ef] border-l-4 border-l-[#2563eb] font-mono text-xs sm:text-sm text-[#0f172a] font-bold overflow-x-auto"
        >
          {renderMathWithSubs(formula)}
        </div>
      );
      continue;
    }

    elements.push(
      <p key={`li-p-${k++}`} className="leading-relaxed">
        {renderInline(l)}
      </p>
    );
    idx++;
  }

  return elements;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const normalized = content.replace(/\\`/g, "`");

  const blocks: React.ReactNode[] = [];
  const lines = normalized.split("\n");
  let i = 0;
  let blockKey = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 1. Code Block: ```lang
    if (line.trim().startsWith("```")) {
      const rawLang = line.trim().slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```

      const displayLang =
        rawLang.toLowerCase() === "python"
          ? "Python"
          : rawLang.toLowerCase() === "typescript"
          ? "TypeScript"
          : rawLang;

      blocks.push(
        <div
          key={`codeblock-${blockKey++}`}
          className="my-6 rounded-xl overflow-hidden border border-[#e3e8ef] bg-[#0b1220]"
        >
          {displayLang && (
            <div className="px-4 py-2 bg-[#121927] border-b border-slate-700 text-[11px] font-mono text-slate-300 tracking-wider flex items-center justify-between">
              <span className="font-semibold text-slate-200">{displayLang}</span>
            </div>
          )}
          <pre className="p-4 overflow-x-auto font-mono text-xs text-[#f8fafc] leading-relaxed overscroll-x-contain [-webkit-overflow-scrolling:touch]">
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
        mathContent = mathContent.slice(0, -2);
        i++;
      } else {
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
          className="my-5 p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] border-l-4 border-l-[#2563eb] text-center space-y-1 shadow-sm"
        >
          <span className="text-[10px] font-mono text-[#2563eb] uppercase tracking-wider block font-semibold">
            Formula
          </span>
          <div className="font-mono text-xs sm:text-sm text-[#0f172a] font-bold tracking-wide overflow-x-auto py-1 overscroll-x-contain [-webkit-overflow-scrolling:touch]">
            {renderMathWithSubs(formattedFormula)}
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
        <div key={`table-wrap-${blockKey++}`} className="my-6 space-y-1.5">
          <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-slate-500 px-1">
            <span>Table (Swipe horizontally)</span>
            <span>⇄</span>
          </div>
          <div
            className="overflow-x-auto rounded-xl border border-[#e3e8ef] shadow-sm overscroll-x-contain [-webkit-overflow-scrolling:touch]"
          >
            <table className="w-full min-w-[500px] text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e3e8ef]">
                {headerCells.map((cell, cIdx) => (
                  <th
                    key={cIdx}
                    className="p-3.5 font-mono font-bold text-[#0f172a] tracking-wider text-[11px] uppercase"
                  >
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e3e8ef] bg-white">
              {bodyRows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-3.5 text-[#475569] leading-relaxed">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      );
      continue;
    }

    // 4. Heading: ### or ####
    if (line.trim().startsWith("### ")) {
      const headingText = line.trim().replace(/^###\s+/, "");
      blocks.push(
        <h3
          key={`h3-${blockKey++}`}
          className="text-lg sm:text-xl font-bold font-serif-display text-[#0f172a] mt-8 mb-3 pt-2"
        >
          {renderInline(headingText)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.trim().startsWith("#### ")) {
      const headingText = line.trim().replace(/^####\s+/, "");
      blocks.push(
        <h4 key={`h4-${blockKey++}`} className="text-sm font-bold font-sans text-[#0f172a] mt-5 mb-2">
          {renderInline(headingText)}
        </h4>
      );
      i++;
      continue;
    }

    // 5. Unordered List: lines starting with "- " or "* " (followed by space and not an italic footnote)
    if (
      line.trim().startsWith("- ") ||
      (line.trim().startsWith("* ") && !line.trim().startsWith("*(Note"))
    ) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") ||
          (lines[i].trim().startsWith("* ") && !lines[i].trim().startsWith("*(Note")))
      ) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push(
        <ul
          key={`ul-${blockKey++}`}
          className="space-y-2.5 my-4 pl-5 list-disc text-sm text-[#475569] leading-relaxed font-sans marker:text-[#2563eb]"
        >
          {listItems.map((item, lIdx) => (
            <li key={lIdx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // 6. Ordered List: lines starting with "1. ", "2. ", etc. Continuous with nested content
    if (/^(\d+)\.\s+/.test(line.trim())) {
      const listItems: { num: number; lines: string[] }[] = [];
      let currentNum = parseInt(line.trim().match(/^(\d+)\.\s+/)![1]);
      let currentLines: string[] = [line.trim().replace(/^\d+\.\s+/, "")];
      i++;

      while (i < lines.length) {
        const nextLine = lines[i];
        const trimmed = nextLine.trim();

        // Check if next line is a new numbered item
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          listItems.push({ num: currentNum, lines: currentLines });
          currentNum = parseInt(numMatch[1]);
          currentLines = [numMatch[2]];
          i++;
          continue;
        }

        // Major block boundaries terminate the list
        if (
          trimmed.startsWith("### ") ||
          trimmed.startsWith("#### ") ||
          trimmed.startsWith("```") ||
          (trimmed.startsWith("|") && lines[i + 1]?.includes("---"))
        ) {
          break;
        }

        // Empty line handling
        if (!trimmed) {
          let peek = i + 1;
          while (peek < lines.length && !lines[peek].trim()) peek++;
          if (peek < lines.length) {
            const peekTrim = lines[peek].trim();
            if (/^\d+\.\s+/.test(peekTrim)) {
              i++;
              continue;
            } else if (lines[peek].startsWith("   ") || lines[peek].startsWith("\t")) {
              i++;
              continue;
            } else {
              break;
            }
          } else {
            break;
          }
        }

        currentLines.push(trimmed);
        i++;
      }
      listItems.push({ num: currentNum, lines: currentLines });

      blocks.push(
        <ol
          key={`ol-${blockKey++}`}
          className="space-y-4 my-4 pl-5 list-decimal text-sm text-[#475569] leading-relaxed font-sans marker:text-[#2563eb] marker:font-semibold"
        >
          {listItems.map((item, lIdx) => (
            <li key={lIdx} value={item.num} className="space-y-2">
              {renderListItemContent(item.lines)}
            </li>
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
      !(lines[i].trim().startsWith("* ") && !lines[i].trim().startsWith("*(Note")) &&
      !/^\d+\.\s+/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const fullText = paraLines.join(" ");
      const isFootnote = fullText.startsWith("*(") || fullText.startsWith("*(Note");
      blocks.push(
        <p
          key={`p-${blockKey++}`}
          className={`leading-relaxed font-sans mb-4 ${
            isFootnote
              ? "text-xs text-[#64748b] bg-[#f8fafc] p-3 rounded-lg border border-[#e3e8ef]"
              : "text-sm sm:text-base text-[#475569]"
          }`}
        >
          {renderInline(fullText)}
        </p>
      );
    } else {
      i++;
    }
  }

  return <div className="space-y-2">{blocks}</div>;
}
