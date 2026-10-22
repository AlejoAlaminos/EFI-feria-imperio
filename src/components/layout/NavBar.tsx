import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  ShoppingBag,
  LogIn,
  LogOut,
  ChevronDown,
  LayoutDashboard,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';

interface NavBarProps {
  busqueda: string;
  onBusquedaChange: (val: string) => void;
}

export const NavBar = ({ busqueda, onBusquedaChange }: NavBarProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { toggleCart, getTotalItems } = useCartStore();
  const { currentFeriante, isAuthenticated, openLoginModal, logout } = useAuthStore();
  const totalItems = getTotalItems();

  // Cerrar dropdown al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setProfileDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-sand/90 dark:bg-charcoal/90 backdrop-blur-md border-b border-sand-300 dark:border-charcoal-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md border border-sand-300 dark:border-charcoal-700 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo.png"
                alt="Logo Feria Imperio"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-terracotta tracking-tight leading-none">
                Feria Imperio
              </span>
              <span className="text-[11px] font-semibold text-forest dark:text-forest-400 tracking-wide mt-0.5">
                Río Cuarto • Tiendas Locales
              </span>
            </div>
          </Link>

          {/* Search Input (Desktop) */}
          <div className="hidden md:flex items-center relative flex-1 max-w-xs lg:max-w-md mx-4">
            <Search className="w-4 h-4 text-charcoal-400 dark:text-sand-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => onBusquedaChange(e.target.value)}
              placeholder="Buscar puestos, artesanos o rubros..."
              className="w-full bg-sand-200 dark:bg-charcoal-700 text-charcoal-900 dark:text-white placeholder:text-charcoal-400 dark:placeholder:text-sand-500 pl-10 pr-4 py-2 rounded-full text-sm border border-transparent focus:border-terracotta focus:bg-white dark:focus:bg-charcoal-800 focus:outline-none transition-all"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-charcoal-700 dark:text-sand-200 hover:text-terracotta dark:hover:text-terracotta-300 hover:bg-sand-200 dark:hover:bg-charcoal-700 transition-colors"
            >
              Directorio de Puestos
            </Link>
            <a
              href="/#ferias"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-charcoal-700 dark:text-sand-200 hover:text-terracotta dark:hover:text-terracotta-300 hover:bg-sand-200 dark:hover:bg-charcoal-700 transition-colors"
            >
              Paseos de Ferias
            </a>
            <a
              href="/#contacto"
              className="px-3.5 py-2 rounded-xl text-sm font-medium text-charcoal-700 dark:text-sand-200 hover:text-terracotta dark:hover:text-terracotta-300 hover:bg-sand-200 dark:hover:bg-charcoal-700 transition-colors"
            >
              Postular Puesto
            </a>
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart / Lista Button */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-xl text-charcoal-700 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-charcoal-700 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label="Ver mi lista de compras"
              title="Mi Lista de Feria"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-terracotta text-white font-black text-[10px] flex items-center justify-center shadow-xs animate-in zoom-in-75">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            <ThemeToggle />

            {/* SECCIÓN DE AUTENTICACIÓN / FERIANTE */}
            {!isAuthenticated ? (
              /* Botón de Inicio de Sesión */
              <button
                onClick={openLoginModal}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-forest hover:bg-forest-600 text-white text-xs sm:text-sm font-bold shadow-sm active:scale-95 transition-all"
                title="Acceso exclusivo para feriantes"
              >
                <LogIn className="w-4 h-4" />
                <span>Soy Feriante</span>
              </button>
            ) : (
              /* Dropdown de Feriante Autenticado */
              <div className="relative hidden sm:block" ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl bg-sand-200 dark:bg-charcoal-700 hover:bg-sand-300 dark:hover:bg-charcoal-600 border border-sand-300 dark:border-charcoal-600 transition-all focus:outline-none"
                  aria-expanded={profileDropdownOpen}
                >
                  <img
                    src={
                      currentFeriante?.avatarUrl ||
                      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80'
                    }
                    alt={currentFeriante?.nombreComercio}
                    className="w-8 h-8 rounded-xl object-cover border border-forest"
                  />
                  <div className="text-left hidden md:block">
                    <p className="text-xs font-bold text-charcoal-900 dark:text-white leading-tight truncate max-w-[120px]">
                      {currentFeriante?.nombreComercio}
                    </p>
                    <span className="text-[10px] text-forest dark:text-forest-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                      Puesto Activo
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-charcoal-500 dark:text-sand-400" />
                </button>

                {/* Menú Desplegable */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-charcoal-800 shadow-xl border border-sand-300 dark:border-charcoal-700 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-4 py-2 border-b border-sand-200 dark:border-charcoal-700">
                      <p className="text-xs font-semibold text-charcoal-400 dark:text-sand-400">
                        Sesión activa
                      </p>
                      <p className="text-sm font-bold text-charcoal-900 dark:text-white truncate">
                        {currentFeriante?.nombreResponsable}
                      </p>
                      <p className="text-xs text-terracotta truncate">
                        {currentFeriante?.nombreComercio}
                      </p>
                    </div>

                    <Link
                      to="/admin"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-charcoal-700 dark:text-sand-200 hover:bg-sand-100 dark:hover:bg-charcoal-700 hover:text-forest transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Mi Taller (Panel de Stock)</span>
                    </Link>

                    {currentFeriante && (
                      <Link
                        to={`/tienda/${currentFeriante.id}`}
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-charcoal-700 dark:text-sand-200 hover:bg-sand-100 dark:hover:bg-charcoal-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver Mi Puesto Público</span>
                      </Link>
                    )}

                    <div className="border-t border-sand-200 dark:border-charcoal-700 my-1" />

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Cerrar Sesión</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-charcoal-700 dark:text-sand-200 hover:bg-sand-200 dark:hover:bg-charcoal-700 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="w-4 h-4 text-charcoal-400 dark:text-sand-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => onBusquedaChange(e.target.value)}
              placeholder="Buscar puestos o artesanos..."
              className="w-full bg-sand-200 dark:bg-charcoal-700 text-charcoal-900 dark:text-white placeholder:text-charcoal-400 dark:placeholder:text-sand-500 pl-10 pr-4 py-2 rounded-xl text-sm border border-transparent focus:border-terracotta focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sand-300 dark:border-charcoal-700 bg-sand dark:bg-charcoal px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {/* Card de Feriante si está autenticado en Mobile */}
          {isAuthenticated && currentFeriante ? (
            <div className="p-3 mb-3 rounded-2xl bg-sand-200 dark:bg-charcoal-700 border border-sand-300 dark:border-charcoal-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={currentFeriante.avatarUrl}
                  alt={currentFeriante.nombreComercio}
                  className="w-10 h-10 rounded-xl object-cover border border-forest"
                />
                <div>
                  <p className="text-xs font-bold text-charcoal-900 dark:text-white">
                    {currentFeriante.nombreComercio}
                  </p>
                  <p className="text-[11px] text-forest dark:text-forest-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Puesto Conectado
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-xl text-rose-600 hover:bg-rose-100 dark:hover:bg-rose-950/40"
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : null}

          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-charcoal-800 dark:text-sand-100 hover:bg-sand-200 dark:hover:bg-charcoal-700"
          >
            Directorio de Puestos
          </Link>
          <a
            href="/#ferias"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-charcoal-800 dark:text-sand-100 hover:bg-sand-200 dark:hover:bg-charcoal-700"
          >
            Paseos de Ferias
          </a>
          <a
            href="/#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-semibold text-charcoal-800 dark:text-sand-100 hover:bg-sand-200 dark:hover:bg-charcoal-700"
          >
            Postular mi Puesto
          </a>

          <div className="pt-2">
            {!isAuthenticated ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openLoginModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest text-white font-bold text-sm shadow-md"
              >
                <LogIn className="w-4 h-4" />
                <span>Ingreso Feriantes (Iniciar Sesión)</span>
              </button>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/admin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest text-white font-bold text-sm shadow-md"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Ir a Mi Taller (Panel de Stock)</span>
                </Link>
                <Link
                  to={`/tienda/${currentFeriante?.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sand-200 dark:bg-charcoal-700 text-charcoal-800 dark:text-sand-200 font-bold text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ver Mi Puesto en la Feria</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
