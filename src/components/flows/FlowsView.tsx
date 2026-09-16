// ================================================
// src/components/flows/FlowsView.tsx
// صفحة المسارات التعليمية الإرشادية
// ================================================

import React, { useState } from 'react';
import { GUIDED_FLOWS } from '../../data/flows/guidedFlows';
import type { GuidedFlow } from '../../types/guidedFlow';
import { FlowCard } from './FlowCard';
import { FlowViewerModal } from './FlowViewerModal';
import { useLanguage } from '../../context/LanguageContext';
import { useView } from '../../context/ViewContext';
import { Sparkles, Layers, BookOpen, GraduationCap, Compass } from 'lucide-react';
import type { EduStage, EduAudience } from '../../types/eduMetadata';

export function FlowsView() {
  const { isArabic } = useLanguage();
  const { setView } = useView();

  const [activeStage, setActiveStage] = useState<string>('all');
  const [activeAudience, setActiveAudience] = useState<string>('all');
  const [selectedFlow, setSelectedFlow] = useState<GuidedFlow | null>(null);

  const filteredFlows = GUIDED_FLOWS.filter((flow) => {
    if (activeStage !== 'all' && flow.stage !== 'any' && flow.stage !== activeStage) {
      return false;
    }
    if (activeAudience !== 'all' && !flow.audience.includes(activeAudience as EduAudience)) {
      return false;
    }
    return true;
  });

  const handleTryPrompt = (promptId: string) => {
    setSelectedFlow(null);
    window.location.hash = `#playground?cmd=${promptId}`;
    setView('playground');
  };

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 rounded-3xl border border-primary/20">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="p-1.5 rounded-lg bg-primary/20 text-primary">
              <Compass className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {isArabic ? 'مسارات موجهة ذكية' : 'Guided Pedagogical Journeys'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            {isArabic ? 'المسارات الإرشادية المتكاملة' : 'Educational Guided Flows'}
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl leading-relaxed">
            {isArabic
              ? 'باقات متسلسلة من الأوامر الاحترافية المصممة لإنهاء مهام تعليمية مركبة خطوة بخطوة من البداية حتى الإتقان.'
              : 'Curated multi-step prompt sequences designed to accomplish complete pedagogical goals seamlessly.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-4 py-2 rounded-2xl bg-card border border-border shadow-xs flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-foreground">
              {GUIDED_FLOWS.length} {isArabic ? 'مسارات جاهزة' : 'Ready Flows'}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-card border border-border">
        {/* Stage Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 'all', ar: 'جميع المراحل', en: 'All Stages' },
            { id: 'early_childhood', ar: '👶 طفولة مبكرة', en: '👶 Early' },
            { id: 'primary', ar: '🎒 ابتدائي', en: '🎒 Primary' },
            { id: 'secondary', ar: '📐 ثانوي', en: '📐 Secondary' },
            { id: 'university', ar: '🎓 جامعي', en: '🎓 University' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveStage(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeStage === tab.id
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {isArabic ? tab.ar : tab.en}
            </button>
          ))}
        </div>

        {/* Audience Selector */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground font-medium">
            {isArabic ? 'الدور:' : 'Role:'}
          </span>
          <select
            value={activeAudience}
            onChange={(e) => setActiveAudience(e.target.value)}
            className="text-xs font-medium px-2.5 py-1.5 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
          >
            <option value="all">{isArabic ? 'الكل' : 'All Roles'}</option>
            <option value="teacher">{isArabic ? '👨‍🏫 معلم' : 'Teacher'}</option>
            <option value="student">{isArabic ? '🎓 طالب' : 'Student'}</option>
            <option value="parent">{isArabic ? '👨‍👩‍👧 ولي أمر' : 'Parent'}</option>
            <option value="lecturer">{isArabic ? '🏛 أستاذ جامعي' : 'Lecturer'}</option>
          </select>
        </div>
      </div>

      {/* Flows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredFlows.map((flow) => (
          <FlowCard
            key={flow.id}
            flow={flow}
            onOpen={setSelectedFlow}
          />
        ))}
      </div>

      {/* Modal */}
      <FlowViewerModal
        flow={selectedFlow}
        onClose={() => setSelectedFlow(null)}
        onTryInPlayground={handleTryPrompt}
      />
    </div>
  );
}
