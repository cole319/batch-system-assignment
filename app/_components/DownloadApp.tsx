import React from "react";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section id="downloadapp" className="bg-[#000000] flex rounded-md relative">
      <div>
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[20rem] left-[-6rem] z-10"
        />
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[18rem] left-[-4rem] z-10"
        />
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[16rem] left-[-2rem] z-10"
        />
      </div>
      <div className="w-[60%] pl-[5rem] py-[10rem] z-20">
        <h1 className="text-4xl text-[#FFFFFF] font-bold pb-3">
          Ready To Get Started?
        </h1>
        <p className="text-neutral-400 pb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet
          consectetur, adipisicing elit. Sit
        </p>
        <button className="bg-[#FFFFFF] px-[30px] py-[10px] rounded-sm">
          <div className="flex items-center gap-2">
            <h1>Download App</h1>
            <Image
              src={"/AppleIcon.png"}
              height={25}
              width={20}
              alt="Apple Icon"
            />
          </div>
        </button>
      </div>
      <div>
        <Image
          src={"/EllipseWhiteRight.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[-12rem] left-[52rem] z-10"
        />
        <Image
          src={"/EllipseWhiteRight.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[-14rem] left-[54rem] z-10"
        />
        <Image
          src={"/EllipseWhiteRight.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[-16rem] left-[56rem] z-10"
        />
      </div>
      <div>
        <Image
          src={"/iPhoneDownloadApp.png"}
          height={459}
          width={591}
          alt="iPhone image"
          className="z-40 relative"
        />
      </div>
    </section>
  );
}
