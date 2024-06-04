import React from "react";
import Image from "next/image";

export default function DownloadApp() {
  return (
    <section id="downloadapp" className="bg-[#000000] flex rounded-md relative">
      <Image
        src={"/StarBgWhite.png"}
        height={48}
        width={48}
        alt="Star Bg"
        className="hidden lg:block absolute left-[16rem] top-[2rem]"
      />
      <div>
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute lg:top-[20rem] lg:left-[-6rem] lg:z-10 hidden lg:block"
        />
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute lg:top-[18rem] lg:left-[-4rem] lg:z-10 hidden lg:block"
        />
        <Image
          src={"/EllipseWhite.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute lg:top-[16rem] lg:left-[-2rem] lg:z-10 hidden lg:block"
        />
      </div>
      <div className="relative lg:w-[60%] py-[8rem] px-[1rem] lg:pl-[5rem] lg:py-[10rem] lg:z-20 flex flex-col items-center lg:items-start gap-10 lg:gap-0">
        <div className="absolute top-[16rem] left-[52rem] h-[200px] w-[200px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
        <div className="absolute top-[20rem] left-[56rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
        <h1 className="text-4xl text-[#FFFFFF] font-bold pb-3 text-center lg:text-start">
          Ready To Get Started?
        </h1>
        <p className="text-neutral-400 pb-3 text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet
          consectetur, adipisicing elit. Sit
        </p>
        <button className="bg-[#FFFFFF] px-[30px] py-[10px] rounded-sm hover:bg-transparent hover:text-[#FFFFFF] hover:border-[2px] hover:border-[#FFFFFF] duration-300">
          <div className="flex items-center gap-2">
            <h1>Download App</h1>
            <Image
              src={"/AppleIcon.png"}
              height={25}
              width={20}
              alt="Apple Icon "
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
          className="absolute lg:top-[-12rem] lg:left-[52rem] lg:z-10 hidden lg:block"
        />
        <Image
          src={"/EllipseWhiteRight.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute lg:top-[-14rem] lg:left-[54rem] lg:z-10 hidden lg:block"
        />
        <Image
          src={"/EllipseWhiteRight.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute lg:top-[-16rem] lg:left-[56rem] lg:z-10 hidden lg:block"
        />
      </div>
      <Image
        src={"/StarBgWhite.png"}
        height={60}
        width={60}
        alt="Star Bg"
        className="hidden lg:block absolute right-[36rem] bottom-[4rem]"
      />
      <div className="relative">
        <Image
          src={"/iPhoneDownloadApp.png"}
          height={459}
          width={591}
          alt="iPhone image"
          className="z-40 relative hidden lg:block"
        />
      </div>
      <Image
        src={"/StarBg.png"}
        height={48}
        width={48}
        alt="Star Bg"
        className="hidden lg:block absolute -left-[6rem] bottom-[8rem]"
      />
      <Image
        src={"/StarBg.png"}
        height={48}
        width={48}
        alt="Star Bg"
        className="hidden lg:block absolute -right-[8rem] -top-[8rem]"
      />
    </section>
  );
}
