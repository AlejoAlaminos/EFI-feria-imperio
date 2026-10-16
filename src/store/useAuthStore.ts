import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Feriante } from '../types';
import { ferianteRepository } from '../repositories';

interface AuthState {
  currentFeriante: Feriante | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  loginModalOpen: boolean;

  // Acciones
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (idOrNombre: string, contrasenia?: string) => Promise<{ success: boolean; message: string }>;
  loginDirecto: (feriante: Feriante) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentFeriante: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      loginModalOpen: false,

      openLoginModal: () => set({ loginModalOpen: true, error: null }),
      closeLoginModal: () => set({ loginModalOpen: false, error: null }),

      login: async (idOrNombre: string, contrasenia: string = 'feria123') => {
        set({ isLoading: true, error: null });

        // Simulación de latencia de red de 400ms para feedback visual
        await new Promise((resolve) => setTimeout(resolve, 400));

        try {
          const feriantes = await ferianteRepository.getAll();
          const busquedaLimpia = idOrNombre.trim().toLowerCase();

          const ferianteEncontrado = feriantes.find(
            (f) =>
              f.id.toLowerCase() === busquedaLimpia ||
              f.nombreComercio.toLowerCase().includes(busquedaLimpia) ||
              f.nombreResponsable.toLowerCase().includes(busquedaLimpia) ||
              (f.instagram && f.instagram.toLowerCase().includes(busquedaLimpia))
          );

          if (!ferianteEncontrado) {
            set({
              isLoading: false,
              error: 'No encontramos un puesto registrado con esos datos en la feria.',
            });
            return {
              success: false,
              message: 'Puesto no encontrado. Selecciona uno de los puestos de demostración.',
            };
          }

          // Validación simulada de contraseña
          if (contrasenia.trim() !== 'feria123' && contrasenia.trim() !== 'admin') {
            set({
              isLoading: false,
              error: 'Contraseña incorrecta. Puedes usar la clave estándar "feria123".',
            });
            return {
              success: false,
              message: 'Contraseña incorrecta. Usa "feria123".',
            };
          }

          set({
            currentFeriante: ferianteEncontrado,
            isAuthenticated: true,
            isLoading: false,
            error: null,
            loginModalOpen: false,
          });

          return {
            success: true,
            message: `¡Bienvenido de vuelta, ${ferianteEncontrado.nombreResponsable}! (${ferianteEncontrado.nombreComercio})`,
          };
        } catch {
          set({
            isLoading: false,
            error: 'Ocurrió un error al verificar tus credenciales. Reintenta.',
          });
          return {
            success: false,
            message: 'Error al conectar con el registro de feriantes.',
          };
        }
      },

      loginDirecto: (feriante: Feriante) => {
        set({
          currentFeriante: feriante,
          isAuthenticated: true,
          isLoading: false,
          error: null,
          loginModalOpen: false,
        });
      },

      logout: () => {
        set({
          currentFeriante: null,
          isAuthenticated: false,
          error: null,
          loginModalOpen: false,
        });
      },
    }),
    {
      name: 'feria_imperio_auth',
      partialize: (state) => ({
        currentFeriante: state.currentFeriante,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
