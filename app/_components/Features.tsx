import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section id="features" className="h-screen py-[8rem] flex">
      <div className="w-[50%] relative">
        <Image
          src={"/iPhoneFeatures.png"}
          height={504}
          width={249}
          alt="iPhone Image1"
          className="absolute top-[-0.80rem] left-[6rem] z-10"
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
      </div>

      <div className="w-[50%] py-10">
        <h1 className="text-lg font-normal text-[#FF5555] pb-2">FEATURES</h1>
        <h1 className="text-5xl font-bold pb-8">Uifry Premium</h1>
        <div>
          <>
            <div className="flex items-center gap-2 pb-2">
              <Image
                src={"/StarIcon.png"}
                height={24}
                width={24}
                alt="star icon"
              />
              <h1 className="font-bold">Budgeting Intervals</h1>
            </div>

            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus provident ut laudantium porro elit. Doloribus provident
              ut laudantium porro
            </p>
          </>
          <br />
          <>
            <div className="flex items-center gap-2 pb-2">
              <Image
                src={"/HexagonIcon.png"}
                height={24}
                width={24}
                alt="hexagon icon"
              />
              <h1 className="font-bold">Budgeting Intervals</h1>
            </div>

            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus provident ut laudantium porro elit. Doloribus provident
              ut laudantium porro
            </p>
          </>
          <br />
          <>
            <div className="flex items-center gap-2 pb-2">
              <Image
                src={"/CubeIcon.png"}
                height={24}
                width={24}
                alt="cube icon"
              />
              <h1 className="font-bold">Budgeting Intervals</h1>
            </div>

            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus provident ut laudantium porro elit. Doloribus provident
              ut laudantium porro
            </p>
          </>
        </div>
      </div>
    </section>
  );
}
