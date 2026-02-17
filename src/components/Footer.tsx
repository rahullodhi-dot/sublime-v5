// import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/Logo1.png';
// import FacebookIcon from '../assets/images/facebook.png';
// import InstaIcon from '../assets/images/insta.png';
// import EmailIcon from '../assets/images/mail2.png';
// import PhoneIcon from '../assets/images/phone2.png';
// import LocationIcon from '../assets/images/lc2.png';
import DarkLogo from '../assets/images/newWhiteLogo.png';
// import tokri from "../assets/images/tokri.png"
// import Tealeaf from "../assets/images/TealLeaf.png"

// const Footer: React.FC = () => {


//   return (
//     <footer className="bg-[#0B524D] text-gray-900  overflow-hidden">
//       <div className="mx-auto relative max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-10 xl:px-10">
//         {/* <div className='absolute left-0 opacity-10'>
//           <img src={tokri} alt="" />
//         </div>
//          <div className='absolute right-0 -top-20 opacity-20'>
//           <img src={Tealeaf} alt="" />
//         </div> */}
// <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
//   {/* Company Info - Left Column */}
//   <div className="space-y-4 lg:col-span-1">
//     {/* Logo */}
//     <Link
//       to="/"
//       className="inline-block transition-opacity hover:opacity-80"
//       aria-label="Sublime House Tea - Home"
//     >
//       <img
//         src={DarkLogo}
//         alt="Sublime House Tea Logo"
//         className="h-32 w-auto sm:h-24 object-contain"
//       />
//     </Link>

//     {/* Company Description */}
//     <p style={{
//       fontFamily: "'gotham-light', sans-serif",
//       fontWeight: 100,

//       fontSize: '15px',
//       lineHeight: '130%',
//       letterSpacing: '0%',
//     }} className="text-karla font-light  leading-[30px] text-[#F6F1E8] mt-3 sm:mt-4">
//       Sublime House of Tea is more than just a cup of tea, a jar of honey, or a spice. Founded in 2013, Sublime is an attempt to bring freshness, superior quality, and authenticity to our daily lives.
//     </p>

//     {/* Action Buttons */}
//     <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
//       <Link
//         to="/contact"
//         className="flex items-center  rounded py-3 px-4 bg-[#F6F1E8]  text-[#9A7522] justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#1A302A] capitalize  hover:border-[#316763] transition-all active:scale-95"
//         style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '15px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//       >
//         <svg className="h-4 w-4" fill="none" stroke="#9A7522" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//         Locate Us
//       </Link>
//       <Link
//         to="/products?category=gifting"
//         className="flex items-center py-3 px-4 border bg-[#F6F1E8] rounded justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#9A7522] capitalize   hover:border-[#316763] transition-all active:scale-95"
//         style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '15px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }}
//       >
//         <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
//         </svg>
//         Gifting
//       </Link>
//     </div>

//     {/* Horizontal Line */}
//     <div className="">
//       {/* Social Media Icons */}
//       <div className="flex items-center gap-3 sm:gap-3">
//         <a
//           href="https://www.facebook.com/sublimehouse"
//           aria-label="Facebook"
//           className="transition-opacity hover:opacity-70 "
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <g clip-path="url(#clip0_563_1537)">
//               <mask id="mask0_563_1537" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
//                 <path d="M0 0H24V24H0V0Z" fill="white" />
//               </mask>
//               <g mask="url(#mask0_563_1537)">
//                 <path d="M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.207 23.852V15.18H7.237V12.025H10.207V9.927C10.207 6.452 11.9 4.927 14.787 4.927C16.171 4.927 16.902 5.029 17.249 5.076V7.829H15.279C14.053 7.829 13.624 8.992 13.624 10.302V12.026H17.218L16.73 15.181H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z" fill="#FFF2E0" />
//               </g>
//             </g>
//             <defs>
//               <clipPath id="clip0_563_1537">
//                 <rect width="24" height="24" fill="white" />
//               </clipPath>
//             </defs>
//           </svg>
//         </a>
//         <a
//           href="https://www.instagram.com/sublimehouse"
//           aria-label="Instagram"
//           className="transition-opacity  text-[#f6f1e8]"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
//             <path d="M15.1987 2.3335C16.5112 2.337 17.1774 2.344 17.7525 2.36033L17.9789 2.3685C18.2402 2.37783 18.498 2.3895 18.8095 2.4035C20.0509 2.46183 20.8979 2.65783 21.641 2.946C22.411 3.24233 23.0597 3.64366 23.7084 4.29116C24.3018 4.87418 24.7609 5.57971 25.0535 6.3585C25.3417 7.10166 25.5377 7.94866 25.596 9.19116C25.61 9.5015 25.6217 9.75933 25.631 10.0218L25.638 10.2482C25.6555 10.8222 25.6625 11.4883 25.6649 12.8008L25.666 13.6712V15.1995C25.6689 16.0505 25.6599 16.9014 25.6392 17.7522L25.6322 17.9785C25.6229 18.241 25.6112 18.4988 25.5972 18.8092C25.5389 20.0517 25.3405 20.8975 25.0535 21.6418C24.7609 22.4206 24.3018 23.1261 23.7084 23.7092C23.1253 24.3026 22.4198 24.7617 21.641 25.0543C20.8979 25.3425 20.0509 25.5385 18.8095 25.5968L17.9789 25.6318L17.7525 25.6388C17.1774 25.6552 16.5112 25.6633 15.1987 25.6657L14.3284 25.6668H12.8012C11.9498 25.6698 11.0985 25.6609 10.2474 25.64L10.021 25.633C9.74407 25.6225 9.46718 25.6105 9.19036 25.5968C7.94903 25.5385 7.10203 25.3425 6.35769 25.0543C5.57933 24.7616 4.87421 24.3025 4.29153 23.7092C3.69763 23.1263 3.23816 22.4207 2.94519 21.6418C2.65703 20.8987 2.46103 20.0517 2.40269 18.8092L2.36769 17.9785L2.36186 17.7522C2.34036 16.9014 2.33063 16.0505 2.33269 15.1995V12.8008C2.32947 11.9499 2.33802 11.0989 2.35836 10.2482L2.36653 10.0218C2.37586 9.75933 2.38753 9.5015 2.40153 9.19116C2.45986 7.94866 2.65586 7.10283 2.94403 6.3585C3.23767 5.57939 3.69796 4.87384 4.29269 4.29116C4.87504 3.69797 5.57975 3.23892 6.35769 2.946C7.10203 2.65783 7.94786 2.46183 9.19036 2.4035C9.50069 2.3895 9.7597 2.37783 10.021 2.3685L10.2474 2.3615C11.0981 2.34077 11.9491 2.33182 12.8 2.33466L15.1987 2.3335ZM13.9994 8.16683C12.4523 8.16683 10.9685 8.78141 9.87457 9.87537C8.78061 10.9693 8.16603 12.4531 8.16603 14.0002C8.16603 15.5473 8.78061 17.031 9.87457 18.125C10.9685 19.2189 12.4523 19.8335 13.9994 19.8335C15.5465 19.8335 17.0302 19.2189 18.1242 18.125C19.2181 17.031 19.8327 15.5473 19.8327 14.0002C19.8327 12.4531 19.2181 10.9693 18.1242 9.87537C17.0302 8.78141 15.5465 8.16683 13.9994 8.16683ZM13.9994 10.5002C14.459 10.5001 14.9141 10.5905 15.3388 10.7664C15.7635 10.9422 16.1493 11.1999 16.4744 11.5249C16.7995 11.8498 17.0573 12.2356 17.2333 12.6602C17.4093 13.0848 17.4999 13.54 17.4999 13.9996C17.5 14.4592 17.4096 14.9143 17.2337 15.339C17.0579 15.7637 16.8002 16.1496 16.4752 16.4746C16.1503 16.7997 15.7645 17.0576 15.3399 17.2335C14.9153 17.4095 14.4602 17.5001 14.0005 17.5002C13.0723 17.5002 12.182 17.1314 11.5257 16.475C10.8693 15.8187 10.5005 14.9284 10.5005 14.0002C10.5005 13.0719 10.8693 12.1817 11.5257 11.5253C12.182 10.8689 13.0723 10.5002 14.0005 10.5002M20.1255 6.41683C19.7388 6.41683 19.3678 6.57047 19.0943 6.84397C18.8208 7.11746 18.6672 7.48839 18.6672 7.87516C18.6672 8.26194 18.8208 8.63287 19.0943 8.90636C19.3678 9.17985 19.7388 9.3335 20.1255 9.3335C20.5123 9.3335 20.8832 9.17985 21.1567 8.90636C21.4302 8.63287 21.5839 8.26194 21.5839 7.87516C21.5839 7.48839 21.4302 7.11746 21.1567 6.84397C20.8832 6.57047 20.5123 6.41683 20.1255 6.41683Z" fill="#FFF2E0" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Discover Column */}
//   <div className="space-y-3 sm:space-y-4">
//     <h4 style={{
//       fontFamily: "'gotham-light', sans-serif",
//       fontWeight: 100,

