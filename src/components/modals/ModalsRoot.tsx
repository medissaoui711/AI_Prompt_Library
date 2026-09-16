// ==========================================================
// src/components/modals/ModalsRoot.tsx
// Mounts all popup modal dialogs connected to ModalsContext
// ==========================================================

import React from 'react';
import { useModals } from '../../context/ModalsContext';
import { SettingsModal } from './SettingsModal';
import { PrivacyPolicyModal } from './PrivacyPolicyModal';
import { TermsOfUseModal } from './TermsOfUseModal';
import { FAQModal } from './FAQModal';

export function ModalsRoot() {
  const { activeModal, closeModal } = useModals();

  return (
    <>
      <SettingsModal
        isOpen={activeModal === 'settings'}
        onClose={closeModal}
      />
      <PrivacyPolicyModal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
      />
      <TermsOfUseModal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
      />
      <FAQModal
        isOpen={activeModal === 'faq'}
        onClose={closeModal}
      />
    </>
  );
}
