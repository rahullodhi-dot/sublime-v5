/**
 * Authentication Hook
 * React hook for managing authentication state
 */

import { useState, useEffect, useCallback } from 'react';
import {
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated,
  getMe,
  type LoginRequest,
  type RegisterRequest,
  type StrapiUser,
} from '../services/auth.service';

interface UseAuthReturn {
  user: StrapiUser | null;
  isLoading: boolean;
  isAuth: boolean;
  loginUser: (credentials: LoginRequest) => Promise<void>;
  registerUser: (userData: RegisterRequest) => Promise<void>;
  logoutUser: () => void;
  refreshUser: () => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<StrapiUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize user from localStorage
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  // Login user
  const loginUser = useCallback(async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);
      const response = await login(credentials);
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Register user
  const registerUser = useCallback(async (userData: RegisterRequest) => {
    try {
      setIsLoading(true);
      const response = await register(userData);
      setUser(response.user);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Logout user
  const logoutUser = useCallback(() => {
    logout();
    setUser(null);
  }, []);

  // Refresh user data from API
  const refreshUser = useCallback(async () => {
    try {
      if (isAuthenticated()) {
        const userData = await getMe();
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      }
    } catch (error) {
      // If API call fails, logout user
      logoutUser();
    }
  }, [logoutUser]);

  return {
    user,
    isLoading,
    isAuth: isAuthenticated(),
    loginUser,
    registerUser,
    logoutUser,
    refreshUser,
  };
};

