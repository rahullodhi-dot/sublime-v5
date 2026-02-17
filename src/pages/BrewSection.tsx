"use client";

import React, { useEffect, useRef } from "react";
import BrewTop from "../assets/images/BrewTop.png";
import BrewBottom from "../assets/images/BrewBottom.png";
import BrewTimer from "../assets/images/BrewTimer.png";
import mountain from "../assets/images/mountain2.png";
import texture from "../assets/images/texture.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrewSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;

    if (!section || !path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: "8 8",
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-[1280px] mx-auto w-full mt-12 mb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mountain overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <img src={mountain} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="relative py-16 sm:py-20 rounded-[20px]">

        {/* SVG PATH (Desktop only) */}
        <svg
          className="absolute top-[25%] left-1/2 -translate-x-1/2 hidden lg:block z-0"
          width="994"
          height="896"
          viewBox="0 0 819 996"
          fill="none"
        >
          <path
            ref={pathRef}
            d="M188.619 0.0251465C182.619 238.525 659.424 -6.47485 757.337 108.025C855.25 222.525 809.922 362.525 782.922 416.525C678.55 625.27 292.618 314.053 99.8342 464.525C-16.7545 555.525 -64.7838 833.562 152.836 994.525"
            stroke="#316763"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col gap-20 sm:gap-28">

          {/* STEP 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full md:w-[85%] md:self-end">
            <img
              src={BrewTop}
              alt="Boil water"
              className="h-[220px] sm:h-[260px] md:h-[300px] w-auto object-contain"
            />
            <div className="md:w-[40%] text-center md:text-left">
              <h3
                style={{ fontFamily: "gotham2" }}
                className="text-2xl sm:text-3xl mb-2"
              >
                Boil 250 ml water
              </h3>
              <p
                style={{ fontFamily: "gotham-book" }}
                className="text-sm leading-6 sm:leading-7"
              >
                Bring 250 ml of fresh, filtered water to a boil. For the best
                flavor, allow the water to cool slightly to 75–85°C. Direct
                boiling water can make green tea taste bitter.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-10 w-full md:w-[86%] md:self-start">
            <img
              src={BrewTimer}
              alt="Tea leaves"
              className="h-[220px] sm:h-[260px] md:h-[300px] w-auto object-contain"
            />
            <div className="md:w-[40%] text-center md:text-left">
              <h3
                style={{ fontFamily: "gotham2" }}
                className="text-2xl sm:text-3xl mb-2"
              >
                1 teaspoon tea leaves
              </h3>
              <p
                style={{ fontFamily: "gotham-book" }}
                className="text-sm leading-6 sm:leading-7"
              >
                Use 1–2 grams of tea per 180–200 ml of water (roughly 1 teaspoon
                per cup). Rinse the teapot or cup with hot water to maintain
                brewing temperature.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full md:w-[85%] md:self-end">
            <img
              src={BrewBottom}
              alt="Strain tea"
              className="h-[220px] sm:h-[260px] md:h-[300px] w-auto object-contain"
            />
            <div className="md:w-[40%] text-center md:text-left">
              <h3
                style={{ fontFamily: "gotham2" }}
                className="text-2xl sm:text-3xl mb-2"
              >
                Strain & enjoy
              </h3>
              <p className="text-sm leading-6 sm:leading-7">
                Strain the tea to prevent over-steeping. Serve hot and enjoy as
                is, or add honey, lemon, or milk depending on the tea type.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrewSection;
