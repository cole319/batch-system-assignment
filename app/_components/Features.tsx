import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <section
      id="features"
      className="h-screen py-[8rem] flex flex-col lg:flex-row"
    >
      <div className="hidden lg:block lg:w-[50%] absolute lg:relative">
        <div className="absolute top-[4rem] left-[2rem] h-[200px] w-[400px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
        <div className="absolute top-[5rem] left-[3rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
        <Image
          src={"/iPhoneFeatures.png"}
          height={504}
          width={249}
          alt="iPhone Image1"
          className="lg:absolute lg:top-[-0.80rem] lg:left-[6rem] lg:z-10"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="hidden lg:block lg:absolute lg:top-[3rem] lg:left-[-2rem] lg:z-2"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="hidden lg:block lg:absolute lg:top-[1rem] lg:left-0 lg:z-2"
        />
        <Image
          src={"/Ellipse.png"}
          height={661}
          width={459}
          alt="iPhone Image1"
          className="hidden lg:block lg:absolute lg:top-[-1rem] lg:left-[2rem] lg:z-2"
        />
      </div>

      <div className="relative w-full lg:w-[50%] py-10">
        <h1 className="text-lg font-normal text-[#FF5555] pb-2 text-center lg:text-start">
          FEATURES
        </h1>
        <h1 className="text-5xl font-bold pb-8 text-center lg:text-start">
          Uifry Premium
        </h1>
        <div className="text-center lg:text-start">
          <>
            <div className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
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
            <div className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
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
            <div className="flex items-center gap-2 pb-2 justify-center lg:justify-start">
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
        <div className="absolute top-[4rem] left-[25rem] h-[200px] w-[200px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
        <div className="absolute top-[5rem] left-[20rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
      </div>
    </section>
  );
}
