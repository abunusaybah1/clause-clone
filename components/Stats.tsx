import React from "react";

const stats = [
  { value: "2021", label: "Clause Founded" },
  { value: "50K+", label: "Active Users" },
  { value: "1k+", label: "Company Partners" },
];

const Stats = () => {
  return (
    <section className="bg-white border-t border-gray-100 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#073127]">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-sm text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
