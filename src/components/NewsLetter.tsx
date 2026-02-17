import React, { useState } from 'react';
import newsletterBg from '../assets/images/newsletter-bg.png';

const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      // TODO: Integrate with Strapi newsletter API
      // await subscribeNewsletter(email);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <style>{`
        .newsletter-heading {
          font-family: 'Lora', serif !important;
          font-weight: 500 !important;
          font-size: 41px !important;
          line-height: 50px !important;
          letter-spacing: 0 !important;
          text-transform: capitalize !important;
          color: #FFFFFF !important;
        }
        .newsletter-subtext {
          font-family: 'Karla', sans-serif !important;
          font-weight: 300 !important;
          font-size: 16px !important;
          line-height: 23px !important;
          letter-spacing: 0 !important;
          text-transform: capitalize !important;
          color: #FFFFFF !important;
          font-style: normal !important;
        }
        .newsletter-input {
          font-family: 'Karla', sans-serif !important;
          font-weight: 400 !important;
          font-size: 16px !important;
          line-height: 23px !important;
          letter-spacing: 0 !important;
          text-transform: capitalize !important;
          color: #FFFFFF !important;
        }
        .newsletter-input::placeholder {
          font-family: 'Karla', sans-serif !important;
          font-weight: 400 !important;
          font-size: 16px !important;
          line-height: 23px !important;
          letter-spacing: 0 !important;
          text-transform: capitalize !important;
          color: #FFFFFF !important;
          opacity: 1 !important;
        }
        .newsletter-submit-btn {
          font-family: 'Lora', serif !important;
          font-weight: 500 !important;
          font-size: 20px !important;
          line-height: 100% !important;
          letter-spacing: 0.04em !important;
          text-align: center !important;
          color: #FFFFFF !important;
          transition: all 0.3s ease !important;
        }
        .newsletter-submit-btn:hover:not(:disabled) {
          background-color: #FFF7EA !important;
          color: #1A302A !important;
        }
      `}</style>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${newsletterBg})`,
        }}
        // aria-hidden="true"
      />
      
      {/* Dark Overlay for text readability */}
      
      
      {/* Content */}
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-16">
          {/* Left Side - Text Content */}
          <div className="max-w-[700px] :max-w-full md:w-[400px] sm:w-[400px] lg:w-full space-y-5">
            <h2 className="font-lora font-medium 
            text-2xl sm:text-3xl lg:text-[41px] 
            leading-snug lg:leading-[50px] 
            capitalize text-[#FFFFFF]">
              Subscribe To Our Newsletter
              <br />
              For More Updates.
            </h2>
            <p className="font-karla font-normal text-[16px] leading-[23px] tracking-[0] capitalize text-[#FFFFFF]">
              Sublime House Of Tea Is More Than Just A Cup Of Tea, A Jar of Honey, Or A Spice. Founded
              in 2013, Sublime Is In An Attempt To Bring Freshness, Superior Quality And Authenticity
              To Our Daily Lives.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:max-w-lg">
  <form 
    onSubmit={handleSubmit} 
    className="space-y-4 flex flex-col items-center lg:items-end w-full"
  >
    {/* Input Field */}
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Your Email Address"
      aria-label="Email address"
      className="font-karla font-normal text-[16px] leading-[23px] tracking-[0] capitalize text-[#FFFFFF] 
      w-full sm:w-[400px] lg:w-[559px] 
      h-[48px] sm:h-[50px] 
      rounded-[5px] border border-white px-5 outline-none transition-all focus:bg-white/10"
      style={{
        borderWidth: '1px',
        opacity: 1,
        backgroundColor: '#FFFFFF1A'
      }}
      disabled={isSubmitting || isSubmitted}
    />

    {/* Subscribe Button */}
    <button
      type="submit"
      disabled={isSubmitting || isSubmitted}
      className="font-lora font-medium text-[18px] sm:text-[20px] leading-[100%] tracking-[0.04em] 
      text-center text-[#FFFFFF] 
      w-full sm:w-[400px] lg:w-[214px] 
      h-[48px] sm:h-[50px] 
      rounded-[3px] bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 inline text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Subscribing...
        </>
      ) : isSubmitted ? (
        'Subscribed! ✓'
      ) : (
        'Subscribe'
      )}
    </button>

    {/* Success Message Alignment */}
    {isSubmitted && (
      <p className="text-xs text-white/80 text-center lg:text-right w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
        Thank you for subscribing! Check your email for confirmation.
      </p>
    )}
  </form>
</div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
