// import React, { useState } from 'react';
// import newsletterBg from '../assets/images/newsletter-bg.png';
// import footerVideo from "../assets/video/footerVideo.mp4"

// const NewsletterBanner: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim()) return;

//     setIsSubmitting(true);
//     try {
//       // TODO: Integrate with Strapi newsletter API
//       // await subscribeNewsletter(email);
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
//       setIsSubmitted(true);
//       setEmail('');
//       setTimeout(() => setIsSubmitted(false), 3000);
//     } catch (error) {
//       console.error('Newsletter subscription error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#0a1a0a] py-16 sm:py-20 lg:py-24">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
       
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//         aria-hidden="true"
//       >
//         <video src={footerVideo} loop playsInline muted></video>
//          </div>
      
//       {/* Dark Overlay for text readability */}
//       <div className="absolute inset-0 bg-black/15" aria-hidden="true" />
      
//       {/* Content */}
//       <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
//           {/* Left Side - Text Content */}
//           <div className="max-w-xl space-y-5">
//             <h2 
//               className="text-white capitalize"
//              style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '38px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//             >
//               Subscribe To Our Newsletter
//               <br />
//               For More Updates.
//             </h2>
//             <p 
//               className="text-white capitalize"
//             style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,
//                   opacity:0.8,

//                   fontSize: '16px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//             >
//               Sublime House Of Tea Is More Than Just A Cup Of Tea, A Jar of Honey, Or A Spice. Founded
//               in 2013, Sublime Is In An Attempt To Bring Freshness, Superior Quality And Authenticity
//               To Our Daily Lives.
//             </p>
//           </div>

//           {/* Right Side - Form */}
//           <div className="w-full max-w-md lg:max-w-lg">
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your Email Address"
//                 aria-label="Email address"
//                 className="w-full rounded border bg-transparent px-5 py-3.5 text-sm outline-none transition-all focus:bg-white/5"
//                 style={{
//                   fontFamily: 'Karla, sans-serif',
//                   color: '#FFFFFF',
//                   borderColor: '#FFFFFF',
//                 }}
//                 disabled={isSubmitting || isSubmitted}
//               />
//               <button
//               style={{
//                   fontFamily: "'gotham2', sans-serif",
//                   fontWeight: 100,

//                   fontSize: '18px',
//                   lineHeight: '100%',
//                   letterSpacing: '0%',
//                 }} 
//                 type="submit"
//                 disabled={isSubmitting || isSubmitted}
//                 className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                 style={{
//                   width: '214px',
//                   height: '50px',
//                   borderRadius: '3px',
//                   fontFamily: 'Lora, serif',
//                   fontWeight: 500,
//                   fontSize: '20px',
//                   lineHeight: '100%',
//                   letterSpacing: '0.04em',
//                   textAlign: 'center',
//                   color: '#FFFFFF',
//                 }}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Subscribing...
//                   </>
//                 ) : isSubmitted ? (
//                   'Subscribed! ✓'
//                 ) : (
//                   'Subscribe'
//                 )}
//               </button>
//               {isSubmitted && (
//                 <p className="text-xs text-white/80" style={{ fontFamily: 'Karla, sans-serif' }}>
//                   Thank you for subscribing! Check your email for confirmation.
//                 </p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsletterBanner;


import React, { useState } from 'react';
import footerVideo from "../assets/video/footerVideo.mp4";

const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
    setIsSubmitting(false);
  };

  return (
    <section className="relative bg-[#FFF7EA] overflow-hidden py-20 lg:py-28 lg:h-[70vh]">
      
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <video
          src={footerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-5" />

      {/* Content */}
      <div className="relative max-w-[1450px] mx-auto px-5 lg:px-12 text-black flex flex-col lg:justify-center lg:flex-row lg:items-center gap-10 lg:gap-20">
        
        {/* Left */}
        <div className="max-w-xl space-y-4 mt-10 leading-tight ">
          <h2
            className="text-white lg:w-[600px] text-center lg:text-[40px] text-[22px] "
            style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,
            
            }}
            
          >
            Subscribe To Our Newsletter For More Updates.
          </h2>

          <p
            className="text-white"
            style={{
              fontFamily: "'gotham-light'",
              fontWeight: 100,
              fontSize: '16px',
              lineHeight: '150%',
            }}
            
          >
            Sublime House Of Tea Is More Than Just A Cup Of Tea, A Jar of
            Honey, Or A Spice. Founded in 2013, Sublime Is In An Attempt To
            Bring Freshness, Superior Quality And Authenticity To Our Daily Lives.
          </p>
        </div>

        {/* Right */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="email"
            required
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSubmitted}
            className="w-full border text-sm border-white/80 bg-white/40 placeholder-white/70 py-3 px-4 rounded outline-none focus:bg-white/20 transition"
            style={{ fontFamily: "gotham-light" }}
          />

          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="bg-red-600 hover:[#9A7522] disabled:opacity-50 w-[214px] h-[50px] rounded text-white transition flex items-center justify-center"
            style={{
              fontFamily: "gotham-book",
              fontWeight: 500,
              fontSize: '18px',
              letterSpacing: '0.03em',
            }}
          >
            {isSubmitting ? "Subscribing..." : isSubmitted ? "Subscribed ✓" : "Subscribe"}
          </button>

          {isSubmitted && (
            <p className="text-sm opacity-85" style={{ fontFamily: "Karla, sans-serif" }}>
              Thank you for subscribing! Check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
