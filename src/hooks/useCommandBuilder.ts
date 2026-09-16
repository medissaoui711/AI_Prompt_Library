import { useState, useEffect, useMemo, useCallback } from 'react';
import type { CommandPrompt } from '../types/prompt';
import { compileCommand, type CompileResult } from '../utils/commandCompiler';
import { parseExample } from '../utils/exampleParser';
import { parseSharedPromptFromHash } from '../utils/urlSharing';
import { usePrompts } from './usePrompts';

export function useCommandBuilder(initialCmdId?: string | null, language: 'ar' | 'en' = 'ar') {
  const { prompts } = usePrompts();
  
  const [command, setCommandState] = useState<CommandPrompt | null>(null);
  const [positionalValues, setPositionalValues] = useState<Record<string, string>>({});
  const [optionValues, setOptionValues] = useState<Record<string, string>>({});
  const [includeQualityRules, setIncludeQualityRules] = useState(true);
  const [includeHeader, setIncludeHeader] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  const setCommand = useCallback((cmd: CommandPrompt | null) => {
    setCommandState(cmd);
    if (cmd) {
      const initPos: Record<string, string> = {};
      const initOpt: Record<string, string> = {};
      cmd.params.forEach(p => {
        if (p.isPositional) {
          initPos[p.flag] = p.defaultValue || '';
        } else {
          initOpt[p.flag] = p.defaultValue || '';
        }
      });
      setPositionalValues(initPos);
      setOptionValues(initOpt);
      setTouched(new Set());
      setIncludeQualityRules(true);
      setIncludeHeader(false);
    } else {
      setPositionalValues({});
      setOptionValues({});
      setTouched(new Set());
    }
  }, []);

  // Initialization from hash (with deep parameters) or initialCmdId or localStorage
  useEffect(() => {
    const hash = window.location.hash;
    const shared = parseSharedPromptFromHash(hash);

    if (shared && shared.commandId) {
      const cmd = prompts.find((p) => p.id === shared.commandId);
      if (cmd) {
        setCommandState(cmd);
        const initPos: Record<string, string> = {};
        const initOpt: Record<string, string> = {};
        cmd.params.forEach((p) => {
          if (p.isPositional) {
            initPos[p.flag] = shared.positionalValues?.[p.flag] ?? p.defaultValue ?? '';
          } else {
            initOpt[p.flag] = shared.optionValues?.[p.flag] ?? p.defaultValue ?? '';
          }
        });
        setPositionalValues(initPos);
        setOptionValues(initOpt);
        if (shared.includeQualityRules !== undefined) setIncludeQualityRules(shared.includeQualityRules);
        if (shared.includeHeader !== undefined) setIncludeHeader(shared.includeHeader);
        const touchedKeys = [
          ...Object.keys(shared.positionalValues || {}),
          ...Object.keys(shared.optionValues || {}),
        ];
        setTouched(new Set(touchedKeys));
        return;
      }
    }

    if (initialCmdId) {
      const cmd = prompts.find((p) => p.id === initialCmdId);
      if (cmd) {
        setCommand(cmd);
      }
    } else {
      const saved = localStorage.getItem('ai-prompt-lib:builder:last');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const cmd = prompts.find((p) => p.id === parsed.commandId);
          if (cmd) {
            setCommandState(cmd);
            setPositionalValues(parsed.positionalValues || {});
            setOptionValues(parsed.optionValues || {});
            setIncludeQualityRules(parsed.includeQualityRules ?? true);
            setIncludeHeader(parsed.includeHeader ?? false);
            setTouched(new Set(parsed.touched || []));
          }
        } catch (e) {
          // ignore
        }
      }
    }
  }, [initialCmdId, prompts.length, setCommand]);

  // Save to localStorage when state changes
  useEffect(() => {
    if (command) {
      const stateToSave = {
        commandId: command.id,
        positionalValues,
        optionValues,
        includeQualityRules,
        includeHeader,
        touched: Array.from(touched)
      };
      localStorage.setItem('ai-prompt-lib:builder:last', JSON.stringify(stateToSave));
    } else {
      localStorage.removeItem('ai-prompt-lib:builder:last');
    }
  }, [command, positionalValues, optionValues, includeQualityRules, includeHeader, touched]);

  const setPositional = useCallback((flag: string, value: string) => {
    setPositionalValues(prev => ({ ...prev, [flag]: value }));
    setTouched(prev => new Set(prev).add(flag));
  }, []);

  const setOption = useCallback((flag: string, value: string) => {
    setOptionValues(prev => ({ ...prev, [flag]: value }));
    setTouched(prev => new Set(prev).add(flag));
  }, []);

  const resetOption = useCallback((flag: string) => {
    if (!command) return;
    const p = command.params.find(x => x.flag === flag);
    if (p) {
      setOptionValues(prev => ({ ...prev, [flag]: p.defaultValue || '' }));
      setTouched(prev => {
        const next = new Set(prev);
        next.delete(flag);
        return next;
      });
    }
  }, [command]);

  const resetAll = useCallback(() => {
    if (!command) return;
    setCommand(command); // Re-initializes
  }, [command, setCommand]);

  const loadFromExample = useCallback(() => {
    if (!command) return;
    const { positionalValues: pv, optionValues: ov } = parseExample(command.example, command);
    setPositionalValues(prev => ({ ...prev, ...pv }));
    setOptionValues(prev => ({ ...prev, ...ov }));
    const newTouched = new Set([...Object.keys(pv), ...Object.keys(ov)]);
    setTouched(prev => new Set([...prev, ...newTouched]));
  }, [command]);

  const compileResult = useMemo<CompileResult | null>(() => {
    if (!command) return null;
    return compileCommand({
      command,
      positionalValues,
      optionValues,
      includeQualityRules,
      includeHeader,
      language
    });
  }, [command, positionalValues, optionValues, includeQualityRules, includeHeader, language]);

  return {
    command,
    setCommand,
    positionalValues,
    optionValues,
    includeQualityRules,
    setIncludeQualityRules,
    includeHeader,
    setIncludeHeader,
    touched,
    setPositional,
    setOption,
    resetOption,
    resetAll,
    loadFromExample,
    compileResult,
    hasMissingRequired: compileResult ? compileResult.missingRequired.length > 0 : false,
  };
}
