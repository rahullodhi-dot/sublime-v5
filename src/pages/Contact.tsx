// import React, { useState } from 'react';
// import SEO from '../components/SEO';
// import { organizationSchema, localBusinessSchema } from '../utils/schemas';
// import aboutFrame from "../assets/images/AboutFrame.png"
// import Breadcrumb from '../components/Breadcrumb';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We\'ll get back to you soon.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const structuredData = [organizationSchema, localBusinessSchema];
//   const breadcrumbItems = [
//     { label: "Loose-Tea", path: `Loose-tea/` },
//     { label: "Green-Tea", path: `Green-Tea/` },
//     { label: "Contact Us", path: `Contact/`,isBold:true   },

//   ];

//   return (
//     <section>
//       <SEO
//         title="Contact Us - Get in Touch"
//         description="Contact Sublime House Tea for any questions, support, or feedback. We're here to help with your shopping needs."
//         keywords="contact sublime house tea, tea support, tea questions, tea feedback, customer service"
//         url="https://sublimehousetea.com/contact"
//         structuredData={structuredData}
//       />


//       <div
//         style={{
//           backgroundImage: `url(${aboutFrame})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//         className="relative py-12"
//       >
//         {/* <img src={tokri} className="absolute left-0 top-0 h-full object-cover opacity-50" /> */}
//         {/* <img src={TeaLeaf} className="absolute right-0 bottom-0 h-72 object-cover opacity-50" /> */}

//         <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
//           <h1 style={{ fontFamily: "gotham" }} className="text-3xl text-[#9a7523] font-bold mb-2">Contact Us</h1>
//           <Breadcrumb items={breadcrumbItems} />
//         </div>
//       </div>


//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16  overflow-hidden">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

//           {/* LEFT SIDE (6 cols) */}
//           <div className="lg:col-span-6">
//             {/* <h2 className="text-3xl font-semibold mb-6">Contact Information</h2> */}
//             <p className="text-gray-600  rounded-xl border h-[100%]">
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0092930561846!2d77.61160597512286!3d12.971256987344082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1683d211b503%3A0x7488fa0ec3381981!2sPrestige%20Falcon%20Towers%2C%2019%2C%20Brunton%20Rd%2C%20Craig%20Park%20Layout%2C%20Ashok%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1770111839052!5m2!1sen!2sin" className="border sepia-[60%] rounded-xl h-full w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </p>
//           </div>

//           {/* RIGHT SIDE (6 cols) */}
//           <div className="lg:col-span-6 space-y-4   ">

//             {/* Address Section (3 rows) */}
//             <div className="space-y-1 gap-2  flex flex-col bg-[#F1E4B0] border p-3 rounded-lg">
//               <div className='flex justify-start gap-2 mb-2 items-center'>
//                 <div className="h-6 flex justify-center items-center  w-6 bg-[#9a7523] rounded-full">    </div>
//                 <p style={{ fontFamily: "gotham-book" }} className="text-[#2A2A2A] text-lg">080-69496126</p>
//               </div>



//               <div className='flex justify-start gap-2 mb-2 items-center'>
//                 <div className="h-6  flex w-6  justify-center items-center bg-[#9a7523] rounded-full"></div>
//                 <p style={{ fontFamily: "gotham-book" }} className="text-[#2A2A2A] text-lg">mohammed.maqsood@sublime.in</p>
//               </div>
//               <div className='flex justify-start gap-2 mt-2 items-center'>
//                 <div className="h-6 w-6 flex justify-center items-center  bg-[#9a7523] rounded-full">



//                  </div>
//                 <p style={{ fontFamily: "gotham-book" }} className="text-[#2A2A2A] text-lg max-w-[75%]">Prestige Falcon Towers,<br/>
//                   19, Brunton Road, Bengaluru 560025</p>
//               </div>


//             </div>

