import { Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <section id="inicio" className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-terracotta-200/40 dark:bg-terracotta-900/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-forest-200/30 dark:bg-forest-900/10 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Next Edition Alert Chip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-100 dark:bg-forest-900/50 border border-forest-300 dark:border-forest-700 text-forest-700 dark:text-forest-300 text-xs sm:text-sm font-bold mb-6 shadow-xs animate-pulse">
          <Calendar className="w-4 h-4 text-forest" />
          <span>Próxima Feria: Este Fin de Semana • 16:00 a 22:00 hs</span>
        </div>

        {/* Main Value Proposition Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-none mb-6">
          El corazón de las ferias de Río Cuarto,{' '}
          <span className="text-terracotta underline decoration-terracotta-300 underline-offset-8">
            disponible 24/7.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal-600 dark:text-sand-300 leading-relaxed mb-8">
          Descubrí piezas únicas de cerámica, madera, cuero, artesanías y sabores caseros creados por emprendedores del{' '}
          <strong className="text-forest dark:text-forest-400">Paseo del Andino</strong> y el{' '}
          <strong className="text-forest dark:text-forest-400">Parque Sarmiento</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            <span>Explorar Catálogo Digital</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#ferias"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-charcoal-700 hover:bg-sand-100 dark:hover:bg-charcoal-600 text-charcoal-800 dark:text-sand-100 border border-sand-300 dark:border-charcoal-600 font-bold text-sm sm:text-base shadow-xs active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4 text-forest" />
            <span>Ver Paseos & Ubicaciones</span>
          </a>
        </div>

        {/* Trust & Location Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/70 dark:bg-charcoal-800/70 border border-sand-300 dark:border-charcoal-700 shadow-card">
            <MapPin className="w-5 h-5 text-terracotta shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-charcoal-900 dark:text-white">Paseo del Andino</p>
              <p className="text-[11px] text-charcoal-500 dark:text-sand-400">Bv. Ameghino & Rieles</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/70 dark:bg-charcoal-800/70 border border-sand-300 dark:border-charcoal-700 shadow-card">
            <MapPin className="w-5 h-5 text-forest shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-charcoal-900 dark:text-white">Parque Sarmiento</p>
              <p className="text-[11px] text-charcoal-500 dark:text-sand-400">Banda Norte</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/70 dark:bg-charcoal-800/70 border border-sand-300 dark:border-charcoal-700 shadow-card">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
            <div className="text-left">
              <p className="text-xs font-bold text-charcoal-900 dark:text-white">Trato Directo</p>
              <p className="text-[11px] text-charcoal-500 dark:text-sand-400">Sin intermediarios ni comisiones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
