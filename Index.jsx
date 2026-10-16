import React from 'react';

export default function Index() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
    <header
          className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
        >
          <div
            className="h-16 sm:h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-margin flex items-center justify-between gap-3 sm:gap-gutter"
          >
            <div className="flex items-center gap-3 sm:gap-space-lg">
              <a
                className="flex items-center gap-2.5 sm:gap-3 shrink-0"
                data-path="explorar-tiendas"
                href="#"
              >
                <svg
                  className="w-8 h-8 sm:w-9 sm:h-9 text-primary rounded-xl shadow-sm shrink-0"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="9" fill="#102817" />
                  <path
                    d="M18 7.5L28 15V27C28 27.5523 27.5523 28 27 28H9C8.44772 28 8 27.5523 8 27V15L18 7.5Z"
                    fill="#263e2b" />
                  <path
                    d="M12 28V18C12 15.7909 13.7909 14 16 14H20C22.2091 14 24 15.7909 24 18V28"
                    stroke="#cdeacf"
                    strokeWidth="2.2"
                    strokeLinecap="round" />
                  <circle cx="18" cy="11.5" r="2" fill="#fd956f" />
                </svg>
                <span
                  className="font-headline-sm text-lg sm:text-headline-sm text-primary font-bold tracking-tight"
                  >EmprendeHub</span
                ></a
              >
              <div className="hidden xl:flex items-center relative w-72">
                <span
                  className="material-symbols-outlined absolute left-3 text-outline text-[20px]"
                  >search</span
                ><input
                  className="w-full bg-surface-container-low pl-10 pr-4 py-2 rounded-full font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Buscar tiendas o productos..."
                  type="text" />
              </div>
            </div>
            <nav
              className="hidden md:flex items-center gap-1.5 lg:gap-2 xl:gap-space-md"
              data-active-classes="bg-primary-container text-on-primary font-title-md"
            >
              <a
                aria-current="page"
                className="px-3.5 sm:px-space-md py-1.5 sm:py-space-xs rounded-full transition-colors bg-primary-container text-on-primary font-title-md text-sm sm:text-title-md whitespace-nowrap"
                data-path="explorar-tiendas"
                href="#"
                >Explorar</a
              ><a
                className="px-3 sm:px-3.5 py-1.5 rounded-full font-title-md text-sm sm:text-title-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap"
                data-path="categorias"
                href="#"
                >Categorías</a
              ><a
                className="px-3 sm:px-3.5 py-1.5 rounded-full font-title-md text-sm sm:text-title-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors whitespace-nowrap"
                data-path="como-funciona"
                href="#"
                >Cómo Funciona</a
              >
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                className="hidden sm:inline-flex items-center px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-sm sm:text-label-md hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap"
                data-path="registro-de-emprendimiento"
                href="#"
                >Iniciar Sesión</a
              >
              <div className="flex items-center pl-1">
                <img
                  alt="Profile"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-primary/20 shadow-sm hover:ring-primary/40 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy8nwhB4njGIpnSMb5Zq163J7X24fWLpkQR_6_sEfiV6mIZR24dBoG97P0yZbuQC6SdPbnnSNBTOLFcMLdWJQMwV4J1Q7sS72alX2xi6ivix6GzDD1RuvaTKtZXmowoJ-BrJhTGdb-AydKPGA-9LQPSN2MqVnuuvd1gkrLhijJh7fvnoymbybJ-Kb-SrDK9dIF6gbbQPAATSIlFvg7u2jnSHTLPdciPNAkXOvKYbShuR3bJ9sIqzy5kw" />
              </div>
              <button
                id="mobile-menu-btn"
                className="md:hidden flex items-center justify-center p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Abrir menú"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
            </div>
          </div>
          {/* Collapsible Mobile Drawer */}
          <div
            id="mobile-menu"
            className="hidden md:hidden border-t border-surface-container-high bg-surface px-4 py-4 space-y-3 shadow-lg"
          >
            <nav className="flex flex-col space-y-1">
              <a
                className="px-3 py-2.5 rounded-lg font-title-md text-title-md bg-primary-container text-on-primary font-semibold flex items-center justify-between"
                data-path="explorar-tiendas"
                href="#"
                ><span>Explorar</span
                ><span className="material-symbols-outlined text-[18px]"
                  >storefront</span
                ></a
              >
              <a
                className="px-3 py-2.5 rounded-lg font-title-md text-title-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between"
                data-path="categorias"
                href="#"
                ><span>Categorías</span
                ><span className="material-symbols-outlined text-[18px]"
                  >category</span
                ></a
              >
              <a
                className="px-3 py-2.5 rounded-lg font-title-md text-title-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between"
                data-path="como-funciona"
                href="#"
                ><span>Cómo Funciona</span
                ><span className="material-symbols-outlined text-[18px]"
                  >help_outline</span
                ></a
              >
            </nav>
            <div
              className="pt-2 border-t border-surface-container-high flex flex-col gap-2"
            >
              <a
                className="w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md text-center hover:bg-primary-container transition-colors shadow-sm sm:hidden flex items-center justify-center gap-2"
                data-path="registro-de-emprendimiento"
                href="#"
                ><span className="material-symbols-outlined text-[18px]"
                  >add_business</span
                ><span>Iniciar Sesión</span></a
              >
            </div>
          </div>
        </header>
        <main className="w-full pt-16 sm:pt-20 bg-background">
          <div className="flex flex-col w-full">
            {/* Subtle Ambient Top Glow */}
            <div className="relative w-full overflow-hidden">
              <div
                className="absolute -top-40 right-10 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"
              ></div>
              <div
                className="absolute top-20 left-10 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-3xl pointer-events-none"
              ></div>
              {/* Editorial Hero Section */}
              <section
                className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-margin pt-6 sm:pt-10 lg:pt-12 pb-6 sm:pb-10"
              >
                <div
                  className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-space-lg"
                >
                  <div className="max-w-3xl space-y-3 sm:space-y-space-md">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      Directorio Oficial de Creadores • 2025
                    </div>
                    <h1
                      className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[62px] text-primary tracking-tight font-bold"
                    >
                      Apoya el talento local, descubre talleres con alma.
                    </h1>
                    <p
                      className="font-body-lg text-base sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
                    >
                      Una selección curada de pequeñas manufacturas, talleres de
                      oficio y proyectos sostenibles que crean con calma, respeto y
                      maestría en cada detalle.
                    </p>
                  </div>
                  {/* Metric badges / Minimal visual trust stat */}
                  <div
                    className="flex items-center justify-around sm:justify-start gap-4 sm:gap-6 p-4 rounded-xl bg-surface-container-low shadow-sm w-full sm:w-auto self-stretch sm:self-start lg:self-end"
                  >
                    <div className="space-y-0.5">
                      <span
                        className="block font-headline-md text-headline-md text-primary font-bold"
                        >340+</span
                      >
                      <span className="block font-label-sm text-label-sm text-outline"
                        >Talleres Verificados</span
                      >
                    </div>
                    <div className="w-px h-10 bg-surface-variant"></div>
                    <div className="space-y-0.5">
                      <span
                        className="block font-headline-md text-headline-md text-secondary font-bold"
                        >100%</span
                      >
                      <span className="block font-label-sm text-label-sm text-outline"
                        >Comercio Consciente</span
                      >
                    </div>
                  </div>
                </div>
                {/* Integrated Search & Filter Hub */}
                <div
                  className="mt-6 sm:mt-space-xl p-4 sm:p-space-md lg:p-space-lg bg-surface-container-lowest rounded-xl shadow-md space-y-4 sm:space-y-space-md"
                >
                  <div
                    className="flex flex-col md:flex-row items-stretch gap-3 sm:gap-space-sm"
                  >
                    <div className="relative flex-1 flex items-center">
                      <span
                        className="material-symbols-outlined absolute left-4 text-outline text-[22px]"
                        >search</span
                      >
                      <input
                        className="w-full bg-surface-container-low pl-12 pr-10 py-3 sm:py-3.5 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all"
                        id="store-search-input"
                        placeholder="Buscar tienda por nombre, oficio o ciudad (ej. Cerámica, Valdivia, Café)..."
                        type="text" />
                      <button
                        className="hidden absolute right-3 text-outline hover:text-on-surface p-1"
                        id="clear-search"
                      >
                        <span className="material-symbols-outlined text-[18px]"
                          >close</span
                        >
                      </button>
                    </div>
                    <div
                      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-space-sm"
                    >
                      <div className="relative w-full sm:min-w-[180px]">
                        <span
                          className="material-symbols-outlined absolute left-3 top-3.5 text-outline text-[20px]"
                          >location_on</span
                        >
                        <select
                          className="w-full appearance-none bg-surface-container-low pl-10 pr-8 py-3 sm:py-3.5 rounded-lg font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer"
                          id="location-select"
                        >
                          <option value="all">Todas las Regiones</option>
                          <option value="valdivia">Valdivia</option>
                          <option value="santiago">Santiago</option>
                          <option value="pucon">Pucón</option>
                          <option value="valparaiso">Valparaíso</option>
                          <option value="chiloe">Chiloé</option>
                        </select>
                        <span
                          className="material-symbols-outlined absolute right-3 top-3.5 text-outline pointer-events-none text-[20px]"
                          >expand_more</span
                        >
                      </div>
                      <button
                        className="w-full sm:w-auto px-space-lg py-3 sm:py-3.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]"
                          >tune</span
                        >
                        <span>Filtrar</span>
                      </button>
                    </div>
                  </div>
                  {/* Quick Filter Tags */}
                  <div
                    className="pt-space-xs flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x -mx-1 px-1"
                    id="filter-chips"
                  >
                    <span
                      className="font-label-sm text-label-sm text-outline uppercase tracking-wider shrink-0 pr-2"
                      >Oficios:</span
                    >
                    <button
                      className="filter-chip active px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-primary text-on-primary transition-all whitespace-nowrap"
                      data-cat="all"
                    >
                      Todas las Tiendas
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="ceramica"
                    >
                      Cerámica &amp; Gres
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="cafe"
                    >
                      Café de Especialidad
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="moda"
                    >
                      Moda Sostenible
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="cosmetica"
                    >
                      Cosmética Natural
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="papeleria"
                    >
                      Papelería Artesanal
                    </button>
                    <button
                      className="filter-chip px-3.5 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all whitespace-nowrap"
                      data-cat="madera"
                    >
                      Madera &amp; Ebanistería
                    </button>
                  </div>
                </div>
              </section>
            </div>
            {/* Main Directory Section */}
            <section
              className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-margin py-6 sm:py-8 w-full"
            >
              {/* Section Subheader */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8"
              >
                <div>
                  <h2
                    className="font-headline-md text-xl sm:text-headline-md text-primary font-bold"
                  >
                    Tiendas &amp; Talleres Activos
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Conoce a los creadores, sus talleres de trabajo y compra de
                    forma directa sin intermediarios.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="font-label-sm text-label-sm text-outline hidden sm:inline"
                    >Ordenar por:</span
                  >
                  <select
                    className="w-full sm:w-auto bg-surface-container-low px-3 py-2 sm:py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface focus:outline-none cursor-pointer"
                  >
                    <option>Más destacadas</option>
                    <option>Mejor valoradas</option>
                    <option>Recién incorporadas</option>
                    <option>Mayor volumen de ventas</option>
                  </select>
                </div>
              </div>
              {/* 6 Stores Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-gutter"
                id="stores-grid"
              >
                {/* Store 1: Cerámicas del Bosque */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="ceramica"
                >
                  <div>
                    {/* Header Visual with Workshop image and Avatar */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Artisan ceramic pottery workshop bathed in natural morning window light, with stoneware vases, raw terracotta clay lumps, clean rustic wooden shelves, and spinning potter wheel in warm earth tones."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuF4MGMeUYJeYKaJ8opVoCHkzSCCts47IHiUugP3Ikp9hOhXqekQ3mQ4WAcOwVGfSd0uhSHC1n-oV_44tnIyXU6CDjfG7_vfqFcmalA_O9mt8NVUqTaLY0D75FsXxEM5-zrl1FEHh5eWb1VrZZBaPwhfuKLDUljBBSkXa-vOSTXAD9mxtz0RTAJ6vmKkqhO0JITFDEVedlaOQN21-LKTw47kXNnx4HZkgpGIjqgvho-rEm8glpe1i22Q" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      {/* Category Badge */}
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Cerámica de Autor
                      </span>
                      {/* Logo Floating Badge */}
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Minimalist graphic ceramic vase emblem mark logo in dark spruce forest green on creamy off-white backdrop."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYvTPtHG7FhhqSx2EqS-nz617ox22_1cJmCf7gzOj7J8JhHF-N5g16JiFgRoz6CuXnpLV4CKSg6LKKMua_2NN1HtUj-9U6WIVz_QcnkaI7cjgvlIzd7Kn_OTydsLnoqaqO7Wb-njlzPJfZT5BP1fkEMmuueZUvoHbcwsL7pZEQocpjNX_8TbublLOTa2XNJA5aUtT-ig0AUv2PLQv6eLFMM3I-bXhgetBFIh7Mv1wVY9qJ5WuHm_GSw" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">4.9</span>
                        </span>
                        <span>•</span>
                        <span>184 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Valdivia</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Cerámicas del Bosque
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Piezas únicas de gres torneadas a mano con arcilla local y
                          esmaltes naturales de ceniza volcánica.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer Action */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="detalle_tienda.html"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
                {/* Store 2: Tostaduría Raíces */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="cafe"
                >
                  <div>
                    {/* Header Visual */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Artisanal specialty coffee roastery warehouse with vintage cast iron coffee roaster, burlap sacks of green coffee beans, warm copper lighting and wooden counter."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR39dACnI9JwLBKBO_EA31CQtSR5dCNHA7-KQlBME6M3WcvrrMoVcJfGrs2Nn722fg8aFOLmZl2wVCt5pMfntTLphXUnBOF9ky4X1QGRA2kn0232DsUl1fLgBHSC2YYQFhf5gTMSifesShOirvhnaQqXLnGnB04hOJ_gDGNgBOpH9JDqWeyM40nHyEscbbGxMA2MTTA4X-e7JIwqLMsPpGeISFNeTjNZOmhGd84E_gqqEhQp0d6KOJ_w" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Café de Especialidad
                      </span>
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Warm terracotta coffee branch emblem logo with two coffee cherries on parchment circular icon."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPq8QKDYnPaM7D2zlqTbf-bYavcsR5ctn_61sV-KX1QOgyjwSxZuHEbWQ4mKHkHPRlybwkpPJ4L7uVJLQL0OSe_ucd7ipV5hrDJyHQFn6y077qTa-YhId_WOypVIj_vRxBqyuL2qMIrxuKkMypXFJ1VCM142qqaIR6OL9G9nZY45VBrE50gms-s0JiCrOrTmuFkXiR-VraSKvV9nYqLieNL5GPPX5FP6sbMcA9iicS-zTxl9Wiop3TlQ" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">5.0</span>
                        </span>
                        <span>•</span>
                        <span>420 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Santiago</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Tostaduría Raíces
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Granos seleccionados de fincas familiares de origen
                          sostenible tostados en pequeños lotes semanales.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="#"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
                {/* Store 3: Botánica Silvestre */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="cosmetica"
                >
                  <div>
                    {/* Header Visual */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Sunlit organic apothecary workshop with dried lavender bunches, glass amber tincture droppers, essential oil distillation flask and wooden drying racks."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvxqs_IA08Rydi5SOwyGl5wtITAuCKXf0awpK4hvH_25YVfxRa4KqMZJgG51YDGNYasiZV9Fv1MhSc1n7emvMN_lVXHTNAb7Z9QVBK2koOa_t3qvZeXAIoymP3hpURg4W0fuRZsmXSP8Pr9aJFgZLBnTXRk8RQ3o3cgs-dzcvU64TtAk5A927a1o9mO_MLp0AO6m1l64Di9nUeYYlGFEOikkVwbArRT9ecl1esAw9ro_--lUu6EjD_vA" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Cosmética Botánica
                      </span>
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Botanical twig and leaf hand-drawn line icon in warm olive and gold on cream circle."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVfkpxsnJNMLpK51hvHTenhYI7BD8kYEMbQoIE-SRf9wOwDbPvOgiwFsXMgk54vPBC6r6f1J9iKd885nKOupH9fNoCcdKrVnMO4W34_EpJSnvWF_Vyh4cQxS8vE9pBkjibXgGkl4SU6l4_bCQtSOKE3UNFudit0Rub4WX2qmnEsZ9avoqHyqGlNqMlntypedoU6UF0mbeWIThxM3nhAKZd0HCZ3Oj-1KpX9RRqCDxEKY65-vJXZMaKTg" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">4.8</span>
                        </span>
                        <span>•</span>
                        <span>310 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Pucón</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Botánica Silvestre
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Cosmética botánica orgánica libre de tóxicos elaborada a
                          partir de flora nativa del sur de Chile.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="#"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
                {/* Store 4: Atelier Hilados */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="moda"
                >
                  <div>
                    {/* Header Visual */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Textile weaving studio with wooden handloom loom, skeins of un-dyed sheep wool, linen fabrics hanging, warm tactile atelier interior."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyXPOQ2oKXhYscRYoWfjZeUOc5cfkS1IbKq0CCF9L7AchTYi6VsJhFpUqDkUzviDMG4tfkV8OzmjEI4gpIB39bGKfUQIwpiv8gfWxeDA7WSEodM7o7jcwkt8l-rV8Ur0wrp9R5MQSkdUWuI7rFIDW6nDFa3lkyV95qEYLECLLuDdL83-ypuIAhG-5focOu3_dGrg1S5fs4EAkQticg10P1_GywGoR7f83Ohp-EaATZkZpZVgq1hc1rtw" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Moda Sostenible
                      </span>
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Spindle and thread minimalist monogram icon in warm chestnut brown on beige circular medallion."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm9ydUtJHUW68JLQUcYTsU0K8ULT62tid3NSsD7vQF6SntEYn6i35J3YfFwcSFAyxNE6-06oX0OcUCfsURRYv6QYjuUEpl3c9_nSa0Pp4FVjLsFrKekoKokeTG-2MNMn3zMpv7l0GEULFqgUX6o324ua6IbCJhwqgWlDaLoq0aMr_vwS8GVMGzV-CpTili5vkOAhlXpGV6U458b7lloAHeAYXQCuhBXc6UUZj9na1gavFyXmitnXp1MA" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">4.9</span>
                        </span>
                        <span>•</span>
                        <span>96 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Chiloé</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Atelier Hilados
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Prendas tejidas a mano y accesorios en lana pura de oveja
                          chilota con tintes botánicos recolectados.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="#"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
                {/* Store 5: Cuero & Oficio */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="madera"
                >
                  <div>
                    {/* Header Visual */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Artisan leathercraft and fine carpentry workshop with wooden workbenches, brass bevel tools, stitched leather rolls, and fragrant cedar wood shavings."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nQ4DjGxqX3W65e7Ig8URrFhuANa62J6jOoBnxwsUU0xi2vMU923BOUfMhORMjJewU0mibxGPVy3J7sq-a75B9hAhHYujY616Ga9QYk_vLivgifRuTd5NyVr2ARVwQ8V-qbSZMujz7sUkP35tZGYuZR0HCbjsPLzplaZw4IyDRzIi1UjipFmTYPt8TcIgwcgGMd1sznqN04rkSYGzL23wOuGLCKE9So542jyEogrPznMN3z9XDM27eg" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Oficio en Cuero &amp; Madera
                      </span>
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Crossed wood chisel and saddle needle craft emblem logo in deep walnut tone."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ7Xb8iGi5Oi0cuVCXM1fteRT4paJaxWfcAiphmKt8blYTzTrKHq7YNUbsjqvTVLyq8ZIKjY2JPUQikYFgL8xeKTXRDXk2gWEi9GWnoukTvjNjDi3vmcJJ-Hrt5R8E05n4A5GpFV2HXbloGVSqJ8ZqO9-3AtkEnw9Pp0B2jOFxLaHhRb9pX-9H4bKkVWyvqHwNlD_IZ_PPK7rMSzZhTpjyvrXT_OASA3XRC56ZQ4kALev-6LRSohGIgA" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">5.0</span>
                        </span>
                        <span>•</span>
                        <span>240 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Valparaíso</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Cuero &amp; Oficio
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Marroquinería de curtición vegetal y objetos de madera
                          nativa hechos para perdurar por generaciones.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="#"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
                {/* Store 6: Mieles del Valle */}
                <article
                  className="store-card group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  data-cat="papeleria"
                >
                  <div>
                    {/* Header Visual */}
                    <div
                      className="relative h-44 w-full overflow-hidden bg-surface-container"
                    >
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="Sunlit artisanal apiary and natural studio surrounded by native ulmo and tiaca trees with wooden honey supers and warm amber honeycomb."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB73kyv8N6nFZUhcfOJAp3ixgK9hskGa7YE1KLp0dwzGhjzYiliFw4eHA7KnwMhy9QaHqRp1b5Uz0mAa1M1dz9ROZdzG5ZYwBTF65tfy1UOfpyBBn7BefgHBeSg-nF-8X3xJweR57Tf2NRPkzSloVwONXQftoHeSFzcxcOw778f4DsE9Je04RX7UoM9eYOI8kgM-e0geS3p_wz9TAoQIZssFowiWBA9j17a_g0FCmfQGk0GnB1HPWuPg" />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"
                      ></div>
                      <span
                        className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-label-sm text-primary font-semibold"
                      >
                        Alimentos del Bosque
                      </span>
                      <div
                        className="absolute -bottom-3 right-4 w-14 h-14 rounded-full bg-surface-container-lowest p-1 shadow-md"
                      >
                        <img
                          className="w-full h-full rounded-full object-cover"
                          data-alt="Honeycomb hexagonal cell geometric logo with delicate wild bee in golden amber line work."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbZ1ePkAgLul2BfeHxzlGffVLHQb0Hu-lSB1yKi9DkzVqLkluhgk4OM_xvy4JFIP7DSesFii60NRXZ7TZFyEDwfrS2tpwF75BiuufKk802QgezPBdmeMy2RVNwR74kZFqJ6za_Hw7fDQmz-zi5jDUnQEs5_Z4y0GdYKMCgAQbXy4L7MFPP1xevlz_QJxPepN5Rfk7gMPT_I_6_rBIRZ62VmB1qimSi2H_PZCKwC7aolKTlQNIEpaPLMA" />
                      </div>
                    </div>
                    {/* Store Info Body */}
                    <div className="p-space-lg pt-4 space-y-space-sm">
                      <div
                        className="flex items-center gap-2 text-outline font-label-sm text-label-sm"
                      >
                        <span className="flex items-center gap-0.5 text-secondary">
                          <span
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                            >star</span
                          >
                          <span className="font-bold text-on-surface">4.9</span>
                        </span>
                        <span>•</span>
                        <span>520 ventas</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5"
                          ><span className="material-symbols-outlined text-[14px]"
                            >pin_drop</span
                          >
                          Valdivia</span
                        >
                      </div>
                      <div>
                        <h3
                          className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors"
                        >
                          Mieles del Valle
                        </h3>
                        <p
                          className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2"
                        >
                          Miel cruda monofloral de bosque nativo, velas de pura cera
                          de abejas y propóleos cosechados con respeto.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Footer */}
                  <div className="p-space-lg pt-0">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-all"
                      data-path="explorar-tiendas"
                      href="#"
                    >
                      <span>Ver emprendedor</span>
                      <span className="material-symbols-outlined text-[16px]"
                        >arrow_forward</span
                      >
                    </a>
                  </div>
                </article>
              </div>
              {/* Pagination / Discovery Indicator */}
              <div
                className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-xl bg-surface-container-low"
              >
                <span className="font-body-sm text-body-sm text-on-surface-variant"
                  >Mostrando 6 de 340 talleres artesanales registrados</span
                >
                <div className="flex items-center gap-2">
                  <button
                    className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-outline hover:text-on-surface transition-colors"
                    disabled
                  >
                    <span className="material-symbols-outlined text-[18px]"
                      >chevron_left</span
                    >
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold"
                  >
                    1
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors"
                  >
                    2
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors"
                  >
                    3
                  </button>
                  <span className="text-outline px-1">...</span>
                  <button
                    className="w-9 h-9 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors"
                  >
                    12
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]"
                      >chevron_right</span
                    >
                  </button>
                </div>
              </div>
            </section>

            {/* Interactive Client-side Script for Instant Search & Category Filter Filtering */}

          </div>
        </main>
        <footer
          className="w-full bg-surface-container-low mt-space-xl shadow-[0_-1px_6px_rgba(0,0,0,0.02)]"
        >
          <div
            className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-margin py-8 sm:py-space-xl"
          >
            <div
              className="bg-surface-container rounded-xl p-5 sm:p-8 lg:p-space-xl mb-8 sm:mb-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-space-lg"
            >
              <div className="space-y-space-xs">
                <span
                  className="font-headline-md text-xl sm:text-headline-md text-primary font-semibold block"
                  >¿Creas productos únicos y artesanales?</span
                >
                <p
                  className="font-body-md text-sm sm:text-body-md text-on-surface-variant"
                >
                  Suma tu taller independiente a la red de creadores de EmprendeHub
                  y expande tu impacto local.
                </p>
              </div>
              <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-space-md w-full sm:w-auto"
              >
                <a
                  className="px-space-lg py-2.5 rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors text-center"
                  data-path="como-funciona"
                  href="#"
                  >Cómo agregar tu tienda</a
                ><a
                  className="px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-tertiary-container transition-colors shadow-sm text-center"
                  data-path="registro-de-emprendimiento"
                  href="#"
                  >Registra tu Emprendimiento</a
                >
              </div>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 sm:mb-space-xl"
            >
              <div className="sm:col-span-2 space-y-space-md">
                <div className="flex items-center gap-space-sm">
                  <svg
                    className="w-8 h-8 text-primary rounded-xl shadow-sm shrink-0"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="36" height="36" rx="9" fill="#102817" />
                    <path
                      d="M18 7.5L28 15V27C28 27.5523 27.5523 28 27 28H9C8.44772 28 8 27.5523 8 27V15L18 7.5Z"
                      fill="#263e2b" />
                    <path
                      d="M12 28V18C12 15.7909 13.7909 14 16 14H20C22.2091 14 24 15.7909 24 18V28"
                      stroke="#cdeacf"
                      strokeWidth="2.2"
                      strokeLinecap="round" />
                    <circle cx="18" cy="11.5" r="2" fill="#fd956f" />
                  </svg>
                  <span
                    className="font-headline-sm text-headline-sm text-primary font-bold"
                    >EmprendeHub</span
                  >
                </div>
                <p
                  className="font-body-sm text-body-sm text-on-surface-variant max-w-sm"
                >
                  Plataforma colaborativa dedicada al impulso y visibilidad de
                  marcas independientes, talleres familiares y artesanía de origen
                  consciente.
                </p>
                <div className="flex items-center gap-space-sm text-on-surface-variant">
                  <a
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                    href="https://instagram.com"
                    rel="noopener"
                    target="_blank"
                    ><span className="material-symbols-outlined text-[18px]"
                      >photo_camera</span
                    ></a
                  ><a
                    aria-label="Facebook"
                    className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                    href="https://facebook.com"
                    rel="noopener"
                    target="_blank"
                    ><span className="material-symbols-outlined text-[18px]"
                      >public</span
                    ></a
                  ><a
                    aria-label="Pinterest"
                    className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                    href="https://pinterest.com"
                    rel="noopener"
                    target="_blank"
                    ><span className="material-symbols-outlined text-[18px]"
                      >push_pin</span
                    ></a
                  ><a
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
                    href="https://linkedin.com"
                    rel="noopener"
                    target="_blank"
                    ><span className="material-symbols-outlined text-[18px]"
                      >work</span
                    ></a
                  >
                </div>
              </div>
              <div className="space-y-space-sm">
                <h4
                  className="font-title-md text-title-md text-on-surface font-semibold"
                >
                  Descubrir
                </h4>
                <ul
                  className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"
                >
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="explorar-tiendas"
                      href="#"
                      >Directorio de Tiendas</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="categorias"
                      href="#"
                      >Oficios &amp; Categorías</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="historias"
                      href="#"
                      >Historias del Taller</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="explorar-tiendas"
                      href="#"
                      >Colecciones de Temporada</a
                    >
                  </li>
                </ul>
              </div>
              <div className="space-y-space-sm">
                <h4
                  className="font-title-md text-title-md text-on-surface font-semibold"
                >
                  Emprendedores
                </h4>
                <ul
                  className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"
                >
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="como-funciona"
                      href="#"
                      >Cómo Empezar</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="preguntas-frecuentes"
                      href="#"
                      >Preguntas Frecuentes</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="guias-para-creadores"
                      href="#"
                      >Guías para Creadores</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="registro-de-emprendimiento"
                      href="#"
                      >Postular Mi Tienda</a
                    >
                  </li>
                </ul>
              </div>
              <div className="space-y-space-sm">
                <h4
                  className="font-title-md text-title-md text-on-surface font-semibold"
                >
                  Legal &amp; Contacto
                </h4>
                <ul
                  className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant"
                >
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="aviso-legal"
                      href="#"
                      >Aviso Legal</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="aviso-legal"
                      href="#"
                      >Términos y Condiciones</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="aviso-legal"
                      href="#"
                      >Privacidad y Datos</a
                    >
                  </li>
                  <li>
                    <a
                      className="hover:text-primary transition-colors"
                      data-path="preguntas-frecuentes"
                      href="#"
                      >Soporte Comunitario</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="pt-6 sm:pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left font-label-sm text-label-sm text-outline"
            >
              <p>
                © 2025 EmprendeHub. Plataforma de comercio local y diseño
                consciente.
              </p>
              <div className="flex items-center gap-space-md">
                <span className="flex items-center gap-1"
                  ><span className="material-symbols-outlined text-[14px] text-primary"
                    >eco</span
                  >
                  Hecho a mano, impulsado con amor local</span
                >
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
}
