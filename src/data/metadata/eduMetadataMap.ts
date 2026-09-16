// ================================================
// src/data/metadata/eduMetadataMap.ts
// خرائط Metadata للأوامر التعليمية
// تُستخدم لتحديث وتصنيف جميع الأوامر التعليمية
// ================================================

import type { EduMetadata, EduStage, EduAudience, EduSubject, EduTaskType, EduDifficulty } from '../../types/eduMetadata';
import type { CommandPrompt } from '../../types/prompt';

export const EDU_METADATA_MAP: Record<string, EduMetadata> = {
  // Primary
  'primary lesson': { stage: 'primary', audience: ['teacher'], subjects: ['general', 'arabic'], taskTypes: ['lesson-plan', 'explain'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'read with me': { stage: 'primary', audience: ['student', 'parent'], subjects: ['arabic', 'english'], taskTypes: ['practice', 'activity'], grades: [1, 2, 3, 4], difficulty: 'beginner' },
  'spell practice': { stage: 'primary', audience: ['student', 'teacher'], subjects: ['arabic'], taskTypes: ['practice'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'simple math': { stage: 'primary', audience: ['student'], subjects: ['math'], taskTypes: ['practice', 'solve'], grades: [1, 2, 3, 4], difficulty: 'beginner' },
  'science fun': { stage: 'primary', audience: ['student', 'teacher'], subjects: ['science'], taskTypes: ['activity', 'explain'], grades: [3, 4, 5, 6], difficulty: 'beginner' },
  
  // Secondary
  'math solve': { stage: 'secondary', audience: ['student', 'teacher'], subjects: ['math'], taskTypes: ['solve', 'practice'], grades: [7, 8, 9, 10, 11, 12], difficulty: 'intermediate' },
  'physics solve': { stage: 'secondary', audience: ['student', 'teacher'], subjects: ['physics'], taskTypes: ['solve', 'explain'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'chemistry balance': { stage: 'secondary', audience: ['student'], subjects: ['chemistry'], taskTypes: ['solve', 'practice'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'biology notes': { stage: 'secondary', audience: ['student'], subjects: ['biology'], taskTypes: ['explain', 'review'], grades: [9, 10, 11, 12], difficulty: 'intermediate' },
  'exam revision': { stage: 'secondary', audience: ['student', 'teacher'], subjects: ['general'], taskTypes: ['review', 'exam-prep'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'past paper': { stage: 'secondary', audience: ['student', 'teacher'], subjects: ['general'], taskTypes: ['exam-prep', 'assessment'], grades: [10, 11, 12], difficulty: 'advanced' },
  'formula sheet': { stage: 'secondary', audience: ['student'], subjects: ['physics', 'math', 'chemistry'], taskTypes: ['review', 'exam-prep'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'exam strategy': { stage: 'secondary', audience: ['student', 'parent'], subjects: ['study-skills', 'general'], taskTypes: ['exam-prep', 'critical-thinking'], grades: [10, 11, 12], difficulty: 'intermediate' },

  // University
  'research proposal': { stage: 'university', audience: ['student', 'lecturer'], subjects: ['research'], taskTypes: ['research', 'project'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'literature review': { stage: 'university', audience: ['student', 'lecturer'], subjects: ['research'], taskTypes: ['research', 'review'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'university lecture': { stage: 'university', audience: ['lecturer'], subjects: ['general'], taskTypes: ['lesson-plan', 'explain'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'methodology design': { stage: 'university', audience: ['student', 'lecturer'], subjects: ['research', 'statistics'], taskTypes: ['research'], grades: [14, 15, 16], difficulty: 'advanced' },
  'data analysis plan': { stage: 'university', audience: ['student', 'lecturer'], subjects: ['research', 'statistics'], taskTypes: ['research', 'solve'], grades: [14, 15, 16], difficulty: 'advanced' },
  'research question': { stage: 'university', audience: ['student'], subjects: ['research'], taskTypes: ['research', 'critical-thinking'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  
  // Early childhood
  'early lesson': { stage: 'early_childhood', audience: ['teacher'], subjects: ['general'], taskTypes: ['lesson-plan', 'activity'], grades: [0], difficulty: 'beginner' },
  'kindergarten activity': { stage: 'early_childhood', audience: ['teacher'], subjects: ['general', 'science'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'circle time': { stage: 'early_childhood', audience: ['teacher'], subjects: ['general', 'arabic'], taskTypes: ['activity', 'lesson-plan'], grades: [0], difficulty: 'beginner' },
  'learning through play': { stage: 'early_childhood', audience: ['teacher'], subjects: ['math', 'general'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'kids story': { stage: 'early_childhood', audience: ['teacher'], subjects: ['arabic', 'literature'], taskTypes: ['explain', 'activity'], grades: [0], difficulty: 'beginner' },
  'classroom routine': { stage: 'early_childhood', audience: ['teacher'], subjects: ['general'], taskTypes: ['lesson-plan', 'communication'], grades: [0], difficulty: 'beginner' },
  'sensory activity': { stage: 'early_childhood', audience: ['teacher'], subjects: ['science', 'general'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'observation note': { stage: 'early_childhood', audience: ['teacher'], subjects: ['general'], taskTypes: ['assessment', 'communication'], grades: [0], difficulty: 'beginner' },
  'home play': { stage: 'early_childhood', audience: ['parent'], subjects: ['math', 'general'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'read to my child': { stage: 'early_childhood', audience: ['parent'], subjects: ['arabic', 'literature'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'kids routine': { stage: 'early_childhood', audience: ['parent'], subjects: ['general'], taskTypes: ['lesson-plan', 'communication'], grades: [0], difficulty: 'beginner' },
  'screen free activity': { stage: 'early_childhood', audience: ['parent'], subjects: ['general', 'science'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },
  'parent tips': { stage: 'early_childhood', audience: ['parent'], subjects: ['general'], taskTypes: ['communication', 'explain'], grades: [0], difficulty: 'beginner' },
  'emotion activity': { stage: 'early_childhood', audience: ['parent'], subjects: ['general'], taskTypes: ['activity', 'communication'], grades: [0], difficulty: 'beginner' },
  'kids questions': { stage: 'early_childhood', audience: ['parent'], subjects: ['general', 'arabic'], taskTypes: ['communication', 'activity'], grades: [0], difficulty: 'beginner' },
  'family learning': { stage: 'early_childhood', audience: ['parent'], subjects: ['science', 'general'], taskTypes: ['activity', 'practice'], grades: [0], difficulty: 'beginner' },

  // Primary Parents
  'homework guide': { stage: 'primary', audience: ['parent'], subjects: ['math', 'arabic', 'science'], taskTypes: ['homework', 'practice'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'parent study plan': { stage: 'primary', audience: ['parent'], subjects: ['math', 'arabic', 'english', 'science'], taskTypes: ['homework', 'review'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'reading support': { stage: 'primary', audience: ['parent'], subjects: ['arabic', 'english'], taskTypes: ['practice', 'homework'], grades: [1, 2, 3, 4], difficulty: 'beginner' },
  'math at home': { stage: 'primary', audience: ['parent'], subjects: ['math'], taskTypes: ['practice', 'activity'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'weekly progress': { stage: 'primary', audience: ['parent'], subjects: ['general'], taskTypes: ['assessment', 'communication'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'study routine': { stage: 'primary', audience: ['parent'], subjects: ['general'], taskTypes: ['lesson-plan', 'communication'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'learning difficulty guide': { stage: 'primary', audience: ['parent'], subjects: ['general', 'arabic', 'math'], taskTypes: ['explain', 'communication'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'parent teacher message': { stage: 'primary', audience: ['parent'], subjects: ['general'], taskTypes: ['communication'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'test preparation home': { stage: 'primary', audience: ['parent'], subjects: ['math', 'science', 'arabic', 'english'], taskTypes: ['exam-prep', 'review'], grades: [3, 4, 5, 6], difficulty: 'intermediate' },
  'family activity': { stage: 'primary', audience: ['parent'], subjects: ['science', 'history', 'general'], taskTypes: ['activity', 'practice'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'lesson newspaper': { stage: 'primary', audience: ['teacher', 'student', 'parent'], subjects: ['science', 'arabic', 'math', 'general'], taskTypes: ['activity', 'lesson-plan', 'practice'], grades: [1, 2, 3, 4, 5, 6, 7, 8, 9], difficulty: 'beginner' },
  'lesson infographic': { stage: 'primary', audience: ['teacher', 'student'], subjects: ['science', 'general', 'history', 'geography'], taskTypes: ['explain', 'review', 'activity'], grades: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12], difficulty: 'intermediate' },
  'lesson worksheet': { stage: 'primary', audience: ['teacher', 'parent'], subjects: ['math', 'arabic', 'english', 'science'], taskTypes: ['practice', 'homework', 'assessment'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'lesson crossword': { stage: 'primary', audience: ['teacher', 'student'], subjects: ['science', 'arabic', 'english', 'history'], taskTypes: ['practice', 'activity', 'quiz'], grades: [3, 4, 5, 6, 7, 8, 9], difficulty: 'intermediate' },
  'lesson word search': { stage: 'primary', audience: ['teacher', 'student', 'parent'], subjects: ['arabic', 'english', 'science', 'general'], taskTypes: ['practice', 'activity'], grades: [1, 2, 3, 4, 5, 6], difficulty: 'beginner' },
  'lesson maze': { stage: 'primary', audience: ['teacher', 'student', 'parent'], subjects: ['science', 'math', 'arabic', 'general'], taskTypes: ['practice', 'activity'], grades: [1, 2, 3, 4], difficulty: 'beginner' },

  // Secondary Parents
  'teen study support': { stage: 'secondary', audience: ['parent'], subjects: ['study-skills', 'general'], taskTypes: ['communication', 'homework'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'exam stress help': { stage: 'secondary', audience: ['parent'], subjects: ['study-skills', 'general'], taskTypes: ['communication', 'exam-prep'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'career guidance': { stage: 'secondary', audience: ['parent'], subjects: ['study-skills', 'general'], taskTypes: ['communication', 'critical-thinking'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'parent teen dialogue': { stage: 'secondary', audience: ['parent'], subjects: ['general'], taskTypes: ['communication'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'screen time management': { stage: 'secondary', audience: ['parent'], subjects: ['study-skills', 'general'], taskTypes: ['communication', 'lesson-plan'], grades: [10, 11, 12], difficulty: 'intermediate' },
  'university prep parent': { stage: 'secondary', audience: ['parent'], subjects: ['study-skills', 'general'], taskTypes: ['communication', 'explain'], grades: [11, 12], difficulty: 'advanced' },

  // University Lecturer
  'course design': { stage: 'university', audience: ['lecturer'], subjects: ['general', 'research'], taskTypes: ['lesson-plan', 'explain'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'syllabus builder': { stage: 'university', audience: ['lecturer'], subjects: ['general'], taskTypes: ['lesson-plan'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'learning outcomes': { stage: 'university', audience: ['lecturer'], subjects: ['general'], taskTypes: ['lesson-plan', 'assessment'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'seminar plan': { stage: 'university', audience: ['lecturer'], subjects: ['general', 'research'], taskTypes: ['lesson-plan', 'critical-thinking'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'assessment design': { stage: 'university', audience: ['lecturer'], subjects: ['general'], taskTypes: ['assessment'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'rubric builder': { stage: 'university', audience: ['lecturer'], subjects: ['general', 'research'], taskTypes: ['assessment'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'case discussion': { stage: 'university', audience: ['lecturer'], subjects: ['general', 'research'], taskTypes: ['critical-thinking', 'lesson-plan'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'research assignment': { stage: 'university', audience: ['lecturer'], subjects: ['research', 'general'], taskTypes: ['research', 'project'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'academic feedback': { stage: 'university', audience: ['lecturer'], subjects: ['research', 'general'], taskTypes: ['communication', 'assessment'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'academic integrity guide': { stage: 'university', audience: ['lecturer'], subjects: ['research', 'general'], taskTypes: ['communication', 'lesson-plan'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'course review': { stage: 'university', audience: ['lecturer'], subjects: ['general'], taskTypes: ['assessment', 'lesson-plan'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'office hours agenda': { stage: 'university', audience: ['lecturer'], subjects: ['general', 'study-skills'], taskTypes: ['communication', 'lesson-plan'], grades: [13, 14, 15, 16], difficulty: 'intermediate' },

  // University Student Extra
  'study plan university': { stage: 'university', audience: ['student'], subjects: ['study-skills', 'general'], taskTypes: ['lesson-plan', 'review'], grades: [13, 14, 15, 16], difficulty: 'intermediate' },
  'thesis outline': { stage: 'university', audience: ['student'], subjects: ['research'], taskTypes: ['research', 'project'], grades: [15, 16], difficulty: 'advanced' },
  'academic presentation': { stage: 'university', audience: ['student'], subjects: ['research', 'general'], taskTypes: ['present', 'research'], grades: [13, 14, 15, 16], difficulty: 'advanced' },
  'thesis defense prep': { stage: 'university', audience: ['student'], subjects: ['research'], taskTypes: ['exam-prep', 'research'], grades: [15, 16], difficulty: 'advanced' },
  'internship prep': { stage: 'university', audience: ['student'], subjects: ['study-skills', 'general'], taskTypes: ['practice', 'lesson-plan'], grades: [14, 15], difficulty: 'intermediate' },
  'career plan university': { stage: 'university', audience: ['student'], subjects: ['study-skills', 'general'], taskTypes: ['lesson-plan', 'project'], grades: [15, 16], difficulty: 'advanced' },
};

/**
 * Returns EduMetadata for a command, or infers one from prompt's existing stage/subject/task.
 */
export function getEduMetadata(prompt: CommandPrompt): EduMetadata {
  if (prompt.education) {
    return prompt.education;
  }

  const cleanCode = prompt.code.replace(/^\//, '').trim();
  if (EDU_METADATA_MAP[cleanCode]) {
    return EDU_METADATA_MAP[cleanCode];
  }

  // Fallback inferred from prompt's properties
  const stageVal: EduStage = (prompt.stage?.[0] as EduStage) || 'primary';
  const subjectsVal: EduSubject[] = (prompt.subject as EduSubject[]) || ['general'];
  const tasksVal: EduTaskType[] = (prompt.task as EduTaskType[]) || ['explain'];

  let audience: EduAudience[] = ['student'];
  if (stageVal === 'early_childhood') audience = ['teacher', 'parent'];
  else if (stageVal === 'primary') audience = ['student', 'teacher'];
  else if (stageVal === 'secondary') audience = ['student', 'teacher'];
  else if (stageVal === 'university') audience = ['student', 'lecturer'];

  return {
    stage: stageVal,
    audience,
    subjects: subjectsVal,
    taskTypes: tasksVal,
    difficulty: stageVal === 'university' ? 'advanced' : (stageVal === 'secondary' ? 'intermediate' : 'beginner')
  };
}
