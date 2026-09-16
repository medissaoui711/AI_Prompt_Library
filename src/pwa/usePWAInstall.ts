import { useEffect, useState, useCallback } from 'react';
import { BeforeInstallPromptEvent, PWAInstallState } from './types';

const BANNER_DISMISS_KEY = 'pwa_prompt_dismissed_until';

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  useEffect(() => {
    // 1. Detect standalone mode (already installed / launched from home screen)
    const checkStandalone = () => {
      const isStandaloneMedia = window.matchMedia('(display-mode: standalone)').matches;
      const isIOSStandalone = (window.navigator as unknown as { standalone?: boolean }).standalone === true;
      const isWindowControlsOverlay = window.matchMedia('(display-mode: window-controls-overlay)').matches;
      return isStandaloneMedia || isIOSStandalone || isWindowControlsOverlay;
    };

    setIsInstalled(checkStandalone());

    // Listen for display mode changes (e.g. user installs or moves window)
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleDisplayChange = (e: MediaQueryListEvent) => {
      setIsInstalled(e.matches);
    };
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleDisplayChange);
    }

    // 2. Detect iOS / iPadOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream;
    setIsIOS(isIOSDevice);

    // 3. Check dismissed state from localStorage
    try {
      const dismissedUntil = localStorage.getItem(BANNER_DISMISS_KEY);
      if (dismissedUntil && Number(dismissedUntil) > Date.now()) {
        setIsBannerDismissed(true);
      }
    } catch {
      // Ignore localStorage errors in restricted contexts
    }

    // 4. Capture `beforeinstallprompt` event (Chromium / Android / Edge / Desktop)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // 5. Handle `appinstalled` event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setShowIOSGuide(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleDisplayChange);
      }
    };
  }, []);

  const install = useCallback(async (): Promise<boolean> => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSGuide(true);
      }
      return false;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        return true;
      }
    } catch (err) {
      console.warn('PWA install prompt error:', err);
    }
    return false;
  }, [deferredPrompt, isIOS]);

  const dismissBanner = useCallback(() => {
    setIsBannerDismissed(true);
    try {
      // Dismiss for 7 days
      localStorage.setItem(BANNER_DISMISS_KEY, String(Date.now() + 7 * 24 * 60 * 60 * 1000));
    } catch {
      // Ignore
    }
  }, []);

  // Compute fine-grained install state
  let installState: PWAInstallState = 'UNKNOWN';
  if (isInstalled) {
    installState = 'ALREADY_INSTALLED';
  } else if (deferredPrompt) {
    installState = 'INSTALL_AVAILABLE';
  } else if (isIOS) {
    installState = 'IOS_MANUAL_INSTALL';
  } else {
    installState = 'INSTALL_NOT_AVAILABLE';
  }

  return {
    installState,
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    showIOSGuide,
    setShowIOSGuide,
    install,
    dismissBanner,
    isBannerDismissed,
  };
}
