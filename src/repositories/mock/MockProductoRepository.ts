import { PRODUCTOS_MOCK } from '../../data/mockData';
import { FiltrosCatalogo, Producto, Rubro } from '../../types';
import { IProductoRepository } from '../interfaces/IProductoRepository';
import { normalizeSearchText } from '../../utils/formatters';

export class MockProductoRepository implements IProductoRepository {
  private productos: Producto[] = [...PRODUCTOS_MOCK];

  // Helper para simular latencia de red asíncrona (200ms)
  private async delay(ms: number = 200): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getAll(): Promise<Producto[]> {
    await this.delay();
    return [...this.productos];
  }

  async getById(id: string): Promise<Producto | null> {
    await this.delay();
    const item = this.productos.find((p) => p.id === id);
    return item ? { ...item } : null;
  }

  async getByRubro(rubro: Rubro): Promise<Producto[]> {
    await this.delay();
    return this.productos.filter((p) => p.rubro === rubro);
  }

  async getByFeriante(ferianteId: string): Promise<Producto[]> {
    await this.delay();
    return this.productos.filter((p) => p.ferianteId === ferianteId);
  }

  async filtrar(filtros: FiltrosCatalogo): Promise<Producto[]> {
    await this.delay();
    let resultado = [...this.productos];

    // 1. Filtro por rubro
    if (filtros.rubro !== 'todos') {
      resultado = resultado.filter((p) => p.rubro === filtros.rubro);
    }

    // 2. Filtro por texto de búsqueda
    if (filtros.busqueda.trim() !== '') {
      const term = normalizeSearchText(filtros.busqueda);
      resultado = resultado.filter(
        (p) =>
          normalizeSearchText(p.titulo).includes(term) ||
          normalizeSearchText(p.descripcion).includes(term) ||
          normalizeSearchText(p.ferianteNombre).includes(term) ||
          normalizeSearchText(p.rubro).includes(term) ||
          Object.values(p.especificaciones || {}).some((spec) =>
            normalizeSearchText(spec).includes(term)
          )
      );
    }

    // 3. Filtro por disponibilidad
    if (filtros.soloDisponibles) {
      resultado = resultado.filter((p) => p.enStock);
    }

    // 4. Ordenamiento
    switch (filtros.orden) {
      case 'precio_menor':
        resultado.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio_mayor':
        resultado.sort((a, b) => b.precio - a.precio);
        break;
      case 'destacados':
      default:
        resultado.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
        break;
    }

    return resultado;
  }
}
