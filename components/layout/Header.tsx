"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOPenSolutions, setIsOpenSolutions] = useState<boolean>(false);
  const [isOpenCustomers, setIsOpenCustomers] = useState<boolean>(false);

  return (
    <nav className="p-5 flex justify-between items-center fixed w-full bg-[#ebede8] z-10 top-0 left-0">
      <Image
        src="/images/logo-trans.png"
        alt="Clause"
        width={100}
        height={100}
      />
      <ul className="flex justify-between items-center gap-3">
        <li
          className="flex gap-1 justify-center items-center cursor-pointer"
          onClick={() => {
            setIsOpenSolutions(true);
          }}
        >
          Solutions <IoIosArrowDown />
        </li>
        <li
          className="flex gap-1 justify-center items-center cursor-pointer"
          onClick={() => setIsOpenCustomers(true)}
        >
          Customers <IoIosArrowDown />
        </li>
        <Link href="/pricing">Pricing</Link>
      </ul>
      <div className="flex justify-between items-center gap-3">
        <Link href="/login" className="bg-white shadow-md py-2 px-3 rounded-xl">
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-[#004838] text-white py-2 px-3 rounded-xl"
        >
          Start Now
        </Link>
      </div>
    </nav>
  );
};

export default Header;

