import { create } from 'zustand';
import { PostulacionStand } from '../types';
import {
  postulacionRepository,
  DatosNuevaPostulacion,
} from '../repositories';

export type PasoPostulacion = 'formulario' | 'pago_simulado' | 'confirmado';

interface PostulacionState {
  isModalOpen: boolean;
  pasoActual: PasoPostulacion;
  postulacionActiva: PostulacionStand | null;
  isLoading: boolean;
  error: string | null;

  // Acciones
  openModal: () => void;
  closeModal: () => void;
  enviarPostulacion: (datos: DatosNuevaPostulacion) => Promise<boolean>;
  simularPago: () => Promise<boolean>;
  reiniciar: () => void;
}

export const usePostulacionStore = create<PostulacionState>((set, get) => ({
  isModalOpen: false,
  pasoActual: 'formulario',
  postulacionActiva: null,
  isLoading: false,
  error: null,

  openModal: () =>
    set({
      isModalOpen: true,
      error: null,
    }),

  closeModal: () =>
    set({
      isModalOpen: false,
    }),

  enviarPostulacion: async (datos: DatosNuevaPostulacion) => {
    set({ isLoading: true, error: null });
    try {
      const respuesta = await postulacionRepository.crearPostulacion(datos);
      if (respuesta.success && respuesta.postulacion) {
        set({
          isLoading: false,
          postulacionActiva: respuesta.postulacion,
          pasoActual: 'pago_simulado',
        });
        return true;
      } else {
        set({
          isLoading: false,
          error: respuesta.mensaje || 'Error al procesar la postulación.',
        });
        return false;
      }
    } catch {
      set({
        isLoading: false,
        error: 'Ocurrió un error inesperado al registrar el stand. Intente nuevamente.',
      });
      return false;
    }
  },

  simularPago: async () => {
    const { postulacionActiva } = get();
    if (!postulacionActiva) {
      set({ error: 'No hay ninguna postulación activa para pagar.' });
      return false;
    }

    set({ isLoading: true, error: null });
    try {
      const respuesta = await postulacionRepository.simularPago(postulacionActiva.id);
      if (respuesta.success && respuesta.postulacion) {
        set({
          isLoading: false,
          postulacionActiva: respuesta.postulacion,
          pasoActual: 'confirmado',
        });
        return true;
      } else {
        set({
          isLoading: false,
          error: respuesta.mensaje || 'Error al procesar el pago simulado.',
        });
        return false;
      }
    } catch {
      set({
        isLoading: false,
        error: 'Error de conexión al simular el cobro.',
      });
      return false;
    }
  },

  reiniciar: () =>
    set({
      pasoActual: 'formulario',
      postulacionActiva: null,
      isLoading: false,
      error: null,
    }),
}));
