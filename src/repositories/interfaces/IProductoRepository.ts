import { FiltrosCatalogo, Producto, Rubro } from '../../types';

export interface IProductoRepository {
  getAll(): Promise<Producto[]>;
  getById(id: string): Promise<Producto | null>;
  getByRubro(rubro: Rubro): Promise<Producto[]>;
  getByFeriante(ferianteId: string): Promise<Producto[]>;
  filtrar(filtros: FiltrosCatalogo): Promise<Producto[]>;
}
