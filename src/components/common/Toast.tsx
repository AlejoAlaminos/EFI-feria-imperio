import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  show: boolean;
  type?: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast = ({ show, type = 'success', title, message, onClose }: ToastProps) => {
  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white dark:bg-charcoal-700 border border-sand-300 dark:border-charcoal-600 rounded-2xl shadow-xl p-4 flex items-start gap-3 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div
        className={`p-2 rounded-xl shrink-0 ${
          type === 'success'
            ? 'bg-forest-100 text-forest dark:bg-forest-900/40 dark:text-forest-300'
            : 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300'
        }`}
      >
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-charcoal-900 dark:text-white leading-tight">
          {title}
        </h4>
        <p className="text-xs text-charcoal-600 dark:text-sand-300 mt-1 leading-relaxed">
          {message}
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-charcoal-400 hover:text-charcoal-700 dark:text-sand-400 dark:hover:text-white p-1 rounded-lg"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
