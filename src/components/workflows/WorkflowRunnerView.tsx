import React, { useState, useMemo, useEffect } from 'react';
import { Workflow, WorkflowStep } from '../../types/workflow';
import { useLanguage } from '../../context/LanguageContext';
import { usePrompts } from '../../hooks/usePrompts';
import { compileCommand } from '../../utils/commandCompiler';
import { formatWorkflowMasterPrompt, downloadFile } from '../../utils/exportPrompts';
import { generateWorkflowShareUrl } from '../../utils/urlSharing';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Copy, Download, 
  ExternalLink, Share2, Sparkles, Lightbulb, FileText, ChevronRight, Check
} from 'lucide-react';

interface WorkflowRunnerViewProps {
  workflow: Workflow;
  initialStepIndex?: number;
  onBack: () => void;
  onOpenPlayground: (promptId: string) => void;
}

export function WorkflowRunnerView({
  workflow,
  initialStepIndex = 0,
  onBack,
  onOpenPlayground
}: WorkflowRunnerViewProps) {
  const { t, language } = useLanguage();
  const { prompts, incrementUsage } = usePrompts();
  const isArabic = language === 'ar';

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
  
  // Store user edited inputs for all steps: stepId -> { [paramFlag]: string }
  const [stepInputs, setStepInputs] = useState<Record<string, Record<string, string>>>(() => {
    const init: Record<string, Record<string, string>> = {};
    workflow.steps.forEach(step => {
      init[step.id] = { ...(step.defaultInputs || {}) };
    });
    return init;
  });

  const [copiedStep, setCopiedStep] = useState(false);
  const [copiedMaster, setCopiedMaster] = useState(false);
  const [copiedShareLink, setCopiedShareLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'step' | 'master'>('step');

  const currentStep = workflow.steps[currentStepIndex];

  // Resolve current CommandPrompt from library
  const currentPrompt = useMemo(() => {
    return prompts.find(p => p.id === currentStep.promptId) || null;
  }, [prompts, currentStep.promptId]);

  // Update a single input flag for a step
  const handleInputChange = (stepId: string, flag: string, value: string) => {
    setStepInputs(prev => ({
      ...prev,
      [stepId]: {
        ...(prev[stepId] || {}),
        [flag]: value
      }
    }));
  };

  // Compile active step prompt text
  const currentStepCompiled = useMemo(() => {
    if (!currentPrompt) return '';
    const inputs = stepInputs[currentStep.id] || {};

    const posVals: Record<string, string> = {};
    const optVals: Record<string, string> = {};

    currentPrompt.params.forEach(p => {
      const val = inputs[p.flag] ?? p.defaultValue ?? '';
      if (p.isPositional) {
        posVals[p.flag] = val;
      } else {
        optVals[p.flag] = val;
      }
    });

    const res = compileCommand({
      command: currentPrompt,
      positionalValues: posVals,
      optionValues: optVals,
      includeQualityRules: true,
      includeHeader: false,
      language
    });

    return res.text;
  }, [currentPrompt, currentStep.id, stepInputs, language]);

  // Compile all steps for Master Prompt
  const masterBundleText = useMemo(() => {
    const resolved = workflow.steps.map(step => {
      const p = prompts.find(pr => pr.id === step.promptId);
      const inputs = stepInputs[step.id] || {};
      
      let pText = '';
      if (p) {
        const posVals: Record<string, string> = {};
        const optVals: Record<string, string> = {};
        p.params.forEach(param => {
          const val = inputs[param.flag] ?? param.defaultValue ?? '';
          if (param.isPositional) {
            posVals[param.flag] = val;
          } else {
            optVals[param.flag] = val;
          }
        });
        const res = compileCommand({
          command: p,
          positionalValues: posVals,
          optionValues: optVals,
          includeQualityRules: true,
          includeHeader: false,
          language
        });
        pText = res.text;
      }

      return {
        title: isArabic ? step.titleAr : step.titleEn,
        code: p?.code || '',
        promptText: pText
      };
    });

    return formatWorkflowMasterPrompt(workflow, resolved, language);
  }, [workflow, prompts, stepInputs, isArabic, language]);

  const handleCopyStep = () => {
    if (!currentStepCompiled) return;
    navigator.clipboard.writeText(currentStepCompiled);
    if (currentPrompt) incrementUsage(currentPrompt.id);
    setCopiedStep(true);
    setTimeout(() => setCopiedStep(false), 2000);
  };

  const handleCopyMaster = () => {
    navigator.clipboard.writeText(masterBundleText);
    setCopiedMaster(true);
    setTimeout(() => setCopiedMaster(false), 2000);
  };

  const handleDownloadMaster = () => {
    downloadFile(
      masterBundleText,
      `${workflow.id}-master-workflow-${Date.now()}.txt`,
      'text/plain;charset=utf-8'
    );
  };

  const handleShareWorkflow = () => {
    const url = generateWorkflowShareUrl(workflow.id, currentStepIndex);
    navigator.clipboard.writeText(url);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Top Header Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground transition-colors cursor-pointer"
            aria-label="الرجوع لقائمة المسارات"
          >
            {isArabic ? <ChevronRight className="h-5 w-5" /> : <ChevronRight className="h-5 w-5 rotate-180" />}
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {isArabic ? workflow.titleAr : workflow.titleEn}
              </h2>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {workflow.steps.length} {isArabic ? 'مراحل' : 'Steps'}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {isArabic ? workflow.outputSummaryAr : workflow.outputSummaryEn}
            </p>
          </div>
        </div>

        {/* Global Workflow Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleShareWorkflow}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
            title="مشاركة رابط المسار"
          >
            {copiedShareLink ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copiedShareLink ? (isArabic ? 'تم نسخ الرابط!' : 'Link Copied!') : t.sharePrompt}</span>
          </button>

          <button
            onClick={() => setActiveTab(activeTab === 'master' ? 'step' : 'master')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'master'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.combineAllSteps}</span>
          </button>
        </div>
      </div>

      {/* Stepper Navigation Bar */}
      <div className="bg-card border border-border rounded-xl p-3 sm:p-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {workflow.steps.map((step, idx) => {
            const isActive = idx === currentStepIndex && activeTab === 'step';
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={step.id}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setActiveTab('step');
                }}
                className={`flex items-center gap-2.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : isCompleted
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-muted/60 text-muted-foreground border border-border/50 hover:bg-accent hover:text-foreground'
                }`}
              >
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                    isActive
                      ? 'bg-primary-foreground text-primary'
                      : isCompleted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-muted-foreground/20 text-foreground'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="h-3.5 w-3.5" /> : idx + 1}
                </div>
                <span className="font-semibold whitespace-nowrap">
                  {isArabic ? step.titleAr : step.titleEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main View Area */}
      {activeTab === 'master' ? (
        /* Master Prompt Bundle View */
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {isArabic ? 'البرومبت الشامل لكامل المسار (Master Prompt)' : 'Master Workflow Bundle Prompt'}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {isArabic
                  ? 'تم دمج وتنسيق كافة المراحل والمعاملات في أمر متسلسل موجه لنماذج الذكاء الاصطناعي (ChatGPT, Claude, Gemini).'
                  : 'All pipeline stages compiled into a unified structured prompt for LLMs.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMaster}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer shadow-sm"
              >
                {copiedMaster ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copiedMaster ? t.masterPromptCopied : t.copyPrompt}</span>
              </button>
              <button
                onClick={handleDownloadMaster}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>{t.downloadPack}</span>
              </button>
            </div>
          </div>

          <pre className="p-4 rounded-xl bg-muted/70 text-foreground font-mono text-xs overflow-x-auto max-h-[500px] whitespace-pre-wrap leading-relaxed border border-border/80">
            {masterBundleText}
          </pre>
        </div>
      ) : (
        /* Single Step Interactive View */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Step Configuration & Parameters */}
          <div className="lg:col-span-7 space-y-5">
            {/* Step Header Card */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
                  {isArabic ? `المرحلة ${currentStepIndex + 1} من ${workflow.steps.length}` : `Stage ${currentStepIndex + 1} of ${workflow.steps.length}`}
                </span>
                {currentPrompt && (
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {currentPrompt.code}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground">
                {isArabic ? currentStep.titleAr : currentStep.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {isArabic ? currentStep.descriptionAr : currentStep.descriptionEn}
              </p>

              {/* Tips Section */}
              {currentStep.tipsAr && currentStep.tipsAr.length > 0 && (
                <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                    <span>{t.expertTips}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 ps-1 text-[11px] opacity-90">
                    {(isArabic ? currentStep.tipsAr : currentStep.tipsEn || currentStep.tipsAr).map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Step Parameters Form */}
            {currentPrompt && (
              <div className="rounded-xl border border-border bg-card p-5 space-y-4">
                <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>{isArabic ? 'مدخلات وخيارات هذه المرحلة' : 'Stage Input Parameters'}</span>
                </h4>

                <div className="space-y-3.5">
                  {currentPrompt.params.map(param => {
                    const currentVal = stepInputs[currentStep.id]?.[param.flag] ?? param.defaultValue ?? '';
                    const isEnum = param.type === 'enum' && param.enumValues && param.enumValues.length > 0;

                    return (
                      <div key={param.key} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <label className="font-semibold text-foreground">
                            {isArabic ? param.labelAr : param.labelEn}
                            {param.required && <span className="text-destructive ms-1">*</span>}
                          </label>
                          <span className="font-mono text-[10px] text-muted-foreground">
                            --{param.flag}
                          </span>
                        </div>

                        {isEnum ? (
                          <select
                            value={currentVal}
                            onChange={(e) => handleInputChange(currentStep.id, param.flag, e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            {param.enumValues?.map((ev) => (
                              <option key={ev.value} value={ev.value}>
                                {isArabic ? ev.labelAr : ev.labelEn} ({ev.value})
                              </option>
                            ))}
                          </select>
                        ) : param.type === 'text' || param.isPositional ? (
                          <textarea
                            rows={3}
                            value={currentVal}
                            onChange={(e) => handleInputChange(currentStep.id, param.flag, e.target.value)}
                            placeholder={isArabic ? param.hintAr : param.hintEn}
                            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                          />
                        ) : (
                          <input
                            type="text"
                            value={currentVal}
                            onChange={(e) => handleInputChange(currentStep.id, param.flag, e.target.value)}
                            placeholder={isArabic ? param.hintAr : param.hintEn}
                            className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        )}
                        <p className="text-[11px] text-muted-foreground">
                          {isArabic ? param.hintAr : param.hintEn}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Output & Step Controls */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Step Output Preview */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3 sticky top-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-foreground">
                  {t.livePreview}
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {currentStepCompiled.length} {isArabic ? 'حرف' : 'chars'}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-muted/60 border border-border text-foreground font-mono text-xs whitespace-pre-wrap max-h-[360px] overflow-y-auto leading-relaxed">
                {currentStepCompiled}
              </div>

              {/* Step Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={handleCopyStep}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm cursor-pointer"
                >
                  {copiedStep ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copiedStep ? t.commandCopied : t.copyStepPrompt}</span>
                </button>

                <button
                  onClick={() => onOpenPlayground(currentStep.promptId)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{t.openInPlayground}</span>
                </button>
              </div>

              {/* Bottom Stepper Next/Prev Controls */}
              <div className="flex items-center justify-between gap-2 pt-4 border-t border-border mt-3">
                <button
                  onClick={() => setCurrentStepIndex(p => Math.max(0, p - 1))}
                  disabled={currentStepIndex === 0}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  {isArabic ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
                  <span>{t.prevStep}</span>
                </button>

                {currentStepIndex < workflow.steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStepIndex(p => Math.min(workflow.steps.length - 1, p + 1))}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    <span>{t.nextStep}</span>
                    {isArabic ? <ArrowLeft className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveTab('master')}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors cursor-pointer shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>{t.finishWorkflow}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
