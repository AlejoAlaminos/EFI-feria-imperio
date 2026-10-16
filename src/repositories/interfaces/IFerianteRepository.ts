import { Feriante, Rubro, UbicacionFeria } from '../../types';

export interface FiltrosFeriante {
  busqueda?: string;
  rubro?: Rubro | 'todos';
  ubicacion?: UbicacionFeria | 'todas';
}

export interface IFerianteRepository {
  getAll(): Promise<Feriante[]>;
  getById(id: string): Promise<Feriante | null>;
  getByUbicacion(ubicacion: UbicacionFeria): Promise<Feriante[]>;
  getConfirmados(): Promise<Feriante[]>;
  filtrar(filtros: FiltrosFeriante): Promise<Feriante[]>;
}
