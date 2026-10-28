import { PostulacionStand } from '../../types';

export interface DatosNuevaPostulacion {
  nombreCompleto: string;
  nombreEmprendimiento: string;
  telefono: string;
  email: string;
  rubro: PostulacionStand['rubro'];
  descripcion: string;
  ubicacionPreferencia: PostulacionStand['ubicacionPreferencia'];
}

export interface ResumenPostulacion {
  success: boolean;
  mensaje: string;
  postulacion?: PostulacionStand;
}

export interface IPostulacionRepository {
  crearPostulacion(datos: DatosNuevaPostulacion): Promise<ResumenPostulacion>;
  simularPago(idPostulacion: string): Promise<ResumenPostulacion>;
  obtenerPorId(id: string): Promise<PostulacionStand | null>;
  listarTodas(): Promise<PostulacionStand[]>;
}
