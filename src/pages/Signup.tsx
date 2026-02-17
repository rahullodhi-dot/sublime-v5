import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendOTP } from '../services/auth.service';
import { formatPhoneToE164 } from '../utils/api-helpers';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  // Get the page user was trying to access
  const from = (location.state as { from?: { pathname: string } } | null)?.from;

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Format phone number to E.164 format
      const formattedPhone = formatPhoneToE164(phone);
      
      // Log for debugging
      console.log('Sending OTP to:', formattedPhone);
      
      const response = await sendOTP({
        phone: formattedPhone,
        purpose: 'SIGNUP',
      });
      
      // Log response for debugging
      console.log('OTP Response:', response);
      
      setSuccess(response.message || `OTP sent to ${formattedPhone}. Please check your phone.`);
      // Navigate to OTP page with formatted phone, purpose, and original location
      navigate('/otp', { state: { phone: formattedPhone, purpose: 'SIGNUP', from } });
    } catch (err: any) {
      console.error('OTP Error:', err);
      setError(err.error?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🫖</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join Sublime House Tea community
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

        <form className="mt-8 space-y-6" onSubmit={handleSendOTP}>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm transition-colors"
              placeholder="+919876543210"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

