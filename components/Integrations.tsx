import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const integrations = [
  {
    name: "Notion",
    bg: "#fff",
    color: "#000",
    src: "/images/logos/notion.png",
  },
  {
    name: "Trello",
    bg: "#0052CC",
    color: "#fff",
    src: "/images/logos/trello.png",
  },
  {
    name: "Slack",
    bg: "#4A154B",
    color: "#fff",
    src: "/images/logos/slack.png",
  },
  {
    name: "PayPal",
    bg: "#003087",
    color: "#fff",
    src: "/images/logos/paypal.png",
  },
  {
    name: "Drive",
    bg: "#fff",
    color: "#4285F4",
    src: "/images/logos/drive.png",
  },
  {
    name: "Ads",
    bg: "#fff",
    color: "#4285F4",
    src: "/images/logos/ads.png",
  },
  {
    name: "WhatsApp",
    bg: "#25D366",
    color: "#fff",
    src: "/images/logos/whatsapp.png",
  },
  { name: "Jira", bg: "#0052CC", color: "#fff", src: "/images/logos/jira.png" },
  {
    name: "Figma",
    bg: "#F24E1E",
    color: "#fff",
    src: "/images/logos/figma.png",
  },
];

const Integrations = () => {
  const row1 = integrations.slice(0, 4);
  const row2 = integrations.slice(4, 8);

  return (
    <section className="bg-[#073127] py-14 sm:py-18 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col items-center gap-8 sm:gap-10 overflow-hidden">
      {/* Badge */}
      <div className="flex items-center gap-1.5 border border-[#ffffff30] rounded-full px-3 py-1 text-[10px] sm:text-xs text-white/60 font-medium">
        ✦ INTEGRATIONS
      </div>

      {/* Heading */}
      <div className="text-center flex flex-col gap-3 max-w-xs sm:max-w-lg lg:max-w-2xl">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Don't replace. Integrate.
        </h2>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          We understand the hassle of replacing the tools used in your process.
          That's why we integrate tools you use in your day-to-day works.
        </p>
        <Link
          href="#"
          className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold mt-1 hover:text-[#e2fb6c] transition-colors"
        >
          All integrations <FaArrowRight className="text-xs" />
        </Link>
      </div>

      {/* Integration icons — Row 1 */}
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center w-full max-w-3xl">
        {row1.map((item) => (
          <Image
            key={item.name}
            src={item.src}
            alt={item.name}
            width={40}
            height={40}
            className="p-1 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-md shrink-0"
            style={{ background: item.bg, color: item.color }}
            title={item.name}
          />
        ))}
      </div>

      {/* Integration icons — Row 2 */}
      <div className="flex gap-3 sm:gap-4 flex-wrap justify-center w-full max-w-3xl -mt-4">
        {row2.map((item) => (
          <Image
            key={item.name}
            src={item.src}
            alt={item.name}
            width={40}
            height={40}
            className="p-1 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-md shrink-0"
            style={{ background: item.bg, color: item.color }}
            title={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Integrations;
