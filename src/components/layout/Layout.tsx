import React from 'react';
import { Header } from './Header';
import { SidebarNav } from '../navigation/SidebarNav';
import { MobileDrawer } from '../navigation/MobileDrawer';
import { MobileBottomNav } from '../navigation/MobileBottomNav';
import { PWAInstallBanner } from '../../pwa/PWAInstallBanner';
import { OfflineBanner } from '../../pwa/OfflineBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg-primary text-text-primary">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:start-4 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring shadow-lg"
      >
        تخطي إلى المحتوى الرئيسي
      </a>

      {/* Connectivity Banner */}
      <OfflineBanner />

      {/* Desktop Persistent Collapsible Sidebar */}
      <SidebarNav />

      {/* Mobile Native Drawer */}
      <MobileDrawer />
      
      {/* Main Content Stage */}
      <div className="flex flex-1 flex-col h-full min-w-0 overflow-hidden relative">
        <Header />
        
        <main 
          id="main-content"
          role="main"
          className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin"
        >
          {/* Bottom padding on mobile to account for MobileBottomNav height + safe areas */}
          <div className="mx-auto max-w-[1440px] min-h-full p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (< md) */}
      <MobileBottomNav />

      {/* PWA Floating Install Prompt */}
      <PWAInstallBanner />
    </div>
  );
}