//       fontSize: '16px',
//       lineHeight: '100%',
//       letterSpacing: '0%',
//     }} className="text-lora font-semibold text-base leading-[30px] text-[#F6F1E8] uppercase tracking-wide">DISCOVER</h4>
//     <ul className="space-y-2 sm:space-y-6">
//       <li style={{
//         fontFamily: "'gotham-light', sans-serif",
//         fontWeight: 100,

//         fontSize: '18px',
//         lineHeight: '100%',
//         letterSpacing: '0%',
//       }}>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/faq" className="  text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           FAQ
//         </Link>
//       </li>
//       <li style={{
//         fontFamily: "'gotham-light', sans-serif",
//         fontWeight: 100,

//         fontSize: '12px',
//         lineHeight: '100%',
//         letterSpacing: '0%',
//       }}>
//         <Link style={{
//           fontFamily: "'gotham', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/about" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           About US
//         </Link>
//       </li>
//       <li style={{
//         fontFamily: "'gotham-light', sans-serif",
//         fontWeight: 100,

//         fontSize: '12px',
//         lineHeight: '100%',
//         letterSpacing: '0%',
//       }}>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/legal/disclaimer" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Disclaimer
//         </Link>
//       </li>
//       <li style={{
//         fontFamily: "'gotham-light', sans-serif",
//         fontWeight: 100,

//         fontSize: '12px',
//         lineHeight: '100%',
//         letterSpacing: '0%',
//       }}>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/blogs" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Blog
//         </Link>
//       </li>
//       <li style={{
//         fontFamily: "'gotham-light', sans-serif",
//         fontWeight: 100,

//         fontSize: '12px',
//         lineHeight: '100%',
//         letterSpacing: '0%',
//       }}>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/contact" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Contact Us
//         </Link>
//       </li>
//     </ul>
//   </div>

//   {/* Help Center Column */}
//   <div className="space-y-3 sm:space-y-4">
//     <h4 style={{
//       fontFamily: "'gotham', sans-serif",
//       fontWeight: 100,

//       fontSize: '16px',
//       lineHeight: '100%',
//       letterSpacing: '0%',
//     }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">HELP CENTER</h4>
//     <ul className="space-y-2 sm:space-y-1">
//       <li>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/returns" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Return &amp; Refund
//         </Link>
//       </li>
//       <li>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/privacy-policy" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Privacy &amp; Policy
//         </Link>
//       </li>
//       <li>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/terms-of-service" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Terms Of Service
//         </Link>
//       </li>
//       <li>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/brochure" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Brochure
//         </Link>
//       </li>
//       <li>
//         <Link style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} to="/tracking" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           Track Order
//         </Link>
//       </li>
//     </ul>
//   </div>

//   {/* Address Column */}
//   <div className="space-y-3 sm:space-y-4">
//     <h4 style={{
//       fontFamily: "'gotham', sans-serif",
//       fontWeight: 100,

//       fontSize: '16px',
//       lineHeight: '100%',
//       letterSpacing: '0%',
//     }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">ADDRESS</h4>
//     <div className="space-y-2.5 sm:space-y-3">
//       <div className="flex items-start gap-2 sm:gap-3">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M11.5 7C12.163 7 12.7989 7.26339 13.2678 7.73223C13.7366 8.20107 14 8.83696 14 9.5C14 9.8283 13.9353 10.1534 13.8097 10.4567C13.6841 10.76 13.4999 11.0356 13.2678 11.2678C13.0356 11.4999 12.76 11.6841 12.4567 11.8097C12.1534 11.9353 11.8283 12 11.5 12C10.837 12 10.2011 11.7366 9.73223 11.2678C9.26339 10.7989 9 10.163 9 9.5C9 8.83696 9.26339 8.20107 9.73223 7.73223C10.2011 7.26339 10.837 7 11.5 7ZM11.5 8C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11C11.8978 11 12.2794 10.842 12.5607 10.5607C12.842 10.2794 13 9.89782 13 9.5C13 9.10218 12.842 8.72064 12.5607 8.43934C12.2794 8.15804 11.8978 8 11.5 8ZM6.8 12.36L11.5 20.09L16.2 12.36C16.71 11.5 17 10.55 17 9.5C17 8.04131 16.4205 6.64236 15.3891 5.61091C14.3576 4.57946 12.9587 4 11.5 4C10.0413 4 8.64236 4.57946 7.61091 5.61091C6.57946 6.64236 6 8.04131 6 9.5C6 10.55 6.29 11.5 6.8 12.36ZM17.05 12.88L11.5 22L5.95 12.88C5.35 11.89 5 10.74 5 9.5C5 7.77609 5.68482 6.12279 6.90381 4.90381C8.12279 3.68482 9.77609 3 11.5 3C13.2239 3 14.8772 3.68482 16.0962 4.90381C17.3152 6.12279 18 7.77609 18 9.5C18 10.74 17.65 11.89 17.05 12.88Z" fill="#F6F1E8" />
//         </svg>
//         <p style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,
//           fontSize: '12px',
//           lineHeight: '130%',
//           letterSpacing: '0%',
//         }} className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]">Prestige Falcon Towers, 19, Brunton Road, Bengaluru 560025</p>
//       </div>
//       <div className="flex items-center gap-2 sm:gap-3">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M16.04 19.506C13.2575 18.7925 10.7179 17.3445 8.68671 15.3133C6.65555 13.2821 5.20749 10.7425 4.494 7.96C3.949 5.819 5.79 4 8 4L9 4C9.552 4 9.995 4.449 10.05 4.998C10.1405 5.9084 10.3555 6.80207 10.689 7.654L9.169 9.174C10.3554 11.6489 12.3511 13.6446 14.826 14.831L16.346 13.311C17.1979 13.6448 18.0916 13.8602 19.002 13.951C19.552 14.005 20 14.448 20 15L20 16C20 18.21 18.181 20.051 16.04 19.506Z" stroke="#F6F1E8" stroke-linecap="round" stroke-linejoin="round" />
//         </svg>
//         <a style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} href="tel:08069496126" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
//           +91 9035827204
//         </a>
//       </div>
//       <div className="flex items-center gap-2 sm:gap-3">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 12.116L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.564 20 17.384V6.884L12 12.116ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H4V6.885Z" fill="#F6F1E8" />
//         </svg>
//         <a style={{
//           fontFamily: "'gotham-light', sans-serif",
//           fontWeight: 100,

