import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Store,
  Plus,
  ArrowLeft,
  ExternalLink,
  Package,
  DollarSign,
  CheckCircle2,
  XCircle,
  Edit2,
  Trash2,
  Save,
  X,
  Lock,
  LogIn,
  LogOut,
  ShieldCheck,
} from 'lucide-react';
import { Feriante, Producto, Rubro } from '../types';
import { ferianteRepository, productoRepository } from '../repositories';
import { useAuthStore } from '../store/useAuthStore';
import { formatARS } from '../utils/formatters';

interface AdminPageProps {
  onShowToast: (type: 'success' | 'error', title: string, message: string) => void;
}

export const AdminPage = ({ onShowToast }: AdminPageProps) => {
  const navigate = useNavigate();
  const { currentFeriante, isAuthenticated, openLoginModal, logout } = useAuthStore();
  const [feriantes, setFeriantes] = useState<Feriante[]>([]);
  const [selectedFerianteId, setSelectedFerianteId] = useState<string>(
    currentFeriante?.id || 'fer-01'
  );
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal para agregar producto
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState(1000);
  const [nuevaDesc, setNuevaDesc] = useState('');
  const [nuevoRubro, setNuevoRubro] = useState<Rubro>('artesanias');
  const [nuevaImg, setNuevaImg] = useState('');

  // Edición rápida de precio
  const [editingPrecioId, setEditingPrecioId] = useState<string | null>(null);
  const [tempPrecio, setTempPrecio] = useState<number>(0);

  // Sincronizar selectedFerianteId cuando cambie la sesión
  useEffect(() => {
    if (currentFeriante?.id) {
      setSelectedFerianteId(currentFeriante.id);
    }
  }, [currentFeriante]);

  // Cargar lista completa de feriantes
  useEffect(() => {
    ferianteRepository.getAll().then((list) => {
      setFeriantes(list);
    });
  }, []);

  // Cargar productos del feriante activo
  useEffect(() => {
    const idACargar = currentFeriante?.id || selectedFerianteId;
    if (!idACargar) return;
    setLoading(true);
    productoRepository.getByFeriante(idACargar).then((prods) => {
      setProductos(prods);
      setLoading(false);
    });
  }, [selectedFerianteId, currentFeriante]);

  const ferianteActivo = currentFeriante || feriantes.find((f) => f.id === selectedFerianteId);

  // Toggle de stock
  const handleToggleStock = (prodId: string) => {
    setProductos((prev) =>
      prev.map((p) => {
        if (p.id === prodId) {
          const nuevoEstado = !p.enStock;
          onShowToast(
            'success',
            'Stock Actualizado',
            `El producto "${p.titulo}" ahora figura ${nuevoEstado ? 'Disponible' : 'Bajo Pedido'}.`
          );
          return { ...p, enStock: nuevoEstado };
        }
        return p;
      })
    );
  };

  // Guardar edición de precio
  const handleSavePrecio = (prodId: string) => {
    setProductos((prev) =>
      prev.map((p) => {
        if (p.id === prodId) {
          onShowToast(
            'success',
            'Precio Actualizado',
            `Nuevo precio para "${p.titulo}": ${formatARS(tempPrecio)}.`
          );
          return { ...p, precio: tempPrecio };
        }
        return p;
      })
    );
    setEditingPrecioId(null);
  };

  // Eliminar producto
  const handleDeleteProducto = (prodId: string, titulo: string) => {
    if (confirm(`¿Estás seguro de eliminar "${titulo}" del catálogo de tu puesto?`)) {
      setProductos((prev) => prev.filter((p) => p.id !== prodId));
      onShowToast('success', 'Producto Eliminado', `"${titulo}" ha sido quitado de tu puesto.`);
    }
  };

  // Crear nuevo producto
  const handleCreateProducto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ferianteActivo) return;

    const nuevo: Producto = {
      id: `prd-${Date.now()}`,
      titulo: nuevoTitulo,
      precio: Number(nuevoPrecio),
      descripcion: nuevaDesc,
      rubro: nuevoRubro,
      ferianteId: ferianteActivo.id,
      ferianteNombre: ferianteActivo.nombreComercio,
      imagenUrl:
        nuevaImg.trim() ||
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      enStock: true,
      destacado: false,
    };

    setProductos((prev) => [nuevo, ...prev]);
    onShowToast('success', 'Producto Publicado', `"${nuevo.titulo}" se agregó a tu tienda.`);
    setModalOpen(false);
    setNuevoTitulo('');
    setNuevoPrecio(1000);
    setNuevaDesc('');
    setNuevaImg('');
  };

  // Si no está autenticado, mostrar pantalla protegida amigable (Empty / Restricted Access State)
  if (!isAuthenticated || !ferianteActivo) {
    return (
      <div className="min-h-screen bg-sand dark:bg-charcoal text-charcoal-900 dark:text-sand-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-sand-100 dark:bg-charcoal-800 rounded-3xl p-8 border border-sand-300 dark:border-charcoal-700 shadow-xl text-center space-y-6 animate-in zoom-in-95">
          <div className="w-20 h-20 rounded-3xl bg-forest/10 dark:bg-forest-900/30 text-forest mx-auto flex items-center justify-center">
            <Lock className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Área de Feriantes
            </span>
            <h1 className="text-2xl font-black text-charcoal-900 dark:text-white">
              Acceso a Mi Taller
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-600 dark:text-sand-300 leading-relaxed">
              Para gestionar el inventario de tu puesto, modificar precios y actualizar el stock para la feria de este fin de semana, por favor iniciá sesión.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={openLoginModal}
              className="w-full py-3.5 px-6 rounded-2xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Iniciar Sesión como Feriante</span>
            </button>

            <Link
              to="/"
              className="w-full py-3 px-6 rounded-2xl bg-sand-200 dark:bg-charcoal-700 hover:bg-sand-300 dark:hover:bg-charcoal-600 text-charcoal-700 dark:text-sand-200 font-bold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la Portada de la Feria</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sand dark:bg-charcoal text-charcoal-900 dark:text-sand-100 pb-20">
      {/* Header Superior del Panel */}
      <header className="bg-white dark:bg-charcoal-800 border-b border-sand-300 dark:border-charcoal-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2 rounded-xl text-charcoal-500 hover:text-charcoal-900 dark:text-sand-400 dark:hover:text-white hover:bg-sand-200 dark:hover:bg-charcoal-700 transition-colors"
              title="Volver a la portada"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="w-10 h-10 rounded-2xl bg-forest flex items-center justify-center text-white shadow-md">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg sm:text-xl text-charcoal-900 dark:text-white leading-tight">
                Mi Taller • {ferianteActivo.nombreComercio}
              </h1>
              <p className="text-xs text-charcoal-500 dark:text-sand-400">
                Puesto de {ferianteActivo.nombreResponsable} • Gestión en tiempo real
              </p>
            </div>
          </div>

          {/* Acciones y Perfil del Feriante */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span className="text-xs font-semibold text-forest dark:text-forest-400">
                Sesión Activa
              </span>
            </div>

            <div className="flex items-center gap-2">
              {ferianteActivo && (
                <Link
                  to={`/tienda/${ferianteActivo.id}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sand-200 dark:bg-charcoal-700 hover:bg-terracotta hover:text-white text-charcoal-700 dark:text-sand-200 text-xs font-bold transition-all shadow-xs"
                  title="Ver cómo ven los clientes mi tienda pública"
                >
                  <span>Ver Mi Tienda</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}

              <button
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-700 dark:text-rose-300 text-xs font-bold transition-all"
                title="Cerrar sesión del puesto"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Tarjetas de Estadísticas Rápidas */}
        {ferianteActivo && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-charcoal-800 p-5 rounded-3xl border border-sand-300 dark:border-charcoal-700 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta dark:bg-terracotta-900/40 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-charcoal-500 dark:text-sand-400 block font-semibold">
                  Productos Publicados
                </span>
                <span className="text-2xl font-black text-charcoal-900 dark:text-white">
                  {productos.length}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-charcoal-800 p-5 rounded-3xl border border-sand-300 dark:border-charcoal-700 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-forest/10 text-forest dark:bg-forest-900/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-charcoal-500 dark:text-sand-400 block font-semibold">
                  Disponibles en Stock
                </span>
                <span className="text-2xl font-black text-forest">
                  {productos.filter((p) => p.enStock).length}
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-charcoal-800 p-5 rounded-3xl border border-sand-300 dark:border-charcoal-700 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-charcoal-500 dark:text-sand-400 block font-semibold">
                  Ubicación Asignada
                </span>
                <span className="text-sm font-bold text-charcoal-900 dark:text-white truncate block">
                  {ferianteActivo.puestoNumero}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Barra de Gestión de Productos */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-charcoal-900 dark:text-white">
              Catálogo de {ferianteActivo?.nombreComercio}
            </h2>
            <p className="text-xs text-charcoal-500 dark:text-sand-400">
              Modificá precios o disponibilidad con un solo clic.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-terracotta hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Agregar Nuevo Producto</span>
          </button>
        </div>

        {/* Tabla de Productos */}
        <div className="bg-white dark:bg-charcoal-800 rounded-3xl border border-sand-300 dark:border-charcoal-700 shadow-card overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-xs text-charcoal-400 dark:text-sand-500 animate-pulse">
              Cargando catálogo del puesto...
            </div>
          ) : productos.length === 0 ? (
            <div className="p-12 text-center">
              <Package className="w-12 h-12 text-charcoal-300 dark:text-sand-600 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900 dark:text-white mb-1">
                No hay productos en esta tienda
              </h3>
              <p className="text-xs text-charcoal-500 dark:text-sand-400 mb-4">
                Comenzá publicando tu primera creación artesanal.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-forest text-white text-xs font-bold shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Crear Producto</span>
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-sand-100 dark:bg-charcoal-700/60 text-charcoal-600 dark:text-sand-300 font-bold border-b border-sand-200 dark:border-charcoal-700">
                  <tr>
                    <th className="p-4 sm:px-6">Producto</th>
                    <th className="p-4">Rubro</th>
                    <th className="p-4">Precio ($ ARS)</th>
                    <th className="p-4">Disponibilidad</th>
                    <th className="p-4 text-right sm:px-6">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200 dark:divide-charcoal-700">
                  {productos.map((producto) => (
                    <tr
                      key={producto.id}
                      className="hover:bg-sand-50 dark:hover:bg-charcoal-700/40 transition-colors"
                    >
                      {/* Imagen y Título */}
                      <td className="p-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={producto.imagenUrl}
                            alt={producto.titulo}
                            className="w-12 h-12 rounded-xl object-cover shrink-0 bg-sand-200 dark:bg-charcoal-700"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-charcoal-900 dark:text-white block truncate max-w-xs sm:max-w-md">
                              {producto.titulo}
                            </span>
                            <span className="text-[11px] text-charcoal-500 dark:text-sand-400 line-clamp-1">
                              {producto.descripcion}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Rubro */}
                      <td className="p-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sand-200 dark:bg-charcoal-700 text-charcoal-700 dark:text-sand-300">
                          {producto.rubro}
                        </span>
                      </td>

                      {/* Precio con editor rápido */}
                      <td className="p-4 whitespace-nowrap">
                        {editingPrecioId === producto.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="number"
                              value={tempPrecio}
                              onChange={(e) => setTempPrecio(Number(e.target.value))}
                              className="w-24 px-2 py-1 bg-white dark:bg-charcoal-700 border border-terracotta rounded-lg text-xs font-bold"
                              autoFocus
                            />
                            <button
                              onClick={() => handleSavePrecio(producto.id)}
                              className="p-1 text-forest hover:bg-forest-100 dark:hover:bg-forest-900/40 rounded"
                              title="Guardar precio"
                            >
                              <Save className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => setEditingPrecioId(null)}
                              className="p-1 text-red-500 hover:bg-red-100 rounded"
                              title="Cancelar"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="font-black text-terracotta text-sm">
                              {formatARS(producto.precio)}
                            </span>
                            <button
                              onClick={() => {
                                setEditingPrecioId(producto.id);
                                setTempPrecio(producto.precio);
                              }}
                              className="text-charcoal-400 hover:text-charcoal-700 dark:text-sand-500 dark:hover:text-sand-200"
                              title="Editar precio rápido"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </td>

                      {/* Disponibilidad con Toggle */}
                      <td className="p-4 whitespace-nowrap">
                        <button
                          onClick={() => handleToggleStock(producto.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                            producto.enStock
                              ? 'bg-forest-100 dark:bg-forest-900/40 text-forest'
                              : 'bg-sand-200 dark:bg-charcoal-700 text-charcoal-500 dark:text-sand-400'
                          }`}
                          title="Clic para alternar disponibilidad"
                        >
                          {producto.enStock ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>En Stock</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Bajo Pedido</span>
                            </>
                          )}
                        </button>
                      </td>

                      {/* Acciones */}
                      <td className="p-4 text-right whitespace-nowrap sm:px-6">
                        <button
                          onClick={() => handleDeleteProducto(producto.id, producto.titulo)}
                          className="p-2 text-charcoal-400 hover:text-red-500 dark:text-sand-500 dark:hover:text-red-400 transition-colors"
                          title="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Modal para Crear Producto */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-charcoal-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-sand-300 dark:border-charcoal-700 shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-charcoal-900 dark:text-white">
                Publicar en {ferianteActivo?.nombreComercio}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-charcoal-400 hover:text-charcoal-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProducto} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 dark:text-sand-200 mb-1">
                  Título del Producto *
                </label>
                <input
                  type="text"
                  required
                  value={nuevoTitulo}
                  onChange={(e) => setNuevoTitulo(e.target.value)}
                  placeholder="Ej: Mate Torneado en Algarrobo"
                  className="w-full bg-sand-100 dark:bg-charcoal-700 text-charcoal-900 dark:text-white px-3.5 py-2.5 rounded-xl text-xs border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 dark:text-sand-200 mb-1">
                    Precio ($ ARS) *
                  </label>
                  <div className="relative">
                    <DollarSign className="w-3.5 h-3.5 absolute left-3 top-3 text-charcoal-400" />
                    <input
                      type="number"
                      required
                      min={100}
                      value={nuevoPrecio}
                      onChange={(e) => setNuevoPrecio(Number(e.target.value))}
                      className="w-full bg-sand-100 dark:bg-charcoal-700 text-charcoal-900 dark:text-white pl-8 pr-3 py-2.5 rounded-xl text-xs border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 dark:text-sand-200 mb-1">
                    Rubro *
                  </label>
                  <select
                    value={nuevoRubro}
                    onChange={(e) => setNuevoRubro(e.target.value as Rubro)}
                    className="w-full bg-sand-100 dark:bg-charcoal-700 text-charcoal-900 dark:text-white px-3 py-2.5 rounded-xl text-xs border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:outline-none"
                  >
                    <option value="artesanias">Artesanías</option>
                    <option value="ceramica">Cerámica</option>
                    <option value="gastronomia">Gastronomía</option>
                    <option value="marroquineria">Marroquinería</option>
                    <option value="madera">Madera</option>
                    <option value="indumentaria">Indumentaria</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 dark:text-sand-200 mb-1">
                  Descripción Artesanal *
                </label>
                <textarea
                  required
                  rows={3}
                  value={nuevaDesc}
                  onChange={(e) => setNuevaDesc(e.target.value)}
                  placeholder="Materiales, proceso de elaboración, medidas..."
                  className="w-full bg-sand-100 dark:bg-charcoal-700 text-charcoal-900 dark:text-white px-3.5 py-2.5 rounded-xl text-xs border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 dark:text-sand-200 mb-1">
                  URL de la Imagen (opcional)
                </label>
                <input
                  type="url"
                  value={nuevaImg}
                  onChange={(e) => setNuevaImg(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-sand-100 dark:bg-charcoal-700 text-charcoal-900 dark:text-white px-3.5 py-2.5 rounded-xl text-xs border border-sand-300 dark:border-charcoal-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-charcoal-600 dark:text-sand-300 hover:bg-sand-200 dark:hover:bg-charcoal-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-600 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  Publicar en Mi Tienda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
