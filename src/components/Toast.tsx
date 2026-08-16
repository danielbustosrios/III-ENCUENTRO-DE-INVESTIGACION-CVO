import { useEffect } from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info' | 'warning';
  title?: string;
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export function Toast({ toasts, onDismiss }: ToastProps) {
  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      setTimeout(() => {
        onDismiss(t.id);
      }, 4500)
    );
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts, onDismiss]);

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full px-4 pointer-events-none"
      role="region"
      aria-label="Notificaciones del sistema"
      aria-live="polite"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isWarning = toast.type === 'warning';

        return (
          <div
            key={toast.id}
            id={`toast-${toast.id}`}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-lg backdrop-blur-md transition-all duration-300 transform translate-y-0 ${
              isSuccess
                ? 'bg-[#1B4332] text-[#FDFBF7] border-[#2D6A4F]'
                : isWarning
                ? 'bg-[#FDFBF7] text-[#1B4332] border-[#BC6C25]'
                : 'bg-[#1B4332] text-[#FDFBF7] border-[#2D6A4F]'
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {isSuccess ? (
                <CheckCircle2 className="w-5 h-5 text-[#CCD5AE]" aria-hidden="true" />
              ) : isWarning ? (
                <AlertCircle className="w-5 h-5 text-[#BC6C25]" aria-hidden="true" />
              ) : (
                <Info className="w-5 h-5 text-[#DDA15E]" aria-hidden="true" />
              )}
            </div>

            <div className="flex-1 text-sm">
              {toast.title && (
                <p className="font-semibold mb-0.5 leading-tight">{toast.title}</p>
              )}
              <p className="leading-relaxed opacity-95">{toast.message}</p>
            </div>

            <button
              id={`toast-close-${toast.id}`}
              onClick={() => onDismiss(toast.id)}
              className="flex-shrink-0 p-1 rounded-md opacity-70 hover:opacity-100 hover:bg-white/10 transition-colors"
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
