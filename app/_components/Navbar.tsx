import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";

export default function Navbar() {
  return (
    <section id="navbar" className="flex justify-between items-center ">
      <div className="flex justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-2">
          <Image src={"/Frame.png"} height={34} width={34} alt="uifry logo" />
          <Image src={"/Vector.png"} height={29} width={65} alt="uifry logo" />
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li className="font-bold text-[#FF5555]">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div>
        {/* <button className="bg-[#000000] text-[#FFFFFF] py-[10px] px-[30px] rounded-sm">
          Download
        </button> */}
        <Button btnName="Download" />
      </div>
    </section>
  );
}