//             {/* Form Section */}
//             <div className='flex-1 border py-3 px-8 rounded-lg bg-[#F1E4B0] overflow-auto'>
//               <h3 className="text-2xl font-semibold text-[#9a7523]">How can we help you?</h3>
//               <p style={{fontFamily:"gotham-light"}} className="text-[#2A2A2A] mb-6 text-sm ">
//                 Looking for assistance? Chat to our friendly team.
//               </p>

//               <form className="space-y-5">
//                 {/* Full Name */}


//                 {/* Email */}
//              

//                 {/* Phone */}
//                 <div>
//                   <label
//                     className="block mb-2 text-sm text-[#0f0f0f]"
//                     style={{ fontFamily: "gotham" }}
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="text"
//                       placeholder='Enter your phone number'
//                     className="w-full bg-[#f6f1e8] text-sm focus:outline-none border-gray-300 rounded-md px-4 py-2  border-0"
//                   />
//                 </div>

//                 {/* Message */}


//                 <button
//                   style={{ fontFamily: "gotham2" }}
//                   type="submit"
//                   className="w-full bg-[#9a7523] text-white px-6 py-2 rounded-lg hover:bg-[#316763] text-lg capitalize transition"
//                 >
//                   Send Message
//                 </button>
//               </form>

//             </div>

//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Contact;













