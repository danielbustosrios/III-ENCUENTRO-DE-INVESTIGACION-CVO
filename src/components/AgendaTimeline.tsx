import { useState } from 'react';
import { Clock, MapPin, Sparkles, Coffee, Users, GraduationCap, Mic, Presentation, CheckCircle2 } from 'lucide-react';
import { AGENDA_ITEMS, EVENT_INFO } from '../data/eventData';
import { AgendaItem } from '../types';
import aguilaImage from '../assets/images/aguil.png';
export function AgendaTimeline() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? AGENDA_ITEMS
    : AGENDA_ITEMS.filter((item) => {
        if (activeCategory === 'academic') {
          return item.category === 'conferencia' || item.category === 'conversatorio' || item.category === 'talleres';
        }
        if (activeCategory === 'general') {
          return item.category === 'general' || item.category === 'refrigerio' || item.category === 'clausura';
        }
        return true;
      });

  const getCategoryIcon = (category: AgendaItem['category']) => {
    switch (category) {
      case 'conferencia':
        return Presentation;
      case 'conversatorio':
        return Mic;
      case 'talleres':
        return Sparkles;
      case 'refrigerio':
        return Coffee;
      case 'clausura':
        return GraduationCap;
      default:
        return Users;
    }
  };

  return (
    <section
      id="agenda"
      className="py-16 md:py-24 bg-[#FDFBF7] border-t border-b border-[#E5E0D4] relative overflow-hidden"
      aria-labelledby="agenda-title"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-[#E9EDC9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Poster-styled Section Header */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
            <div className="flex items-baseline gap-4">
              <h2
                id="agenda-title"
                className="text-2xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight uppercase"
              >
                Agenda
              </h2>
              <span className="text-sm sm:text-base md:text-lg font-medium text-[#1B4332]/75 font-sans">
                {EVENT_INFO.time}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#BC6C25] uppercase tracking-wider">
              24 de agosto de 2026 · MOVA
            </span>
          </div>

          {/* Prominent Terracotta Divider Line (Exact reference from poster) */}
          <div className="h-0.75 w-full bg-[#BC6C25] rounded-full" />
        </div>

        {/* Filter Pills for Accessibility / Easy Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10" role="tablist" aria-label="Filtrar agenda">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#1B4332] text-[#FDFBF7]'
                : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
            }`}
          >
            Toda la jornada ({AGENDA_ITEMS.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'academic'}
            onClick={() => setActiveCategory('academic')}
            className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
              activeCategory === 'academic'
                ? 'bg-[#1B4332] text-[#FDFBF7]'
                : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
            }`}
          >
            Bloques académicos y talleres
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'general'}
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
              activeCategory === 'general'
                ? 'bg-[#1B4332] text-[#FDFBF7]'
                : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
            }`}
          >
            Protocolo y refrigerio
          </button>
        </div>

        {/* Main Timeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Timeline Column */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-8 md:pl-48">
              
              {/* Vertical Guide Line */}
              <div
                className="absolute left-2 sm:left-3 md:left-40 top-3 bottom-6 w-0.5 bg-[#CCD5AE]"
                aria-hidden="true"
              />

              <div className="space-y-6 sm:space-y-8">
                {filteredItems.map((item, index) => {
                  const Icon = getCategoryIcon(item.category);
                  const isBreak = item.category === 'refrigerio';

                  return (
                    <article
                      key={item.id}
                      id={`agenda-item-${index}`}
                      className="relative group transition-all"
                    >
                      {/* Desktop Time Column (Sticky to the left) */}
                      <div className="hidden md:block absolute -left-48 top-1 w-32 text-right pr-4">
                        <span className="text-sm font-bold text-[#BC6C25] font-mono tracking-tight">
                          {item.time}
                        </span>
                      </div>

                      {/* Timeline Node Dot */}
                      <div
                        className={`absolute -left-6 sm:-left-7 md:-left-10.5 top-1.5 w-4.5 h-4.5 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 flex items-center justify-center ${
                          item.isHighlight
                            ? 'bg-[#BC6C25] border-[#FDFBF7] ring-2 ring-[#BC6C25]'
                            : isBreak
                            ? 'bg-[#587B56] border-[#FDFBF7]'
                            : 'bg-[#1B4332] border-[#FDFBF7]'
                        }`}
                        aria-hidden="true"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FDFBF7]" />
                      </div>

                      {/* Content Card */}
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                          item.isHighlight
                            ? 'bg-[#FFFFFF] border-[#CCD5AE] shadow-xs group-hover:border-[#BC6C25]/50 group-hover:shadow'
                            : isBreak
                            ? 'bg-[#F2ECE0]/70 border-[#E5E0D4]'
                            : 'bg-[#FFFFFF] border-[#E5E0D4] shadow-2xs group-hover:shadow-xs'
                        }`}
                      >
                        {/* Mobile Time Badge (Visible on small screens) */}
                        <div className="md:hidden flex items-center gap-2 mb-2">
                          <Clock className="w-3.5 h-3.5 text-[#BC6C25]" aria-hidden="true" />
                          <span className="text-xs font-bold text-[#BC6C25] font-mono">
                            {item.time}
                          </span>
                        </div>

                        {/* Title and Subtitle */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <h3 className="text-base sm:text-lg font-bold text-[#1B4332] leading-snug">
                              {item.title}
                            </h3>

                            {item.subtitle && (
                              <p className="text-sm sm:text-base text-[#1B4332]/85 font-medium leading-relaxed">
                                {item.subtitle}
                              </p>
                            )}
                          </div>

                          <div
                            className="p-2 rounded-lg bg-[#FDFBF7] border border-[#E5E0D4] text-[#587B56] flex-shrink-0"
                            aria-hidden="true"
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Location Tag */}
                        {item.location && (
                          <div className="mt-3 pt-2.5 border-t border-[#EDE7DC] flex items-center gap-1.5 text-xs font-semibold text-[#587B56]">
                            <MapPin className="w-3.5 h-3.5 text-[#BC6C25]" aria-hidden="true" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Side Info Box: Venue & Logistics Guide */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Logistics Summary Card */}
            <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5E0D4] shadow-xs">
              <h3 className="text-base font-bold text-[#1B4332] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BC6C25]" aria-hidden="true" />
                <span>Puntos clave de la jornada</span>
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-[#1B4332]/85">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC6C25] mt-1.5 flex-shrink-0" />
                  <span><strong>Puntualidad:</strong> El registro inicia a las 7:15 a. m. en la entrada principal de MOVA.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC6C25] mt-1.5 flex-shrink-0" />
                  <span><strong>Auditorio:</strong> Apertura, conferencias magistrales y acto de clausura.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BC6C25] mt-1.5 flex-shrink-0" />
                  <span><strong>Talleres prácticos:</strong> De 10:30 a 12:30 en salones asignados. Consulta tu asignación en la sección de talleres.</span>
                </li>
              </ul>
            </div>

            {/* Poster Art Aesthetic Feature Box */}
            <div className="bg-[#E9EDC9]/70 rounded-2xl p-6 border border-[#CCD5AE] text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FDFBF7] text-[#1B4332] flex items-center justify-center mx-auto mb-3 border border-[#CCD5AE]">
                <img
  src={aguilaImage}
  alt="Ilustración de la creatividad como puente"
  className="w-10 h-10 object-contain"
/>
              </div>
              <h4 className="text-sm font-bold text-[#1B4332] mb-1">
                La creatividad como puente
              </h4>
              <p className="text-xs text-[#1B4332]/80 leading-relaxed">
                Una jornada dedicada a visibilizar y conectar las preguntas e indagaciones nacidas en las aulas escolares.
              </p>
              <div className="mt-4 pt-3 border-t border-[#CCD5AE]/80 text-[11px] font-semibold text-[#587B56] uppercase tracking-wider">
                I.E. Carlos Vieco Ortiz · 2026
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
