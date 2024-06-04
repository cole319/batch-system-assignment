import React from "react";
import Image from "next/image";

//internal imports
import Ellipses from "./Ellipses";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-[8rem] pb-[4rem] lg:pt-[20rem] relative"
    >
      <div className="flex justify-center text-center">
        <div className="lg:w-1/3 w-full">
          <h1 className="text-lg pb-2">TESTIMONIAL</h1>
          <h1 className="text-5xl font-bold">What Our Users Say About Us?</h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col py-[4rem]">
        <div className="w-full lg:w-[50%] relative h-[36rem] lg:h-0">
          <Image
            src={"/QuoteCircledIcon.png"}
            height={80}
            width={80}
            alt="iPhone Image1"
            className="absolute top-[14rem] left-[19rem] z-10"
          />
          <Image
            src={"/Ellipse41.png"}
            height={213}
            width={213}
            alt="User"
            className="absolute top-[9rem] left-[8rem] z-2"
          />
          <Image
            src={"/Ellipse42.png"}
            height={110}
            width={110}
            alt="User"
            className="absolute top-[2rem] left-[19rem] z-10"
          />
          <Image
            src={"/Ellipse43.png"}
            height={75}
            width={75}
            alt="User"
            className="absolute top-[24rem] left-[21rem] z-10"
          />
          <Image
            src={"/Ellipse44.png"}
            height={75}
            width={75}
            alt="User"
            className="absolute top-[2rem] left-[3rem] z-10"
          />
          <Image
            src={"/Ellipse45.png"}
            height={87}
            width={87}
            alt="User"
            className="absolute top-[23rem] left-[3rem] z-10"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[3rem] left-[-2rem] z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[1rem] left-0 z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[-1rem] left-[2rem] z-2"
          />

          {/* <Ellipses /> */}
        </div>
        <div className="lg:w-[50%] lg:py-[6rem] lg:px-[3rem] flex flex-col items-center lg:items-start">
          <h1 className="text-3xl font-bold pb-2 text-center lg:text-left">
            The Best Financial Accounting App Ever!
          </h1>
          <p className="text-neutral-500 pb-3 text-center lg:text-left">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
            consectetur saepe mollitia debitis molestias voluptates non pariatur
            vitae. Quae omnis cupiditate reiciendis rerum maiores natus quos
            saepe magnam! Temporibus. debitis molestias voluptates non pariatur
            vitae. Quae omnis cupiditate reiciendis rerum maiores natus quos
            saepe magnam! Temporibus."
          </p>
          <Image
            src={"/UsersIconsList.png"}
            height={40}
            width={192}
            alt="users icons list"
            className="pb-3"
          />
          <h1 className="font-semibold">Nick Jonas</h1>
        </div>
      </div>
    </section>
  );
}