//           fontSize: '12px',
//           lineHeight: '100%',
//           letterSpacing: '0%',
//         }} href="mailto:mohammed.maqsood@sublime.in" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors break-all">
//           mohammed.maqsood@sublime.in
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

{/* #FFFEF1 */ }
{/* Bottom Copyright Bar */ }
// <div className="mt-8 sm:mt-10 lg:mt-3 border-t border-[#316763] pt-4 sm:pt-6">
//   <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
//     <p style={{
//       fontFamily: "'gotham-light', sans-serif",
//       fontWeight: 100,

//       fontSize: '12px',
//       lineHeight: '100%',
//       letterSpacing: '0%',
//     }} className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] text-center">© {currentYear} Sublime House of Tea | All rights reserved</p>
//   </div>
// </div>
// </div>

//       {/* Scroll to Top Button - Red Circular */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 bg-[#9a7522] text-white rounded-full shadow-lg hover:bg-[#b83d3d] transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-50"
//         aria-label="Scroll to top"
//       >
//         <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </button>
//     </footer>
//   );
// };

// export default Footer;




import React, { useRef, useMemo, useEffect } from "react";
// import { Facebook, Instagram, Twitter } from "lucide-react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import bottomTree from "../assets/images/bottomTree.png"


/* ---------------- CAMERA RIG ---------------- */
const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    vec.set(mouse.x * 1.2, mouse.y * 1.2, camera.position.z);
    camera.position.lerp(vec, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

/* ---------------- FALLING LEAVES ---------------- */
const FallingLeaves = ({ count = 60 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);



  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.3, 0.3, 0.3, 0.8, 0, 1);
    shape.bezierCurveTo(-0.3, 0.8, -0.3, 0.3, 0, 0);
    return new THREE.ShapeGeometry(shape);
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        roughness: 0.35,
        metalness: 0.4,
        emissive: new THREE.Color("#1a2f1c"),
        emissiveIntensity: 0.15,
      }),
    []
  );

  const particles = useMemo(() => {
    const colors = ["#FFD700", "#C8A97E", "#E8EDE6", "#FFFFFF"];
    return Array.from({ length: count }).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 40,
        Math.random() * 20,
        (Math.random() - 0.5) * 25
      ),
      rot: new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      ),
      speed: 0.01 + Math.random() * 0.02,
      sway: Math.random() * Math.PI * 2,
      scale: 0.25 + Math.random() * 0.35,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const color = new THREE.Color();
    particles.forEach((p, i) => {
      color.set(p.color);
      mesh.current.setColorAt(i, color);
    });
    mesh.current.instanceColor!.needsUpdate = true;
  }, [particles]);

  useFrame(({ clock }) => {
    particles.forEach((p, i) => {
      p.pos.y -= p.speed;
      p.pos.x += Math.sin(clock.elapsedTime + p.sway) * 0.01;
      p.rot.x += 0.004;
      p.rot.y += 0.006;

      if (p.pos.y < -12) {
        p.pos.y = 15;
      }

      dummy.position.copy(p.pos);
      dummy.rotation.copy(p.rot);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[geometry, material, count]} />
  );
};

/* ---------------- FOOTER ---------------- */
const Footer: React.FC = () => {

  const [leafCount, setLeafCount] = React.useState(50);

  useEffect(() => {
    const updateLeafCount = () => {
      if (window.innerWidth < 640) {
        setLeafCount(90); // small phones
      } else if (window.innerWidth < 1024) {
        setLeafCount(90); // tablets
      } else {
        setLeafCount(60); // desktop
      }
    };

    updateLeafCount();
    window.addEventListener("resize", updateLeafCount);
    return () => window.removeEventListener("resize", updateLeafCount);
  }, []);
  return (
    <footer className="relative  bg-[#316763] text-[#E8EDE6] overflow-hidden">

      <div className="absolute  top-0 left-0 h-full">
        <img
          src={bottomTree}
          alt=""
          className="opacity-20 w-full  h-auto object-contain"
        />
      </div>
      {/* <div className="absolute top-0 right-0 w-64 scale-x-[-1]">
  <img
    src={bottomTree}
    alt=""
    className="opacity-60 h-full object-contain"
  />
</div> */}


      {/* THREE BACKGROUND */}
      <div className="absolute  inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
          <Rig />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 15, 10]} intensity={1.3} color="#FFF4D6" />
          <pointLight position={[-10, 5, 10]} intensity={0.6} color="#C8A97E" />
          <fog attach="fog" args={["#0b140e", 18, 60]} />
          <FallingLeaves count={leafCount} />
        </Canvas>
      </div>

      {/* SOFT GOLD GLOW */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-gold/10 blur-[200px] rounded-full" />

      <div className="relative z-10   container mx-auto px-6 lg:px-12 pt-20 pb-10">

        {/* MAIN GRID */}


        <div className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-6 
  gap-10 
 
  
  lg:py-2">
          {/* Company Info - Left Column */}
          <div className="space-y-4 lg:col-span-2 ">
            {/* Logo */}
            <Link
              to="/"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Sublime House Tea - Home"
            >
              <img
                src={DarkLogo}
                alt="Sublime House Tea Logo"
                className="h-32 w-auto sm:h-24 object-contain"
              />
            </Link>

            {/* Company Description */}
            <p style={{
              fontFamily: "'gotham-light', sans-serif",
              fontWeight: 100,

              fontSize: '14px',
              lineHeight: '130%',
              letterSpacing: '0%',
            }} className="text-karla font-light  tracking-[0.09rem] leading-[30px] text-[#F6F1E8] mt-3 sm:mt-4">
              Sublime House of Tea is more than just a cup of tea, a jar of honey, or a spice. Founded in 2013, Sublime is an attempt to bring freshness, superior quality, and authenticity to our daily lives.
            </p>

            {/* Action Buttons */}


            {/* Horizontal Line */}
            {/* <div className="">
              {/* Social Media Icons */}
            {/* <div className="flex items-center gap-3 sm:gap-3">
                <a
                  href="https://www.facebook.com/sublimehouse"
                  aria-label="Facebook"
                  className="transition-opacity hover:opacity-70 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_563_1537)">
                      <mask id="mask0_563_1537" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_563_1537)">
                        <path d="M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.207 23.852V15.18H7.237V12.025H10.207V9.927C10.207 6.452 11.9 4.927 14.787 4.927C16.171 4.927 16.902 5.029 17.249 5.076V7.829H15.279C14.053 7.829 13.624 8.992 13.624 10.302V12.026H17.218L16.73 15.181H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z" fill="#FFF2E0" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_563_1537">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sublimehouse"
                  aria-label="Instagram"
                  className="transition-opacity  text-[#f6f1e8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M15.1987 2.3335C16.5112 2.337 17.1774 2.344 17.7525 2.36033L17.9789 2.3685C18.2402 2.37783 18.498 2.3895 18.8095 2.4035C20.0509 2.46183 20.8979 2.65783 21.641 2.946C22.411 3.24233 23.0597 3.64366 23.7084 4.29116C24.3018 4.87418 24.7609 5.57971 25.0535 6.3585C25.3417 7.10166 25.5377 7.94866 25.596 9.19116C25.61 9.5015 25.6217 9.75933 25.631 10.0218L25.638 10.2482C25.6555 10.8222 25.6625 11.4883 25.6649 12.8008L25.666 13.6712V15.1995C25.6689 16.0505 25.6599 16.9014 25.6392 17.7522L25.6322 17.9785C25.6229 18.241 25.6112 18.4988 25.5972 18.8092C25.5389 20.0517 25.3405 20.8975 25.0535 21.6418C24.7609 22.4206 24.3018 23.1261 23.7084 23.7092C23.1253 24.3026 22.4198 24.7617 21.641 25.0543C20.8979 25.3425 20.0509 25.5385 18.8095 25.5968L17.9789 25.6318L17.7525 25.6388C17.1774 25.6552 16.5112 25.6633 15.1987 25.6657L14.3284 25.6668H12.8012C11.9498 25.6698 11.0985 25.6609 10.2474 25.64L10.021 25.633C9.74407 25.6225 9.46718 25.6105 9.19036 25.5968C7.94903 25.5385 7.10203 25.3425 6.35769 25.0543C5.57933 24.7616 4.87421 24.3025 4.29153 23.7092C3.69763 23.1263 3.23816 22.4207 2.94519 21.6418C2.65703 20.8987 2.46103 20.0517 2.40269 18.8092L2.36769 17.9785L2.36186 17.7522C2.34036 16.9014 2.33063 16.0505 2.33269 15.1995V12.8008C2.32947 11.9499 2.33802 11.0989 2.35836 10.2482L2.36653 10.0218C2.37586 9.75933 2.38753 9.5015 2.40153 9.19116C2.45986 7.94866 2.65586 7.10283 2.94403 6.3585C3.23767 5.57939 3.69796 4.87384 4.29269 4.29116C4.87504 3.69797 5.57975 3.23892 6.35769 2.946C7.10203 2.65783 7.94786 2.46183 9.19036 2.4035C9.50069 2.3895 9.7597 2.37783 10.021 2.3685L10.2474 2.3615C11.0981 2.34077 11.9491 2.33182 12.8 2.33466L15.1987 2.3335ZM13.9994 8.16683C12.4523 8.16683 10.9685 8.78141 9.87457 9.87537C8.78061 10.9693 8.16603 12.4531 8.16603 14.0002C8.16603 15.5473 8.78061 17.031 9.87457 18.125C10.9685 19.2189 12.4523 19.8335 13.9994 19.8335C15.5465 19.8335 17.0302 19.2189 18.1242 18.125C19.2181 17.031 19.8327 15.5473 19.8327 14.0002C19.8327 12.4531 19.2181 10.9693 18.1242 9.87537C17.0302 8.78141 15.5465 8.16683 13.9994 8.16683ZM13.9994 10.5002C14.459 10.5001 14.9141 10.5905 15.3388 10.7664C15.7635 10.9422 16.1493 11.1999 16.4744 11.5249C16.7995 11.8498 17.0573 12.2356 17.2333 12.6602C17.4093 13.0848 17.4999 13.54 17.4999 13.9996C17.5 14.4592 17.4096 14.9143 17.2337 15.339C17.0579 15.7637 16.8002 16.1496 16.4752 16.4746C16.1503 16.7997 15.7645 17.0576 15.3399 17.2335C14.9153 17.4095 14.4602 17.5001 14.0005 17.5002C13.0723 17.5002 12.182 17.1314 11.5257 16.475C10.8693 15.8187 10.5005 14.9284 10.5005 14.0002C10.5005 13.0719 10.8693 12.1817 11.5257 11.5253C12.182 10.8689 13.0723 10.5002 14.0005 10.5002M20.1255 6.41683C19.7388 6.41683 19.3678 6.57047 19.0943 6.84397C18.8208 7.11746 18.6672 7.48839 18.6672 7.87516C18.6672 8.26194 18.8208 8.63287 19.0943 8.90636C19.3678 9.17985 19.7388 9.3335 20.1255 9.3335C20.5123 9.3335 20.8832 9.17985 21.1567 8.90636C21.4302 8.63287 21.5839 8.26194 21.5839 7.87516C21.5839 7.48839 21.4302 7.11746 21.1567 6.84397C20.8832 6.57047 20.5123 6.41683 20.1255 6.41683Z" fill="#FFF2E0" />
                  </svg>
                </a>
              </div> */}
            {/* </div> */}
          </div>

          {/* Discover Column */}
          <div className="space-y-3  sm:space-y-4 lg:ml-12">
            <h4 style={{
              fontFamily: "'gotham'",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora  font-semibold text-base leading-[30px] text-[#F6F1E8] uppercase tracking-wide">Explore</h4>
            <ul className="space-y-2 sm:space-y-6 flex justify-start items-center flex-wrap  gap-4 ">
              <li style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,

                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/faq" className="  text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  FAQ
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,

                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/about" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  About US
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,

                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/legal/disclaimer" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,

                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/blogs" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Blog
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,

                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/contact" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center Column */}
          {/* <div className="space-y-3 sm:space-y-4">
            <h4 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">HELP CENTER</h4>
            <ul className="space-y-2 sm:space-y-1">
              <li>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/returns" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Return &amp; Refund
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/privacy-policy" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Privacy &amp; Policy
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/terms-of-service" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/brochure" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Brochure
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/tracking" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Address Column */}
          <div className="space-y-4 sm:space-y-4 lg:col-span-2">
            <h4 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">CONTACT</h4>
            <div className="space-y-2.5 sm:space-y-3 mb-3        ">
              <div className="flex items-start gap-3 sm:gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M11.5 7C12.163 7 12.7989 7.26339 13.2678 7.73223C13.7366 8.20107 14 8.83696 14 9.5C14 9.8283 13.9353 10.1534 13.8097 10.4567C13.6841 10.76 13.4999 11.0356 13.2678 11.2678C13.0356 11.4999 12.76 11.6841 12.4567 11.8097C12.1534 11.9353 11.8283 12 11.5 12C10.837 12 10.2011 11.7366 9.73223 11.2678C9.26339 10.7989 9 10.163 9 9.5C9 8.83696 9.26339 8.20107 9.73223 7.73223C10.2011 7.26339 10.837 7 11.5 7ZM11.5 8C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11C11.8978 11 12.2794 10.842 12.5607 10.5607C12.842 10.2794 13 9.89782 13 9.5C13 9.10218 12.842 8.72064 12.5607 8.43934C12.2794 8.15804 11.8978 8 11.5 8ZM6.8 12.36L11.5 20.09L16.2 12.36C16.71 11.5 17 10.55 17 9.5C17 8.04131 16.4205 6.64236 15.3891 5.61091C14.3576 4.57946 12.9587 4 11.5 4C10.0413 4 8.64236 4.57946 7.61091 5.61091C6.57946 6.64236 6 8.04131 6 9.5C6 10.55 6.29 11.5 6.8 12.36ZM17.05 12.88L11.5 22L5.95 12.88C5.35 11.89 5 10.74 5 9.5C5 7.77609 5.68482 6.12279 6.90381 4.90381C8.12279 3.68482 9.77609 3 11.5 3C13.2239 3 14.8772 3.68482 16.0962 4.90381C17.3152 6.12279 18 7.77609 18 9.5C18 10.74 17.65 11.89 17.05 12.88Z" fill="#F6F1E8" />
                </svg>
                <p style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: '14px',
                  lineHeight: '130%',
                  letterSpacing: '0%',
                }} className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]">Prestige Falcon Towers, 19, Brunton Road, Bengaluru 560025</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.04 19.506C13.2575 18.7925 10.7179 17.3445 8.68671 15.3133C6.65555 13.2821 5.20749 10.7425 4.494 7.96C3.949 5.819 5.79 4 8 4L9 4C9.552 4 9.995 4.449 10.05 4.998C10.1405 5.9084 10.3555 6.80207 10.689 7.654L9.169 9.174C10.3554 11.6489 12.3511 13.6446 14.826 14.831L16.346 13.311C17.1979 13.6448 18.0916 13.8602 19.002 13.951C19.552 14.005 20 14.448 20 15L20 16C20 18.21 18.181 20.051 16.04 19.506Z" stroke="#F6F1E8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} href="tel:08069496126" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors">
                  +91 9035827204
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 12.116L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.564 20 17.384V6.884L12 12.116ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H4V6.885Z" fill="#F6F1E8" />
                </svg>
                <a style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,

                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} href="mailto:mohammed.maqsood@sublime.in" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]  transition-colors break-all">
                  mohammed.maqsood@sublime.in
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
<<<<<<< HEAD
                <button style={{ fontFamily: "gotham-book" }} className='border justify-center whitespace-nowrap items-center flex-nowrap w-fit border-[#9a7523] px-3 text-sm py-1 bg-[#f6f1e8] text-[#9a7523] rounded-lg  gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='inline'>
                    <path d="M4.9245 4.5H19.0785C19.2198 4.5 19.3385 4.548 19.4345 4.644C19.5305 4.74 19.5785 4.859 19.5785 5.001C19.5785 5.143 19.5305 5.26167 19.4345 5.357C19.3385 5.45233 19.2198 5.5 19.0785 5.5H4.9245C4.7825 5.5 4.66384 5.452 4.5685 5.356C4.47317 5.26 4.42517 5.141 4.4245 4.999C4.42384 4.857 4.47184 4.73833 4.5685 4.643C4.66517 4.54767 4.78384 4.5 4.9245 4.5ZM5.3095 19.5C5.08084 19.5 4.88884 19.4227 4.7335 19.268C4.57817 19.1133 4.50084 18.9213 4.5015 18.692V13.5H4.0575C3.80484 13.5 3.5945 13.3983 3.4265 13.195C3.2585 12.9917 3.20784 12.7637 3.2745 12.511L4.2745 8.127C4.31584 7.94433 4.41184 7.79433 4.5625 7.677C4.71317 7.559 4.8845 7.5 5.0765 7.5H18.9265C19.1185 7.5 19.2898 7.55867 19.4405 7.676C19.5912 7.794 19.6872 7.94433 19.7285 8.127L20.7285 12.511C20.7952 12.7643 20.7445 12.9923 20.5765 13.195C20.4085 13.3977 20.1985 13.4993 19.9465 13.5H19.5015V19C19.5015 19.142 19.4535 19.2607 19.3575 19.356C19.2615 19.4513 19.1425 19.4993 19.0005 19.5C18.8585 19.5007 18.7398 19.4527 18.6445 19.356C18.5492 19.2593 18.5015 19.1407 18.5015 19V13.5H13.5015V18.692C13.5015 18.9213 13.4242 19.1133 13.2695 19.268C13.1148 19.4227 12.9228 19.5 12.6935 19.5H5.3095ZM5.5015 18.5H12.5015V13.5H5.5015V18.5ZM4.2815 12.5H19.7215L18.7935 8.5H5.2095L4.2815 12.5Z" fill="#9A7522" />
                  </svg><span>Locate us</span></button>
