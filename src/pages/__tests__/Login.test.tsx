import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../Login';
import * as authService from '../../services/auth.service';

// Mock the auth service
jest.mock('../../services/auth.service');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const renderLogin = () => {
  return render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe('Login Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render login form', () => {
    renderLogin();
    expect(screen.getByText('Login to your account')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+919876543210')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send otp/i })).toBeInTheDocument();
  });

  it('should send OTP on form submit', async () => {
    const mockResponse = {
      success: true,
      message: 'OTP sent to +919876543210',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(mockResponse);

    renderLogin();

    const phoneInput = screen.getByPlaceholderText('+919876543210');
    const submitButton = screen.getByRole('button', { name: /send otp/i });

    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(authService.sendOTP).toHaveBeenCalledWith({
        phone: '+919876543210',
        purpose: 'LOGIN',
      });
    });
  });

  it('should show error message on OTP send failure', async () => {
    const mockError = {
      error: {
        message: 'Failed to send OTP',
      },
    };

    (authService.sendOTP as jest.Mock).mockRejectedValue(mockError);

    renderLogin();

    const phoneInput = screen.getByPlaceholderText('+919876543210');
    const submitButton = screen.getByRole('button', { name: /send otp/i });

    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Failed to send OTP. Please try again.')).toBeInTheDocument();
    });
  });

  it('should show OTP input after successful OTP send', async () => {
    const mockResponse = {
      success: true,
      message: 'OTP sent to +919876543210',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(mockResponse);

    renderLogin();

    const phoneInput = screen.getByPlaceholderText('+919876543210');
    const submitButton = screen.getByRole('button', { name: /send otp/i });

    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('000000')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });
  });

  it('should login with OTP', async () => {
    const sendOTPResponse = {
      success: true,
      message: 'OTP sent',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    const loginResponse = {
      success: true,
      jwt: 'test-jwt',
      user: { id: 1, username: 'testuser' },
      message: 'Logged in successfully',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(sendOTPResponse);
    (authService.loginWithOTP as jest.Mock).mockResolvedValue(loginResponse);

    renderLogin();

    // Send OTP
    const phoneInput = screen.getByPlaceholderText('+919876543210');
    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(screen.getByRole('button', { name: /send otp/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('000000')).toBeInTheDocument();
    });

    // Enter OTP and login
    const otpInput = screen.getByPlaceholderText('000000');
    fireEvent.change(otpInput, { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(authService.loginWithOTP).toHaveBeenCalledWith({
        phone: '+919876543210',
        otp: '123456',
      });
    });
  });
});

