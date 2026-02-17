import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sendOTP } from '../services/auth.service';
import { formatPhoneToE164 } from '../utils/api-helpers';
import loginBack from "../assets/images/loginBackCrop.png"
import { div } from 'three/tsl';

const Spinner = () => (
  <div className="w-5 h-5 absolute -translate-x-1/2 left-[50%] -translate-y-1/2 border-2 border-white border-t-[#9a7523] rounded-full animate-spin" />
);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [toggle, settoggle] = useState<boolean>(true)
   const [activeProvider, setActiveProvider] = useState<null | "otp" | "google" | "facebook">(null);

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
        purpose: 'LOGIN',
      });

      // Log response for debugging
      console.log('OTP Response:', response);

      setSuccess(response.message || `OTP sent to ${formattedPhone}. Please check your phone.`);
      // Navigate to OTP page with formatted phone, purpose, and original location
      navigate('/otp', { state: { phone: formattedPhone, purpose: 'LOGIN', from } });
    } catch (err: any) {
      console.error('OTP Error:', err);
      setError(err.error?.message || 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };


const handleMockAuth = async (provider: "otp" | "google" | "facebook") => {
  setLoading(true);
  setError(null);

  try {
    await mockLogin(provider);
    navigate("/"); // home pe bhej do
  } catch (e) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};


const mockLogin = (provider: "otp" | "google" | "facebook") => {
  setActiveProvider(provider)
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeUser = {
        id: "USR_" + Date.now(),
        name: "Rahul Lodhi",
        phone: "+919999999999",
        provider,
        isLoggedIn: true,
      };

      localStorage.setItem("authUser", JSON.stringify(fakeUser));
      resolve(fakeUser);
    }, 5000); // 5 sec delay
  });
};


// const handleMockAuth = async (provider: "otp" | "google" | "facebook") => {
//   setLoading(true);
//   setError(null);

