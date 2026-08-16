import { Sparkles, Users, Compass, BookOpen } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export function AboutEvent() {
  const pillars = [
    {
      icon: Users,
      title: 'Diálogo',
      description: 'Espacio de intercambio cercano entre estudiantes, docentes e invitados para enriquecer la mirada pedagógica.',
    },
    {
      icon: Sparkles,
      title: 'Experimentación',
      description: 'Reconocimiento de la creatividad y el hacer práctico como motores vivos del proceso investigativo.',
    },
    {
      icon: Compass,
      title: 'Construcción colectiva',
      description: 'Socialización de propuestas y saberes escolares nacidos desde la curiosidad y el trabajo en equipo.',
    },
  ];

  return (
    <section
      id="sobre-el-encuentro"
      className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC6C25] font-sans">
            Presentación institucional
          </span>
          <h2
            id="about-title"
            className="text-2xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight mt-1 mb-4"
          >
            Sobre el encuentro
          </h2>
          <div className="h-1 w-20 bg-[#BC6C25] rounded-full" />
        </div>

        {/* Main Text Card */}
        <div className="bg-[#FFFFFF] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 border border-[#E5E0D4] shadow-xs relative mb-12">
          {/* Subtle Quote Accent */}
          <div className="absolute top-6 right-8 text-[#E9EDC9]/70 select-none pointer-events-none hidden sm:block">
            <BookOpen className="w-16 h-16" strokeWidth={1} />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-[#1B4332] font-serif leading-relaxed sm:leading-loose">
            {EVENT_INFO.aboutText}
          </p>

          <div className="mt-8 pt-6 border-t border-[#EDE7DC] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#BC6C25]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#587B56]">
                Institución Educativa Carlos Vieco Ortiz
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#1B4332]/70 font-medium">
              Medellín · 24 de agosto de 2026
            </span>
          </div>
        </div>

        {/* Conceptual Pillars derived directly from the about text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                id={`pillar-card-${index}`}
                className="bg-[#F5F1E6]/70 hover:bg-[#F2ECE0] transition-colors rounded-2xl p-6 border border-[#E5E0D4]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FDFBF7] border border-[#E5E0D4] text-[#BC6C25] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1B4332] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#1B4332]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
