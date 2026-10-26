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
  loginModalRole: RolUsuario;
  loginModalMode: 'login' | 'register';

  // Acciones
  openLoginModal: (role?: RolUsuario, mode?: 'login' | 'register') => void;
  closeLoginModal: () => void;
  login: (idOrNombre: string, contrasenia?: string) => Promise<{ success: boolean; message: string }>;
  loginDirecto: (feriante: Feriante) => void;
  loginComprador: (emailOrNombre: string, contrasenia?: string) => Promise<{ success: boolean; message: string }>;
  loginDirectoComprador: (comprador: UsuarioComprador) => void;
  registrarComprador: (nombre: string, email: string, contrasenia?: string, ubicacion?: string) => Promise<{ success: boolean; message: string }>;
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
      loginModalRole: 'comprador',
      loginModalMode: 'login',

      openLoginModal: (role: RolUsuario = 'comprador', mode: 'login' | 'register' = 'login') =>
        set({
          loginModalOpen: true,
          loginModalRole: role,
          loginModalMode: mode,
          error: null,
        }),

      closeLoginModal: () => set({ loginModalOpen: false, error: null }),

      // Inicio de sesi�n para Feriantes
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
              message: 'Puesto no encontrado. Selecciona uno de los puestos de demostraci�n.',
            };
          }

          if (contrasenia.trim() !== 'feria123' && contrasenia.trim() !== 'admin') {
            set({
              isLoading: false,
              error: 'Contrase�a incorrecta. Puedes usar la clave est�ndar "feria123".',
            });
            return {
              success: false,
              message: 'Contrase�a incorrecta. Usa "feria123".',
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
            message: `�Bienvenido de vuelta, ${ferianteEncontrado.nombreResponsable}! (${ferianteEncontrado.nombreComercio})`,
          };
        } catch {
          set({
            isLoading: false,
            error: 'Ocurri� un error al verificar tus credenciales. Reintenta.',
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

      // Inicio de sesi�n para Compradores
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

          // Si no est� registrado en el mock pero ingres� un nombre v�lido, generamos su sesi�n personalizada
          if (!comprador) {
            if (termino.length < 2) {
              set({
                isLoading: false,
                error: 'Por favor, ingres� un nombre o correo v�lido.',
              });
              return {
                success: false,
                message: 'Ingresa un nombre o correo v�lido.',
              };
            }

            comprador = {
              id: `comp-${Date.now()}`,
              nombre: emailOrNombre.trim(),
              email: emailOrNombre.includes('@')
                ? emailOrNombre.trim()
                : `${emailOrNombre.trim().toLowerCase().replace(/\s+/g, '')}@vecino.com`,
              avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
              ubicacion: 'R�o Cuarto',
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
              error: 'Contrase�a demo inv�lida. Usa "comprador123" o al menos 4 caracteres.',
            });
            return {
              success: false,
              message: 'Contrase�a demo incorrecta.',
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
            message: `�Bienvenido/a a Feria Imperio, ${comprador.nombre}!`,
          };
        } catch {
          set({
            isLoading: false,
            error: 'Ocurri� un error al iniciar sesi�n como comprador.',
          });
          return {
            success: false,
            message: 'Error al conectar la sesi�n de comprador.',
          };
        }
      },

      // Registro nuevo para Compradores
      registrarComprador: async (
        nombre: string,
        email: string,
        _contrasenia: string = 'comprador123',
        ubicacion: string = 'R�o Cuarto, C�rdoba'
      ) => {
        set({ isLoading: true, error: null });

        await new Promise((resolve) => setTimeout(resolve, 350));

        try {
          if (!nombre.trim() || !email.trim()) {
            set({
              isLoading: false,
              error: 'Por favor, complet� tu nombre y correo electr�nico.',
            });
            return {
              success: false,
              message: 'Complet� todos los campos requeridos.',
            };
          }

          const nuevoComprador: UsuarioComprador = {
            id: `comp-${Date.now()}`,
            nombre: nombre.trim(),
            email: email.trim().toLowerCase(),
            avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80',
            ubicacion: ubicacion.trim() || 'R�o Cuarto, C�rdoba',
            rol: 'comprador',
          };

          set({
            currentComprador: nuevoComprador,
            currentFeriante: null,
            userRole: 'comprador',
            isAuthenticated: true,
            isLoading: false,
            error: null,
            loginModalOpen: false,
          });

          return {
            success: true,
            message: `�Cuenta creada exitosamente! Bienvenido/a a Feria Imperio, ${nuevoComprador.nombre}.`,
          };
        } catch {
          set({
            isLoading: false,
            error: 'No se pudo crear la cuenta de usuario. Intent� nuevamente.',
          });
          return {
            success: false,
            message: 'Error al registrar la cuenta de usuario.',
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