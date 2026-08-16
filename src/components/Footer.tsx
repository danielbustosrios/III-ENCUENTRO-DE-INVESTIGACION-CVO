import { ArrowUp, Mail } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import { SchoolCrest } from './SchoolCrest';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre el encuentro', href: '#sobre-el-encuentro' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Invitados', href: '#invitados' },
    { name: 'Talleres', href: '#talleres' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#1B4332] text-[#FDFBF7] pt-14 pb-8 border-t border-[#2D6A4F] relative overflow-hidden"
    >
      {/* Decorative Subtle Background Ring */}
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#2D6A4F]/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2D6A4F]">
          
          {/* Column 1: Identity & Crest */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}images/logocvo.jpeg`}
                alt="Escudo de la Institución Educativa Carlos Vieco Ortiz"
                className="h-12 w-12 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#DDA15E]">
                  Organiza
                </p>
                <h3 className="text-base sm:text-lg font-bold text-[#FDFBF7]">
                  {EVENT_INFO.organizer}
                </h3>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-bold text-[#E9EDC9]">
                {EVENT_INFO.edition} {EVENT_INFO.title}
              </h4>
              <p className="text-xs text-[#CCD5AE] italic font-serif mt-1 max-w-md">
                {EVENT_INFO.slogan}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#CCD5AE] pt-1">
              <Mail className="w-4 h-4 text-[#DDA15E]" aria-hidden="true" />
              <a
                href={`mailto:${EVENT_INFO.contactEmail}`}
                className="hover:text-[#FDFBF7] transition-colors underline decoration-[#DDA15E]/50 underline-offset-4"
              >
                {EVENT_INFO.contactEmail}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#DDA15E]">
              Navegación
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#CCD5AE] hover:text-[#FDFBF7] hover:underline transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Back to top */}
          <div className="md:col-span-2 flex md:flex-col justify-between md:justify-start items-center md:items-end gap-4">
            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2D6A4F] hover:bg-[#587B56] text-xs font-semibold text-[#FDFBF7] transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
              aria-label="Volver al inicio de la página"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <div className="text-right text-[11px] text-[#CCD5AE]/80">
              <p>MOVA, Medellín</p>
              <p>24 de agosto de 2026</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CCD5AE]/70">
          <p>
            © 2026 {EVENT_INFO.organizer}. Todos los derechos reservados.
          </p>
          <p className="text-[11px]">
            III Encuentro de Investigación Escolar · Medellín, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
