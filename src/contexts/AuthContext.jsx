import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

// Usuarios predeterminados para pruebas (Mantenido por compatibilidad)
const PREDEFINED_USERS = [
  {
    username: 'admin',
    password: 'admin123',
    fullName: 'Administrador',
    email: 'admin@essencedetoi.com',
    role: 'ADMIN'
  },
  {
    username: 'tuki',
    password: 'tuki123',
    fullName: 'Tuki Gonzales',
    email: 'tuki@essencedetoi.com',
    role: 'CLIENT'
  },
  {
    username: 'estilista',
    password: 'estilista123',
    fullName: 'Estilista Demo',
    email: 'estilista@essencedetoi.com',
    role: 'STYLIST'
  }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un token y usuario almacenados
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      
      // Validar el token con el servidor en segundo plano
      api.get('/auth/me')
        .then(response => {
          setUser(response.data);
          localStorage.setItem('user', JSON.stringify(response.data));
        })
        .catch(err => {
          console.error("Token no válido o expirado, cerrando sesión automática:", err);
          logout();
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      const { token, user: userData } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);
      return { success: true, user: userData };
    } catch (error) {
      console.error("Error en login:", error);
      const errorMsg = error.response?.data?.error || 'Credenciales inválidas o error de conexión';
      return { success: false, error: errorMsg };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      const { token, user: registeredUser } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(registeredUser));
      setUser(registeredUser);
      setIsAuthenticated(true);
      return { success: true, user: registeredUser };
    } catch (error) {
      console.error("Error en registro:", error);
      const errorMsg = error.response?.data?.error || 'Error al registrar el usuario';
      throw new Error(errorMsg);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, login, logout, register, loading, PREDEFINED_USERS }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

