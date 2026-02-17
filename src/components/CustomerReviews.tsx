

import React, { useRef } from "react";
import p from "../assets/images/p1.png";
import p1 from "../assets/images/Ellipse 96.png"
import p2 from "../assets/images/Ellipse 97.png"

interface Testimonial {
    id: number;
    name: string;
    location: string;
    rating: number;
    review: string;
    image?: string;
    verified?: boolean;
    date?: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Anita Sharma",
        location: "Bengaluru",
        rating: 5,
        review:
            "Sublime Signature Rich flavour, premium ingredients, and a delightful everyday!",
        image:"",
        verified: true,
        date: "Jan 15, 2026",
    },
    {
        id: 2,
        name: "Vaibhav Vedsav",
        location: "Kolkata",
        rating: 5,
        review: "Rich flavour, premium ingredients, and a delightful everyday",
        image: p2,
        verified: true,
        date: "Feb 2, 2026",
    },
    {
        id: 3,
        name: "Rahul Lodhi",
        location: "Mumbai",
        rating: 5,
        review: "Amazing quality & taste. Highly recommended!",
        verified: true,
        date: "Mar 12, 2026",
    },
];

const CustomerTestimonialsSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({
            left:
                direction === "left"
                    ? -scrollRef.current.clientWidth
                    : scrollRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full py-16 bg-[#f1e4b0]">
            <div className="text-center mb-12">
                <p style={{ fontFamily: "gotham-book" }} className="text-sm text-black font-bold uppercase">
                    Hear The Good
                </p>
                <h2 style={{ fontFamily: "gotham-book" }} className="text-4xl font-bold text-[#C5A059]">
                    What Our Customers Say
                </h2>
            </div>

            <div className="relative max-w-[1200px] mx-auto">
                {/* LEFT BUTTON — YOUR SVG */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-[#f6f1e8] p-2 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M5.50781 16.5198L13.7678 24.7798M5.50781 16.5198L13.7678 8.25978M5.50781 16.5198L19.9628 16.5198M27.5345 16.5198L24.0928 16.5198" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* SCROLL AREA */}
                <div
                    ref={scrollRef}
                    className="flex gap-8 min-h-[380px] overflow-x-auto justify-center items-center no-scrollbar px-8"
                >
                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.id}
                            className="relative pb-12 bg-[#fff] rounded-lg border shadow-lg p-6 pt-16 h-[270px] w-[360px] flex-shrink-0"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mt-3 absolute right-4 top-3">
                                {[...Array(t.rating)].map((_, i) => (
                                    <svg key={i} className="w-6 h-6 fill-[#9a7523]" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Avatar — NO overflow hidden */}
                            <div className="w-20 h-20 absolute -top-12 left-6 rounded-full border-2 border-white shadow-lg bg-white flex items-center justify-center">
                                {t.image ? (
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <div className="text-center leading-tight">
                                        {/* <p className="text-[10px] font-semibold">{t.name}</p> */}
                                        <p style={{fontFamily:"gotham2"}} className="text-[#C5A059] tracking-wider font-bold text-lg">
                                            {t.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </p>
                                    </div>
                                )}
                            </div>


                            {/* NAME + YOUR VERIFIED SVG */}
                            <div className="flex items-center gap-2 mt-2">
                                <p className="font-semibold">{t.name}</p>
                                {t.verified && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="11.5" cy="12.5" r="8.5" fill="#F6F1E8" />
                                        <path d="M23 12L20.56 9.22004L20.9 5.54004L17.29 4.72004L15.4 1.54004L12 3.00004L8.6 1.54004L6.71 4.72004L3.1 5.53004L3.44 9.21004L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58004L18 9.00004L10 17Z" fill="#316763" />
                                    </svg>
                                )}
                            </div>

                            {/* Review */}
                            <span style={{ fontFamily: "gotham-book" }} className="text-sm text-gray-700 mt-4 line-clamp-3 px-2">
                                {t.review}
                            </span>

                            <span style={{ fontFamily: "gotham-book" }} className="text-sm text-[#C5A059] font-semibold mt-1 hover:underline px-2">
                                Read More
                            </span>

                            {/* Date */}
                            <div style={{ fontFamily: "gotham-book" }} className="flex justify-end absolute bottom-2 text-xs text-gray-500">
                                {t.date}
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT BUTTON — YOUR SVG */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f6f1e8] p-2 rounded-full"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M27.5322 16.5198L19.2722 8.25977M27.5322 16.5198L19.2722 24.7798M27.5322 16.5198L13.0772 16.5198M5.50552 16.5198L8.94719 16.5198" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default CustomerTestimonialsSection;
