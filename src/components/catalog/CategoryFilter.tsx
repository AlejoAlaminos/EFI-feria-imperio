import { Rubro } from '../../types';
import { RUBROS_DATA } from '../../data/mockData';
import { LayoutGrid, Hammer, Utensils, Apple, Briefcase, Trees, Shirt } from 'lucide-react';

interface CategoryFilterProps {
  rubroActivo: Rubro | 'todos';
  onSelectRubro: (rubro: Rubro | 'todos') => void;
  conteoPorRubro?: Record<string, number>;
}

export const CategoryFilter = ({
  rubroActivo,
  onSelectRubro,
  conteoPorRubro = {},
}: CategoryFilterProps) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'artesanias':
        return <Hammer className="w-4 h-4" />;
      case 'ceramica':
        return <Utensils className="w-4 h-4" />;
      case 'gastronomia':
        return <Apple className="w-4 h-4" />;
      case 'marroquineria':
        return <Briefcase className="w-4 h-4" />;
      case 'madera':
        return <Trees className="w-4 h-4" />;
      case 'indumentaria':
        return <Shirt className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
        {/* Botón "Todos" */}
        <button
          onClick={() => onSelectRubro('todos')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 ${
            rubroActivo === 'todos'
              ? 'bg-terracotta text-white shadow-md shadow-terracotta/20 scale-102'
              : 'bg-white dark:bg-charcoal-700 text-charcoal-700 dark:text-sand-200 border border-sand-300 dark:border-charcoal-600 hover:bg-sand-100 dark:hover:bg-charcoal-600'
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Todos los Rubros</span>
          {conteoPorRubro['todos'] !== undefined && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                rubroActivo === 'todos'
                  ? 'bg-white/20 text-white'
                  : 'bg-sand-200 dark:bg-charcoal-600 text-charcoal-600 dark:text-sand-300'
              }`}
            >
              {conteoPorRubro['todos']}
            </span>
          )}
        </button>

        {/* Botones por Rubro */}
        {RUBROS_DATA.map((rubro) => {
          const isActive = rubroActivo === rubro.id;
          const count = conteoPorRubro[rubro.id];

          return (
            <button
              key={rubro.id}
              onClick={() => onSelectRubro(rubro.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 ${
                isActive
                  ? 'bg-forest text-white shadow-md shadow-forest/20 scale-102'
                  : 'bg-white dark:bg-charcoal-700 text-charcoal-700 dark:text-sand-200 border border-sand-300 dark:border-charcoal-600 hover:bg-sand-100 dark:hover:bg-charcoal-600'
              }`}
            >
              {getIcon(rubro.id)}
              <span>{rubro.label}</span>
              {count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-sand-200 dark:bg-charcoal-600 text-charcoal-600 dark:text-sand-300'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
