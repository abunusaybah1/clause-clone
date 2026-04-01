import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center gap-6 sm:gap-8 text-center">
      {/* Quote mark */}
      <div className="text-[#073127] text-4xl sm:text-5xl font-serif leading-none">
        "
      </div>

      {/* Quote */}
      <blockquote className="text-[#073127] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold max-w-xs sm:max-w-xl lg:max-w-3xl leading-snug">
        "Clause is helping our company to decrease operational expenses and
        turnaround time, while increasing the compliance, resource allocation
        and effectiveness of our contract management."
      </blockquote>

      {/* Author */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow">
            <Image
              src="/images/hero/avatar1.png"
              alt="Darlene Robertson"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden shadow bg-gray-200">
            <Image
              src="/images/hero/avatar2.png"
              alt=""
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <p className="text-[#073127] text-sm sm:text-base font-semibold">
          Darlene Robertson
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">
          Head of Strategy at Macroship
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
