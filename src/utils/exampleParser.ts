import type { CommandPrompt } from '../types/prompt';
import { getPromptExamples } from './exampleFormatter';

export function parseExample(example: string, command: CommandPrompt) {
  const positionalValues: Record<string, string> = {};
  const optionValues: Record<string, string> = {};

  // If example has raw bracket placeholders, resolve it through getPromptExamples to get realistic values!
  let targetExample = example;
  if (/\[[^\]]+\]/.test(targetExample)) {
    const { liveExample } = getPromptExamples(command);
    targetExample = liveExample;
  }

  if (!targetExample || !targetExample.trim()) {
    return { positionalValues, optionValues };
  }

  // Handle both single-line formatted `--flag=val` and multi-line
  // Extract all flags `--flag=val` or `--flag val`
  const flagMatches = targetExample.match(/--([\w-]+)(?:=([^\s]+)|\s+([^\s]+))?/g) || [];
  for (const flagMatch of flagMatches) {
    if (flagMatch.includes('=')) {
      const eqIdx = flagMatch.indexOf('=');
      const flagName = flagMatch.slice(2, eqIdx);
      const flagVal = flagMatch.slice(eqIdx + 1);
      optionValues[flagName] = flagVal;
    }
  }

  // First line or command line before flags: extract positional argument
  const lines = targetExample.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
  if (lines.length > 0) {
    const firstLine = lines[0];
    const codeLength = command.code.length;
    if (firstLine.startsWith(command.code)) {
      let remainder = firstLine.slice(codeLength).trim();
      // Remove any trailing --flag from remainder
      const firstFlagIdx = remainder.indexOf('--');
      if (firstFlagIdx !== -1) {
        remainder = remainder.slice(0, firstFlagIdx).trim();
      }

      if (remainder) {
        // Strip quotes or brackets if present
        let cleanVal = remainder.replace(/^["'\[]+|["'\]]+$/g, '').trim();
        const positionals = command.params.filter(p => p.isPositional);
        if (positionals.length > 0) {
          positionalValues[positionals[0].flag] = cleanVal;
        }
      }
    }
  }

  // Also parse option lines in subsequent lines
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('--')) {
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const flag = line.slice(2, eqIdx);
        const value = line.slice(eqIdx + 1);
        optionValues[flag] = value;
      }
    }
  }

  return { positionalValues, optionValues };
}
