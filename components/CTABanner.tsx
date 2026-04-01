import React from "react";
import Link from "next/link";

const CTABanner = () => {
  return (
    <section className="bg-[#333f3c]   py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xs sm:max-w-sm lg:max-w-md leading-tight text-center sm:text-left">
        Discover the full scale of{" "}
        <span className="underline decoration-[#e2fb6c]">Clause</span>{" "}
        capabilities
      </h2>
      <div className="flex items-center gap-3 shrink-0">
        <Link
          href="#"
          className="text-xs sm:text-sm font-semibold text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
        >
          Get a Demo
        </Link>
        <Link
          href="#"
          className="text-xs sm:text-sm font-semibold bg-[#e2fb6c] text-[#073127] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#d4f05a] transition-colors"
        >
          Start for Free
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
