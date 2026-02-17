import React, { useState } from "react";
import TopSection from "../components/TopSection";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const breadcrumbItems = [
    { label: "Terms Of Service", path: `TermOfService/`, isBold: true },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (key) => {
    setOpenFaq(openFaq === key ? null : key);
  };

  // FAQ DATA
  const FAQ_DATA = [
    {
      heading: "Order Information",
      faqs: [
        {
          q: "How can I place an order on Sublime House of Tea?",
          a: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout where you provide shipping and payment details."
        },
        {
          q: "How do I know if my order is confirmed?",
          a: "Once your order is successfully placed, you will receive a confirmation email and SMS with your order details."
        },
        {
          q: "Can I modify or cancel my order after placing it?",
          a: "Orders can only be modified or cancelled before they are dispatched. Please contact our support team immediately for assistance."
        },
        {
          q: "How can I track my order?",
          a: "After dispatch, you will receive a tracking link via email or SMS which you can use to track your shipment in real-time."
        },
        {
          q: "What should I do if I receive a damaged or wrong product?",
          a: "Please contact our support team within 48 hours of delivery with images of the product. We will arrange a replacement or resolution."
        }
      ]
    },
    {
      heading: "Payment & Delivery",
      faqs: [
        {
          q: "What payment methods are accepted?",
          a: "We accept payments via UPI, credit cards, debit cards, net banking, and supported wallets."
        },
        {
          q: "Is it safe to make payments on your website?",
          a: "Yes, all payments are processed through secure and encrypted payment gateways to ensure your data is protected."
        },
        {
          q: "Why was my payment declined?",
          a: "Payments may fail due to insufficient balance, network issues, or bank restrictions. Please try again or use a different payment method."
        },
        {
          q: "Will I receive a receipt for my payment?",
          a: "Yes, once the payment is successful, you will receive a payment confirmation via email and SMS."
        },
        {
          q: "Do you offer Cash on Delivery (COD)?",
          a: "Cash on Delivery may be available for selected locations depending on serviceability."
        }
      ]
    }
  ];

  return (
    <section>
      <TopSection breadCrumnb={breadcrumbItems} title="FAQ" />

      <div className="max-w-[1400px] text-lg leading-7 mx-auto px-6 py-20">
        {FAQ_DATA.map((section, sIndex) => (
          <div key={sIndex} className="mb-14">
            {/* Section Heading */}
            <h2 style={{fontFamily:"gotham-book"}} className="text-2xl font-semibold mb-6 text-[#000]">
              {section.heading}
            </h2>

            {/* FAQs */}
            {section.faqs.map((faq, i) => {
              const key = `${sIndex}-${i}`;
              const isOpen = openFaq === key;

              return (
                <div key={key} className="py-3 ">
                  {/* Question */}
                  <div
                    onClick={() => toggleFaq(key)}
                    className={`font-semibold flex justify-between px-5 bg-[#D6C27A] rounded-lg py-3 items-center cursor-pointer ${isOpen && "rounded-b-none"}`}
                  >
                    <span style={{fontFamily:"gotham-book"}} className="font-light">{faq.q}</span>
                                {isOpen ? <div className='p-2  border-black border-2 rounded-full'> <Minus size={18} /> </div> : <div className='p-2  border-black border-2 rounded-full'> <Plus size={18} /> </div>}
                  </div>

                  {/* Answer with animation */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 " : "max-h-0"
                    }`}
                  >
                    <p className={`text-gray-700 px-4 border-0 py-8 ${isOpen && "border-2 border-t-0 rounded-lg rounded-t-none border-[#9a7523]"}`}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
