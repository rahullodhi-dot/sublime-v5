import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendOTP, loginWithOTP, registerWithOTP } from '../services/auth.service';
import { formatPhoneToE164 } from '../utils/api-helpers';

type Purpose = 'LOGIN' | 'SIGNUP';

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get phone and purpose from location state or URL params
  const state = location.state as { phone?: string; purpose?: Purpose; from?: { pathname: string } } | null;
  const [phone, setPhone] = useState(state?.phone || '');
  const [purpose, setPurpose] = useState<Purpose>(state?.purpose || 'LOGIN');
  const [otp, setOtp] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // If no phone in state, redirect back
  useEffect(() => {
    if (!phone) {
      navigate(purpose === 'LOGIN' ? '/login' : '/signup');
    }
  }, [phone, purpose, navigate]);

  const handleResendOTP = async () => {
    setLoading(true);
    setError(null);
    try {
      // Format phone number to E.164 format
      const formattedPhone = formatPhoneToE164(phone);
      
      // Log for debugging
      console.log('Resending OTP to:', formattedPhone);
      
      const response = await sendOTP({
        phone: formattedPhone,
        purpose,
      });
      
      // Log response for debugging
      console.log('OTP Response:', response);
      
      setSuccess(response.message || `OTP resent to ${formattedPhone}. Please check your phone.`);
    } catch (err: any) {
      console.error('OTP Error:', err);
      setError(err.error?.message || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Format phone number to E.164 format
      const formattedPhone = formatPhoneToE164(phone);
      
      if (purpose === 'LOGIN') {
        // For login, verify OTP and login directly
        await loginWithOTP({
          phone: formattedPhone,
          otp,
        });
        // Redirect to the page user was trying to access, or home
        const from = state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } else {
        // For signup, verify OTP and show details form
        if (otp.length === 6) {
          setShowDetails(true);
        } else {
          setError('Please enter a valid 6-digit OTP');
        }
      }
    } catch (err: any) {
      setError(err.error?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Format phone number to E.164 format
      const formattedPhone = formatPhoneToE164(phone);
      
      await registerWithOTP({
        phone: formattedPhone,
        otp,
        firstName,
        lastName,
      });
      // Redirect to the page user was trying to access, or home
      const from = state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(err.error?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (showDetails && purpose === 'SIGNUP') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <span className="text-5xl">🫖</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Complete your profile
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your details to create your account
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 text-red-700 px-4 py-3 rounded">
              <p className="font-medium">{error}</p>
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleRegister}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-colors"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading || !firstName || !lastName}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowDetails(false);
                  setError(null);
                }}
                className="w-full text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🍃</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {purpose === 'LOGIN' ? 'Login to your account' : 'Verify your phone'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {purpose === 'LOGIN' 
              ? 'Welcome back to Sublime House Tea'
              : 'Complete your registration'}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border-l-4 border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-medium">{success}</p>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleVerifyOTP}>
          <div>
            <label htmlFor="otp" className="block text-sm font-semibold text-gray-900 mb-2">
              Enter OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              required
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm text-center text-2xl tracking-widest font-semibold transition-colors"
              placeholder="000000"
            />
            <p className="mt-2 text-sm text-gray-600">
              OTP sent to <span className="font-medium text-gray-900">{phone}</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              If you don't receive OTP, check your backend SMS configuration or try resending.
            </p>
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              {loading ? 'Verifying...' : purpose === 'LOGIN' ? 'Login' : 'Verify OTP'}
            </button>

            <button
              type="button"
              onClick={handleResendOTP}
              disabled={loading}
              className="w-full text-center text-sm font-medium text-green-600 hover:text-green-700 disabled:opacity-50 transition-colors"
            >
              Resend OTP
            </button>

            <button
              type="button"
              onClick={() => {
                navigate(purpose === 'LOGIN' ? '/login' : '/signup');
              }}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Change Phone Number
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;

