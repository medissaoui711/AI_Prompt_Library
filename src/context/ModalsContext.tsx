// ==========================================================
// src/context/ModalsContext.tsx
// Centralized state manager for Settings Menu & Modal Dialogs
// ==========================================================

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export type ModalType = 'settings' | 'privacy' | 'terms' | 'faq';

interface ModalsContextType {
  activeModal: ModalType | null;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  isModalOpen: (type: ModalType) => boolean;
  isSettingsMenuOpen: boolean;
  setIsSettingsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSettingsMenu: () => void;
  closeSettingsMenu: () => void;
}

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

export function ModalsProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState<boolean>(false);

  const openModal = useCallback((type: ModalType) => {
    setIsSettingsMenuOpen(false); // Close dropdown when a modal opens
    setActiveModal(type);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const isModalOpen = useCallback((type: ModalType) => activeModal === type, [activeModal]);

  const toggleSettingsMenu = useCallback(() => {
    setIsSettingsMenuOpen((prev) => !prev);
  }, []);

  const closeSettingsMenu = useCallback(() => {
    setIsSettingsMenuOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      activeModal,
      openModal,
      closeModal,
      isModalOpen,
      isSettingsMenuOpen,
      setIsSettingsMenuOpen,
      toggleSettingsMenu,
      closeSettingsMenu,
    }),
    [activeModal, openModal, closeModal, isModalOpen, isSettingsMenuOpen, toggleSettingsMenu, closeSettingsMenu]
  );

  return <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>;
}

export function useModals() {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalsProvider');
  }
  return context;
}
