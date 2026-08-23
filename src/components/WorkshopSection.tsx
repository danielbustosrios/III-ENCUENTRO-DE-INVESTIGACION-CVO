import { useState, useEffect, useRef } from 'react';
import { FileText, ExternalLink, X, AlertCircle, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { WORKSHOP_LINKS } from '../data/eventData';
import { WorkshopLink } from '../types';

interface WorkshopSectionProps {
  onNotify: (message: string, type?: 'success' | 'info' | 'warning', title?: string) => void;
}

export function WorkshopSection({ onNotify }: WorkshopSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeWorkshopInfo, setActiveWorkshopInfo] = useState<WorkshopLink | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handlePdfClick = (workshop: WorkshopLink) => {
    if (!workshop.pdfUrl || workshop.pdfUrl === '#') {
      onNotify(
        'El listado estará disponible próximamente.',
        'info',
        workshop.title
      );
    } else {
      window.open(workshop.pdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Accessible Escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
      }
    };
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <section
      id="talleres"
      className="py-16 md:py-24 bg-[#F5F1E6]/50 border-t border-b border-[#E5E0D4] relative overflow-hidden"
      aria-labelledby="workshops-title"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-[#E9EDC9]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC6C25] font-sans">
            Espacios prácticos de indagación
          </span>
          <h2
            id="workshops-title"
            className="text-2xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight mt-1 mb-3"
          >
            Consulta tu taller
          </h2>
          <div className="h-1 w-20 bg-[#BC6C25] rounded-full mb-6" />
          
          <p className="text-base sm:text-lg text-[#1B4332]/85 leading-relaxed">
            Consulta el listado correspondiente para verificar el taller y el espacio que te fueron asignados.
          </p>
        </div>

        {/* Highlight Action Card */}
        <div className="bg-[#FFFFFF] rounded-2xl md:rounded-3xl p-6 sm:p-10 border border-[#E5E0D4] shadow-xs mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9EDC9] text-[#1B4332] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#BC6C25]" />
              <span>Asignación de salones · 10:30 a. m. a 12:30 p. m.</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#1B4332]">
              Listados de participantes por taller
            </h3>
            <p className="text-sm sm:text-base text-[#1B4332]/75 leading-relaxed">
              Verifica tu nombre, salón asignado y facilitador en el documento oficial en PDF de cada taller.
              
<br />
  <strong>Escritura creativa</strong>
<br />
<strong>Salón:</strong> Ema 1
<br />
<strong>Tallerista:</strong> Carlos Moncada
<br /><br />

<strong>Escritura creativa</strong>
<br />
<strong>Salón:</strong> Ema 2
<br />
<strong>Tallerista:</strong> Sócrates Suaza
<br /><br />

<strong>Video</strong>
<br />
<strong>Salón:</strong> Ema 3
<br />
<strong>Tallerista:</strong> Lina Coral
<br /><br />

<strong>Fotografía</strong>
<br />
<strong>Salón:</strong> Ema 4
<br />
<strong>Tallerista:</strong> Sandra Loaiza
<br /><br />

<strong>Expresión corporal</strong>
<br />
<strong>Salón:</strong> Bricolaje
<br />
<strong>Tallerista:</strong> Olga Ramos
</p>
          </div>

          <button
            id="open-workshops-modal-btn"
            type="button"
            onClick={() =>
  window.open(
`${import.meta.env.BASE_URL}images/Encuentro_investigacion.xlsx`,
   '_blank',
    'noopener,noreferrer'
  )
}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] active:bg-[#081C15] rounded-xl shadow-sm hover:shadow transition-all focus-visible:ring-2 focus-visible:ring-[#BC6C25] cursor-pointer whitespace-nowrap"
          >
            <FileText className="w-5 h-5 text-[#DDA15E]" aria-hidden="true" />
            <span>Consultar listas de talleres</span>
          </button>
        </div>

        {/* 4 Workshop Quick Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKSHOP_LINKS.map((workshop) => {
            const isPlaceholder = !workshop.pdfUrl || workshop.pdfUrl === '#';

            return (
              <div
                key={workshop.id}
                id={`workshop-card-${workshop.id}`}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D4] shadow-2xs hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#BC6C25] uppercase tracking-wider">
                      {workshop.room || `Salón ${workshop.id}`}
                    </span>
                    <span className="p-1.5 rounded-lg bg-[#FDFBF7] text-[#587B56] border border-[#EDE7DC]">
                      <FileText className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1B4332] mb-1">
                    {workshop.title}
                  </h3>

                  {workshop.facilitator && (
                    <p className="text-xs font-semibold text-[#587B56] mb-3">
                      {workshop.facilitator}
                    </p>
                  )}

                  <p className="text-xs text-[#1B4332]/75 mb-6">
                    {workshop.description || 'Consulta aquí el listado de participantes inscritos'}
                  </p>
                </div>

                <button
                  type="button"
                  id={`view-pdf-btn-${workshop.id}`}
                  onClick={() => handlePdfClick(workshop)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6] border border-[#CCD5AE] focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
                  aria-label={`Ver listado en PDF para ${workshop.title}`}
                >
                  <FileText className="w-3.5 h-3.5 text-[#BC6C25]" aria-hidden="true" />
                  <span>Ver listado en PDF</span>
                  {!isPlaceholder && (
                    <ExternalLink className="w-3 h-3 text-[#1B4332]/60" aria-hidden="true" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Accessible Modal for Workshop Lists Consultation */}
      {modalOpen && (
        <div
          id="workshops-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B4332]/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            id="workshops-modal-content"
            ref={modalRef}
            className="bg-[#FDFBF7] rounded-3xl border border-[#E5E0D4] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-workshops-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-[#E5E0D4]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#BC6C25]">
                  Listados oficiales
                </span>
                <h3
                  id="modal-workshops-title"
                  className="text-xl sm:text-2xl font-extrabold text-[#1B4332] mt-0.5"
                >
                  Listas de participantes por taller
                </h3>
                <p className="text-xs sm:text-sm text-[#1B4332]/80 mt-1">
                  Selecciona tu taller para consultar los asistentes y salones asignados.
                </p>
              </div>

              <button
                type="button"
                id="close-workshops-modal"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-xl text-[#1B4332]/70 hover:text-[#1B4332] hover:bg-[#EDE7DC] transition-colors focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
                aria-label="Cerrar ventana modal de talleres"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal List of 4 Workshops */}
            <div className="space-y-4 mb-6">
              {WORKSHOP_LINKS.map((workshop) => {
                const isPlaceholder = !workshop.pdfUrl || workshop.pdfUrl === '#';

                return (
                  <div
                    key={workshop.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E0D4] gap-4 transition-colors hover:border-[#CCD5AE]"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#E9EDC9] text-[#1B4332] font-bold text-xs">
                          {workshop.room || `Salón ${workshop.id}`}
                        </span>
                        <h4 className="text-base font-bold text-[#1B4332]">
                          {workshop.title}
                        </h4>
                      </div>

                      {workshop.facilitator && (
                        <p className="text-xs font-semibold text-[#587B56]">
                          Facilitador(a): {workshop.facilitator}
                        </p>
                      )}

                      <p className="text-xs text-[#1B4332]/75">
                        {workshop.description || 'Consulta aquí el listado de participantes inscritos'}
                      </p>
                    </div>

                    <button
                      type="button"
                      id={`modal-pdf-btn-${workshop.id}`}
                      onClick={() => handlePdfClick(workshop)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#FDFBF7] bg-[#1B4332] hover:bg-[#2D6A4F] rounded-xl transition-all shadow-2xs whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-[#BC6C25]"
                    >
                      <FileText className="w-4 h-4 text-[#DDA15E]" aria-hidden="true" />
                      <span>Ver listado en PDF</span>
                      {!isPlaceholder ? (
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-[#CCD5AE]" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer Note */}
            <div className="p-4 rounded-xl bg-[#F2ECE0] border border-[#E5E0D4] flex items-start gap-3 text-xs text-[#1B4332]/85">
              <AlertCircle className="w-4 h-4 text-[#BC6C25] flex-shrink-0 mt-0.5" />
              <p>
                Si requieres ayuda con tu registro o no encuentras tu nombre en el listado, acércate a la mesa de acreditación en MOVA o escribe a <strong>ciecvo@carlosvieco.edu.co</strong>.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 text-sm font-semibold text-[#1B4332] bg-[#E9EDC9] hover:bg-[#DDE5B6] rounded-xl transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
