import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, UserCheck } from 'lucide-react';
import { SchoolCrest } from './SchoolCrest';
import { EVENT_INFO } from '../data/eventData';

interface HeaderProps {
  onNavigateToAgenda?: () => void;
}

export function Header({ onNavigateToAgenda }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre el encuentro', href: '#sobre-el-encuentro' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Invitados', href: '#invitados' },
    { name: 'Talleres', href: '#talleres' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAgendaClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateToAgenda) {
      onNavigateToAgenda();
    } else {
      const agendaEl = document.getElementById('agenda');
      if (agendaEl) {
        agendaEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#E5E0D4]'
          : 'bg-[#FDFBF7]/80 backdrop-blur-xs border-b border-[#EDE7DC]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Institution Identity & Shield */}
          <a
            href="#inicio"
            id="header-logo-link"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#BC6C25] rounded-lg p-1"
            aria-label="Ir al inicio - Institución Educativa Carlos Vieco Ortiz"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logocvo.jpeg`}
              alt="Escudo de la Institución Educativa Carlos Vieco Ortiz"
              className="h-16 w-16 object-contain flex-shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold tracking-wider text-[#BC6C25] uppercase font-sans">
                Institución Educativa
              </span>
              <span className="text-sm sm:text-base font-bold text-[#1B4332] tracking-tight">
                Carlos Vieco Ortiz
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-${link.href.replace('#', '')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-[#1B4332]/85 hover:text-[#BC6C25] hover:bg-[#F5F1E6]/70 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
              >
                {link.name}
              </a>
            ))}

            <div className="ml-3 pl-3 border-l border-[#E5E0D4]">
              <a
                id="header-register-btn"
                href={EVENT_INFO.registrationUrl || 'https://form.everestwebdeals.co/?form=2ec82c65cd16c8f97914667fe58f3655'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#081C15] rounded-lg transition-all shadow-xs hover:shadow focus-visible:ring-2 focus-visible:ring-[#BC6C25] cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-[#DDA15E]" aria-hidden="true" />
                <span>Inscribirse</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#CCD5AE] opacity-80" aria-hidden="true" />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-lg text-[#1B4332] hover:text-[#BC6C25] hover:bg-[#F5F1E6] transition-colors focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
              aria-controls="mobile-menu-drawer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#FDFBF7] z-30 flex flex-col border-t border-[#E5E0D4] px-6 py-6 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.href.replace('#', '')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 text-base font-medium text-[#1B4332] hover:text-[#BC6C25] hover:bg-[#F5F1E6] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#E5E0D4]/80">
              <a
                id="mobile-register-btn"
                href={EVENT_INFO.registrationUrl || 'https://form.everestwebdeals.co/?form=2ec82c65cd16c8f97914667fe58f3655'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-[#FDFBF7] bg-[#1B4332] active:bg-[#081C15] rounded-xl shadow-xs"
              >
                <UserCheck className="w-5 h-5 text-[#DDA15E]" aria-hidden="true" />
                <span>Inscribirse</span>
                <ExternalLink className="w-4 h-4 text-[#CCD5AE] opacity-80" aria-hidden="true" />
              </a>
            </div>

            {/* Institution Badge in mobile menu */}
            <div className="mt-8 p-4 rounded-xl bg-[#F2ECE0]/70 border border-[#E5E0D4]/80 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#BC6C25]">
                Institución Educativa Carlos Vieco Ortiz
              </p>
              <p className="text-xs text-[#1B4332]/75 mt-1">
                Medellín, Colombia · 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
