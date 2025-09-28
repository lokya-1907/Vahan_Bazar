import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { authService } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'dealer' | 'admin';
  phone?: string;
  address?: string;
  favorites?: string[];
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, phone?: string, address?: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  addToFavorites: (bikeId: string) => Promise<void>;
  removeFromFavorites: (bikeId: string) => Promise<void>;
}

type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'AUTH_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'UPDATE_FAVORITES'; payload: string[] };

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return { ...state, isLoading: true };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };
    case 'UPDATE_FAVORITES':
      return {
        ...state,
        user: state.user ? { ...state.user, favorites: action.payload } : null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await authService.getMe();
          dispatch({
            type: 'AUTH_SUCCESS',
            payload: { user: response.user, token },
          });
        } catch (error) {
          localStorage.removeItem('token');
          dispatch({ type: 'AUTH_FAILURE' });
        }
      } else {
        dispatch({ type: 'AUTH_FAILURE' });
      }
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.login(email, password);
      localStorage.setItem('token', response.token);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { user: response.user, token: response.token },
      });
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE' });
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, phone?: string, address?: string) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.register(name, email, password, phone, address);
      localStorage.setItem('token', response.token);
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: { user: response.user, token: response.token },
      });
    } catch (error) {
      dispatch({ type: 'AUTH_FAILURE' });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (userData: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  const addToFavorites = async (bikeId: string) => {
    if (!state.user) return;
    try {
      await authService.addToFavorites(state.user.id, bikeId);
      const updatedFavorites = [...(state.user.favorites || []), bikeId];
      dispatch({ type: 'UPDATE_FAVORITES', payload: updatedFavorites });
    } catch (error) {
      throw error;
    }
  };

  const removeFromFavorites = async (bikeId: string) => {
    if (!state.user) return;
    try {
      await authService.removeFromFavorites(state.user.id, bikeId);
      const updatedFavorites = (state.user.favorites || []).filter(id => id !== bikeId);
      dispatch({ type: 'UPDATE_FAVORITES', payload: updatedFavorites });
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    updateUser,
    addToFavorites,
    removeFromFavorites,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
