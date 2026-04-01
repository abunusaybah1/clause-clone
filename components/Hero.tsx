import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center">
      <div className="relative w-full min-h-[calc(100vh-60px)] mt-14 bg-[#ebede8] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 overflow-hidden">
        {/* Grid background pattern with edge fade */}
        <div
          className="absolute inset-0 z-0 m-5 rounded-lg opacity-50 pointer-events-none"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
            WebkitMaskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)`,
            maskImage: `radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)`,
          }}
        />

        {/* Badge */}
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-600 mb-6 sm:mb-8 shadow-sm">
          <span className="text-yellow-400">⚡</span>
          CREATE FOR FAST
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1a2e1a] text-center leading-tight max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-4 sm:mb-6">
          One tool to{" "}
          <span className="relative inline-block">
            manage
            <span className="absolute left-0 bottom-1 w-full h-1 sm:h-1.25 md:h-1.5 bg-[#CBEF5B] rounded-sm -z-10" />
          </span>
          <br />
          contracts and your team
        </h1>

        {/* Subtext */}
        <p className="text-center text-gray-500 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10">
          Clause helps legal teams work faster, smarter and more efficiently,
          delivering the visibility and data-driven insights to mitigate risk
          and ensure compliance.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Link
            href=""
            className="bg-[#1a3a1a] text-[#e2fb6c] text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#2a4f2a] transition-colors"
          >
            Start for Free
          </Link>
          <Link
            href=""
            className="text-xs sm:text-sm font-semibold text-[#1a2e1a] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#333f3c]-300 hover:bg-white transition-colors"
          >
            Get a Demo
          </Link>
        </div>

        {/* Floating Avatars — hidden on small screens, visible from md up */}

        {/* Top Left */}
        <div className="hidden md:block absolute top-16 left-20">
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/images/hero/avatar1.png"
                alt="User"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <FaLocationArrow className="absolute text-[#1a2e1a] bottom-[-8] left-8 text-xs lg:text-base xl:text-lg font-black rotate-80" />
          </div>
        </div>

        {/* Top Right */}
        <div className="hidden md:block absolute  top-16 right-20">
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/images/hero/avatar2.png"
                alt="User"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <FaLocationArrow className="absolute text-[#1a2e1a] text-xs lg:text-base xl:text-lg font-black rotate-180" />
          </div>
        </div>

        {/* Bottom Left */}
        <div className="hidden md:block absolute bottom-16 left-20">
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/images/hero/avatar3.png"
                alt="User"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <FaLocationArrow className="absolute text-[#1a2e1a] bottom-7 left-9 text-xs lg:text-base xl:text-lg font-black rotate-20" />
          </div>
        </div>

        {/* Bottom Right */}
        <div className="hidden md:block absolute bottom-20 right-20">
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="/images/hero/avatar4.png"
                alt="User"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <FaLocationArrow className="absolute text-[#1a2e1a] bottom-7 right-8 text-xs lg:text-base xl:text-lg font-black rotate-250" />
          </div>
        </div>
      </div>

      {/* Partners bar */}
      <div className="flex items-center justify-center w-full relative z-10 border-t border-gray-200 bg-[#F5F3EE] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 sm:py-6">
        <div className=" flex flex-col sm:flex-row items-center gap-4 sm:gap-0 max-w-6xl mx-auto">
          {/* Label */}
          <p className="text-[10px] sm:text-xs text-gray-500 font-medium sm:min-w-32.5 lg:min-w-40 text-center sm:text-left shrink-0">
            More than 100+
            <br className="hidden sm:block" /> companies partner
          </p>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-300 mx-4 lg:mx-8 shrink-0" />

          {/* Logos */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* HubSpot */}
            <svg
              className="h-4 sm:h-5 lg:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              viewBox="0 0 100 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                y="22"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="20"
                fill="#1a2e1a"
              >
                HubSpot
              </text>
            </svg>

            {/* Dropbox */}
            <svg
              className="h-4 sm:h-5 lg:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              viewBox="0 0 90 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                y="22"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="20"
                fill="#1a2e1a"
              >
                Dropbox
              </text>
            </svg>

            {/* Square */}
            <svg
              className="h-4 sm:h-5 lg:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              viewBox="0 0 72 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                y="22"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="20"
                fill="#1a2e1a"
              >
                Square
              </text>
            </svg>

            {/* Grammarly */}
            <svg
              className="h-4 sm:h-5 lg:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              viewBox="0 0 105 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                y="22"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="20"
                fill="#1a2e1a"
              >
                Grammarly
              </text>
            </svg>

            {/* Intercom */}
            <svg
              className="h-4 sm:h-5 lg:h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
              viewBox="0 0 88 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                y="22"
                fontFamily="Arial"
                fontWeight="700"
                fontSize="20"
                fill="#1a2e1a"
              >
                intercom
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
