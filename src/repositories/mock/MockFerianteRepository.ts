import { FERIANTES_MOCK } from '../../data/mockData';
import { Feriante, UbicacionFeria } from '../../types';
import { IFerianteRepository, FiltrosFeriante } from '../interfaces/IFerianteRepository';

export class MockFerianteRepository implements IFerianteRepository {
  private feriantes: Feriante[] = [...FERIANTES_MOCK];

  private async delay(ms: number = 200): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getAll(): Promise<Feriante[]> {
    await this.delay();
    return [...this.feriantes];
  }

  async getById(id: string): Promise<Feriante | null> {
    await this.delay();
    const feriante = this.feriantes.find((f) => f.id === id);
    return feriante ? { ...feriante } : null;
  }

  async getByUbicacion(ubicacion: UbicacionFeria): Promise<Feriante[]> {
    await this.delay();
    return this.feriantes.filter(
      (f) => f.ubicacionFeria === ubicacion || f.ubicacionFeria === 'ambos'
    );
  }

  async getConfirmados(): Promise<Feriante[]> {
    await this.delay();
    return this.feriantes.filter((f) => f.findeConfirmado);
  }

  async filtrar(filtros: FiltrosFeriante): Promise<Feriante[]> {
    await this.delay();
    let lista = [...this.feriantes];

    if (filtros.rubro && filtros.rubro !== 'todos') {
      lista = lista.filter((f) => f.rubroPrincipal === filtros.rubro);
    }

    if (filtros.ubicacion && filtros.ubicacion !== 'todas') {
      lista = lista.filter(
        (f) => f.ubicacionFeria === filtros.ubicacion || f.ubicacionFeria === 'ambos'
      );
    }

    if (filtros.busqueda && filtros.busqueda.trim() !== '') {
      const q = filtros.busqueda.toLowerCase().trim();
      lista = lista.filter(
        (f) =>
          f.nombreComercio.toLowerCase().includes(q) ||
          f.nombreResponsable.toLowerCase().includes(q) ||
          f.bio.toLowerCase().includes(q)
      );
    }

    return lista;
  }
}
