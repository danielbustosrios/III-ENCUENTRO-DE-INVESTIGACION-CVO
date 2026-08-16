import { useEffect, useRef } from 'react';
import { X, Sparkles, BookOpen, AlertCircle, Bookmark, Layers } from 'lucide-react';
import { Guest } from '../types';

interface GuestModalProps {
  guest: Guest | null;
  onClose: () => void;
}

export function GuestModal({ guest, onClose }: GuestModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (guest) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [guest, onClose]);

  if (!guest) return null;

  const isConference = guest.type === 'conference';

  return (
    <div
      id="guest-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#081C15]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guest-modal-name"
    >
      <div
        ref={modalRef}
        id="guest-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FFFFFF] rounded-3xl border border-[#E5E0D4] shadow-2xl overflow-hidden flex flex-col focus:outline-none"
        tabIndex={-1}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE7DC] bg-[#FDFBF7] flex-shrink-0">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                isConference
                  ? 'bg-[#FDF5EC] text-[#BC6C25]'
                  : 'bg-[#E9EDC9] text-[#1B4332]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{guest.tag || (isConference ? 'Conferencia central' : 'Taller práctico')}</span>
            </span>
            {guest.workshopGroup && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#587B56] bg-[#F2ECE0] px-2.5 py-0.5 rounded-md">
                <Layers className="w-3 h-3" />
                {guest.workshopGroup}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            id="close-guest-modal-btn"
            className="p-2 rounded-xl text-[#1B4332]/70 hover:text-[#1B4332] hover:bg-[#E5E0D4]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#BC6C25] cursor-pointer"
            aria-label="Cerrar ventana modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Identity Block: Initials Badge + Name + Role + Topic */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
           {guest.image ? (
  <img
    src={guest.image}
    alt={`Fotografía de ${guest.name}`}
    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-center border-2 border-[#CCD5AE] shadow-xs flex-shrink-0"
  />
) : (
  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#E9EDC9] border-2 border-[#CCD5AE] shadow-xs flex items-center justify-center flex-shrink-0">
    <span className="text-2xl sm:text-3xl font-black text-[#1B4332] tracking-wider">
      {guest.initials}
    </span>
  </div>
)}

            <div className="flex-1 min-w-0">
              <h2
                id="guest-modal-name"
                className="text-xl sm:text-2xl font-bold text-[#1B4332] leading-tight"
              >
                {guest.name}
              </h2>
              <p className="text-sm font-semibold text-[#BC6C25] mt-1">
                {guest.role}
              </p>
              {guest.institution && (
                <p className="text-xs text-[#587B56] mt-0.5 font-medium">
                  {guest.institution}
                </p>
              )}

              {/* Topic Box */}
              <div className="mt-3.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#EDE7DC] text-left">
                <p className="text-[11px] font-bold text-[#587B56] uppercase tracking-wider mb-0.5">
                  {isConference ? 'Tema de la conferencia' : 'Taller asignado'}
                </p>
                <p className="text-sm font-bold text-[#1B4332] leading-snug">
                  «{guest.topic}»
                </p>
              </div>
            </div>
          </div>

          {/* Full Professional Profile */}
          <div className="space-y-3 pt-2 border-t border-[#EDE7DC]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#BC6C25] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Perfil profesional</span>
            </h3>
            
            <div className="text-sm sm:text-base text-[#1B4332]/85 leading-relaxed space-y-3">
              {guest.fullProfile.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Full Workshop Description (if available) */}
          {guest.fullWorkshopDescription && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F1E6]/70 border border-[#E5E0D4] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4332] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#BC6C25]" />
                <span>Descripción del taller</span>
              </h4>
              <p className="text-xs sm:text-sm text-[#1B4332]/85 leading-relaxed">
                {guest.fullWorkshopDescription}
              </p>
            </div>
          )}

          {/* Recommendation Box (e.g. for Olga Lucía Ramos) */}
          {guest.recommendation && (
            <div className="p-4 rounded-2xl bg-[#E9EDC9]/70 border border-[#CCD5AE] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#BC6C25] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1B4332] mb-0.5">
                  Recomendación para los participantes
                </p>
                <p className="text-xs sm:text-sm text-[#1B4332]/90">
                  {guest.recommendation}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FDFBF7] border-t border-[#EDE7DC] flex items-center justify-between text-xs text-[#587B56] flex-shrink-0">
          <span className="font-medium">III Encuentro de Investigación Escolar</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 font-bold text-xs text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#081C15] rounded-xl transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
