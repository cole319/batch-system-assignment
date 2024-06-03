import React from "react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";

//internal imports
import Button from "./Button";

export default function Hero() {
  return (
    <section id="hero" className="py-[4rem] flex h-screen">
      <div className="w-[50%]">
        <div className="py-[2rem]">
          <h1 className="text-6xl font-bold py-[1rem]">
            Make The best Financial Decisions
          </h1>
          <p className="py-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            nostrum ducimus et autem odit itaque, cumque
          </p>
          <div className="flex justify-start gap-8 items-center py-[1rem]">
            <Button
              btnName="Get Started"
              icon={
                <Image
                  src={"/Vector1.png"}
                  width={24}
                  height={0}
                  alt="get started logo"
                />
              }
            />
            <button className="flex justify-center items-center gap-2">
              <IoPlayCircleOutline className="text-2xl" />
              Watch Video
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/HeroGroup.png"}
            height={357}
            width={569}
            alt="Hero Image"
            className="absolute top-[-2rem]"
          />
        </div>
      </div>
      <div className="w-[50%] relative ">
        <Image
          src={"/iPhoneHero1.png"}
          height={546}
          width={381}
          alt="iPhone Image1"
          className="absolute top-[-3rem] left-[1rem] z-40 drop-shadow-xl"
        />
        <Image
          src={"/iPhoneHero2.png"}
          height={541}
          width={364}
          alt="iPhone Image2"
          className="absolute top-[1.8rem] left-[8rem] z-20"
        />
        <Image
          src={"/iPhoneHero1.png"}
          height={546}
          width={381}
          alt="iPhone Image1"
          className="absolute top-[6rem] left-[15rem] z-10"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[-1rem] left-[12rem] z-2"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[1rem] left-[10rem] z-2"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="absolute top-[3rem] left-[8rem] z-2"
        />
      </div>
    </section>
  );
}
