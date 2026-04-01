"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpenSolutions, setIsOpenSolutions] = useState<boolean>(false);
  const [isOpenCustomers, setIsOpenCustomers] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <nav className="py-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex justify-between items-center fixed w-full bg-[#ebede8] z-10 top-0 left-0">
      <Image
        src="/images/logo-trans.png"
        alt="Clause"
        width={100}
        height={100}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 xl:w-25"
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex justify-between items-center gap-3 lg:gap-5 xl:gap-7 text-sm lg:text-base">
        <li
          className="flex gap-1 justify-center items-center cursor-pointer hover:text-[#004838] transition-colors"
          onClick={() => setIsOpenSolutions(true)}
        >
          Solutions <IoIosArrowDown />
        </li>
        <li
          className="flex gap-1 justify-center items-center cursor-pointer hover:text-[#004838] transition-colors"
          onClick={() => setIsOpenCustomers(true)}
        >
          Customers <IoIosArrowDown />
        </li>
        <Link
          href="/pricing"
          className="hover:text-[#004838] transition-colors"
        >
          Pricing
        </Link>
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:flex justify-between items-center gap-2 lg:gap-3">
        <Link
          href="/login"
          className="bg-white shadow-md py-1 px-3 lg:px-4 rounded-xl text-sm lg:text-base hover:shadow-lg transition-shadow"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-[#004838] text-[#e2fb6c] py-1 px-3 lg:px-4 rounded-xl text-sm lg:text-base hover:bg-[#003028] transition-colors"
        >
          Start Now
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-[#1a2e1a] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#1a2e1a] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-[#1a2e1a] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ebede8] border-t border-gray-200 flex flex-col px-6 py-4 gap-4 md:hidden shadow-md">
          <button
            className="flex gap-1 items-center text-left text-sm font-medium hover:text-[#004838]"
            onClick={() => setIsOpenSolutions(!isOpenSolutions)}
          >
            Solutions <IoIosArrowDown />
          </button>
          <button
            className="flex gap-1 items-center text-left text-sm font-medium hover:text-[#004838]"
            onClick={() => setIsOpenCustomers(!isOpenCustomers)}
          >
            Customers <IoIosArrowDown />
          </button>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-[#004838]"
          >
            Pricing
          </Link>
          <div className="flex gap-3 pt-2 border-t border-gray-200">
            <Link
              href="/login"
              className="flex-1 text-center bg-white shadow-md py-2 px-3 rounded-xl text-sm"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center bg-[#004838] text-[#e2fb6c] py-2 px-3 rounded-xl text-sm"
            >
              Start Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