=======
                <button style={{ fontFamily: "gotham-book" }} className='border justify-center whitespace-nowrap items-center flex-nowrap w-fit border-[#9a7523] px-3 text-sm py-1 bg-[#f6f1e8] text-[#9a7523] rounded-lg  gap-1'> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='inline'>
                  <path d="M4.9245 4.5H19.0785C19.2198 4.5 19.3385 4.548 19.4345 4.644C19.5305 4.74 19.5785 4.859 19.5785 5.001C19.5785 5.143 19.5305 5.26167 19.4345 5.357C19.3385 5.45233 19.2198 5.5 19.0785 5.5H4.9245C4.7825 5.5 4.66384 5.452 4.5685 5.356C4.47317 5.26 4.42517 5.141 4.4245 4.999C4.42384 4.857 4.47184 4.73833 4.5685 4.643C4.66517 4.54767 4.78384 4.5 4.9245 4.5ZM5.3095 19.5C5.08084 19.5 4.88884 19.4227 4.7335 19.268C4.57817 19.1133 4.50084 18.9213 4.5015 18.692V13.5H4.0575C3.80484 13.5 3.5945 13.3983 3.4265 13.195C3.2585 12.9917 3.20784 12.7637 3.2745 12.511L4.2745 8.127C4.31584 7.94433 4.41184 7.79433 4.5625 7.677C4.71317 7.559 4.8845 7.5 5.0765 7.5H18.9265C19.1185 7.5 19.2898 7.55867 19.4405 7.676C19.5912 7.794 19.6872 7.94433 19.7285 8.127L20.7285 12.511C20.7952 12.7643 20.7445 12.9923 20.5765 13.195C20.4085 13.3977 20.1985 13.4993 19.9465 13.5H19.5015V19C19.5015 19.142 19.4535 19.2607 19.3575 19.356C19.2615 19.4513 19.1425 19.4993 19.0005 19.5C18.8585 19.5007 18.7398 19.4527 18.6445 19.356C18.5492 19.2593 18.5015 19.1407 18.5015 19V13.5H13.5015V18.692C13.5015 18.9213 13.4242 19.1133 13.2695 19.268C13.1148 19.4227 12.9228 19.5 12.6935 19.5H5.3095ZM5.5015 18.5H12.5015V13.5H5.5015V18.5ZM4.2815 12.5H19.7215L18.7935 8.5H5.2095L4.2815 12.5Z" fill="#9A7522" />
                </svg><span>Locate us</span></button>
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266
                <button style={{ fontFamily: "gotham-book" }} className='border justify-center items-center border-[#9a7523] px-3 text-sm py-1 bg-[#f6f1e8] text-[#9a7523] rounded-lg flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 11V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V11" stroke="#9A7522" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 5.5C12 4.57174 11.6313 3.6815 10.9749 3.02513C10.3185 2.36875 9.42826 2 8.5 2C7.83696 2 7.20107 2.26339 6.73223 2.73223C6.26339 3.20107 6 3.83696 6 4.5C6 5.16304 6.26339 5.79893 6.73223 6.26777C7.20107 6.73661 7.83696 7 8.5 7H12M12 5.5V7M12 5.5C12 4.57174 12.3687 3.6815 13.0251 3.02513C13.6815 2.36875 14.5717 2 15.5 2C16.163 2 16.7989 2.26339 17.2678 2.73223C17.7366 3.20107 18 3.83696 18 4.5C18 4.8283 17.9353 5.15339 17.8097 5.45671C17.6841 5.76002 17.4999 6.03562 17.2678 6.26777C17.0356 6.49991 16.76 6.68406 16.4567 6.8097C16.1534 6.93534 15.8283 7 15.5 7H12" stroke="#9A7522" stroke-linejoin="round" />
                  <path d="M12 11V21M3 7H21V11H3V7Z" stroke="#9A7522" stroke-linecap="round" stroke-linejoin="round" />
                </svg>Gifting</button>
              </div>


            </div>
          </div>

