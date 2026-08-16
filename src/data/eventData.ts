import { AgendaItem, Guest, WorkshopLink, EventInfo } from '../types';

import andresPelaezImage from '../assets/images/andres-pelaez.jpeg';
import carlosCastanoImage from '../assets/images/carlos-castano.png';
import linaCoralImage from '../assets/images/lina-coral.png';
import socratesSuazaImage from '../assets/images/socrates-suaza.png';
import sandraLoaizaImage from '../assets/images/sandra-loaiza.png';
import olgaRamosImage from '../assets/images/olga-ramos.png';

export const EVENT_INFO: EventInfo = {
  edition: 'III Encuentro de',
  title: 'Investigación Escolar',
  slogan: '«La creatividad como puente a la investigación escolar»',
  date: '24 de agosto de 2026',
  time: '7:15 a. m. – 1:00 p. m.',
  location: 'MOVA, Medellín',
  locationDetails: 'Centro de Innovación del Maestro',
  organizer: 'Institución Educativa Carlos Vieco Ortiz',
  contactEmail: 'ciecvo@carlosvieco.edu.co',
  aboutText: 'El III Encuentro de Investigación Escolar es un espacio para compartir experiencias, propuestas y prácticas que reconocen la creatividad como un puente hacia la investigación escolar. La jornada busca propiciar el diálogo, la experimentación y la construcción colectiva entre estudiantes, docentes e invitados.',
  registrationUrl: 'https://form.everestwebdeals.co/?form=2ec82c65cd16c8f97914667fe58f3655',
};

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'agenda-1',
    time: '7:15 – 7:45',
    title: 'Registro y bienvenida',
    category: 'general',
  },
  {
    id: 'agenda-2',
    time: '7:45 – 8:00',
    title: 'Ingreso y ubicación de los asistentes',
    location: 'Auditorio',
    category: 'general',
  },
  {
    id: 'agenda-3',
    time: '8:00 – 8:30',
    title: 'Apertura del encuentro',
    category: 'general',
    isHighlight: true,
  },
  {
    id: 'agenda-4',
    time: '8:30 – 9:15',
    title: 'Conferencia magistral',
    subtitle: 'Design Thinking como herramienta viva para la investigación escolar',
    category: 'conferencia',
    isHighlight: true,
  },
  {
    id: 'agenda-5',
    time: '9:15 – 10:00',
    title: 'Conversatorio',
    subtitle: 'Menos teoría, más acción: el conversatorio del hacer',
    category: 'conversatorio',
  },
  {
    id: 'agenda-6',
    time: '10:00 – 10:30',
    title: 'Refrigerio',
    category: 'refrigerio',
  },
  {
    id: 'agenda-7',
    time: '10:30 – 12:30',
    title: 'Talleres prácticos',
    subtitle: 'Salones asignados según la inscripción de cada participante',
    category: 'talleres',
    isHighlight: true,
  },
  {
    id: 'agenda-8',
    time: '12:30 – 1:00',
    title: 'Clausura del III Encuentro de Investigación Escolar',
    location: 'Auditorio',
    category: 'clausura',
    isHighlight: true,
  },
];

/**
 * Centralized list of workshop links for participants to consult.
 * If pdfUrl is "#", a polite modal/notice will inform that the list will be available soon.
 * Replace "#" with the actual URL (e.g., "https://.../taller-1.pdf") when available.
 */
export const WORKSHOP_LINKS: WorkshopLink[] = [
  {
    id: 1,
    title: 'Taller 1: Escritura creativa',
    facilitator: 'Carlos Castaño Moncada y Sócrates Suaza Velásquez',
    room: 'Salón 1',
    description: 'Consulta aquí el listado de participantes inscritos',
    pdfUrl: '#',
  },
  {
    id: 2,
    title: 'Taller 2: Reel o video corto para narrar la escuela',
    facilitator: 'Lina Marcela Coral Villota',
    room: 'Salón 2',
    description: 'Consulta aquí el listado de participantes inscritos',
    pdfUrl: '#',
  },
  {
    id: 3,
    title: 'Taller 3: Cuerpo y Mediación',
    facilitator: 'Olga Lucía Ramos Reyes',
    room: 'Salón 3',
    description: 'Consulta aquí el listado de participantes inscritos',
    pdfUrl: '#',
  },
  {
    id: 4,
    title: 'Taller 4: Fotografía digital básica',
    facilitator: 'Sandra Loaiza Marín',
    room: 'Salón 4',
    description: 'Consulta aquí el listado de participantes inscritos',
    pdfUrl: '#',
  },
];

