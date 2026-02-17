import React from 'react'
import TopSection from '../components/TopSection'

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const PrivacyPolicy = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (i) => {
        setOpenFaq(openFaq === i ? null : i);
    };


    const breadcrumbItems = [
        { label: "Privacy Policy", path: `Privacy&<Policy/`, isBold: true },

    ];

    const PRIVACY_POLICY_SECTIONS = [
        `This privacy policy sets out how Sublime House of Tea uses and protects any information that you give Sublime when you use this website.`,

        `Sublime is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.`,

        `Authorized employees within the company on a need-to-know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers.`,

        `For unauthorized actions against computer systems and data, we will investigate such actions with a view to prosecuting and/or taking civil proceedings to recover damages against those responsible.`,

        `Sublime may change this policy from time to time by updating this page. You should check this page regularly to ensure that you are happy with any changes. This policy is effective from 31st January 2014 and has been last modified on the date mentioned above.`
    ];

    const PRIVACY_FAQS = [
        {
            q: "What personal information does Sublime House of Tea collect?",
            a: "We may collect your name, contact information including email address and mobile number, demographic details such as postcode, preferences and interests, and other information relevant to customer surveys or offers."
        },
        {
            q: "Why do we collect your personal information?",
            a: "We collect this information to understand your needs and provide you with better service, improve our products and services, and maintain internal records."
        },
        {
            q: "How is my information used for communication?",
            a: "We may use your email address or phone number to send promotional emails, special offers, new product updates, or to contact you for market research purposes."
        },
        {
            q: "Will Sublime contact me for research or feedback?",
            a: "Yes, from time to time we may contact you via email, phone, fax, or mail for market research and feedback to improve our services."
        },
        {
            q: "How does Sublime use my data to improve my experience?",
            a: "We use your information to customize the website according to your interests and provide a more personalized experience."
        },
        {
            q: "Is my data used for internal purposes?",
            a: "Yes, your data is used for internal record keeping and to improve our overall service quality."
        }
    ];


    function extractListFromAnswer(answer) {
        const keywords = [
            "name",
            "email address",
            "mobile number",
            "postcode",
            "preferences",
            "interests",
            "customer surveys",
            "offers",
            "internal record keeping",
            "improve our products and services",
            "promotional emails",
            "special offers",
            "market research",
            "customize the website"
        ];

        const found = [];

        keywords.forEach((key) => {
            if (answer.toLowerCase().includes(key)) {
                found.push(key.charAt(0).toUpperCase() + key.slice(1));
            }
        });

        return found;
    }


    return (
        <section>
            <TopSection breadCrumnb={breadcrumbItems} title="Privacy Policy" />
            <div className='max-w-[1400px] text-lg leading-7 mx-auto px-6 py-20'>
                <div className='flex flex-col gap-6 mb-6' >
                    {PRIVACY_POLICY_SECTIONS.map((item, i) => (
                        <div key={`${i + item}`} className=''>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                {PRIVACY_FAQS.map((faq, i) => {
                    const listItems = extractListFromAnswer(faq.a);
                    const isOpen = openFaq === i;

                    return (
                        <div key={i} className="py-3  ">

                            {/* Question Row */}
                            <div
                                onClick={() => toggleFaq(i)}
                                className={`font-semibold flex justify-between px-5 bg-[#D6C27A] ${isOpen && "rounded-b-none "} rounded-lg py-3 items-center cursor-pointer`}
                            >
                                <span  style={{fontFamily:"gotham-book"}}>{faq.q}</span>
                                {isOpen ? <div className='p-2  border-black border-2 rounded-full'> <Minus size={18} /> </div> : <div className='p-2  border-black border-2 rounded-full'> <Plus size={18} /> </div>}
                            </div>

                            {/* Animated Answer Section */}
                            <div
                                className={`overflow-hidden transition-all rounded-lg rounded-t-none border-t-0 border-[#9a7523] px-6  border duration-500 ease-in-out ${isOpen ? "max-h-96 border-2  " : "max-h-0 border-0"
                                    }`}
                            >
                                <div className="px-4">
                                    <p  style={{fontFamily:"gotham-book"}} className="text-gray-700 mb-2">{faq.a}</p>

                                    {listItems.length > 0 && (
                                        <ul className="list-disc ml-6 text-gray-600">
                                            {listItems.map((item, idx) => (
                                                <li  style={{fontFamily:"gotham-book"}} key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}



            </div>

        </section>
    )
}

export default PrivacyPolicy
