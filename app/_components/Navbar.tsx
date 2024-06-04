import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";

export default function Navbar() {
  return (
    <section
      id="navbar"
      className="flex flex-col lg:flex-row justify-between items-center relative"
    >
      <Image
        src={"/StarBg.png"}
        height={30}
        width={30}
        alt="Start Bg"
        className="hidden lg:block absolute -right-[8rem] top-32"
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10">
        <div className="flex justify-center items-center gap-2">
          <Image src={"/Frame.png"} height={34} width={34} alt="uifry logo" />
          <Image src={"/Vector.png"} height={29} width={65} alt="uifry logo" />
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li className="cursor-pointer font-bold text-[#FF5555]">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Features</li>
        </ul>
      </div>
      <div className="pt-10 lg:pt-0">
        {/* <button className="bg-[#000000] text-[#FFFFFF] py-[10px] px-[30px] rounded-sm">
          Download
        </button> */}
        <Button btnName="Download" />
      </div>
    </section>
  );
}
