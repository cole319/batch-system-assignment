import React from "react";
import Image from "next/image";

export default function Advantages() {
  return (
    <section id="advantages" className="flex flex-col gap-[6rem] py-[4rem]">
      <div className="flex">
        <div className="w-[50%] py-28">
          <h1 className="text-lg font-normal text-[#FF5555] pb-2">
            ADVANTAGES
          </h1>
          <h1 className="text-5xl font-bold pb-8">Why Choose Uifry?</h1>
          <>
            <div className="flex items-center gap-2 pb-4">
              <Image
                src={"/BellIcon.png"}
                height={40}
                width={40}
                alt="star icon"
              />
              <h1 className="font-bold text-2xl">Clever Notification</h1>
            </div>

            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus provident ut laudantium porro elit. Doloribus provident
              ut laudantium porro Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Doloribus provident ut laudantium porro elit.
              Doloribus provident ut laudantium porro
            </p>
          </>
        </div>
        <div className="w-[50%] relative">
          <Image
            src={"/iPhoneAdvantages.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="absolute top-[-0.80rem] left-[11rem] z-10"
          />
          <Image
            src={"/OnHold.png"}
            height={61}
            width={201}
            alt="iPhone Inset Image1"
            className="absolute top-[13rem] left-[17rem] z-10 shadow-lg"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[3rem] left-[3rem] z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[1rem] left-[5rem] z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="absolute top-[-1rem] left-[7rem] z-2"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%] relative">
          <Image
            src={"/iPhoneFeatures.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="absolute top-[-0.80rem] left-[6rem] z-10"
          />
          <Image
            src={"/CreditCard.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="absolute top-[6rem] left-[7.5rem] z-10"
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
        <div className="w-[50%] py-32">
          <>
            <div className="flex items-center gap-2 pb-4">
              <Image
                src={"/StarCircledIcon.png"}
                height={40}
                width={40}
                alt="star icon"
              />
              <h1 className="font-bold text-2xl">Fully Customizable</h1>
            </div>

            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus provident ut laudantium porro elit. Doloribus provident
              ut laudantium porro Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Doloribus provident ut laudantium porro elit.
              Doloribus provident ut laudantium porro
            </p>
          </>
        </div>
      </div>
    </section>
  );
}
