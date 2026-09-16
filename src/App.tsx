import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DirectionProvider } from './context/DirectionContext';
import { LanguageProvider } from './context/LanguageContext';
import { ViewProvider, useView } from './context/ViewContext';
import { EduFilterProvider } from './context/EduFilterContext';
import { ToastProvider } from './context/ToastContext';
import { PWAProvider } from './pwa/PWAContext';
import { NavigationProvider } from './components/navigation/NavigationContext';
import { ModalsProvider } from './context/ModalsContext';
import { ModalsRoot } from './components/modals/ModalsRoot';
import { SEOHead } from './seo/SEOHead';
import { Layout } from './components/layout/Layout';
import { DashboardView } from './components/dashboard/DashboardView';
import { LibraryView } from './components/library/LibraryView';
import { PlaygroundView } from './components/playground/PlaygroundView';
import { WorkflowsView } from './components/workflows/WorkflowsView';
import { FlowsView } from './components/flows/FlowsView';
import { GeneratorView } from './components/generator/GeneratorView';
import { SettingsView } from './components/settings/SettingsView';

function ViewRenderer() {
  const { view } = useView();

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardView />;
      case 'library':
        return <LibraryView />;
      case 'playground':
        return <PlaygroundView />;
      case 'workflows':
        return <WorkflowsView />;
      case 'flows':
        return <FlowsView />;
      case 'generator':
        return <GeneratorView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div key={view} className="h-full animate-in fade-in duration-200">
      {renderView()}
    </div>
  );
}

export default function App() {
  return (
    <DirectionProvider>
      <LanguageProvider>
        <ThemeProvider>
          <EduFilterProvider>
            <ViewProvider>
              <ToastProvider>
                <PWAProvider>
                  <NavigationProvider>
                    <ModalsProvider>
                      <SEOHead />
                      <Layout>
                        <ViewRenderer />
                      </Layout>
                      <ModalsRoot />
                    </ModalsProvider>
                  </NavigationProvider>
                </PWAProvider>
              </ToastProvider>
            </ViewProvider>
          </EduFilterProvider>
        </ThemeProvider>
      </LanguageProvider>
    </DirectionProvider>
  );
}
