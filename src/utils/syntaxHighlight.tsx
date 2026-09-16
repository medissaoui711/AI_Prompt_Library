import React from 'react';

/**
 * Hand-built syntax highlighter for slash-commands.
 * Tokens:
 *  - /command       → text-primary font-bold
 *  - --flag         → text-amber-500 dark:text-amber-400 font-semibold
 *  - =value         → text-emerald-600 dark:text-emerald-400
 *  - [placeholder]  → text-rose-500 dark:text-rose-400 font-medium
 *  - # comment      → text-muted-foreground italic
 *  - regular text   → text-foreground
 */
export function highlightSyntax(text: string): React.ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <React.Fragment key={i}>
      {highlightLine(line)}
      {i < lines.length - 1 && '\n'}
    </React.Fragment>
  ));
}

function highlightLine(line: string): React.ReactNode[] {
  // If line starts with comment '#', render as comment
  if (line.trim().startsWith('#')) {
    return [
      <span key="comment" className="text-muted-foreground italic opacity-80">
        {line}
      </span>
    ];
  }

  // Tokenize line
  const tokens = line.match(/(\s+|\[[^\]]+\]|\/[\w-]+|--[\w-]+(?:=[^\s]+)?|\S+)/g) || [line];
  
  return tokens.map((tok, i) => {
    // Whitespace
    if (/^\s+$/.test(tok)) {
      return <React.Fragment key={i}>{tok}</React.Fragment>;
    }

    // Placeholders [example]
    if (tok.startsWith('[') && tok.endsWith(']')) {
      return (
        <span key={i} className="text-rose-500 dark:text-rose-400 font-medium bg-rose-500/10 px-1 py-0.5 rounded">
          {tok}
        </span>
      );
    }

    // Slash command /cmd
    if (tok.startsWith('/')) {
      return (
        <span key={i} className="text-primary font-bold">
          {tok}
        </span>
      );
    }

    // Flag with potential value --flag=val
    if (tok.startsWith('--')) {
      const eqIdx = tok.indexOf('=');
      if (eqIdx !== -1) {
        const flag = tok.substring(0, eqIdx);
        const val = tok.substring(eqIdx + 1);
        return (
          <span key={i}>
            <span className="text-amber-600 dark:text-amber-400 font-semibold">{flag}=</span>
            <span className="text-emerald-600 dark:text-emerald-400">{val}</span>
          </span>
        );
      }
      return (
        <span key={i} className="text-amber-600 dark:text-amber-400 font-semibold">
          {tok}
        </span>
      );
    }

    // Default text
    return (
      <span key={i} className="text-foreground/90">
        {tok}
      </span>
    );
  });
}