/**
 * Speakers and Guests Data.
 * Centralized list of central speaker and workshop facilitators.
 */
export const GUESTS_DATA: Guest[] = [
  {
    id: 'andres-pelaez',
    name: 'Andrés Peláez Cárdenas',
    initials: 'AP',
    image: andresPelaezImage,
    role: 'Conferencista central',
    type: 'conference',
    topic: 'Design Thinking como herramienta viva para la investigación escolar',
    shortDescription: 'Conferencia magistral sobre pensamiento de diseño, creatividad e innovación aplicados a los procesos de investigación escolar.',
    fullProfile: 'Andrés Peláez Cárdenas es licenciado y magíster en Educación y doctor en Gestión de la Tecnología y la Innovación de la Universidad Pontificia Bolivariana, sede Medellín, donde también se desempeñó como docente investigador durante 28 años. Su pasión se centra en potenciar didácticamente el desarrollo de capacidades humanas de innovación y en la cocreación de ambientes para el aprendizaje creativo y la innovación sostenible.\n\nEs coautor del Modelo de Educación en Ambientes de la UPB. Actualmente aporta a procesos de transformación pedagógica en MOVA y en la Secretaría de Educación de Sabaneta, donde acompaña a maestros en la comprensión y apropiación de metodologías activas y en el desarrollo de mentalidades de diseño y sistémicas, esenciales para la apropiación del enfoque STEM+H.\n\nSu perfil equilibra la investigación educativa y la formación docente con una faceta creativa dedicada a la producción de contenidos digitales para la divulgación del conocimiento en innovación educativa. Es un gestor de comunidades de aprendizaje que busca, desde la investigación y la práctica, promover el desarrollo de la creatividad en maestros y estudiantes de los territorios STEM+.',
    tag: 'Conferencia central',
    institution: 'UPB · MOVA',
  },
  {
    id: 'carlos-castano',
    name: 'Carlos Castaño Moncada',
    initials: 'CC',
    image: carlosCastanoImage,
    role: 'Facilitador de taller',
    type: 'workshop',
    topic: 'Escritura creativa',
    workshopGroup: 'Taller 1: Escritura creativa',
    shortDescription: 'Exploración de narrativas pedagógicas para recuperar experiencias y convertirlas en fuentes de aprendizaje colectivo.',
    fullProfile: 'Normalista superior, pedagogo y magíster en Administración Educativa. Cuenta con experiencia en sistematización de experiencias educativas y en formación docente en temas de Aprendizaje Basado en Proyectos (ABP), investigación escolar y prospectiva estratégica. Es formulador de proyectos educativos y dinamizador de redes pedagógicas en MOVA, Centro de Innovación del Maestro.',
    fullWorkshopDescription: 'A través de narrativas pedagógicas, los docentes podrán recuperar la memoria de sus experiencias y convertirlas en una fuente valiosa de aprendizaje colectivo mediante la implementación de metáforas y diversos estilos narrativos.',
    tag: 'Taller práctico',
    institution: 'MOVA, Centro de Innovación del Maestro',
  },
  {
    id: 'socrates-suaza',
    name: 'Sócrates Suaza Velásquez',
    initials: 'SS',
    image: socratesSuazaImage,
    role: 'Facilitador de taller',
    type: 'workshop',
    topic: 'Escritura creativa',
    workshopGroup: 'Taller 1: Escritura creativa',
    shortDescription: 'Exploración de las figuras retóricas como recursos expresivos para diferentes tipos de textos.',
    fullProfile: 'Pedagogo y comunicador en formación. Cuenta con experiencia e interés en la creación de contenidos educativos digitales, la educomunicación y el pensamiento de diseño. Es dinamizador de Centros de Investigación Escolar de MOVA, Centro de Innovación del Maestro.',
    fullWorkshopDescription: 'Se realizará una exploración de las figuras retóricas como recursos expresivos y estilísticos para diferentes tipologías textuales.',
    tag: 'Taller práctico',
    institution: 'MOVA, Centro de Innovación del Maestro',
  },
  {
    id: 'lina-coral',
    name: 'Lina Marcela Coral Villota',
    initials: 'LC',
    image: linaCoralImage,
    role: 'Facilitadora de taller',
    type: 'workshop',
    topic: 'Reel o video corto para narrar la escuela',
    workshopGroup: 'Taller 2: Narrativa digital y video corto',
    shortDescription: 'Exploración del reel o video corto como herramienta para narrar la escuela en formatos digitales contemporáneos.',
    fullProfile: 'Licenciada en Pedagogía Infantil de la Universidad de Antioquia y estudiante de la Maestría en Educación de la misma universidad. Cuenta con más de cinco años de experiencia en formación docente.',
    fullWorkshopDescription: 'En el taller se explorará el reel o video corto como una herramienta para narrar la escuela mediante formatos digitales y contemporáneos.',
    tag: 'Taller práctico',
    institution: 'Universidad de Antioquia',
  },
  {
    id: 'olga-ramos',
    name: 'Olga Lucía Ramos Reyes',
    initials: 'OR',
    image: olgaRamosImage,
    role: 'Facilitadora de taller',
    type: 'workshop',
    topic: 'Cuerpo y Mediación',
    workshopGroup: 'Taller 3: Cuerpo y Mediación',
    shortDescription: 'Experiencia práctica y lúdica para reconocer el cuerpo como herramienta de comunicación, enseñanza y aprendizaje.',
    fullProfile: 'Licenciada en Educación Física, Recreación y Deportes del Politécnico Colombiano Jaime Isaza Cadavid. Especialista en Intervención Comunitaria de la Universidad UNIMINUTO. Es profesional en educación del Parque Explora–MOVA, experta en acompañamiento y asesoría a procesos de investigación escolar y metodologías activas, y gestora cultural de la comuna 15 de Medellín en procesos de investigación social y teatro comunitario.',
    fullWorkshopDescription: 'Cuerpo y Mediación busca promover una conciencia del cuerpo entendido como elemento físicamente activo de la práctica docente y como mecanismo de mediación en el acto comunicativo que implica la enseñanza y el aprendizaje a través del cuerpo y la palabra. Es un taller práctico, divertido y lúdico que invita a explorar el cuerpo como herramienta viva y presente en el aula de clase.',
    recommendation: 'Se recomienda llevar ropa cómoda, hidratación y muchas ganas de reír, disfrutar y participar.',
    tag: 'Taller práctico',
    institution: 'Parque Explora – MOVA',
  },
  {
    id: 'sandra-loaiza',
    name: 'Sandra Loaiza Marín',
    initials: 'SL',
    image: sandraLoaizaImage,
    role: 'Facilitadora de taller',
    type: 'workshop',
    topic: 'Fotografía digital básica',
    workshopGroup: 'Taller 4: Fotografía digital',
    shortDescription: 'Taller práctico para explorar los fundamentos de la fotografía digital como herramienta creativa y comunicativa.',
    fullProfile: 'Magíster en Comunicación Estratégica. Comunicadora Audiovisual y Multimedial bilingüe, con más de 14 años de experiencia laboral en proyectos públicos y privados en las áreas de cultura, educación y comunicaciones.',
    fullWorkshopDescription: 'Taller práctico para explorar los fundamentos de la fotografía digital como herramienta de observación, registro estético y comunicación visual en la indagación escolar.',
    tag: 'Taller práctico',
    institution: 'Comunicadora Audiovisual y Multimedial',
  },
];
