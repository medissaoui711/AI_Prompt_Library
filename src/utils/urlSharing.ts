export interface SharedPromptPayload {
  commandId: string;
  positionalValues?: Record<string, string>;
  optionValues?: Record<string, string>;
  includeQualityRules?: boolean;
  includeHeader?: boolean;
  workflowId?: string;
  stepIndex?: number;
}

/**
 * Generates a clean, shareable URL with parameters
 */
export function generatePromptShareUrl(payload: SharedPromptPayload): string {
  const params = new URLSearchParams();
  params.set('cmd', payload.commandId);

  if (payload.positionalValues && Object.keys(payload.positionalValues).length > 0) {
    Object.entries(payload.positionalValues).forEach(([k, v]) => {
      if (v && v.trim()) {
        params.set(`p_${k}`, v);
      }
    });
  }

  if (payload.optionValues && Object.keys(payload.optionValues).length > 0) {
    Object.entries(payload.optionValues).forEach(([k, v]) => {
      if (v && v.trim()) {
        params.set(`o_${k}`, v);
      }
    });
  }

  if (payload.includeQualityRules !== undefined) {
    params.set('qr', payload.includeQualityRules ? '1' : '0');
  }

  if (payload.includeHeader) {
    params.set('hdr', '1');
  }

  if (payload.workflowId) {
    params.set('wf', payload.workflowId);
  }

  const origin = window.location.origin;
  const pathname = window.location.pathname;
  return `${origin}${pathname}#playground?${params.toString()}`;
}

/**
 * Generates a shareable URL for a workflow
 */
export function generateWorkflowShareUrl(workflowId: string, stepIndex?: number): string {
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  const stepParam = stepIndex !== undefined ? `&step=${stepIndex + 1}` : '';
  return `${origin}${pathname}#workflows?id=${workflowId}${stepParam}`;
}

/**
 * Parses URL query parameters from location.hash
 */
export function parseSharedPromptFromHash(hash: string): SharedPromptPayload | null {
  if (!hash.includes('?')) return null;

  const queryString = hash.split('?')[1];
  if (!queryString) return null;

  const params = new URLSearchParams(queryString);
  const commandId = params.get('cmd');
  if (!commandId) return null;

  const positionalValues: Record<string, string> = {};
  const optionValues: Record<string, string> = {};

  params.forEach((value, key) => {
    if (key.startsWith('p_')) {
      positionalValues[key.slice(2)] = value;
    } else if (key.startsWith('o_')) {
      optionValues[key.slice(2)] = value;
    }
  });

  return {
    commandId,
    positionalValues,
    optionValues,
    includeQualityRules: params.get('qr') === '1' ? true : params.get('qr') === '0' ? false : undefined,
    includeHeader: params.get('hdr') === '1',
    workflowId: params.get('wf') || undefined,
  };
}
