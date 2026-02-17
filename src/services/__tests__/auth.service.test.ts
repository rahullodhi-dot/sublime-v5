import { sendOTP, loginWithOTP, registerWithOTP, logout, getCurrentUser, isAuthenticated } from '../auth.service';
import * as api from '../../utils/api';

// Mock the API module
jest.mock('../../utils/api');

describe('Auth Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  describe('sendOTP', () => {
    it('should send OTP successfully', async () => {
      const mockResponse = {
        success: true,
        message: 'OTP sent to +919876543210',
        expiresAt: '2025-11-04T10:55:24.043Z',
      };

      (api.apiPost as jest.Mock).mockResolvedValue(mockResponse);

      const result = await sendOTP({
        phone: '+919876543210',
        purpose: 'LOGIN',
      });

      expect(result).toEqual(mockResponse);
      expect(api.apiPost).toHaveBeenCalledWith(
        '/api/send-otp',
        { phone: '+919876543210', purpose: 'LOGIN' }
      );
    });

    it('should handle send OTP error', async () => {
      const mockError = {
        error: {
          status: 400,
          message: 'Invalid phone number',
        },
      };

      (api.apiPost as jest.Mock).mockRejectedValue(mockError);

      await expect(sendOTP({
        phone: '+919876543210',
        purpose: 'LOGIN',
      })).rejects.toEqual(mockError);
    });
  });

  describe('loginWithOTP', () => {
    it('should login with OTP and store token', async () => {
      const mockResponse = {
        success: true,
        jwt: 'test-jwt-token',
        user: {
          id: 1,
          username: 'user_+919876543210',
        },
        message: 'Logged in successfully',
      };

      (api.apiPost as jest.Mock).mockResolvedValue(mockResponse);

      const result = await loginWithOTP({
        phone: '+919876543210',
        otp: '123456',
      });

      expect(result).toEqual(mockResponse);
      expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'test-jwt-token');
      expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockResponse.user));
    });
  });

  describe('registerWithOTP', () => {
    it('should register with OTP and store token', async () => {
      const mockResponse = {
        success: true,
        data: {
          id: 1,
          username: 'user_+919876543210',
          phone: '+919876543210',
        },
        jwt: 'test-jwt-token',
        message: 'User registered successfully',
      };

      (api.apiPost as jest.Mock).mockResolvedValue(mockResponse);

      const result = await registerWithOTP({
        phone: '+919876543210',
        otp: '123456',
        firstName: 'John',
        lastName: 'Doe',
      });

      expect(result).toEqual(mockResponse);
      expect(localStorage.setItem).toHaveBeenCalledWith('authToken', 'test-jwt-token');
      expect(localStorage.setItem).toHaveBeenCalledWith('user', JSON.stringify(mockResponse.data));
    });
  });

  describe('logout', () => {
    it('should remove token and user from localStorage', () => {
      logout();
      expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
      expect(localStorage.removeItem).toHaveBeenCalledWith('user');
    });
  });

  describe('getCurrentUser', () => {
    it('should return user from localStorage', () => {
      const mockUser = { id: 1, username: 'testuser' };
      (localStorage.getItem as jest.Mock).mockReturnValue(JSON.stringify(mockUser));

      const user = getCurrentUser();
      expect(user).toEqual(mockUser);
    });

    it('should return null if no user in localStorage', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue(null);
      const user = getCurrentUser();
      expect(user).toBeNull();
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if token exists', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue('test-token');
      expect(isAuthenticated()).toBe(true);
    });

    it('should return false if no token', () => {
      (localStorage.getItem as jest.Mock).mockReturnValue(null);
      expect(isAuthenticated()).toBe(false);
    });
  });
});

