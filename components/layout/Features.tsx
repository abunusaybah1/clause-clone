import React from "react";
import { BiBarcode, BiBarcodeReader } from "react-icons/bi";
import Link from "next/dist/client/link";
import Image from "next/image";
import { FaBarcode } from "react-icons/fa6";
import { ImBarcode } from "react-icons/im";
import { IoBarcode } from "react-icons/io5";

const Features = () => {
  return (
    <section className="bg-white opacity-80 py-12 px-4 flex flex-col justify-center items-center gap-4 text-center">
      <>
        <Link
          href=""
          className="flex items-center gap-1 bg-white shadow-sm shadow-[#7d977d] text-[#073127] py-1 px-2 text-[9px] font-bold rounded-xl text-sm lg:text-base hover:bg-[#f0f0f0] transition-colors"
        >
          <FaBarcode />
          FEATURES
        </Link>
        <h3 className="text-[#073127] text-2xl sm:text-3xl lg:text-4xl font-bold max-w-3xl">
          Latest advanced technologies to ensure everything you need
        </h3>
        <p className="text-[#333f3c] text-sm sm:text-base max-w-2xl">
          Maximise your team's productivity and security with our affordable,
          user-friendly contract management system
        </p>
      </>
      <div>
        <div>
          <h3>Dynamic dashboard</h3>
          <p>
            Clause helps legal teams work faster, smarter and more efficiently,
            delivering the visibility and data-driven insights to mitigate risk
            and ensure compliance.
          </p>
          <Link href="#" className="bg-[#073127] text-[#e2fb6c]">
            Explore all
          </Link>
        </div>
        <div>
          <div>
            <p>Acme Inc. </p>
            <div>
              <Image
                src="/images/hero/avatar1.png"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src="/images/hero/avatar2.png"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src="/images/hero/avatar3.png"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src="/images/hero/avatar4.png"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
