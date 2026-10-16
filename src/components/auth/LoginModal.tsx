import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Store,
  Lock,
  UserCheck,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { ferianteRepository } from '../../repositories';
import { Feriante } from '../../types';

interface LoginModalProps {
  onShowToast?: (type: 'success' | 'error', title: string, message: string) => void;
}

export const LoginModal = ({ onShowToast }: LoginModalProps) => {
  const navigate = useNavigate();
  const {
    loginModalOpen,
    closeLoginModal,
    login,
    loginDirecto,
    isLoading,
    error,
  } = useAuthStore();

  const [usuario, setUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('feria123');
  const [feriantesLista, setFeriantesLista] = useState<Feriante[]>([]);
  const [cargandoLista, setCargandoLista] = useState(true);
  const [loginExitoso, setLoginExitoso] = useState<string | null>(null);

  // Cargar lista de feriantes para el selector de demostración
  useEffect(() => {
    if (loginModalOpen) {
      setCargandoLista(true);
      ferianteRepository
        .getAll()
        .then((data) => {
          setFeriantesLista(data);
          setCargandoLista(false);
        })
        .catch(() => setCargandoLista(false));
    } else {
      setLoginExitoso(null);
    }
  }, [loginModalOpen]);

  // Manejo de tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && loginModalOpen) {
        closeLoginModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loginModalOpen, closeLoginModal]);

  if (!loginModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usuario.trim()) return;

    const res = await login(usuario, contrasenia);
    if (res.success) {
      setLoginExitoso(res.message);
      if (onShowToast) {
        onShowToast('success', 'Sesión Iniciada', res.message);
      }
      setTimeout(() => {
        closeLoginModal();
        navigate('/admin');
      }, 700);
    } else {
      if (onShowToast) {
        onShowToast('error', 'Error de Acceso', res.message);
      }
    }
  };

  const handleQuickLogin = (f: Feriante) => {
    loginDirecto(f);
    setLoginExitoso(`¡Bienvenido al taller de ${f.nombreComercio}!`);
    if (onShowToast) {
      onShowToast(
        'success',
        'Sesión Iniciada',
        `Ingresaste como ${f.nombreResponsable} (${f.nombreComercio})`
      );
    }
    setTimeout(() => {
      closeLoginModal();
      navigate('/admin');
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-sand-100 dark:bg-charcoal-800 rounded-3xl shadow-2xl border border-sand-300 dark:border-charcoal-700 overflow-hidden text-charcoal-900 dark:text-sand-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal con Identidad */}
        <div className="relative bg-gradient-to-br from-terracotta to-terracotta-700 px-6 py-6 text-white overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner text-white">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/25 text-[11px] font-bold tracking-wide uppercase">
                  <ShieldCheck className="w-3 h-3" /> Acceso Ferial
                </span>
                <h2 id="login-modal-title" className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                  Ingreso de Feriantes
                </h2>
              </div>
            </div>

            <button
              onClick={closeLoginModal}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Cerrar ventana de ingreso"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-white/90 mt-3 relative z-10 font-medium">
            Accedé a tu taller digital para actualizar tu stock, precios y presencia en la feria.
          </p>
        </div>

        {/* Contenido / Cuerpo */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Estado de Éxito Inmediato */}
          {loginExitoso ? (
            <div className="py-8 flex flex-col items-center text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-forest-100 dark:bg-forest-900/50 text-forest flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-forest dark:text-forest-400">
                ¡Ingreso Exitoso!
              </h3>
              <p className="text-sm text-charcoal-600 dark:text-sand-300">
                {loginExitoso} Redirigiendo a tu panel...
              </p>
            </div>
          ) : (
            <>
              {/* Formulario Tradicional */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div
                    className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-start gap-2.5 text-rose-800 dark:text-rose-300 text-xs animate-in slide-in-from-top-2"
                    role="alert"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="login-usuario"
                    className="block text-xs font-bold text-charcoal-700 dark:text-sand-300 uppercase tracking-wider mb-1.5"
                  >
                    Puesto o Responsable
                  </label>
                  <div className="relative">
                    <UserCheck className="w-4 h-4 text-charcoal-400 dark:text-sand-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="login-usuario"
                      type="text"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      placeholder="Ej: El Gaucho Tradición o Carlos Altamirano"
                      className="w-full bg-white dark:bg-charcoal-700 text-charcoal-900 dark:text-white placeholder:text-charcoal-400 dark:placeholder:text-sand-500 pl-10 pr-4 py-2.5 rounded-2xl text-sm border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="login-password"
                      className="block text-xs font-bold text-charcoal-700 dark:text-sand-300 uppercase tracking-wider"
                    >
                      Contraseña Ferial
                    </label>
                    <span className="text-[11px] text-terracotta dark:text-terracotta-300 font-medium">
                      Clave demo: <code className="bg-sand-200 dark:bg-charcoal-600 px-1 py-0.5 rounded">feria123</code>
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-charcoal-400 dark:text-sand-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="login-password"
                      type="password"
                      value={contrasenia}
                      onChange={(e) => setContrasenia(e.target.value)}
                      className="w-full bg-white dark:bg-charcoal-700 text-charcoal-900 dark:text-white placeholder:text-charcoal-400 dark:placeholder:text-sand-500 pl-10 pr-4 py-2.5 rounded-2xl text-sm border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-2xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Verificando puesto...</span>
                    </>
                  ) : (
                    <>
                      <span>Iniciar Sesión en Mi Taller</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Separador */}
              <div className="relative flex items-center justify-center">
                <div className="border-t border-sand-300 dark:border-charcoal-600 w-full" />
                <span className="bg-sand-100 dark:bg-charcoal-800 px-3 text-[11px] font-bold text-charcoal-400 dark:text-sand-400 uppercase tracking-widest absolute">
                  O Acceso Rápido Demo (1 click)
                </span>
              </div>

              {/* Lista de Feriantes Disponibles para Demostración */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-forest dark:text-forest-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Seleccionar artesano para probar de inmediato:</span>
                </div>

                {cargandoLista ? (
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-12 rounded-2xl bg-sand-200 dark:bg-charcoal-700 animate-pulse"
                      />
                    ))}
                  </div>
                ) : feriantesLista.length === 0 ? (
                  <div className="p-4 text-center text-xs text-charcoal-500 dark:text-sand-400 bg-sand-200/50 dark:bg-charcoal-700/50 rounded-2xl">
                    No hay feriantes cargados en el repositorio.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {feriantesLista.slice(0, 4).map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => handleQuickLogin(f)}
                        className="flex items-center gap-2.5 p-2 rounded-2xl bg-white dark:bg-charcoal-700 hover:bg-sand-200 dark:hover:bg-charcoal-600 border border-sand-300 dark:border-charcoal-600 text-left transition-all group active:scale-95"
                      >
                        <img
                          src={f.avatarUrl}
                          alt={f.nombreComercio}
                          className="w-9 h-9 rounded-xl object-cover shrink-0 border border-terracotta/30"
                          loading="lazy"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-charcoal-900 dark:text-white truncate group-hover:text-terracotta transition-colors">
                            {f.nombreComercio}
                          </p>
                          <p className="text-[10px] text-charcoal-500 dark:text-sand-400 truncate">
                            {f.nombreResponsable}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer del Modal */}
        <div className="bg-sand-200/70 dark:bg-charcoal-900/50 px-6 py-3 border-t border-sand-300 dark:border-charcoal-700 flex items-center justify-between text-xs text-charcoal-500 dark:text-sand-400">
          <span>¿Querés registrar un nuevo puesto?</span>
          <a
            href="/#contacto"
            onClick={closeLoginModal}
            className="font-bold text-terracotta hover:underline"
          >
            Postularse aquí
          </a>
        </div>
      </div>
    </div>
  );
};
