import React from 'react';

export default function PanelAdmin() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased">
    {/* Toast Notification for Saved Edits */}
        <div
          id="toast-notification"
          className="fixed bottom-5 right-5 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none"
        >
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-primary text-on-primary shadow-xl border border-primary-container">
            <span className="material-symbols-outlined text-[20px] text-inverse-primary">check_circle</span>
            <div className="flex flex-col">
              <span className="font-label-md text-xs sm:text-label-md font-semibold" id="toast-title">¡Producto actualizado!</span>
              <span className="font-body-sm text-[11px] text-on-primary/80" id="toast-message">Los cambios se han guardado y sincronizado.</span>
            </div>
          </div>
        </div>

        {/* Backdrop Overlay for Mobile Sidebar Drawer */}
        <div
          id="sidebar-backdrop"
          className="fixed inset-0 bg-on-surface/40 backdrop-blur-xs z-40 hidden transition-opacity duration-300 lg:hidden"
        ></div>

        {/* Responsive Seller Sidebar Drawer (Only "Mis Productos" button) */}
        <aside
          id="sidebar"
          className="fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-surface-container-low z-50 flex flex-col justify-between py-4 sm:py-space-md shadow-2xl lg:shadow-[0_1px_8px_rgba(0,0,0,0.03)] transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out"
        >
          <div className="flex flex-col">
            {/* Sidebar Brand Header with Mobile Close Button */}
            <div className="h-16 px-4 sm:px-space-lg flex items-center justify-between gap-space-sm border-b border-surface-container-high/60 lg:border-none">
              <a href="index.html" className="flex items-center gap-2.5">
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
                <div className="flex flex-col">
                  <span className="font-headline-sm text-lg sm:text-headline-sm text-primary font-bold tracking-tight leading-none">Mi Taller</span>
                  <span className="font-label-sm text-label-sm text-outline mt-0.5">Panel de Vendedor</span>
                </div>
              </a>
              <button
                id="sidebar-close-btn"
                className="lg:hidden p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                aria-label="Cerrar menú lateral"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Section: Only "Mis Productos" button */}
            <div className="px-3 sm:px-space-md mt-4 sm:mt-space-md">
              <div className="px-2 sm:px-space-sm mb-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Gestión del Taller</span>
              </div>
              <nav className="flex flex-col gap-1">
                <a
                  aria-current="page"
                  className="flex items-center gap-space-sm px-3 py-2.5 sm:py-2.5 rounded-lg transition-colors bg-primary-container text-on-primary font-title-md text-sm sm:text-title-md shadow-xs"
                  data-path="mis-productos"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                  <span>Mis Productos</span>
                </a>
              </nav>
            </div>
          </div>

          {/* Footer Action in Sidebar: Link to Public Store */}
          <div className="px-3 sm:px-space-md pt-3 border-t border-surface-container-high/60 lg:border-none">
            <a
              className="bg-surface rounded-lg p-space-sm flex items-center justify-between gap-space-xs shadow-[0_1px_4px_rgba(0,0,0,0.04)] hover:bg-surface-container transition-colors group"
              data-path="ver-tienda"
              href="detalle_tienda.html"
            >
              <div className="flex items-center gap-space-xs font-label-md text-label-md text-primary group-hover:text-on-surface">
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Ver Mi Tienda Pública</span>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">open_in_new</span>
            </a>
          </div>
        </aside>

        {/* Main Content Container with Responsive Left Padding on Desktop */}
        <div className="lg:pl-72 min-h-screen flex flex-col">
          {/* Fixed Responsive Top Navbar Header */}
          <header
            className="fixed top-0 left-0 lg:left-72 right-0 h-16 bg-surface/95 backdrop-blur-xl z-30 px-3 sm:px-6 lg:px-space-lg flex items-center justify-between gap-2.5 sm:gap-space-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-surface-container-high/60"
          >
            {/* Left Part: Mobile Hamburger + Product Search */}
            <div className="flex items-center gap-2 sm:gap-space-md flex-1 max-w-lg">
              <button
                id="mobile-sidebar-btn"
                className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0"
                aria-label="Abrir menú de navegación"
              >
                <span className="material-symbols-outlined text-[24px]">menu</span>
              </button>
              <div className="flex items-center relative w-full">
                <span className="material-symbols-outlined absolute left-3 text-outline text-[20px]">search</span>
                <input
                  id="top-search-input"
                  className="w-full bg-surface-container-low pl-10 pr-4 py-2 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary transition-all text-xs sm:text-body-sm"
                  placeholder="Buscar en mis productos por nombre, SKU o técnica..."
                  type="text" />
              </div>
            </div>

            {/* Right Part: Actions & Seller Profile */}
            <div className="flex items-center gap-1.5 sm:gap-space-md shrink-0">
              <a
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                data-path="ver-tienda-link"
                href="detalle_tienda.html"
              >
                <span className="material-symbols-outlined text-[18px]">visibility</span>
                <span>Ver Tienda</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-space-sm pl-1 sm:pl-space-sm border-l border-surface-container-high/60">
                <img
                  alt="Avatar Artesano"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTKL182YFKUiW7f6l1mypokfoBtG4w5HB3KDSNGCNVsu6HNKslDoduZYILzX2lcuBDkNqK4z8I8ssAljXX2pveyXMFK55CXVASu1x3sEjG2T8HV6dlQBVTDEPMKGeq1MelbLamdNDfSjLTLHRcUPOKYTiNIWO5ToQ6Ot2PMujYDos-0HXUb-Ou24r-I3wIC4yc9RniHATPrLAMJsZpnzIDVd1byaLfHL7i23Ei6slimLSYOlbqZ0fsQA" />
                <div className="hidden md:flex flex-col text-left">
                  <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">Matías Alarcón</span>
                  <span className="font-label-sm text-[11px] text-outline leading-tight">Cerámicas del Bosque</span>
                </div>
              </div>
            </div>
          </header>

          {/* Main Body Container with Mobile First Paddings */}
          <main className="w-full pt-20 sm:pt-20 bg-background min-h-screen px-3 sm:px-6 lg:px-space-lg pb-space-xl">
            <div className="flex flex-col w-full max-w-[1600px] mx-auto">
              {/* Top Breadcrumb & Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-space-md mb-4 sm:mb-space-lg">
                <div className="flex items-center gap-1.5 sm:gap-space-xs text-on-surface-variant flex-wrap text-xs sm:text-label-sm">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-outline">Mi Taller</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-primary font-semibold">Mis Productos &amp; Catálogo</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-xs sm:text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    38 piezas en catálogo
                  </span>
                  <button
                    className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-primary text-on-primary shadow-md hover:bg-primary-container font-label-md text-xs sm:text-label-md transition-all"
                  >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    <span>Publicar Nueva Pieza</span>
                  </button>
                </div>
              </div>

              {/* Main Area: Split View (Products Catalog Table + Product Detail Preview Card) */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
                {/* Left Column: Search, Filters & Products Table (7 cols on xl) */}
                <div className="xl:col-span-7 flex flex-col gap-4 sm:gap-space-md order-2 xl:order-1">
                  {/* Filters and Search Toolbar */}
                  <div className="rounded-xl bg-surface-container-lowest p-4 sm:p-space-md shadow-sm flex flex-col gap-3 sm:gap-space-md">
                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-space-md">
                      {/* Live Text Search */}
                      <div className="relative flex-1">
                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                        <input
                          id="product-search-input"
                          className="w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-lg font-body-md text-sm sm:text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                          placeholder="Buscar por nombre, técnica o SKU..."
                          type="text" />
                      </div>
                      {/* Category/Collection and Stock Selectors */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm">
                        <div className="relative flex-1 sm:flex-none">
                          <select
                            id="product-collection-select"
                            className="w-full sm:w-auto bg-surface-container-low px-3 py-2 sm:py-2.5 rounded-lg font-label-md text-xs sm:text-label-md text-on-surface-variant border-0 focus:ring-1 focus:ring-primary cursor-pointer"
                          >
                            <option value="all">Todas las Colecciones</option>
                            <option value="tazas">Tazas &amp; Mugs</option>
                            <option value="bowls">Bowls &amp; Cuencos</option>
                            <option value="floreros">Floreros &amp; Jarrones</option>
                            <option value="vajilla">Vajilla &amp; Juegos</option>
                          </select>
                        </div>
                        <div className="relative flex-1 sm:flex-none">
                          <select
                            id="product-stock-select"
                            className="w-full sm:w-auto bg-surface-container-low px-3 py-2 sm:py-2.5 rounded-lg font-label-md text-xs sm:text-label-md text-on-surface-variant border-0 focus:ring-1 focus:ring-primary cursor-pointer"
                          >
                            <option value="all">Estado: Todos</option>
                            <option value="disponible">En Venta</option>
                            <option value="bajo">Stock Bajo</option>
                            <option value="agotado">Agotado</option>
                          </select>
                        </div>
                        <button
                          id="product-clear-filters"
                          className="p-2 sm:p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors"
                          title="Limpiar Filtros"
                        >
                          <span className="material-symbols-outlined text-[20px]">filter_alt_off</span>
                        </button>
                      </div>
                    </div>

                    {/* Quick Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 text-label-sm font-label-sm scrollbar-none touch-pan-x -mx-1 px-1">
                      <span className="text-outline uppercase tracking-wider mr-1 shrink-0 text-xs sm:text-label-sm">Filtro:</span>
                      <button
                        className="quick-pill active px-3 py-1 rounded-full bg-primary text-on-primary shadow-sm whitespace-nowrap text-xs sm:text-label-sm transition-all"
                        data-filter="all"
                      >
                        Todas (5)
                      </button>
                      <button
                        className="quick-pill px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high whitespace-nowrap text-xs sm:text-label-sm transition-all"
                        data-filter="disponible"
                      >
                        En Venta (3)
                      </button>
                      <button
                        className="quick-pill px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container hover:bg-secondary-container whitespace-nowrap font-bold text-xs sm:text-label-sm transition-all"
                        data-filter="bajo"
                      >
                        Stock Bajo (1)
                      </button>
                      <button
                        className="quick-pill px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:bg-surface-container-high whitespace-nowrap text-xs sm:text-label-sm transition-all"
                        data-filter="agotado"
                      >
                        Agotados (1)
                      </button>
                    </div>
                  </div>

                  {/* Products Table Card */}
                  <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                    <div className="px-4 sm:px-space-md py-3.5 sm:py-4 flex items-center justify-between bg-surface-container-low border-b border-surface-container-high/60">
                      <div className="flex items-center gap-2">
                        <span className="font-title-md text-sm sm:text-title-md text-primary font-bold">Listado de Mis Piezas</span>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px] sm:text-label-sm">Selecciona una para previsualizar</span>
                      </div>
                    </div>

                    {/* Responsive Table Container */}
                    <div className="overflow-x-auto scrollbar-none">
                      <table className="w-full text-left border-collapse min-w-[620px]">
                        <thead>
                          <tr className="bg-surface-container/60 text-outline font-label-sm text-[11px] sm:text-label-sm uppercase tracking-wider">
                            <th className="py-3 px-4 sm:px-space-md font-semibold">Pieza / Producto</th>
                            <th className="py-3 px-3 font-semibold">Precio &amp; Stock</th>
                            <th className="py-3 px-3 font-semibold">Estado</th>
                            <th className="py-3 px-4 sm:px-space-md text-right font-semibold">Acciones</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-container-high/40 text-body-md font-body-md" id="products-table-body">
                          {/* Product 1 */}
                          <tr
                            className="product-row active-product-row bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer group"
                            data-id="PRD-104"
                            data-name="Tazón Gres Esmaltado Ceniza"
                            data-collection="tazas"
                            data-collection-name="Tazas &amp; Mugs"
                            data-price="28000"
                            data-stock="14"
                            data-stock-status="disponible"
                            data-sku="TZN-001"
                            data-sales="68"
                            data-rating="4.9"
                            data-desc="Gres torneado a mano con arcillas locales de Valdivia y esmaltes libres de plomo obtenidos de ceniza volcánica."
                            data-dims="380g • 10x9cm (320ml)"
                            data-time="3 a 5 días"
                            data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuBF0Gi69MoZGcOLyU1kTUgJXjIZcQotmDrypq_XwGupjfq3Oe2sKzG_WkQoDPZsb99ALnZZM3Mrlb1rDnEdY1wu2UzOB5x5D7etKkAoiMCKZthhhR0dViCWrB1UEdgURxeEl-9Uprvkhz72C6QWeQGf_x3eAJmVMsdMQRjZBdqWf3IS2NJECsEByyphS8cCY4Hj49Wc0FEoaPgZqg0p-n9ralQJX_wFHkubZv9p1k2QWwjUldw7wEXdcQ"
                          >
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md">
                              <div className="flex items-center gap-3">
                                <img
                                  className="product-img-thumb w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm ring-2 ring-primary shrink-0"
                                  alt="Tazón Gres"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF0Gi69MoZGcOLyU1kTUgJXjIZcQotmDrypq_XwGupjfq3Oe2sKzG_WkQoDPZsb99ALnZZM3Mrlb1rDnEdY1wu2UzOB5x5D7etKkAoiMCKZthhhR0dViCWrB1UEdgURxeEl-9Uprvkhz72C6QWeQGf_x3eAJmVMsdMQRjZBdqWf3IS2NJECsEByyphS8cCY4Hj49Wc0FEoaPgZqg0p-n9ralQJX_wFHkubZv9p1k2QWwjUldw7wEXdcQ" />
                                <div className="flex flex-col min-w-0">
                                  <span className="product-title-text font-title-md text-sm sm:text-title-md text-primary font-bold truncate">Tazón Gres Esmaltado Ceniza</span>
                                  <span className="font-body-sm text-xs text-on-surface-variant line-clamp-1 italic">320ml • Torno manual 1240°C</span>
                                  <span className="font-label-sm text-[11px] text-outline mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">tag</span> SKU: TZN-001 • 68 ventas
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <div className="flex flex-col">
                                <span className="product-price-text font-title-md text-sm sm:text-title-md text-primary font-bold">$28.000 ARS</span>
                                <span className="product-stock-text font-label-sm text-xs text-on-surface-variant font-semibold">14 unidades</span>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <span className="product-status-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-semibold shadow-xs whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-inverse-primary"></span>
                                En Venta
                              </span>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-xs sm:text-label-md hover:bg-primary-container transition-colors shadow-xs flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-[15px]">edit</span>
                                  <span>Editar</span>
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Product 2 */}
                          <tr
                            className="product-row hover:bg-surface-container-low transition-colors cursor-pointer group"
                            data-id="PRD-108"
                            data-name="Bowl Rústico Bosque Verde"
                            data-collection="bowls"
                            data-collection-name="Bowls &amp; Cuencos"
                            data-price="45000"
                            data-stock="8"
                            data-stock-status="disponible"
                            data-sku="BWL-002"
                            data-sales="52"
                            data-rating="5.0"
                            data-desc="Bowl amplio para ramen, ensaladas o pastas con acabado verde musgo mate y tacto mineral orgánico."
                            data-dims="540g • Diámetro 20cm"
                            data-time="4 a 6 días"
                            data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuD7K65Y6MHTHrT6qAkUVBaFvgPTLL_kZZl5Tdz4dy0xy1cavw8t1by0J3gC3PZYvG9M6U8mRCsEtbS-5ChiNv5-nXIbewxdF0FhHjljC6ZKOvEm9qlQZLsmSAG5rMzyB8_YJOZMh8aiOdnVtol0VIedG3GDz9TbcDzXsSrZFS_oulvXW4WOqbl_qxaP4gNSZHILkutDBirHWB8YbPKpFWO9sFh3C5YoDlZtAsqHQoX_m4vzL4BRBMUt2g"
                          >
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md">
                              <div className="flex items-center gap-3">
                                <img
                                  className="product-img-thumb w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm shrink-0"
                                  alt="Bowl Rústico"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7K65Y6MHTHrT6qAkUVBaFvgPTLL_kZZl5Tdz4dy0xy1cavw8t1by0J3gC3PZYvG9M6U8mRCsEtbS-5ChiNv5-nXIbewxdF0FhHjljC6ZKOvEm9qlQZLsmSAG5rMzyB8_YJOZMh8aiOdnVtol0VIedG3GDz9TbcDzXsSrZFS_oulvXW4WOqbl_qxaP4gNSZHILkutDBirHWB8YbPKpFWO9sFh3C5YoDlZtAsqHQoX_m4vzL4BRBMUt2g" />
                                <div className="flex flex-col min-w-0">
                                  <span className="product-title-text font-title-md text-sm sm:text-title-md text-on-surface font-bold truncate">Bowl Rústico Bosque Verde</span>
                                  <span className="font-body-sm text-xs text-on-surface-variant line-clamp-1 italic">Diámetro 20cm • Acabado verde musgo</span>
                                  <span className="font-label-sm text-[11px] text-outline mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">tag</span> SKU: BWL-002 • 52 ventas
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <div className="flex flex-col">
                                <span className="product-price-text font-title-md text-sm sm:text-title-md text-primary font-bold">$45.000 ARS</span>
                                <span className="product-stock-text font-label-sm text-xs text-on-surface-variant font-semibold">8 unidades</span>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <span className="product-status-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                En Venta
                              </span>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-[15px]">edit</span>
                                  <span>Editar</span>
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Product 3 */}
                          <tr
                            className="product-row hover:bg-surface-container-low transition-colors cursor-pointer group bg-secondary-container/10"
                            data-id="PRD-112"
                            data-name="Florero de Cuello Estrecho"
                            data-collection="floreros"
                            data-collection-name="Floreros &amp; Jarrones"
                            data-price="62000"
                            data-stock="2"
                            data-stock-status="bajo"
                            data-sku="FLR-005"
                            data-sales="29"
                            data-rating="4.8"
                            data-desc="Pieza escultórica modelada a torno lento con textura de piedra natural y esmalte terroso mate."
                            data-dims="620g • Altura 26cm"
                            data-time="5 a 7 días"
                            data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2-Ya8wFy0rrjhSENVQECtZOqz2bM7pNd5QFlYMWQb-DH2tNnYmj78WUhX_H-82sP4WeanqcoqJmm4jumg754K0eBhICTyi4GOTDLiQt5zFQ_IdbYQHSMqIxFlBlXVbnfef9Yv-E1sQrz1fSCgLqNzqrYAjs0VW5pWx4z0Sz77s-dkqyqgtAKp_VT40jyLuF-kAfBVmGEiDJ04I-SSrZy_9i8NwIeryn9S25SEcDu5aDaSU-hhCzyxg"
                          >
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md">
                              <div className="flex items-center gap-3">
                                <img
                                  className="product-img-thumb w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm shrink-0"
                                  alt="Florero"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2-Ya8wFy0rrjhSENVQECtZOqz2bM7pNd5QFlYMWQb-DH2tNnYmj78WUhX_H-82sP4WeanqcoqJmm4jumg754K0eBhICTyi4GOTDLiQt5zFQ_IdbYQHSMqIxFlBlXVbnfef9Yv-E1sQrz1fSCgLqNzqrYAjs0VW5pWx4z0Sz77s-dkqyqgtAKp_VT40jyLuF-kAfBVmGEiDJ04I-SSrZy_9i8NwIeryn9S25SEcDu5aDaSU-hhCzyxg" />
                                <div className="flex flex-col min-w-0">
                                  <span className="product-title-text font-title-md text-sm sm:text-title-md text-on-surface font-bold truncate">Florero de Cuello Estrecho</span>
                                  <span className="font-body-sm text-xs text-on-surface-variant line-clamp-1 italic">Altura 26cm • Pieza de autor</span>
                                  <span className="font-label-sm text-[11px] text-outline mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">tag</span> SKU: FLR-005 • 29 ventas
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <div className="flex flex-col">
                                <span className="product-price-text font-title-md text-sm sm:text-title-md text-secondary font-bold">$62.000 ARS</span>
                                <span className="product-stock-text font-label-sm text-xs text-secondary font-semibold">¡2 en stock!</span>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <span className="product-status-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                                Stock Bajo
                              </span>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  className="px-3 py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-xs sm:text-label-md hover:opacity-95 transition-opacity flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-[15px]">edit</span>
                                  <span>Editar</span>
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Product 4 */}
                          <tr
                            className="product-row hover:bg-surface-container-low transition-colors cursor-pointer group opacity-80"
                            data-id="PRD-116"
                            data-name="Jarra Cerámica Niebla 1.2L"
                            data-collection="vajilla"
                            data-collection-name="Vajilla &amp; Juegos"
                            data-price="54000"
                            data-stock="0"
                            data-stock-status="agotado"
                            data-sku="JAR-009"
                            data-sales="19"
                            data-rating="4.9"
                            data-desc="Jarra de mesa para agua o infusiones frías con asa ergonómica torneada y vertedor antigoteo."
                            data-dims="780g • 1.200cc"
                            data-time="4 a 6 días"
                            data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuCuF4MGMeUYJeYKaJ8opVoCHkzSCCts47IHiUugP3Ikp9hOhXqekQ3mQ4WAcOwVGfSd0uhSHC1n-oV_44tnIyXU6CDjfG7_vfqFcmalA_O9mt8NVUqTaLY0D75FsXxEM5-zrl1FEHh5eWb1VrZZBaPwhfuKLDUljBBSkXa-vOSTXAD9mxtz0RTAJ6vmKkqhO0JITFDEVedlaOQN21-LKTw47kXNnx4HZkgpGIjqgvho-rEm8glpe1i22Q"
                          >
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md">
                              <div className="flex items-center gap-3">
                                <img
                                  className="product-img-thumb w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm grayscale shrink-0"
                                  alt="Jarra Niebla"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuF4MGMeUYJeYKaJ8opVoCHkzSCCts47IHiUugP3Ikp9hOhXqekQ3mQ4WAcOwVGfSd0uhSHC1n-oV_44tnIyXU6CDjfG7_vfqFcmalA_O9mt8NVUqTaLY0D75FsXxEM5-zrl1FEHh5eWb1VrZZBaPwhfuKLDUljBBSkXa-vOSTXAD9mxtz0RTAJ6vmKkqhO0JITFDEVedlaOQN21-LKTw47kXNnx4HZkgpGIjqgvho-rEm8glpe1i22Q" />
                                <div className="flex flex-col min-w-0">
                                  <span className="product-title-text font-title-md text-sm sm:text-title-md text-on-surface font-bold truncate">Jarra Cerámica Niebla 1.2L</span>
                                  <span className="font-body-sm text-xs text-on-surface-variant line-clamp-1 italic">1.200cc • Esmalte ahumado</span>
                                  <span className="font-label-sm text-[11px] text-outline mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">tag</span> SKU: JAR-009 • 19 ventas
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <div className="flex flex-col">
                                <span className="product-price-text font-title-md text-sm sm:text-title-md text-outline font-bold">$54.000 ARS</span>
                                <span className="product-stock-text font-label-sm text-xs text-outline">0 unidades</span>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <span className="product-status-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-outline font-label-sm text-[11px] font-semibold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                Agotado
                              </span>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-[15px]">edit</span>
                                  <span>Editar</span>
                                </button>
                              </div>
                            </td>
                          </tr>

                          {/* Product 5 */}
                          <tr
                            className="product-row hover:bg-surface-container-low transition-colors cursor-pointer group"
                            data-id="PRD-120"
                            data-name="Set 4 Platos Hondos Terracota"
                            data-collection="vajilla"
                            data-collection-name="Vajilla &amp; Juegos"
                            data-price="85000"
                            data-stock="5"
                            data-stock-status="disponible"
                            data-sku="PLT-014"
                            data-sales="16"
                            data-rating="5.0"
                            data-desc="Juego de cuatro platos hondos artesanales en arcilla roja cocida con borde crudo y esmalte interior brillante."
                            data-dims="1.8kg • Diámetro 23cm"
                            data-time="5 a 8 días"
                            data-img="https://lh3.googleusercontent.com/aida-public/AB6AXuBTKL182YFKUiW7f6l1mypokfoBtG4w5HB3KDSNGCNVsu6HNKslDoduZYILzX2lcuBDkNqK4z8I8ssAljXX2pveyXMFK55CXVASu1x3sEjG2T8HV6dlQBVTDEPMKGeq1MelbLamdNDfSjLTLHRcUPOKYTiNIWO5ToQ6Ot2PMujYDos-0HXUb-Ou24r-I3wIC4yc9RniHATPrLAMJsZpnzIDVd1byaLfHL7i23Ei6slimLSYOlbqZ0fsQA"
                          >
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md">
                              <div className="flex items-center gap-3">
                                <img
                                  className="product-img-thumb w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover shadow-sm shrink-0"
                                  alt="Set Platos"
                                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTKL182YFKUiW7f6l1mypokfoBtG4w5HB3KDSNGCNVsu6HNKslDoduZYILzX2lcuBDkNqK4z8I8ssAljXX2pveyXMFK55CXVASu1x3sEjG2T8HV6dlQBVTDEPMKGeq1MelbLamdNDfSjLTLHRcUPOKYTiNIWO5ToQ6Ot2PMujYDos-0HXUb-Ou24r-I3wIC4yc9RniHATPrLAMJsZpnzIDVd1byaLfHL7i23Ei6slimLSYOlbqZ0fsQA" />
                                <div className="flex flex-col min-w-0">
                                  <span className="product-title-text font-title-md text-sm sm:text-title-md text-on-surface font-bold truncate">Set 4 Platos Hondos Terracota</span>
                                  <span className="font-body-sm text-xs text-on-surface-variant line-clamp-1 italic">Pack 4 platos • Arcilla roja local</span>
                                  <span className="font-label-sm text-[11px] text-outline mt-0.5 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[13px]">tag</span> SKU: PLT-014 • 16 ventas
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <div className="flex flex-col">
                                <span className="product-price-text font-title-md text-sm sm:text-title-md text-primary font-bold">$85.000 ARS</span>
                                <span className="product-stock-text font-label-sm text-xs text-on-surface-variant font-semibold">5 sets</span>
                              </div>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-3">
                              <span className="product-status-badge inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                En Venta
                              </span>
                            </td>
                            <td className="py-3.5 sm:py-space-md px-4 sm:px-space-md text-right">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-[15px]">edit</span>
                                  <span>Editar</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Product Detail Preview (5 cols on xl) */}
                <div id="preview-panel" className="xl:col-span-5 flex flex-col gap-4 sm:gap-space-md xl:sticky xl:top-20 order-1 xl:order-2">
                  <div className="rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden transition-all border border-surface-container-high/60">
                    {/* Preview Top Header Banner */}
                    <div className="px-4 py-3 bg-surface-container-low flex items-center justify-between border-b border-surface-container-high/60">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">visibility</span>
                        <span className="font-label-md text-xs sm:text-label-md text-primary font-bold uppercase tracking-wider">Vista Previa del Producto</span>
                      </div>
                      <span id="preview-badge-id" className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold">
                        ID: PRD-104
                      </span>
                    </div>

                    {/* Product Preview Card Body */}
                    <div className="p-4 sm:p-space-md flex flex-col gap-4">
                      {/* Product Main Visual Showcase */}
                      <div className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden bg-surface-container group">
                        <img
                          id="preview-main-img"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt="Vista previa de producto"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF0Gi69MoZGcOLyU1kTUgJXjIZcQotmDrypq_XwGupjfq3Oe2sKzG_WkQoDPZsb99ALnZZM3Mrlb1rDnEdY1wu2UzOB5x5D7etKkAoiMCKZthhhR0dViCWrB1UEdgURxeEl-9Uprvkhz72C6QWeQGf_x3eAJmVMsdMQRjZBdqWf3IS2NJECsEByyphS8cCY4Hj49Wc0FEoaPgZqg0p-n9ralQJX_wFHkubZv9p1k2QWwjUldw7wEXdcQ" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                        <span
                          id="preview-collection-badge"
                          className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-full font-label-sm text-xs text-primary font-semibold shadow-xs"
                        >
                          Tazas &amp; Mugs
                        </span>
                        <span
                          id="preview-stock-badge"
                          className="absolute top-3 right-3 bg-primary text-on-primary px-2.5 py-1 rounded-full font-label-sm text-[11px] font-bold shadow-xs"
                        >
                          14 en Stock
                        </span>
                      </div>

                      {/* Product Info Header */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-secondary font-label-sm text-xs">
                            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span id="preview-rating" className="font-bold text-on-surface">4.9</span>
                            <span className="text-outline">•</span>
                            <span id="preview-sales" className="text-outline">68 compras en tienda</span>
                          </div>
                          <span id="preview-sku" className="font-label-sm text-[11px] text-outline">SKU: TZN-001</span>
                        </div>

                        <h3 id="preview-title" className="font-headline-sm text-xl sm:text-headline-sm text-primary font-bold tracking-tight">
                          Tazón Gres Esmaltado Ceniza
                        </h3>

                        <div className="flex items-baseline gap-2 pt-1">
                          <span id="preview-price" className="font-headline-md text-2xl sm:text-headline-md text-primary font-bold">$28.000 ARS</span>
                          <span className="text-xs text-outline">IVA incl. / Envío calculado en checkout</span>
                        </div>
                      </div>

                      {/* Product Description Box */}
                      <div className="bg-surface-container-low p-3.5 rounded-xl space-y-1">
                        <span className="font-label-sm text-[11px] text-outline uppercase tracking-wider font-semibold block">Historia &amp; Elaboración:</span>
                        <p id="preview-desc" className="font-body-md text-xs sm:text-body-sm text-on-surface-variant leading-relaxed">
                          Gres torneado a mano con arcillas locales de Valdivia y esmaltes libres de plomo obtenidos de ceniza volcánica.
                        </p>
                      </div>

                      {/* Workshop Technical Specifications Grid */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-surface-container flex flex-col">
                          <span className="text-outline text-[10px] uppercase font-semibold">Tiempo en Torno</span>
                          <span id="preview-time" className="font-semibold text-on-surface mt-0.5">3 a 5 días</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container flex flex-col">
                          <span className="text-outline text-[10px] uppercase font-semibold">Peso &amp; Medidas</span>
                          <span id="preview-dims" className="font-semibold text-on-surface mt-0.5">380g • 10x9cm</span>
                        </div>
                      </div>

                      {/* Primary Action Buttons in Preview Card */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                        <button
                          id="preview-btn-edit"
                          className="flex-1 py-3 px-4 rounded-xl bg-primary text-on-primary font-label-md text-xs sm:text-label-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                          <span>Editar Este Producto</span>
                        </button>
                        <a
                          className="py-3 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-xs sm:text-label-md transition-colors flex items-center justify-center gap-1.5 text-center"
                          href="detalle_tienda.html"
                          target="_blank"
                        >
                          <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          <span>Ver en Mi Tienda</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Edit Product Pop-up Modal */}
        <div
          id="edit-product-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-on-surface/50 backdrop-blur-sm hidden transition-opacity duration-300"
        >
          <div
            className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-surface-container-high transform scale-95 transition-transform duration-300 flex flex-col max-h-[90vh]"
            id="edit-modal-dialog"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-primary text-on-primary flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[22px] text-inverse-primary">edit_note</span>
                <div>
                  <h3 className="font-headline-sm text-base sm:text-lg font-bold leading-tight" id="modal-heading">
                    Editar Producto
                  </h3>
                  <span className="text-[11px] text-on-primary/70" id="modal-subheading">ID: PRD-104 • Cerámicas del Bosque</span>
                </div>
              </div>
              <button
                className="p-1.5 rounded-lg bg-surface/20 hover:bg-surface/30 text-on-primary transition-colors"
                aria-label="Cerrar modal"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
              <form id="edit-form" className="space-y-4">
                {/* Product Title */}
                <div className="space-y-1">
                  <label className="font-label-sm text-xs text-on-surface font-semibold uppercase tracking-wider">
                    Nombre de la Pieza / Producto
                  </label>
                  <input
                    id="modal-input-name"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 rounded-lg font-body-md text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all"
                    type="text"
                    required />
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <label className="font-label-sm text-xs text-on-surface font-semibold uppercase tracking-wider">
                    Descripción &amp; Técnica de Elaboración
                  </label>
                  <textarea
                    id="modal-input-desc"
                    className="w-full bg-surface-container-low px-3.5 py-2.5 rounded-lg font-body-md text-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary transition-all resize-none"
                    rows="3"
                    required
                  ></textarea>
                </div>

                {/* Price & Stock Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Precio ($ ARS)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-outline text-sm">$</span>
                      <input
                        id="modal-input-price"
                        className="w-full bg-surface-container-low pl-8 pr-3 py-2.5 rounded-lg font-body-sm text-sm text-on-surface focus:ring-1 focus:ring-primary font-semibold"
                        type="number"
                        step="500"
                        min="0"
                        placeholder="ej. 28000"
                        required />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Stock Disponible (Unidades)
                    </label>
                    <input
                      id="modal-input-stock"
                      className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg font-body-sm text-sm text-on-surface focus:ring-1 focus:ring-primary font-semibold"
                      type="number"
                      min="0"
                      required />
                  </div>
                </div>

                {/* Collection & Status Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Colección
                    </label>
                    <select
                      id="modal-input-collection"
                      className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg font-body-sm text-sm text-on-surface focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value="tazas">Tazas &amp; Mugs</option>
                      <option value="bowls">Bowls &amp; Cuencos</option>
                      <option value="floreros">Floreros &amp; Jarrones</option>
                      <option value="vajilla">Vajilla &amp; Juegos</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Estado de Publicación
                    </label>
                    <select
                      id="modal-input-status"
                      className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg font-body-sm text-sm text-on-surface font-semibold text-primary focus:ring-1 focus:ring-primary cursor-pointer"
                    >
                      <option value="disponible">En Venta (Visible)</option>
                      <option value="bajo">Stock Bajo</option>
                      <option value="agotado">Agotado / Pausado</option>
                    </select>
                  </div>
                </div>

                {/* Dimensions & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Peso / Medidas
                    </label>
                    <input
                      id="modal-input-dims"
                      className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg font-body-sm text-xs sm:text-sm text-on-surface focus:ring-1 focus:ring-primary"
                      type="text" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label-sm text-xs text-outline uppercase tracking-wider">
                      Tiempo de Elaboración
                    </label>
                    <input
                      id="modal-input-time"
                      className="w-full bg-surface-container-low px-3 py-2.5 rounded-lg font-body-sm text-xs sm:text-sm text-on-surface focus:ring-1 focus:ring-primary"
                      type="text" />
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-surface-container-low border-t border-surface-container-high/60 flex items-center justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs sm:text-label-md transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-xs sm:text-label-md hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>Guardar Cambios</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
