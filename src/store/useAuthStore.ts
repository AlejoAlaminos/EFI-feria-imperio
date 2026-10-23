import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Feriante, UsuarioComprador, RolUsuario } from '../types';
import { ferianteRepository } from '../repositories';
import { COMPRADORES_MOCK } from '../data/mockData';

interface AuthState {
  currentFeriante: Feriante | null;
  currentComprador: UsuarioComprador | null;
  userRole: RolUsuario | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  loginModalOpen: boolean;

  // Acciones
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (idOrNombre: string, contrasenia?: string) => Promise<{ success: boolean; message: string }>;
  loginDirecto: (feriante: Feriante) => void;
  loginComprador: (emailOrNombre: string, contrasenia?: string) => Promise<{ success: boolean; message: string }>;
  loginDirectoComprador: (comprador: UsuarioComprador) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentFeriante: null,
      currentComprador: null,
      userRole: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      loginModalOpen: false,

      openLoginModal: () => set({ loginModalOpen: true, error: null }),
      closeLoginModal: () => set({ loginModalOpen: false, error: null }),

      // Inicio de sesión para Feriantes
      login: async (idOrNombre: string, contrasenia: string = 'feria123') => {
        set({ isLoading: true, error: null });

        await new Promise((resolve) => setTimeout(resolve, 350));

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
            currentComprador: null,
            userRole: 'feriante',
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
          currentComprador: null,
          userRole: 'feriante',
          isAuthenticated: true,
          isLoading: false,
          error: null,
          loginModalOpen: false,
        });
      },

      // Inicio de sesión para Compradores
      loginComprador: async (emailOrNombre: string, contrasenia: string = 'comprador123') => {
        set({ isLoading: true, error: null });

        await new Promise((resolve) => setTimeout(resolve, 350));

        try {
          const termino = emailOrNombre.trim().toLowerCase();

          // Buscar si coincide con alguno de los compradores mock
          let comprador = COMPRADORES_MOCK.find(
            (c) =>
              c.email.toLowerCase() === termino ||
              c.nombre.toLowerCase().includes(termino) ||
              c.id.toLowerCase() === termino
          );

          // Si no está registrado en el mock pero ingresó un nombre válido, generamos su sesión personalizada
          if (!comprador) {
            if (termino.length < 2) {
              set({
                isLoading: false,
                error: 'Por favor, ingresá un nombre o correo válido.',
              });
              return {
                success: false,
                message: 'Nombre o email demasiado corto.',
              };
            }

            comprador = {
              id: `comp-${Date.now().toString(36)}`,
              nombre: emailOrNombre.trim(),
              email: emailOrNombre.includes('@')
                ? emailOrNombre.trim()
                : `${emailOrNombre.trim().toLowerCase().replace(/\s+/g, '')}@vecino.com`,
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
              ubicacion: 'Río Cuarto',
              rol: 'comprador',
            };
          }

          if (
            contrasenia.trim() !== 'comprador123' &&
            contrasenia.trim() !== 'feria123' &&
            contrasenia.trim() !== '123456' &&
            contrasenia.trim().length < 4
          ) {
            set({
              isLoading: false,
              error: 'Contraseña demo inválida. Usa "comprador123" o al menos 4 caracteres.',
            });
            return {
              success: false,
              message: 'Contraseña demo incorrecta.',
            };
          }

          set({
            currentComprador: comprador,
            currentFeriante: null,
            userRole: 'comprador',
            isAuthenticated: true,
            isLoading: false,
            error: null,
            loginModalOpen: false,
          });

          return {
            success: true,
            message: `¡Bienvenido/a a Feria Imperio, ${comprador.nombre}!`,
          };
        } catch {
          set({
            isLoading: false,
            error: 'Ocurrió un error al iniciar sesión como comprador.',
          });
          return {
            success: false,
            message: 'Error al conectar la sesión de comprador.',
          };
        }
      },

      loginDirectoComprador: (comprador: UsuarioComprador) => {
        set({
          currentComprador: comprador,
          currentFeriante: null,
          userRole: 'comprador',
          isAuthenticated: true,
          isLoading: false,
          error: null,
          loginModalOpen: false,
        });
      },

      logout: () => {
        set({
          currentFeriante: null,
          currentComprador: null,
          userRole: null,
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
        currentComprador: state.currentComprador,
        userRole: state.userRole,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
