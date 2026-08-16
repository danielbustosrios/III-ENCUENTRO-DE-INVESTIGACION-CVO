interface SchoolCrestProps {
  className?: string;
  size?: number;
}

export function SchoolCrest({ className = '', size = 64 }: SchoolCrestProps) {
  return (
    <img
      src="/images/escudo-carlos-vieco-ortiz.png"
      alt="Escudo de la Institución Educativa Carlos Vieco Ortiz"
      className={`object-contain flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      referrerPolicy="no-referrer"
    />
  );
}

