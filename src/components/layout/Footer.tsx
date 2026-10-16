import { Store, Heart, MessageCircle, Instagram, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-sand-200/80 dark:bg-charcoal-900 border-t border-sand-300 dark:border-charcoal-700 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-terracotta flex items-center justify-center text-white shadow-md">
                <Store className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-terracotta tracking-tight">
                Feria Imperio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-sand-300 max-w-sm leading-relaxed">
              Catálogo digital unificado para los artesanos y emprendedores de Río Cuarto. Conectando la economía social del Paseo del Andino y Parque Sarmiento con la comunidad los 365 días del año.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/feriaimperiook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-charcoal-700 text-charcoal-600 dark:text-sand-200 hover:text-terracotta flex items-center justify-center shadow-xs transition-colors"
                aria-label="Instagram de Feria Imperio"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5493584112233"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white dark:bg-charcoal-700 text-charcoal-600 dark:text-sand-200 hover:text-whatsapp flex items-center justify-center shadow-xs transition-colors"
                aria-label="WhatsApp Institucional"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 dark:text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-charcoal-600 dark:text-sand-300">
              <li>
                <a href="#inicio" className="hover:text-terracotta transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-terracotta transition-colors">
                  Catálogo Digital
                </a>
              </li>
              <li>
                <a href="#ferias" className="hover:text-terracotta transition-colors">
                  Paseos de Ferias
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-terracotta transition-colors">
                  Postular mi Puesto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Espacios Feriales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-900 dark:text-white mb-4">
              Polos Feriales
            </h4>
            <ul className="space-y-3 text-xs text-charcoal-600 dark:text-sand-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                <span>
                  <strong>Paseo del Andino:</strong> Bv. Ameghino & Rieles (Sáb, Dom y Feriados 16 a 22 hs)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                <span>
                  <strong>Parque Sarmiento:</strong> Banda Norte (Sáb y Dom 15:30 a 21:30 hs)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sand-300 dark:border-charcoal-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-charcoal-500 dark:text-sand-400">
          <p>© 2026 Feria Imperio. Todos los derechos reservados. Río Cuarto, Córdoba.</p>
          <div className="flex items-center gap-1.5">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-terracotta fill-current" />
            <span>para los emprendedores y artesanos de nuestra ciudad</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