<<<<<<< HEAD
          <div className="flex flex-col justify-start  space-y-3 sm:space-y-4">
=======
          <div className="flex flex-col space-y-3 sm:space-y-4">
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266

            <h4 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">Social</h4>

            {/* Locate Us */}


            {/* Gifting */}


            {/* Facebook */}
<<<<<<< HEAD
            <div className='flex gap-3 flex-col '>
              <a
                href="https://www.facebook.com/sublimehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3  transition-colors"
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#F6F1E8",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 10V14H9.5V21H13.5V14H16.5L17.5 10H13.5V8C13.5 7.455 13.955 7 14.5 7H17.5V3H14.5C11.777 3 9.5 5.277 9.5 8V10H6.5Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Facebook
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sublimehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3  transition-colors"
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#F6F1E8",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17 6.5H17.5M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.4628 11.4873C15.5302 11.942 15.5073 12.4055 15.3956 12.8514C15.2838 13.2973 15.0853 13.7168 14.8114 14.0859C14.5375 14.4551 14.1936 14.7667 13.7993 15.0029C13.405 15.2392 12.968 15.3954 12.5133 15.4628C12.0586 15.5302 11.5951 15.5073 11.1492 15.3956C10.7033 15.2838 10.2839 15.0853 9.9147 14.8114C9.16915 14.2583 8.67387 13.4316 8.53781 12.5133C8.40175 11.595 8.63607 10.6603 9.18921 9.9147C9.74235 9.16915 10.569 8.67387 11.4873 8.53781C12.4056 8.40175 13.3404 8.63607 14.0859 9.18921C14.8315 9.74235 15.3268 10.569 15.4628 11.4873Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                Instagram
              </a>

              <a
                href="/contact"
                className="flex items-center gap-2 sm:gap-3    transition-colors"
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#F6F1E8",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.4386 3.06006H5.55859C4.89612 3.06191 4.26131 3.32589 3.79287 3.79433C3.32443 4.26277 3.06044 4.89759 3.05859 5.56006V18.4401C3.06044 19.1025 3.32443 19.7373 3.79287 20.2058C4.26131 20.6742 4.89612 20.9382 5.55859 20.9401H18.4386C19.1016 20.9401 19.7375 20.6767 20.2064 20.2078C20.6752 19.739 20.9386 19.1031 20.9386 18.4401V5.56006C20.9386 4.89702 20.6752 4.26113 20.2064 3.79229C19.7375 3.32345 19.1016 3.06006 18.4386 3.06006ZM19.9386 18.4401C19.936 18.8371 19.7771 19.2171 19.4964 19.4978C19.2156 19.7786 18.8356 19.9374 18.4386 19.9401H5.55859C5.16158 19.9374 4.78157 19.7786 4.50083 19.4978C4.22009 19.2171 4.06121 18.8371 4.05859 18.4401V5.56006C4.06121 5.16304 4.22009 4.78303 4.50083 4.50229C4.78157 4.22156 5.16158 4.06268 5.55859 4.06006H18.4386C18.8356 4.06268 19.2156 4.22156 19.4964 4.50229C19.7771 4.78303 19.936 5.16304 19.9386 5.56006V18.4401Z" fill="#F6F1E8" />
                  <path d="M6.375 10.748C6.375 10.4828 6.48036 10.2285 6.66789 10.0409C6.85543 9.8534 7.10978 9.74805 7.375 9.74805C7.64022 9.74805 7.89457 9.8534 8.08211 10.0409C8.26964 10.2285 8.375 10.4828 8.375 10.748V17.248C8.375 17.5133 8.26964 17.7676 8.08211 17.9552C7.89457 18.1427 7.64022 18.248 7.375 18.248C7.10978 18.248 6.85543 18.1427 6.66789 17.9552C6.48036 17.7676 6.375 17.5133 6.375 17.248V10.748Z" fill="#F6F1E8" />
                  <path d="M7.375 7.74402C7.92728 7.74402 8.375 7.2963 8.375 6.74402C8.375 6.19173 7.92728 5.74402 7.375 5.74402C6.82272 5.74402 6.375 6.19173 6.375 6.74402C6.375 7.2963 6.82272 7.74402 7.375 7.74402Z" fill="#F6F1E8" />
                  <path d="M17.6206 13.37V17.25C17.6206 17.5152 17.5153 17.7696 17.3277 17.9571C17.1402 18.1446 16.8858 18.25 16.6206 18.25C16.3554 18.25 16.1011 18.1446 15.9135 17.9571C15.726 17.7696 15.6206 17.5152 15.6206 17.25V13.37C15.6206 12.9417 15.4505 12.5309 15.1476 12.228C14.8447 11.9251 14.4339 11.755 14.0056 11.755C13.5773 11.755 13.1665 11.9251 12.8636 12.228C12.5608 12.5309 12.3906 12.9417 12.3906 13.37V17.25C12.3906 17.5152 12.2853 17.7696 12.0977 17.9571C11.9102 18.1446 11.6558 18.25 11.3906 18.25C11.1254 18.25 10.8711 18.1446 10.6835 17.9571C10.496 17.7696 10.3906 17.5152 10.3906 17.25V10.75C10.3947 10.4861 10.5014 10.2341 10.6881 10.0474C10.8747 9.86079 11.1267 9.75411 11.3906 9.74999C11.56 9.74535 11.7275 9.78658 11.8753 9.86931C12.0232 9.95205 12.146 10.0732 12.2306 10.22C12.7805 9.90834 13.4025 9.74652 14.0346 9.75071C14.6666 9.7549 15.2864 9.92495 15.8321 10.2439C16.3778 10.5628 16.8302 11.0194 17.1441 11.568C17.4579 12.1166 17.6223 12.7379 17.6206 13.37Z" fill="#F6F1E8" />
                </svg>
                linkedin
              </a>

              <a
                href="/products?category=gifting"
                className="flex items-center gap-2 sm:gap-3   pl-1 transition-colors"
                style={{
                  fontFamily: "'gotham-light', sans-serif",
                  fontWeight: 100,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#F6F1E8",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                  <path d="M19 6.93967C19 6.89227 19 6.83841 18.9979 6.77593C18.9958 6.60142 18.9915 6.40535 18.9873 6.19637C18.9703 5.59526 18.9406 4.99631 18.894 4.43182C18.8304 3.65405 18.7371 3.00554 18.6098 2.51862C18.4756 2.01048 18.2124 1.54704 17.8466 1.17463C17.4808 0.80222 17.0252 0.533879 16.5253 0.39643C15.9252 0.232687 14.7504 0.131425 13.0964 0.0689442C12.3097 0.0387811 11.4679 0.0193904 10.626 0.0086179C10.3312 0.00430889 10.0577 0.00215451 9.81172 0H9.18828C8.9423 0.00215451 8.66875 0.00430889 8.37399 0.0086179C7.53214 0.0193904 6.69029 0.0387811 5.90357 0.0689442C4.24955 0.133579 3.07266 0.234841 2.47466 0.39643C1.97464 0.533541 1.51887 0.801769 1.15303 1.17423C0.787183 1.5467 0.524112 2.01031 0.390179 2.51862C0.260826 3.00554 0.169643 3.65405 0.106027 4.43182C0.059375 4.99631 0.0296875 5.59526 0.0127232 6.19637C0.00636157 6.40535 0.00424104 6.60142 0.0021205 6.77593C0.0021205 6.83841 0 6.89227 0 6.93967V7.06033C0 7.10772 -3.23635e-08 7.16159 0.0021205 7.22407C0.00424104 7.39858 0.00848211 7.59464 0.0127232 7.80363C0.0296875 8.40474 0.059375 9.00369 0.106027 9.56817C0.169643 10.346 0.262946 10.9945 0.390179 11.4814C0.661607 12.5134 1.45893 13.3278 2.47466 13.6036C3.07266 13.7673 4.24955 13.8686 5.90357 13.9311C6.69029 13.9612 7.53214 13.9806 8.37399 13.9914C8.66875 13.9957 8.9423 13.9978 9.18828 14H9.81172C10.0577 13.9978 10.3312 13.9957 10.626 13.9914C11.4679 13.9806 12.3097 13.9612 13.0964 13.9311C14.7504 13.8664 15.9273 13.7652 16.5253 13.6036C17.5411 13.3278 18.3384 12.5155 18.6098 11.4814C18.7392 10.9945 18.8304 10.346 18.894 9.56817C18.9406 9.00369 18.9703 8.40474 18.9873 7.80363C18.9936 7.59464 18.9958 7.39858 18.9979 7.22407C18.9979 7.16159 19 7.10772 19 7.06033V6.93967ZM17.4732 7.05171C17.4732 7.09695 17.4732 7.14651 17.4711 7.20468C17.469 7.37273 17.4647 7.55802 17.4605 7.75839C17.4456 8.33149 17.416 8.90458 17.3714 9.43675C17.3142 10.1305 17.2336 10.6993 17.1339 11.0806C17.0025 11.5783 16.6165 11.9726 16.1288 12.104C15.6835 12.2247 14.5617 12.3216 13.0371 12.3798C12.2652 12.41 11.4339 12.4294 10.6048 12.4401C10.3143 12.4444 10.045 12.4466 9.80324 12.4466H9.19676L8.3952 12.4401C7.56607 12.4294 6.73694 12.41 5.96295 12.3798C4.43828 12.3195 3.3144 12.2247 2.87121 12.104C2.38348 11.9705 1.99754 11.5783 1.86607 11.0806C1.76641 10.6993 1.68583 10.1305 1.62857 9.43675C1.58404 8.90458 1.55647 8.33149 1.53951 7.75839C1.53315 7.55802 1.53103 7.37058 1.52891 7.20468C1.52891 7.14651 1.52679 7.0948 1.52679 7.05171V6.94829C1.52679 6.90305 1.52679 6.85349 1.52891 6.79532C1.53103 6.62727 1.53527 6.44198 1.53951 6.24161C1.55435 5.66851 1.58404 5.09541 1.62857 4.56325C1.68583 3.8695 1.76641 3.30071 1.86607 2.91936C1.99754 2.42167 2.38348 2.02739 2.87121 1.89597C3.31652 1.77532 4.43828 1.67836 5.96295 1.62019C6.73482 1.59003 7.56607 1.57064 8.3952 1.55986C8.68571 1.55556 8.95502 1.5534 9.19676 1.5534H9.80324L10.6048 1.55986C11.4339 1.57064 12.2631 1.59003 13.0371 1.62019C14.5617 1.68052 15.6856 1.77532 16.1288 1.89597C16.6165 2.02955 17.0025 2.42167 17.1339 2.91936C17.2336 3.30071 17.3142 3.8695 17.3714 4.56325C17.416 5.09541 17.4435 5.66851 17.4605 6.24161C17.4669 6.44198 17.469 6.62942 17.4711 6.79532C17.4711 6.85349 17.4732 6.9052 17.4732 6.94829V7.05171ZM7.61272 9.88704L12.5324 6.97845L7.61272 4.11296V9.88704Z" fill="white" />
                </svg>
                Youtube
              </a>
            </div>
=======
            <a
              href="https://www.facebook.com/sublimehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3  transition-colors"
              style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#F6F1E8",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6.5 10V14H9.5V21H13.5V14H16.5L17.5 10H13.5V8C13.5 7.455 13.955 7 14.5 7H17.5V3H14.5C11.777 3 9.5 5.277 9.5 8V10H6.5Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Facebook
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sublimehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3  transition-colors"
              style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#F6F1E8",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17 6.5H17.5M3 9.4C3 7.16 3 6.04 3.436 5.184C3.81949 4.43139 4.43139 3.81949 5.184 3.436C6.04 3 7.16 3 9.4 3H14.6C16.84 3 17.96 3 18.816 3.436C19.5686 3.81949 20.1805 4.43139 20.564 5.184C21 6.04 21 7.16 21 9.4V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V9.4Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.4628 11.4873C15.5302 11.942 15.5073 12.4055 15.3956 12.8514C15.2838 13.2973 15.0853 13.7168 14.8114 14.0859C14.5375 14.4551 14.1936 14.7667 13.7993 15.0029C13.405 15.2392 12.968 15.3954 12.5133 15.4628C12.0586 15.5302 11.5951 15.5073 11.1492 15.3956C10.7033 15.2838 10.2839 15.0853 9.9147 14.8114C9.16915 14.2583 8.67387 13.4316 8.53781 12.5133C8.40175 11.595 8.63607 10.6603 9.18921 9.9147C9.74235 9.16915 10.569 8.67387 11.4873 8.53781C12.4056 8.40175 13.3404 8.63607 14.0859 9.18921C14.8315 9.74235 15.3268 10.569 15.4628 11.4873Z" stroke="#F6F1E8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              Instagram
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 sm:gap-3    transition-colors"
              style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#F6F1E8",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18.4386 3.06006H5.55859C4.89612 3.06191 4.26131 3.32589 3.79287 3.79433C3.32443 4.26277 3.06044 4.89759 3.05859 5.56006V18.4401C3.06044 19.1025 3.32443 19.7373 3.79287 20.2058C4.26131 20.6742 4.89612 20.9382 5.55859 20.9401H18.4386C19.1016 20.9401 19.7375 20.6767 20.2064 20.2078C20.6752 19.739 20.9386 19.1031 20.9386 18.4401V5.56006C20.9386 4.89702 20.6752 4.26113 20.2064 3.79229C19.7375 3.32345 19.1016 3.06006 18.4386 3.06006ZM19.9386 18.4401C19.936 18.8371 19.7771 19.2171 19.4964 19.4978C19.2156 19.7786 18.8356 19.9374 18.4386 19.9401H5.55859C5.16158 19.9374 4.78157 19.7786 4.50083 19.4978C4.22009 19.2171 4.06121 18.8371 4.05859 18.4401V5.56006C4.06121 5.16304 4.22009 4.78303 4.50083 4.50229C4.78157 4.22156 5.16158 4.06268 5.55859 4.06006H18.4386C18.8356 4.06268 19.2156 4.22156 19.4964 4.50229C19.7771 4.78303 19.936 5.16304 19.9386 5.56006V18.4401Z" fill="#F6F1E8" />
                <path d="M6.375 10.748C6.375 10.4828 6.48036 10.2285 6.66789 10.0409C6.85543 9.8534 7.10978 9.74805 7.375 9.74805C7.64022 9.74805 7.89457 9.8534 8.08211 10.0409C8.26964 10.2285 8.375 10.4828 8.375 10.748V17.248C8.375 17.5133 8.26964 17.7676 8.08211 17.9552C7.89457 18.1427 7.64022 18.248 7.375 18.248C7.10978 18.248 6.85543 18.1427 6.66789 17.9552C6.48036 17.7676 6.375 17.5133 6.375 17.248V10.748Z" fill="#F6F1E8" />
                <path d="M7.375 7.74402C7.92728 7.74402 8.375 7.2963 8.375 6.74402C8.375 6.19173 7.92728 5.74402 7.375 5.74402C6.82272 5.74402 6.375 6.19173 6.375 6.74402C6.375 7.2963 6.82272 7.74402 7.375 7.74402Z" fill="#F6F1E8" />
                <path d="M17.6206 13.37V17.25C17.6206 17.5152 17.5153 17.7696 17.3277 17.9571C17.1402 18.1446 16.8858 18.25 16.6206 18.25C16.3554 18.25 16.1011 18.1446 15.9135 17.9571C15.726 17.7696 15.6206 17.5152 15.6206 17.25V13.37C15.6206 12.9417 15.4505 12.5309 15.1476 12.228C14.8447 11.9251 14.4339 11.755 14.0056 11.755C13.5773 11.755 13.1665 11.9251 12.8636 12.228C12.5608 12.5309 12.3906 12.9417 12.3906 13.37V17.25C12.3906 17.5152 12.2853 17.7696 12.0977 17.9571C11.9102 18.1446 11.6558 18.25 11.3906 18.25C11.1254 18.25 10.8711 18.1446 10.6835 17.9571C10.496 17.7696 10.3906 17.5152 10.3906 17.25V10.75C10.3947 10.4861 10.5014 10.2341 10.6881 10.0474C10.8747 9.86079 11.1267 9.75411 11.3906 9.74999C11.56 9.74535 11.7275 9.78658 11.8753 9.86931C12.0232 9.95205 12.146 10.0732 12.2306 10.22C12.7805 9.90834 13.4025 9.74652 14.0346 9.75071C14.6666 9.7549 15.2864 9.92495 15.8321 10.2439C16.3778 10.5628 16.8302 11.0194 17.1441 11.568C17.4579 12.1166 17.6223 12.7379 17.6206 13.37Z" fill="#F6F1E8" />
              </svg>
              linkedin
            </a>

            <a
              href="/products?category=gifting"
              className="flex items-center gap-2 sm:gap-3   pl-1 transition-colors"
              style={{
                fontFamily: "'gotham-light', sans-serif",
                fontWeight: 100,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#F6F1E8",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
                <path d="M19 6.93967C19 6.89227 19 6.83841 18.9979 6.77593C18.9958 6.60142 18.9915 6.40535 18.9873 6.19637C18.9703 5.59526 18.9406 4.99631 18.894 4.43182C18.8304 3.65405 18.7371 3.00554 18.6098 2.51862C18.4756 2.01048 18.2124 1.54704 17.8466 1.17463C17.4808 0.80222 17.0252 0.533879 16.5253 0.39643C15.9252 0.232687 14.7504 0.131425 13.0964 0.0689442C12.3097 0.0387811 11.4679 0.0193904 10.626 0.0086179C10.3312 0.00430889 10.0577 0.00215451 9.81172 0H9.18828C8.9423 0.00215451 8.66875 0.00430889 8.37399 0.0086179C7.53214 0.0193904 6.69029 0.0387811 5.90357 0.0689442C4.24955 0.133579 3.07266 0.234841 2.47466 0.39643C1.97464 0.533541 1.51887 0.801769 1.15303 1.17423C0.787183 1.5467 0.524112 2.01031 0.390179 2.51862C0.260826 3.00554 0.169643 3.65405 0.106027 4.43182C0.059375 4.99631 0.0296875 5.59526 0.0127232 6.19637C0.00636157 6.40535 0.00424104 6.60142 0.0021205 6.77593C0.0021205 6.83841 0 6.89227 0 6.93967V7.06033C0 7.10772 -3.23635e-08 7.16159 0.0021205 7.22407C0.00424104 7.39858 0.00848211 7.59464 0.0127232 7.80363C0.0296875 8.40474 0.059375 9.00369 0.106027 9.56817C0.169643 10.346 0.262946 10.9945 0.390179 11.4814C0.661607 12.5134 1.45893 13.3278 2.47466 13.6036C3.07266 13.7673 4.24955 13.8686 5.90357 13.9311C6.69029 13.9612 7.53214 13.9806 8.37399 13.9914C8.66875 13.9957 8.9423 13.9978 9.18828 14H9.81172C10.0577 13.9978 10.3312 13.9957 10.626 13.9914C11.4679 13.9806 12.3097 13.9612 13.0964 13.9311C14.7504 13.8664 15.9273 13.7652 16.5253 13.6036C17.5411 13.3278 18.3384 12.5155 18.6098 11.4814C18.7392 10.9945 18.8304 10.346 18.894 9.56817C18.9406 9.00369 18.9703 8.40474 18.9873 7.80363C18.9936 7.59464 18.9958 7.39858 18.9979 7.22407C18.9979 7.16159 19 7.10772 19 7.06033V6.93967ZM17.4732 7.05171C17.4732 7.09695 17.4732 7.14651 17.4711 7.20468C17.469 7.37273 17.4647 7.55802 17.4605 7.75839C17.4456 8.33149 17.416 8.90458 17.3714 9.43675C17.3142 10.1305 17.2336 10.6993 17.1339 11.0806C17.0025 11.5783 16.6165 11.9726 16.1288 12.104C15.6835 12.2247 14.5617 12.3216 13.0371 12.3798C12.2652 12.41 11.4339 12.4294 10.6048 12.4401C10.3143 12.4444 10.045 12.4466 9.80324 12.4466H9.19676L8.3952 12.4401C7.56607 12.4294 6.73694 12.41 5.96295 12.3798C4.43828 12.3195 3.3144 12.2247 2.87121 12.104C2.38348 11.9705 1.99754 11.5783 1.86607 11.0806C1.76641 10.6993 1.68583 10.1305 1.62857 9.43675C1.58404 8.90458 1.55647 8.33149 1.53951 7.75839C1.53315 7.55802 1.53103 7.37058 1.52891 7.20468C1.52891 7.14651 1.52679 7.0948 1.52679 7.05171V6.94829C1.52679 6.90305 1.52679 6.85349 1.52891 6.79532C1.53103 6.62727 1.53527 6.44198 1.53951 6.24161C1.55435 5.66851 1.58404 5.09541 1.62857 4.56325C1.68583 3.8695 1.76641 3.30071 1.86607 2.91936C1.99754 2.42167 2.38348 2.02739 2.87121 1.89597C3.31652 1.77532 4.43828 1.67836 5.96295 1.62019C6.73482 1.59003 7.56607 1.57064 8.3952 1.55986C8.68571 1.55556 8.95502 1.5534 9.19676 1.5534H9.80324L10.6048 1.55986C11.4339 1.57064 12.2631 1.59003 13.0371 1.62019C14.5617 1.68052 15.6856 1.77532 16.1288 1.89597C16.6165 2.02955 17.0025 2.42167 17.1339 2.91936C17.2336 3.30071 17.3142 3.8695 17.3714 4.56325C17.416 5.09541 17.4435 5.66851 17.4605 6.24161C17.4669 6.44198 17.469 6.62942 17.4711 6.79532C17.4711 6.85349 17.4732 6.9052 17.4732 6.94829V7.05171ZM7.61272 9.88704L12.5324 6.97845L7.61272 4.11296V9.88704Z" fill="white" />
              </svg>
              Youtube
            </a>
>>>>>>> e1b31fd3f0efe77e0274c1a52baf8a71fdcf9266





          </div>




        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col   border-t md:flex-row justify-between text-[10px] tracking-[0.3em] uppercase text-[#f6f1e8] text-center">
          <p style={{ fontFamily: "gotham-light", fontSize: "12px" }} className=' mx-auto'>© 2026 Sublime House of Tea | All rights reserved</p>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .footer-heading {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-link {
          color: rgba(255,255,255,0.7);
          transition: color 0.3s ease;
        }

        // .footer-link:hover {
        //   color: #C8A97E;
        // }

        .footer-social {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: rgba(255,255,255,0.7);
          transition: color 0.3s ease;
        }

        .footer-social svg {
          width: 14px;
          height: 14px;
        }

        .footer-social:hover {
          color: #C8A97E;
          filter: drop-shadow(0 0 6px rgba(200,169,126,0.6));
        }
      `}</style>
    </footer>
  );
};


export default Footer;