//   try {
//     await mockLogin(provider);
//     navigate("/"); // home pe bhej do
//   } catch (e) {
//     setError("Something went wrong");
//   } finally {
//     setLoading(false);
//   }
// };


  return (
    <div style={{ backgroundImage: `url(${loginBack})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🍃</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back to Sublime House Tea
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
      </div> */}


      <div className='container max-w-[1380px] mx-auto '>
        <div className='w-[33vw]  rounded-xl mr-auto bg-[#F6F1E8] py-12 px-6'>

          {/* form header */}
          <div className='text-center space-y-2'>
            <h1 style={{ fontFamily: "gotham-book" }} className='text-4xl font-semibold text-[#9a7523] capitalize'>Sign In</h1>
            <p style={{ fontFamily: "gotham-book" }} className='text-black uppercase font-bold text-[20px] tracking-wide'>
              Choose how you'd like to sign in
            </p>
          </div>

          {/* form input */}
          <div className='mt-8 space-y-4'>
            <label style={{fontFamily:"gotham-light"}} className='block text-sm font-medium uppercase'>
              Enter your mobile number
            </label>

            <div className='flex gap-3 flex-col'>
              <input
                type='tel'

                className='flex-1 border relative bg-[#F1E4B0] rounded-lg px-4 py-2 outline-none focus:ring-0 focus:ring-none'
              />
              <button  onClick={() => handleMockAuth("otp")} style={{ fontFamily: "gotham-book" }} className='px-5 py-2 bg-[#9A7523] relative uppercase text-white rounded-lg text-lg  tracking-wide whitespace-nowrap'>
             
           {activeProvider ? (
  <div className="flex items-center gap-2">
    <div className="h-4 w-4 border-2 border-[#9a7523] text-center border-t-transparent rounded-full animate-spin" />
    <span>Sending...</span>
  </div>
) : (
  "Send OTP"
)}


              </button>
            </div>
          </div>

          {/* divider */}
          <div className='flex items-center my-3'>
            <div className='flex-1 h-[1.6px] bg-black'></div>
            <span className='px-3 text-gray-900 text-2xl'>OR</span>
            
            <div className='flex-1 h-[1.6px] bg-black'></div>

          </div>
          <div style={{fontFamily:"gotham-book"}} className='my-2 text-center text-lg '>
            <p>CONTINUE WITH</p>
          </div>

          {/* continue with */}
          <div className=' flex  justify-center items-center gap-3'>
            <button  onClick={() => handleMockAuth("facebook")} className='w-fit  rounded-lg py-2  gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 42 42" fill="none">
                <g clip-path="url(#clip0_978_2397)">
                  <path d="M42 21C42 9.40209 32.5979 0 21 0C9.40209 0 0 9.40209 0 21C0 31.4816 7.67944 40.1696 17.7188 41.7449V27.0703H12.3867V21H17.7188V16.3734C17.7188 11.1103 20.854 8.20312 25.6508 8.20312C27.9484 8.20312 30.3516 8.61328 30.3516 8.61328V13.7812H27.7036C25.0948 13.7812 24.2812 15.4001 24.2812 17.0609V21H30.1055L29.1744 27.0703H24.2812V41.7449C34.3206 40.1696 42 31.4818 42 21Z" fill="#1877F2" />
                  <path d="M29.1783 27.0703L30.1094 21H24.2852V17.0609C24.2852 15.3999 25.0987 13.7812 27.7075 13.7812H30.3555V8.61328C30.3555 8.61328 27.9523 8.20312 25.6546 8.20312C20.8579 8.20312 17.7227 11.1103 17.7227 16.3734V21H12.3906V27.0703H17.7227V41.7449C18.8081 41.915 19.9052 42.0003 21.0039 42C22.1026 42.0003 23.1997 41.915 24.2852 41.7449V27.0703H29.1783Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_978_2397">
                    <rect width="42" height="42" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button  onClick={() => handleMockAuth("google")} className='w-fit h-fit   rounded-lg py-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path opacity="0.987" fill-rule="evenodd" clip-rule="evenodd" d="M20.2731 2.98406C22.3122 2.75625 23.5188 2.75625 25.7097 2.98406C29.5879 3.55808 33.1831 5.35074 35.9753 8.10281C34.0885 9.88632 32.2264 11.6959 30.3897 13.5309C26.8722 10.5497 22.9459 9.86156 18.6109 11.4666C15.4309 12.9291 13.2166 15.2991 11.9678 18.5766C9.92718 17.0573 7.91312 15.5027 5.92656 13.9134C5.7885 13.8408 5.63082 13.8142 5.47656 13.8375C8.63219 7.75312 13.5634 4.13437 20.2703 2.98125" fill="#F44336" />
                <path opacity="0.997" fill-rule="evenodd" clip-rule="evenodd" d="M5.47383 13.8375C5.63321 13.8131 5.78415 13.8384 5.92665 13.9134C7.91321 15.5027 9.92726 17.0573 11.9679 18.5766C11.6468 19.8536 11.4444 21.1576 11.3632 22.4719C11.4326 23.7431 11.6341 24.9909 11.9679 26.2153L5.62571 31.2637C2.86383 25.4925 2.81321 19.6837 5.47383 13.8375Z" fill="#FFC107" />
                <path opacity="0.999" fill-rule="evenodd" clip-rule="evenodd" d="M35.6772 37.3781C33.7024 35.6366 31.635 34.0029 29.4841 32.4844C31.6403 30.9619 32.9491 28.8731 33.4103 26.2181H22.8438V18.8803C28.9375 18.8297 35.0284 18.8813 41.1166 19.035C42.2716 25.3069 40.9375 30.9619 37.1144 36C36.6598 36.4833 36.1782 36.9432 35.6772 37.3781Z" fill="#448AFF" />
                <path opacity="0.993" fill-rule="evenodd" clip-rule="evenodd" d="M11.9672 26.2181C14.2734 31.95 18.5016 34.6256 24.6516 34.245C26.378 34.0451 28.0332 33.442 29.4834 32.4844C31.6359 34.0069 33.7003 35.6381 35.6766 37.3781C32.5453 40.1919 28.5528 41.8614 24.3506 42.1144C23.3959 42.1907 22.4366 42.1907 21.4819 42.1144C14.3231 41.2706 9.0375 37.6537 5.625 31.2637L11.9672 26.2181Z" fill="#43A047" />
              </svg>
            </button>
          </div>

          {/* footer */}
          <div className='mt-8 space-y-6 text-sm text-gray-600'>

            {/* opt-in text */}
            <div className="space-y-4">
              {/* Top Row */}
              <div className="flex items-center flex-wrap  gap-1    ">
                {/* Left Toggle */}
                {/* <input type="checkbox" className="toggle toggle-sm" /> */}
                <button
                  onClick={() => settoggle(!toggle)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${toggle ? "bg-[#9a7523]" : "bg-gray-300"
                    }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ${toggle ? "translate-x-4" : "translate-x-0"
                      }`}
                  />

                </button>

                {/* Right Text */}
                <p style={{fontFamily:"gotham-light"}} className="font-medium text-right  text-lg text-black">
                  Opt-in for Promotional Marketing Updates on
                </p>
              </div>

              {/* Bottom Center Options */}
              <div className="flex items-center justify-center gap-3  ">
                <div className="flex items-center gap-2">
                  {/* <input type="checkbox" className="toggle toggle-sm" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path d="M7.40771 5.97499C7.56021 5.97916 7.72937 5.98749 7.89021 6.34416C7.99687 6.58166 8.17604 7.01916 8.32271 7.37583C8.43687 7.65333 8.53021 7.88166 8.55354 7.92833C8.60687 8.03499 8.64021 8.15749 8.57021 8.30166L8.54687 8.34999C8.49947 8.46214 8.43479 8.56618 8.35521 8.65833L8.23604 8.79999C8.16521 8.88666 8.09437 8.97166 8.03437 9.03166C7.92687 9.13833 7.81604 9.25333 7.93937 9.46666C8.06271 9.67999 8.49604 10.3817 9.13521 10.9475C9.60269 11.3691 10.1391 11.7074 10.721 11.9475C10.7794 11.9725 10.8266 11.9936 10.8627 12.0108C11.0769 12.1175 11.2044 12.1008 11.3277 11.9575C11.4519 11.8133 11.8635 11.3333 12.0085 11.12C12.1485 10.9067 12.2919 10.94 12.4902 11.0133C12.6885 11.0875 13.7435 11.605 13.9577 11.7108L14.0769 11.7692C14.226 11.84 14.3269 11.8892 14.3702 11.9608C14.4235 12.0517 14.4235 12.4775 14.2469 12.9792C14.0652 13.4792 13.191 13.9592 12.7952 13.9958L12.6827 14.0092C12.3194 14.0525 11.8594 14.1092 10.2194 13.4633C8.19771 12.6683 6.86354 10.6967 6.59437 10.2975L6.55021 10.2342L6.54521 10.2275C6.42271 10.0633 5.67188 9.05916 5.67188 8.02249C5.67188 7.03083 6.16104 6.51416 6.38354 6.27916L6.42271 6.23749C6.49473 6.15614 6.58272 6.09047 6.68121 6.0446C6.77971 5.99872 6.88659 5.97361 6.99521 5.97083C7.13937 5.97083 7.28437 5.97083 7.40771 5.97499Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.81771 17.7758C1.80201 17.8323 1.80148 17.892 1.81619 17.9487C1.8309 18.0055 1.86032 18.0574 1.90149 18.0991C1.94265 18.1409 1.9941 18.171 2.05065 18.1865C2.10719 18.2021 2.16683 18.2024 2.22354 18.1875L6.06271 17.1842C7.28078 17.8439 8.64411 18.1896 10.0294 18.19H10.0327C14.6044 18.19 18.331 14.485 18.331 9.93C18.3339 8.84379 18.1206 7.76787 17.7037 6.76484C17.2868 5.76181 16.6746 4.85171 15.9027 4.0875C15.1321 3.31701 14.2168 2.70648 13.2094 2.29102C12.202 1.87556 11.1224 1.66337 10.0327 1.66666C5.46104 1.66666 1.73438 5.37166 1.73438 9.92583C1.73438 11.375 2.11604 12.7983 2.84271 14.0542L1.81771 17.7758ZM4.04854 14.3858C4.0926 14.2259 4.10439 14.0588 4.08322 13.8943C4.06204 13.7297 4.00833 13.5711 3.92521 13.4275C3.30949 12.3632 2.985 11.1554 2.98438 9.92583C2.98438 6.0675 6.14521 2.91666 10.0327 2.91666C11.9244 2.91666 13.6894 3.6475 15.021 4.97333C15.6762 5.62142 16.1958 6.39349 16.5495 7.2445C16.9032 8.09551 17.0839 9.00842 17.081 9.93C17.081 13.7883 13.9202 16.94 10.0327 16.94H10.0285C8.85162 16.9394 7.6934 16.6455 6.65854 16.085C6.37962 15.934 6.05371 15.8947 5.74688 15.975L3.44521 16.5758L4.04854 14.3858Z" fill="black" />
                  </svg>
                  <span style={{fontFamily:"gotham-light"}} className='text-lg'>WhatsApp</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* <input type="checkbox" className="toggle toggle-sm" /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path d="M6.66667 8.975C6.83889 8.975 6.98889 8.91111 7.11667 8.78333C7.24444 8.65556 7.30833 8.50556 7.30833 8.33333C7.30833 8.16111 7.24444 8.01111 7.11667 7.88333C6.98889 7.75556 6.83889 7.69167 6.66667 7.69167C6.49444 7.69167 6.34444 7.75556 6.21667 7.88333C6.08889 8.01111 6.025 8.16111 6.025 8.33333C6.025 8.50556 6.08889 8.65556 6.21667 8.78333C6.34444 8.91111 6.49444 8.975 6.66667 8.975ZM10 8.975C10.1722 8.975 10.3222 8.91111 10.45 8.78333C10.5778 8.65556 10.6417 8.50556 10.6417 8.33333C10.6417 8.16111 10.5778 8.01111 10.45 7.88333C10.3222 7.75556 10.1722 7.69167 10 7.69167C9.82778 7.69167 9.67778 7.75556 9.55 7.88333C9.42222 8.01111 9.35833 8.16111 9.35833 8.33333C9.35833 8.50556 9.42222 8.65556 9.55 8.78333C9.67778 8.91111 9.82778 8.975 10 8.975ZM13.3333 8.975C13.5056 8.975 13.6556 8.91111 13.7833 8.78333C13.9111 8.65556 13.975 8.50556 13.975 8.33333C13.975 8.16111 13.9111 8.01111 13.7833 7.88333C13.6556 7.75556 13.5056 7.69167 13.3333 7.69167C13.1611 7.69167 13.0111 7.75556 12.8833 7.88333C12.7556 8.01111 12.6917 8.16111 12.6917 8.33333C12.6917 8.50556 12.7556 8.65556 12.8833 8.78333C13.0111 8.91111 13.1611 8.975 13.3333 8.975ZM2.5 16.73V3.84667C2.5 3.46278 2.62861 3.1425 2.88583 2.88583C3.14306 2.62917 3.46306 2.50056 3.84583 2.5H16.1542C16.5375 2.5 16.8575 2.62861 17.1142 2.88583C17.3708 3.14306 17.4994 3.46333 17.5 3.84667V12.8208C17.5 13.2042 17.3714 13.5244 17.1142 13.7817C16.8569 14.0389 16.5369 14.1672 16.1542 14.1667H5.06417L2.5 16.73ZM4.70833 13.3333H16.1542C16.2819 13.3333 16.3994 13.28 16.5067 13.1733C16.6139 13.0667 16.6672 12.9492 16.6667 12.8208V3.84583C16.6667 3.71806 16.6133 3.60056 16.5067 3.49333C16.4 3.38611 16.2825 3.33278 16.1542 3.33333H3.84583C3.71806 3.33333 3.60056 3.38667 3.49333 3.49333C3.38611 3.6 3.33278 3.7175 3.33333 3.84583V14.7042L4.70833 13.3333Z" fill="black" />
                  </svg>
                  <span style={{fontFamily:"gotham-light"}} className='text-lg'>SMS</span>
                </div>
              </div>
            </div>


            {/* policy text */}
            <p style={{fontFamily:"gotham-light"}} className=' text-black text-lg  text-center leading-relaxed'>
              By proceeding, you agree to Sublime’s Privacy Policy, Terms of Use and Important Transactional Updates on WhatsApp, SMS, and Email.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;

