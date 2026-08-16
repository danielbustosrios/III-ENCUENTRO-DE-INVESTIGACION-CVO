import { useState } from 'react';
import { Mail, MapPin, Calendar, Copy, Check, ExternalLink } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import { SchoolCrest } from './SchoolCrest';

interface ContactSectionProps {
  onNotify: (message: string, type?: 'success' | 'info' | 'warning', title?: string) => void;
}

export function ContactSection({ onNotify }: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EVENT_INFO.contactEmail).then(
      () => {
        setCopiedEmail(true);
        onNotify('Correo copiado al portapapeles', 'success', '¡Copiado!');
        setTimeout(() => setCopiedEmail(false), 3000);
      },
      () => {
        onNotify('No se pudo copiar el correo', 'warning');
      }
    );
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC6C25] font-sans">
            Información y sede
          </span>
          <h2
            id="contact-title"
            className="text-2xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight mt-1 mb-3"
          >
            Contacto y ubicación
          </h2>
          <div className="h-1 w-20 bg-[#BC6C25] rounded-full" />
        </div>

        {/* Contact & Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Lugar */}
          <div
            id="contact-card-location"
            className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#E5E0D4] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#1B4332] flex items-center justify-center mb-6 border border-[#CCD5AE]">
                <MapPin className="w-6 h-6 text-[#BC6C25]" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-[#587B56] uppercase tracking-wider block mb-1">
                Sede del encuentro
              </span>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">
                {EVENT_INFO.location}
              </h3>
              <p className="text-sm text-[#1B4332]/80 leading-relaxed">
                {EVENT_INFO.locationDetails}
              </p>
              <p className="text-xs text-[#587B56] mt-2">
                Medellín, Antioquia, Colombia
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EDE7DC] text-xs text-[#1B4332]/70">
              Espacio dedicado a la innovación y el encuentro docente.
            </div>
          </div>

          {/* Card 2: Fecha y Horario */}
          <div
            id="contact-card-date"
            className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#E5E0D4] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#1B4332] flex items-center justify-center mb-6 border border-[#CCD5AE]">
                <Calendar className="w-6 h-6 text-[#BC6C25]" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-[#587B56] uppercase tracking-wider block mb-1">
                Jornada
              </span>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">
                {EVENT_INFO.date}
              </h3>
              <p className="text-sm font-semibold text-[#BC6C25]">
                {EVENT_INFO.time}
              </p>
              <p className="text-xs text-[#1B4332]/75 mt-2">
                Recepción y acreditación desde las 7:15 a. m.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EDE7DC] text-xs text-[#1B4332]/70">
              Se recomienda llegar con 15 minutos de anticipación.
            </div>
          </div>

          {/* Card 3: Correo Electrónico y Dudas */}
          <div
            id="contact-card-email"
            className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-[#E5E0D4] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E9EDC9] text-[#1B4332] flex items-center justify-center mb-6 border border-[#CCD5AE]">
                <Mail className="w-6 h-6 text-[#BC6C25]" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-[#587B56] uppercase tracking-wider block mb-1">
                Canal de atención
              </span>
              <h3 className="text-xl font-bold text-[#1B4332] mb-2">
                Correo de contacto
              </h3>
              
              <div className="my-3">
                <a
                  href={`mailto:${EVENT_INFO.contactEmail}`}
                  className="text-sm sm:text-base font-bold text-[#1B4332] hover:text-[#BC6C25] transition-colors break-all underline decoration-[#BC6C25]/40 underline-offset-4"
                  title="Enviar correo a ciecvo@carlosvieco.edu.co"
                >
                  {EVENT_INFO.contactEmail}
                </a>
              </div>

              <button
                type="button"
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1B4332] bg-[#E9EDC9] hover:bg-[#DDE5B6] rounded-lg transition-colors cursor-pointer border border-[#CCD5AE]"
                aria-label="Copiar correo de contacto al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#1B4332]" aria-hidden="true" />
                    <span>¡Correo copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#1B4332]" aria-hidden="true" />
                    <span>Copiar correo</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EDE7DC] text-xs text-[#1B4332]/70">
              Respuestas sobre ponencias, asistencias y certificados.
            </div>
          </div>

        </div>

        {/* Institution Banner Card */}
        <div className="mt-8 bg-[#F2ECE0] rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-[#E5E0D4] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <SchoolCrest size={48} />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#BC6C25]">
                Institución Organizadora
              </p>
              <h4 className="text-base sm:text-lg font-bold text-[#1B4332]">
                {EVENT_INFO.organizer}
              </h4>
              <p className="text-xs text-[#1B4332]/75">
                Comité de Investigación Escolar · Medellín, Colombia
              </p>
            </div>
          </div>

          <a
            href={`mailto:${EVENT_INFO.contactEmail}?subject=Consulta%20III%20Encuentro%20de%20Investigación%20Escolar`}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] rounded-xl transition-all shadow-2xs whitespace-nowrap cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#DDA15E]" aria-hidden="true" />
            <span>Escribir al comité</span>
          </a>
        </div>

      </div>
    </section>
  );
}
