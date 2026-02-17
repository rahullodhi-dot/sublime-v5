/**
 * Authentication Service
 * Handles all authentication-related API calls to Strapi
 */

import { apiPost, apiGet } from '../utils/api';
import { STRAPI_CONFIG } from '../config/strapi.config';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  SendOTPRequest,
  SendOTPResponse,
  LoginWithOTPRequest,
  LoginWithOTPResponse,
  RegisterWithOTPRequest,
  RegisterWithOTPResponse,
  StrapiUser,
} from '../types/strapi.types';
import type { ApiResponse } from '../utils/api';

// Re-export types for convenience
export type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  SendOTPRequest,
  SendOTPResponse,
  LoginWithOTPRequest,
  LoginWithOTPResponse,
  RegisterWithOTPRequest,
  RegisterWithOTPResponse,
  StrapiUser,
} from '../types/strapi.types';

/**
 * Login user
 */
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await apiPost<LoginResponse>(STRAPI_CONFIG.ENDPOINTS.AUTH.LOGIN, credentials);
  
  // Store JWT token in localStorage
  if (response.jwt) {
    localStorage.setItem('authToken', response.jwt);
    localStorage.setItem('user', JSON.stringify(response.user));
  }
  
  return response;
};

/**
 * Register new user
 */
export const register = async (userData: RegisterRequest): Promise<RegisterResponse> => {
  const response = await apiPost<RegisterResponse>(
    STRAPI_CONFIG.ENDPOINTS.AUTH.REGISTER,
    userData
  );
  
  // Store JWT token in localStorage
  if (response.jwt) {
    localStorage.setItem('authToken', response.jwt);
    localStorage.setItem('user', JSON.stringify(response.user));
  }
  
  return response;
};

/**
 * Logout user
 */
export const logout = (): void => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('user');
};

/**
 * Get current user from localStorage
 */
export const getCurrentUser = (): StrapiUser | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr) as StrapiUser;
  } catch {
    return null;
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};

/**
 * Get JWT token from localStorage
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

/**
 * Forgot password - Send reset password email
 */
export const forgotPassword = async (data: ForgotPasswordRequest): Promise<ApiResponse<any>> => {
  return apiPost(STRAPI_CONFIG.ENDPOINTS.AUTH.FORGOT_PASSWORD, data);
};

/**
 * Reset password
 */
export const resetPassword = async (data: ResetPasswordRequest): Promise<ApiResponse<any>> => {
  return apiPost(STRAPI_CONFIG.ENDPOINTS.AUTH.RESET_PASSWORD, data);
};

/**
 * Change password (for authenticated users)
 */
export const changePassword = async (data: ChangePasswordRequest): Promise<ApiResponse<any>> => {
  return apiPost(STRAPI_CONFIG.ENDPOINTS.AUTH.CHANGE_PASSWORD, data);
};

/**
 * Send email confirmation
 */
export const sendEmailConfirmation = async (email: string): Promise<ApiResponse<any>> => {
  return apiPost(STRAPI_CONFIG.ENDPOINTS.AUTH.SEND_EMAIL_CONFIRMATION, { email });
};

/**
 * Verify email confirmation
 */
export const verifyEmailConfirmation = async (confirmationToken: string): Promise<ApiResponse<any>> => {
  return apiGet(STRAPI_CONFIG.ENDPOINTS.AUTH.EMAIL_CONFIRMATION, {
    confirmation: confirmationToken,
  });
};

/**
 * OTP Service Functions
 */

/**
 * Send OTP
 */
export const sendOTP = async (data: SendOTPRequest): Promise<SendOTPResponse> => {
  const response = await apiPost<SendOTPResponse>(STRAPI_CONFIG.ENDPOINTS.OTP.SEND, data);
  return response;
};

/**
 * Login with OTP
 */
export const loginWithOTP = async (data: LoginWithOTPRequest): Promise<LoginWithOTPResponse> => {
  const response = await apiPost<LoginWithOTPResponse>(
    STRAPI_CONFIG.ENDPOINTS.OTP.LOGIN_WITH_OTP,
    data
  );
  
  // Store JWT token in localStorage
  if (response.jwt) {
    localStorage.setItem('authToken', response.jwt);
    localStorage.setItem('user', JSON.stringify(response.user));
  }
  
  return response;
};

/**
 * Register with OTP
 */
export const registerWithOTP = async (
  data: RegisterWithOTPRequest
): Promise<RegisterWithOTPResponse> => {
  const response = await apiPost<RegisterWithOTPResponse>(
    STRAPI_CONFIG.ENDPOINTS.OTP.REGISTER_WITH_OTP,
    data
  );
  
  // Store JWT token in localStorage
  if (response.jwt) {
    localStorage.setItem('authToken', response.jwt);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  
  return response;
};

/**
 * Get current authenticated user from API
 */
export const getMe = async (): Promise<StrapiUser> => {
  const response = await apiGet<{ data: StrapiUser } | StrapiUser>(STRAPI_CONFIG.ENDPOINTS.ME);
  // Handle both Strapi format {data: ...} and direct format
  return (response as any).data || (response as StrapiUser);
};

