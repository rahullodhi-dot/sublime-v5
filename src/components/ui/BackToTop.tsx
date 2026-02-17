import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrollY > 50
  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 z-[100] right-5 w-10 h-10 sm:w-12 sm:h-12 bg-[#9a7522] text-white rounded-full shadow-lg flex items-center justify-center transition-opacity duration-300 hover:bg-[#b08b2a]"
          aria-label="Back to top"
        >
          {/* Small up arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
