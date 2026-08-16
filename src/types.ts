export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  location?: string;
  category: 'general' | 'conferencia' | 'conversatorio' | 'refrigerio' | 'talleres' | 'clausura';
  isHighlight?: boolean;
}

export interface Guest {
  id: string;
  name: string;
  initials: string;
  image?: string;
  role: string;
  type: 'conference' | 'workshop';
  topic: string;
  shortDescription: string;
  fullProfile: string;
  fullWorkshopDescription?: string;
  recommendation?: string;
  workshopGroup?: string;
  tag?: string;
  institution?: string;
}

export interface WorkshopLink {
  id: number;
  title: string;
  facilitator?: string;
  room?: string;
  description?: string;
  pdfUrl: string;
}

export interface EventInfo {
  edition: string;
  title: string;
  slogan: string;
  date: string;
  time: string;
  location: string;
  locationDetails: string;
  organizer: string;
  contactEmail: string;
  aboutText: string;
  registrationUrl?: string;
}
