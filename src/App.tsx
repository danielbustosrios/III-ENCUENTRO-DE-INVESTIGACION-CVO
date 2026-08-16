import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutEvent } from './components/AboutEvent';
import { AgendaTimeline } from './components/AgendaTimeline';
import { GuestSection } from './components/GuestSection';
import { WorkshopSection } from './components/WorkshopSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast, ToastMessage } from './components/Toast';

export default function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    (message: string, type: 'success' | 'info' | 'warning' = 'info', title?: string) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type, title }]);
    },
    []
  );

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleNavigateToAgenda = () => {
    const el = document.getElementById('agenda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1B4332] flex flex-col font-sans selection:bg-[#E9EDC9] selection:text-[#1B4332]">
      {/* Accessibility Skip Link */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1B4332] focus:text-[#FDFBF7] focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC6C25]"
      >
        Saltar al contenido principal
      </a>

      {/* Top Sticky Header */}
      <Header onNavigateToAgenda={handleNavigateToAgenda} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero onNotify={addToast} />
        <AboutEvent />
        <AgendaTimeline />
        <GuestSection />
        <WorkshopSection onNotify={addToast} />
        <ContactSection onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
