import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FaqImg from "../assets/images/faqImg.jpg";
import bottomTree from "../assets/images/bottomTree.png";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const ProductFAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What Flavors Are Included In The Assorted Green Tea Sampler?",
      answer:
        "Our Assorted Green Tea Sampler includes Classic Green Tea, Jasmine Green Tea, Mint Green Tea, and Lemon Green Tea.",
    },
    {
      id: 2,
      question: "How Do I Brew The Green Tea?",
      answer:
        "Heat water to 175–185°F (80–85°C). Steep for 2–3 minutes. Avoid over-steeping to prevent bitterness.",
    },
    {
      id: 3,
      question: "Is This Sampler Suitable For Gifting?",
      answer:
        "Yes! It comes in elegant packaging and makes a perfect gift for tea lovers.",
    },
    {
      id: 4,
      question: "Can I Purchase This Sampler As Part Of A Larger Tea Set?",
      answer:
        "Yes, we offer bundle options that include multiple tea varieties at discounted prices.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="w-full py-12 lg:py-16 relative"
      style={{ backgroundColor: "#f1e4b0" }}
  >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src={bottomTree}
          alt=""
          className="w-1/2 h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest mb-2">
            Better To Know
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#9A7522]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Image (hidden on mobile) */}
          <div className="hidden lg:block">
            <img
              src={FaqImg}
              alt="Tea Plantation"
              className="w-full h-[450px] object-cover rounded-lg"
            />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-sm sm:text-base">
                    {faq.question}
                  </span>

                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-[#316763]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#316763]" />
                  )}
                </button>

                {openId === faq.id && (
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
