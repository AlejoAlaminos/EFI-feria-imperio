import { ConsultaContacto } from '../../types';

export interface ResumenEnvioContacto {
  success: boolean;
  mensaje: string;
  idReferencia?: string;
}

export interface IContactoRepository {
  enviarConsulta(consulta: ConsultaContacto): Promise<ResumenEnvioContacto>;
}
