import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Signup from '../Signup';
import * as authService from '../../services/auth.service';

// Mock the auth service
jest.mock('../../services/auth.service');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

const renderSignup = () => {
  return render(
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  );
};

describe('Signup Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render signup form', () => {
    renderSignup();
    expect(screen.getByText('Create your account')).toBeInTheDocument();
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

    renderSignup();

    const phoneInput = screen.getByPlaceholderText('+919876543210');
    const submitButton = screen.getByRole('button', { name: /send otp/i });

    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(authService.sendOTP).toHaveBeenCalledWith({
        phone: '+919876543210',
        purpose: 'SIGNUP',
      });
    });
  });

  it('should show OTP input after successful OTP send', async () => {
    const mockResponse = {
      success: true,
      message: 'OTP sent to +919876543210',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(mockResponse);

    renderSignup();

    const phoneInput = screen.getByPlaceholderText('+919876543210');
    const submitButton = screen.getByRole('button', { name: /send otp/i });

    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByPlaceholderText('000000')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /verify otp/i })).toBeInTheDocument();
    });
  });

  it('should show details form after OTP verification', async () => {
    const sendOTPResponse = {
      success: true,
      message: 'OTP sent',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(sendOTPResponse);

    renderSignup();

    // Send OTP
    const phoneInput = screen.getByPlaceholderText('+919876543210');
    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(screen.getByRole('button', { name: /send otp/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('000000')).toBeInTheDocument();
    });

    // Verify OTP
    const otpInput = screen.getByPlaceholderText('000000');
    fireEvent.change(otpInput, { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /verify otp/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('John')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Doe')).toBeInTheDocument();
    });
  });

  it('should register with OTP and user details', async () => {
    const sendOTPResponse = {
      success: true,
      message: 'OTP sent',
      expiresAt: '2025-11-04T10:55:24.043Z',
    };

    const registerResponse = {
      success: true,
      data: { id: 1, username: 'user_+919876543210', phone: '+919876543210' },
      jwt: 'test-jwt',
      message: 'User registered successfully',
    };

    (authService.sendOTP as jest.Mock).mockResolvedValue(sendOTPResponse);
    (authService.registerWithOTP as jest.Mock).mockResolvedValue(registerResponse);

    renderSignup();

    // Send OTP
    const phoneInput = screen.getByPlaceholderText('+919876543210');
    fireEvent.change(phoneInput, { target: { value: '+919876543210' } });
    fireEvent.click(screen.getByRole('button', { name: /send otp/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('000000')).toBeInTheDocument();
    });

    // Verify OTP
    const otpInput = screen.getByPlaceholderText('000000');
    fireEvent.change(otpInput, { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /verify otp/i }));

    await waitFor(() => {
      expect(screen.getByPlaceholderText('John')).toBeInTheDocument();
    });

    // Fill details and register
    const firstNameInput = screen.getByPlaceholderText('John');
    const lastNameInput = screen.getByPlaceholderText('Doe');
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(authService.registerWithOTP).toHaveBeenCalledWith({
        phone: '+919876543210',
        otp: '123456',
        firstName: 'John',
        lastName: 'Doe',
      });
    });
  });
});

