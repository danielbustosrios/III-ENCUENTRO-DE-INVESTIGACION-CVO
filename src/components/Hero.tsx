import { useState } from 'react';
import { Calendar, Clock, MapPin, Share2, Check, ExternalLink, CalendarPlus, UserCheck } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

interface HeroProps {
  onNotify: (message: string, type?: 'success' | 'info' | 'warning', title?: string) => void;
}

export function Hero({ onNotify }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${EVENT_INFO.edition} ${EVENT_INFO.title}`,
      text: `${EVENT_INFO.edition} ${EVENT_INFO.title} - ${EVENT_INFO.slogan}. Fecha: ${EVENT_INFO.date}, Lugar: ${EVENT_INFO.location}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        onNotify('Evento compartido con éxito', 'success');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setCopied(true);
        onNotify('Enlace copiado al portapapeles', 'success', '¡Enlace copiado!');
        setTimeout(() => setCopied(false), 3000);
      },
      () => {
        onNotify('No se pudo copiar el enlace automáticamente', 'warning');
      }
    );
  };

  const handleScrollToAgenda = () => {
    const agendaEl = document.getElementById('agenda');
    if (agendaEl) {
      agendaEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getGoogleCalendarUrl = () => {
    // 24 August 2026 from 07:15 to 13:00 COT (UTC-5)
    // 20260824T121500Z to 20260824T180000Z
    const title = encodeURIComponent(`${EVENT_INFO.edition} ${EVENT_INFO.title} - I.E. Carlos Vieco Ortiz`);
    const details = encodeURIComponent(`${EVENT_INFO.slogan}\n\nOrganiza: ${EVENT_INFO.organizer}\nContacto: ${EVENT_INFO.contactEmail}`);
    const location = encodeURIComponent('MOVA - Centro de Innovación del Maestro, Medellín, Colombia');
    const dates = '20260824T121500Z/20260824T180000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EDE7DC]/80"
      aria-labelledby="hero-title"
    >
      {/* Decorative Subtle Organic Curves */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E9EDC9]/40 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#FDF5EC]/60 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col text-left">
            
            {/* Institution Badge Header */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F2ECE0] border border-[#E5E0D4] w-fit mb-6 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#BC6C25]">
                Organiza
              </span>
              <span className="text-xs font-semibold text-[#1B4332]">
                {EVENT_INFO.organizer}
              </span>
            </div>

            {/* Edition Subtitle */}
            <span className="text-xs sm:text-sm font-bold text-[#BC6C25] uppercase tracking-wider font-sans mb-0.5">
              {EVENT_INFO.edition}
            </span>

            {/* Main Title */}
            <h1
              id="hero-title"
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1B4332] tracking-tight leading-tight mb-2 break-words"
            >
              Investigación Escolar
            </h1>

            {/* Event Slogan / Quote */}
            <p className="text-xs sm:text-sm text-[#BC6C25] font-serif italic font-normal leading-relaxed mb-5 max-w-lg break-words">
              {EVENT_INFO.slogan}
            </p>

            {/* Quick Details Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-3xl">
              {/* Date Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D4] shadow-xs">
                <div className="p-2.5 rounded-lg bg-[#FDFBF7] text-[#BC6C25] flex-shrink-0 border border-[#EDE7DC]">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#587B56] uppercase tracking-wider">Fecha</p>
                  <p className="text-sm font-bold text-[#1B4332] truncate">{EVENT_INFO.date}</p>
                </div>
              </div>

              {/* Time Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D4] shadow-xs">
                <div className="p-2.5 rounded-lg bg-[#FDFBF7] text-[#BC6C25] flex-shrink-0 border border-[#EDE7DC]">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#587B56] uppercase tracking-wider">Horario</p>
                  <p className="text-sm font-bold text-[#1B4332] truncate">{EVENT_INFO.time}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E0D4] shadow-xs">
                <div className="p-2.5 rounded-lg bg-[#FDFBF7] text-[#BC6C25] flex-shrink-0 border border-[#EDE7DC]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-[#587B56] uppercase tracking-wider">Lugar</p>
                  <p className="text-sm font-bold text-[#1B4332] truncate">{EVENT_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                id="hero-register-btn"
                href={EVENT_INFO.registrationUrl || 'https://form.everestwebdeals.co/?form=2ec82c65cd16c8f97914667fe58f3655'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#081C15] rounded-xl shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#BC6C25] cursor-pointer group"
              >
                <UserCheck className="w-5 h-5 text-[#DDA15E]" aria-hidden="true" />
                <span>Inscribirse</span>
                <ExternalLink className="w-4 h-4 text-[#CCD5AE] opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>

              <a
                id="hero-survey-btn"
                href="https://forms.gle/vpBaSsEx5hz7qmSR6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-[#FDFBF7] bg-[#BC6C25] hover:bg-[#A85F20] active:bg-[#8F4E19] rounded-xl shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#1B4332] cursor-pointer group"
              >
                <span>Responder encuesta de cierre</span>
                <ExternalLink className="w-4 h-4 text-[#F2ECE0] opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>

              <button
                id="hero-share-btn"
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-[#1B4332] bg-[#E9EDC9] hover:bg-[#DDE5B6] active:bg-[#CCD5AE] rounded-xl border border-[#CCD5AE] transition-all focus-visible:ring-2 focus-visible:ring-[#BC6C25] cursor-pointer"
                aria-label="Compartir información del evento"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#1B4332]" aria-hidden="true" />
                    <span>¡Enlace copiado!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-[#1B4332]" aria-hidden="true" />
                    <span>Compartir evento</span>
                  </>
                )}
              </button>

              <a
                id="hero-calendar-btn"
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-[#1B4332]/80 hover:text-[#1B4332] hover:bg-[#F2ECE0] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
                title="Añadir a Google Calendar"
              >
                <CalendarPlus className="w-4 h-4 text-[#BC6C25]" aria-hidden="true" />
                <span className="hidden sm:inline">Añadir al calendario</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inspired by the official Poster's Date Badge & Visual Identity */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            
            {/* Visual Date Badge (Recreating the exact poster card) */}
            <div className="w-full max-w-xs bg-[#E9EDC9]/90 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-[#CCD5AE] shadow-xs text-center relative">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#587B56] block mb-1">
                AGOSTO
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold text-[#1B4332] tracking-tighter">
                  24
                </span>
                <span className="text-xl font-bold text-[#1B4332]/80">
                  2026
                </span>
              </div>
              <div className="h-0.5 w-16 bg-[#BC6C25] mx-auto my-4 rounded-full" />
              
              <div className="space-y-1 text-xs text-[#1B4332]/85 font-medium">
                <p className="font-semibold text-[#1B4332]">7:15 a. m. – 1:00 p. m.</p>
                <p>MOVA · Medellín</p>
                <p className="text-[11px] text-[#587B56] pt-1">Centro de Innovación del Maestro</p>
              </div>

              {/* Institution Name */}
              <div className="mt-4 pt-4 border-t border-[#CCD5AE]/80 flex items-center justify-center">
                <span className="text-[11px] font-bold tracking-wide uppercase text-[#1B4332]/75">
                  I.E. Carlos Vieco Ortiz
                </span>
              </div>
            </div>

            {/* Small supportive note */}
            <p className="text-xs text-[#587B56] mt-4 text-center lg:text-right max-w-xs">
              Espacio formativo y de divulgación investigativa para la comunidad educativa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
