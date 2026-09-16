export type PWAInstallState =
  | 'INSTALL_AVAILABLE'
  | 'ALREADY_INSTALLED'
  | 'INSTALL_NOT_AVAILABLE'
  | 'IOS_MANUAL_INSTALL'
  | 'UNKNOWN';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export interface PWAContextValue {
  installState: PWAInstallState;
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  isOnline: boolean;
  install: () => Promise<boolean>;
  showIOSGuide: boolean;
  setShowIOSGuide: (show: boolean) => void;
  dismissBanner: () => void;
  isBannerDismissed: boolean;
}
