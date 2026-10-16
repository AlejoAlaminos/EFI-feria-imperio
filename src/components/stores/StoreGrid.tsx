import { AlertTriangle, RotateCcw, Store } from 'lucide-react';
import { Feriante, UIStatus } from '../../types';
import { StoreCard } from './StoreCard';

interface StoreGridProps {
  feriantes: Feriante[];
  status: UIStatus;
  conteoProductosPorFeriante?: Record<string, number>;
  errorMessage?: string;
  onRetry?: () => void;
  onResetFilters?: () => void;
}

export const StoreGrid = ({
  feriantes,
  status,
  conteoProductosPorFeriante = {},
  errorMessage = 'Ocurrió un error al cargar las tiendas de los feriantes.',
  onRetry,
  onResetFilters,
}: StoreGridProps) => {
  // 1. Estado Loading (Skeletons)
  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-charcoal-700 rounded-3xl border border-sand-300 dark:border-charcoal-600 overflow-hidden shadow-card p-5 space-y-4 animate-pulse"
          >
            <div className="w-full h-36 bg-sand-200 dark:bg-charcoal-600 rounded-2xl" />
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-sand-300 dark:bg-charcoal-500" />
              <div className="space-y-1.5 flex-1">
                <div className="h-4 w-3/4 bg-sand-300 dark:bg-charcoal-500 rounded" />
                <div className="h-3 w-1/2 bg-sand-200 dark:bg-charcoal-600 rounded" />
              </div>
            </div>
            <div className="h-10 bg-sand-200 dark:bg-charcoal-600 rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  // 2. Estado Error
  if (status === 'error') {
    return (
      <div className="p-8 sm:p-12 text-center bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-3xl max-w-xl mx-auto my-8">
        <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-2">
          No pudimos conectar con los puestos
        </h3>
        <p className="text-xs sm:text-sm text-red-700 dark:text-red-300 mb-6">
          {errorMessage}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-sm active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reintentar carga</span>
          </button>
        )}
      </div>
    );
  }

  // 3. Estado Empty
  if (status === 'empty' || feriantes.length === 0) {
    return (
      <div className="p-10 sm:p-16 text-center bg-white dark:bg-charcoal-700 border border-sand-300 dark:border-charcoal-600 rounded-3xl max-w-xl mx-auto my-8 shadow-card">
        <div className="w-16 h-16 rounded-3xl bg-sand-200 dark:bg-charcoal-600 text-charcoal-400 dark:text-sand-400 flex items-center justify-center mx-auto mb-4">
          <Store className="w-8 h-8 text-terracotta" />
        </div>
        <h3 className="text-xl font-bold text-charcoal-900 dark:text-white mb-2">
          No encontramos puestos con esos criterios
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-sand-300 mb-6 max-w-sm mx-auto">
          Probá buscando por otro nombre, seleccionando otro rubro o cambiando de paseo ferial.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest hover:bg-forest-600 text-white font-bold text-sm shadow-sm active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ver todos los puestos</span>
          </button>
        )}
      </div>
    );
  }

  // 4. Estado Success
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {feriantes.map((feriante) => (
        <StoreCard
          key={feriante.id}
          feriante={feriante}
          conteoProductos={conteoProductosPorFeriante[feriante.id]}
        />
      ))}
    </div>
  );
};
