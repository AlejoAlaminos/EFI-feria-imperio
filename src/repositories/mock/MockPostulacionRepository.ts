import { PostulacionStand } from '../../types';
import {
  IPostulacionRepository,
  DatosNuevaPostulacion,
  ResumenPostulacion,
} from '../interfaces/IPostulacionRepository';

export class MockPostulacionRepository implements IPostulacionRepository {
  private STORAGE_KEY = 'feria_imperio_postulaciones_stand';
  private COSTO_BASE_STAND = 45000; // $45.000 ARS según especificación de negocio

  private async delay(ms: number = 350): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private leerStorage(): PostulacionStand[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private guardarStorage(postulaciones: PostulacionStand[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(postulaciones));
    } catch {
      // Ignorar cuota excedida en navegadores restrictivos
    }
  }

  async crearPostulacion(datos: DatosNuevaPostulacion): Promise<ResumenPostulacion> {
    await this.delay(400);

    // Validación estricta de campos obligatorios
    if (
      !datos.nombreCompleto?.trim() ||
      !datos.nombreEmprendimiento?.trim() ||
      !datos.telefono?.trim() ||
      !datos.email?.trim() ||
      !datos.rubro ||
      !datos.descripcion?.trim()
    ) {
      return {
        success: false,
        mensaje: 'Por favor complete todos los datos obligatorios del puesto.',
      };
    }

    const idUnico = `stand-${Date.now()}`;
    const nuevaPostulacion: PostulacionStand = {
      id: idUnico,
      nombreCompleto: datos.nombreCompleto.trim(),
      nombreEmprendimiento: datos.nombreEmprendimiento.trim(),
      telefono: datos.telefono.trim(),
      email: datos.email.trim(),
      rubro: datos.rubro,
      descripcion: datos.descripcion.trim(),
      ubicacionPreferencia: datos.ubicacionPreferencia || 'paseo_andino',
      serviciosIncluidos: [
        'Conexión de Luz eléctrica 220V segura para el stand',
        'Red Wi-Fi de alta velocidad para cobros electrónicos y POS',
        'Espacio ferial delimitado de 3x3 metros',
      ],
      costoStand: this.COSTO_BASE_STAND,
      estadoPago: 'pendiente',
      linkPagoSimulado: `https://pagos.feria-imperio.com/checkout/${idUnico}`,
      fechaCreacion: new Date().toISOString(),
    };

    const existentes = this.leerStorage();
    existentes.unshift(nuevaPostulacion);
    this.guardarStorage(existentes);

    return {
      success: true,
      mensaje: '¡Postulación registrada! Generando link de pago seguro...',
      postulacion: nuevaPostulacion,
    };
  }

  async simularPago(idPostulacion: string): Promise<ResumenPostulacion> {
    await this.delay(600);

    const existentes = this.leerStorage();
    const indice = existentes.findIndex((p) => p.id === idPostulacion);

    if (indice === -1) {
      return {
        success: false,
        mensaje: 'No se encontró la postulación asociada para procesar el pago.',
      };
    }

    existentes[indice] = {
      ...existentes[indice],
      estadoPago: 'pagado',
    };

    this.guardarStorage(existentes);

    return {
      success: true,
      mensaje: '¡Pago del 100% acreditado exitosamente! Tu puesto está asegurado para este fin de semana.',
      postulacion: existentes[indice],
    };
  }

  async obtenerPorId(id: string): Promise<PostulacionStand | null> {
    await this.delay(150);
    const existentes = this.leerStorage();
    return existentes.find((p) => p.id === id) || null;
  }

  async listarTodas(): Promise<PostulacionStand[]> {
    await this.delay(200);
    return this.leerStorage();
  }
}
