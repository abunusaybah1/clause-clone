import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const footerLinks = {
  Solutions: ["Why Clause", "Partners", "OpenAI", "Technology", "Security"],
  Customers: ["Procurement", "Sales", "Legal", "Medium", "Enterprise"],
  Resources: ["Pricing", "Contact Sales", "Changelog", "Blog"],
};

const Footer = () => {
  return (
    <footer className="bg-[#073127] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-10 sm:pt-14 pb-6 sm:pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-white/10">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2 flex flex-col gap-4">
            <Image
              src="/images/logo-trans.png"
              alt="Clause"
              width={80}
              height={80}
              className="w-16 sm:w-20 h-auto brightness-200"
            />
            <div className="flex flex-col gap-1 text-xs sm:text-sm text-white/50">
              <span>hello@clause.com</span>
              <span>+1 (619) 971 04 321</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3 sm:gap-4">
              <p className="text-white text-xs sm:text-sm font-semibold">
                {heading}
              </p>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/50 text-xs sm:text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <p className="text-white/30 text-[10px] sm:text-xs">
            © Copyright 2024 Clause. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-5">
            {[FaTwitter, FaLinkedin, FaGithub, FaYoutube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="text-white/40 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