import React, { useState } from 'react';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../utils/schemas';
import aboutFrame from "../assets/images/AboutFrame.png";
import Breadcrumb from '../components/Breadcrumb';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const structuredData = [organizationSchema, localBusinessSchema];

  const breadcrumbItems = [
    { label: "Loose-Tea", path: `Loose-tea/` },
    { label: "Green-Tea", path: `Green-Tea/` },
    { label: "Contact Us", path: `Contact/`, isBold: true },
  ];

  return (
    <section className="overflow-hidden">

      <SEO
        title="Contact Us - Get in Touch"
        description="Contact Sublime House Tea for any questions, support, or feedback."
        keywords="contact sublime house tea, tea support, tea questions"
        url="https://sublimehousetea.com/contact"
        structuredData={structuredData}
      />

      {/* ===== Header Section ===== */}
      <div
        style={{
          backgroundImage: `url(${aboutFrame})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="relative py-10 sm:py-12"
      >
        <div className="relative flex justify-center items-center flex-col container mx-auto px-4 text-center">
          <h1
            style={{ fontFamily: "gotham" }}
            className="text-2xl sm:text-3xl text-[#9a7523] font-bold mb-2"
          >
            Contact Us
          </h1>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* ===== Main Section ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mb-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT SIDE — Map */}
          <div className="lg:col-span-6 order-1">
            <div className="rounded-xl border overflow-hidden h-[300px] sm:h-[400px] lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0092930561846!2d77.61160597512286!3d12.971256987344082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1683d211b503%3A0x7488fa0ec3381981!2sPrestige%20Falcon%20Towers%2C%2019%2C%20Brunton%20Rd%2C%20Craig%20Park%20Layout%2C%20Ashok%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1770111839052!5m2!1sen!2sin"
                className="w-full h-full sepia-[60%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-6 space-y-6 order-2">

            {/* Contact Info Card */}
            <div className="flex flex-col gap-4 bg-[#F1E4B0] border p-4 sm:p-5 rounded-lg">

              <div className='flex gap-3 items-center'>
                <div className="h-7 w-7 flex justify-center items-center bg-[#9a7523] rounded-full text-white text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 28 28" fill="none">
                    <path d="M9.78191 2.89239C10.3945 2.70769 11.0519 2.73837 11.6447 2.97934C12.2374 3.22031 12.7297 3.65703 13.0397 4.21679L13.1433 4.42539L14.0701 6.48479C14.3508 7.10998 14.4418 7.80383 14.3318 8.48027C14.2218 9.15671 13.9157 9.78597 13.4513 10.29L13.2651 10.4748L11.8049 11.837C11.5417 12.0862 11.7391 13.0508 12.6911 14.7C13.5479 16.184 14.2451 16.877 14.5881 16.9148H14.6483L14.7225 16.9008L17.5925 16.023C17.9782 15.9047 18.3899 15.9 18.7782 16.0095C19.1665 16.119 19.515 16.338 19.7821 16.6404L19.9095 16.8014L21.8093 19.4334C22.1816 19.9493 22.3672 20.5766 22.3354 21.212C22.3036 21.8474 22.0563 22.4531 21.6343 22.9292L21.4635 23.1056L20.7047 23.8252C20.0233 24.4705 19.171 24.9065 18.249 25.0815C17.327 25.2565 16.3741 25.163 15.5037 24.8122C12.7947 23.7202 10.3335 21.2254 8.09771 17.353C5.85771 13.4708 4.92671 10.087 5.34251 7.18899C5.46833 6.31297 5.82907 5.48737 6.3864 4.79989C6.94373 4.1124 7.67686 3.5887 8.50791 3.28439L8.77811 3.19479L9.78191 2.89239Z" fill="white" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg">080-69496126</p>
              </div>

              <div className='flex gap-3 items-center'>
                <div className="h-7 w-7 flex justify-center items-center bg-[#9a7523] rounded-full text-white text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M22 7.535V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.535L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.535Z" fill="white" />
                    <path d="M19.0003 4C20.0803 4 21.0273 4.57 21.5553 5.427L12.0003 11.797L2.44531 5.427C2.6961 5.01982 3.0406 4.6785 3.45008 4.43149C3.85957 4.18448 4.32217 4.03894 4.79931 4.007L5.00031 4H19.0003Z" fill="white" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg break-all">
                  mohammed.maqsood@sublime.in
                </p>
              </div>

              <div className='flex gap-3 items-start'>
                <div className="h-7 w-7 flex justify-center items-center bg-[#9a7523] rounded-full text-white text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C7.02 0 3 4.02 3 9C3 15 12 24 12 24C12 24 21 15 21 9C21 4.02 16.98 0 12 0ZM12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9C18 12.33 15.33 15 12 15C10.4087 15 8.88258 14.3679 7.75736 13.2426C6.63214 12.1174 6 10.5913 6 9C6 7.4087 6.63214 5.88258 7.75736 4.75736C8.88258 3.63214 10.4087 3 12 3Z" fill="white" />
                  </svg>
                </div>
                <p className="text-base sm:text-lg">
                  Prestige Falcon Towers,<br />
                  19, Brunton Road,<br />
                  Bengaluru 560025
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className='border py-5 px-4 sm:px-8 rounded-lg bg-[#F1E4B0]'>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#9a7523]">
                How can we help you?
              </h3>

              <p className="text-[#2A2A2A] mb-6 text-sm">
                Looking for assistance? Chat to our friendly team.
              </p>

              <form className="space-y-4">
                <div>
                  <label
                    className="block mb-2 text-sm text-[#0f0f0f]"
                    style={{ fontFamily: "gotham" }}
                  >
                    Full Name
                  </label>
                  <input
                    style={{ fontFamily: "gotham-book" }}
                    placeholder='Enter your name here'
                    type="text"
                    className="w-full bg-[#f6f1e8] text-sm focus:outline-none border-gray-300 rounded-md px-4 py-2  border-0 "
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 text-sm text-[#0f0f0f]"
                    style={{ fontFamily: "gotham" }}
                  >                     Email
                  </label>
                  <input
                    style={{ fontFamily: "gotham-book" }}
                    placeholder='Enter your email address' type="email"
                    className="w-full bg-[#f6f1e8] text-sm focus:outline-none border-gray-300 rounded-md px-4 py-2  border-0"
                  />
                </div>



                <div>
                  <label
                    className="block mb-2 text-sm text-gray-700"
                    style={{ fontFamily: "gotham" }}
                  >
                    Your Message
                  </label>
                  <textarea
                    style={{ fontFamily: "gotham-book" }}

                    rows={3}
                    className="w-full bg-[#f6f1e8] text-sm focus:outline-none border-gray-300 rounded-md px-4 py-2  border-0"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9a7523] text-white px-6 py-2 rounded-lg hover:bg-[#316763] text-base sm:text-lg transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

