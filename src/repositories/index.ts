import { MockContactoRepository } from './mock/MockContactoRepository';
import { MockFerianteRepository } from './mock/MockFerianteRepository';
import { MockProductoRepository } from './mock/MockProductoRepository';
import { MockPostulacionRepository } from './mock/MockPostulacionRepository';

export * from './interfaces/IContactoRepository';
export * from './interfaces/IFerianteRepository';
export * from './interfaces/IProductoRepository';
export * from './interfaces/IPostulacionRepository';

// Instancias activas inyectadas
export const productoRepository = new MockProductoRepository();
export const ferianteRepository = new MockFerianteRepository();
export const contactoRepository = new MockContactoRepository();
export const postulacionRepository = new MockPostulacionRepository();

