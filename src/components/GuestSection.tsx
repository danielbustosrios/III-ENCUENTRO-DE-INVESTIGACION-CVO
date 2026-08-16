import { useState } from 'react';
import { Presentation, PenTool, Video, Eye, Camera, Sparkles, Bookmark, ChevronRight, User } from 'lucide-react';
import { GUESTS_DATA } from '../data/eventData';
import { Guest } from '../types';
import { GuestModal } from './GuestModal';

export function GuestSection() {
  const [filter, setFilter] = useState<'all' | 'conference' | 'workshop'>('all');
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const filteredGuests = filter === 'all'
    ? GUESTS_DATA
    : GUESTS_DATA.filter((g) => g.type === filter);

  const getGuestIcon = (topic: string) => {
    const titleLower = topic.toLowerCase();
    if (titleLower.includes('design thinking') || titleLower.includes('conferencia')) {
      return Presentation;
    }
    if (titleLower.includes('escritura')) {
      return PenTool;
    }
    if (titleLower.includes('reel') || titleLower.includes('video')) {
      return Video;
    }
    if (titleLower.includes('cuerpo') || titleLower.includes('mediación') || titleLower.includes('mediacion')) {
      return Eye;
    }
    if (titleLower.includes('fotografía') || titleLower.includes('fotografia')) {
      return Camera;
    }
    return Sparkles;
  };

  return (
    <section
      id="invitados"
      className="py-16 md:py-24 bg-[#FDFBF7] relative overflow-hidden"
      aria-labelledby="guests-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#BC6C25] font-sans">
              Voces y facilitadores
            </span>
            <h2
              id="guests-title"
              className="text-2xl sm:text-4xl font-extrabold text-[#1B4332] tracking-tight mt-1"
            >
              Conferencistas e invitados
            </h2>
            <div className="h-1 w-20 bg-[#BC6C25] rounded-full mt-3" />
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar invitados">
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#1B4332] text-[#FDFBF7]'
                  : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
              }`}
            >
              Todos ({GUESTS_DATA.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'conference'}
              onClick={() => setFilter('conference')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                filter === 'conference'
                  ? 'bg-[#1B4332] text-[#FDFBF7]'
                  : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
              }`}
            >
              Conferencia magistral
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === 'workshop'}
              onClick={() => setFilter('workshop')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                filter === 'workshop'
                  ? 'bg-[#1B4332] text-[#FDFBF7]'
                  : 'bg-[#E9EDC9] text-[#1B4332] hover:bg-[#DDE5B6]'
              }`}
            >
              Facilitadores de talleres ({GUESTS_DATA.filter(g => g.type === 'workshop').length})
            </button>
          </div>
        </div>

        {/* Guests Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuests.map((guest: Guest) => {
            const Icon = getGuestIcon(guest.topic);
            const isConference = guest.type === 'conference';

            return (
              <div
                key={guest.id}
                id={`guest-card-${guest.id}`}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedGuest(guest)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedGuest(guest);
                  }
                }}
                aria-label={`Ver perfil completo de ${guest.name}`}
                className={`group flex flex-col justify-between p-6 rounded-3xl border transition-all duration-200 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BC6C25] hover:shadow-md hover:-translate-y-0.5 ${
                  isConference
                    ? 'bg-[#FFFFFF] border-[#BC6C25]/40 shadow-xs ring-1 ring-[#BC6C25]/20'
                    : 'bg-[#FFFFFF] border-[#E5E0D4] shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Badge & Category Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                        isConference
                          ? 'bg-[#FDF5EC] text-[#BC6C25]'
                          : 'bg-[#E9EDC9] text-[#1B4332]'
                      }`}
                    >
                      <Bookmark className="w-3 h-3" aria-hidden="true" />
                      <span>{guest.tag || (isConference ? 'Conferencia central' : 'Taller práctico')}</span>
                    </span>

                    <div className="p-2 rounded-xl bg-[#FDFBF7] border border-[#E5E0D4] text-[#587B56] group-hover:text-[#1B4332] group-hover:bg-[#E9EDC9]/50 transition-colors">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Initials badge + Names */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E9EDC9] border border-[#CCD5AE] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      <span className="text-lg sm:text-xl font-bold text-[#1B4332] tracking-wider">
                        {guest.initials}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-[#1B4332] group-hover:text-[#2D6A4F] transition-colors leading-tight">
                        {guest.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#BC6C25] mt-0.5">
                        {guest.role}
                      </p>
                      {guest.institution && (
                        <p className="text-xs text-[#587B56] truncate">
                          {guest.institution}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Topic Box */}
                  <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-[#EDE7DC] mb-3 group-hover:border-[#CCD5AE] transition-colors">
                    <p className="text-[10px] sm:text-[11px] font-bold text-[#587B56] uppercase tracking-wider mb-1">
                      {isConference ? 'Tema de la conferencia' : 'Taller'}
                    </p>
                    <p className="text-sm font-semibold text-[#1B4332] leading-snug">
                      «{guest.topic}»
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#1B4332]/80 leading-relaxed line-clamp-3">
                    {guest.shortDescription}
                  </p>
                </div>

                {/* Card Bottom: Discrete action & Event Year */}
                <div className="mt-5 pt-3 border-t border-[#EDE7DC] flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#BC6C25] group-hover:text-[#8C4A15] transition-colors">
                    <span>Ver perfil completo</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#587B56]/80">
                    <span>III Encuentro de Investigación Escolar</span>
                    <span className="font-semibold text-[#BC6C25]">2026</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on 4 Workshops Distribution */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-[#F2ECE0]/70 border border-[#E5E0D4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#1B4332]/85">
          <span>
            Los talleres prácticos se desarrollarán simultáneamente en 4 salones asignados de 10:30 a. m. a 12:30 p. m.
          </span>
          <span className="font-bold text-[#1B4332] whitespace-nowrap">
            I.E. Carlos Vieco Ortiz
          </span>
        </div>

      </div>

      {/* Interactive Modal */}
      <GuestModal
        guest={selectedGuest}
        onClose={() => setSelectedGuest(null)}
      />
    </section>
  );
}
