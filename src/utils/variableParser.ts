export interface ParsedVariable {
  key: string;
  raw: string;
  start: number;
  end: number;
  format: 'curly' | 'square';
}

export interface ParseResult {
  variables: ParsedVariable[];
  hasVariables: boolean;
}

const REGEX = /(?<!\\)(\{\{([a-zA-Z0-9_\u0600-\u06FF-]+)\}\}|\[([a-zA-Z0-9_\u0600-\u06FF-]+)\](?!\())/g;

export function parseVariables(template: string): ParseResult {
  const variables: ParsedVariable[] = [];
  const seen = new Set<string>();
  
  let match;
  // Reset regex state
  REGEX.lastIndex = 0;
  
  while ((match = REGEX.exec(template)) !== null) {
    const raw = match[1];
    const isCurly = raw.startsWith('{{');
    const key = isCurly ? match[2] : match[3];
    
    if (!seen.has(key)) {
      seen.add(key);
      variables.push({
        key,
        raw,
        start: match.index,
        end: match.index + raw.length,
        format: isCurly ? 'curly' : 'square'
      });
    }
  }
  
  return { variables, hasVariables: variables.length > 0 };
}

export function compileTemplate(
  template: string,
  values: Record<string, string>,
  opts: { keepUnfilled?: boolean } = { keepUnfilled: true }
): string {
  // Reset regex state
  REGEX.lastIndex = 0;
  return template.replace(REGEX, (match, p1, curlyKey, squareKey) => {
    const key = curlyKey || squareKey;
    const val = values[key];
    if (val !== undefined && val.trim() !== '') {
      return val;
    }
    return opts.keepUnfilled ? match : '';
  });
}

export function highlightSegments(
  template: string
): Array<{ type: 'text' | 'variable'; value: string; key?: string }> {
  const segments: Array<{ type: 'text' | 'variable'; value: string; key?: string }> = [];
  let lastIndex = 0;
  
  let match;
  // Reset regex state
  REGEX.lastIndex = 0;
  while ((match = REGEX.exec(template)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', value: template.substring(lastIndex, match.index) });
    }
    const key = match[2] || match[3];
    segments.push({ type: 'variable', value: match[0], key });
    lastIndex = match.index + match[0].length;
  }
  
  if (lastIndex < template.length) {
    segments.push({ type: 'text', value: template.substring(lastIndex) });
  }
  
  return segments;
}
