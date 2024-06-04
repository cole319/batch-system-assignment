import React from "react";
import Image from "next/image";

export default function Advantages() {
  return (
    <section id="advantages" className="flex flex-col gap-[6rem] lg:py-[4rem]">
      <div className="flex lg:flex-row flex-col items-center lg:items-start lg:pb-32 ">
        <div className="lg:w-[50%] lg:py-28 pb-20 lg:pb-0">
          <h1 className="text-lg font-normal text-[#FF5555] pb-2 text-center lg:text-start">
            ADVANTAGES
          </h1>
          <h1 className="text-5xl font-bold pb-8 text-center lg:text-start">
            Why Choose Uifry?
          </h1>
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
        <div className="lg:w-[50%] relative">
          <Image
            src={"/StarBg.png"}
            height={48}
            width={48}
            alt="Start Bg"
            className="hidden lg:block absolute -left-4 -bottom-28"
          />
          <div className="absolute top-[4rem] left-[6rem] h-[200px] w-[200px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
          <div className="absolute top-[5rem] left-[5rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
          <Image
            src={"/iPhoneAdvantages.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="lg:absolute lg:top-[-0.80rem] lg:left-[11rem] lg:z-10"
          />
          <Image
            src={"/OnHold.png"}
            height={61}
            width={201}
            alt="iPhone Inset Image1"
            className="absolute top-[13rem] left-[6rem] lg:left-[17rem] lg:z-10 shadow-lg"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="hidden lg:block lg:absolute lg:top-[3rem] lg:left-[3rem] lg:z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="hidden lg:block lg:absolute lg:top-[1rem] lg:left-[5rem] lg:z-2"
          />
          <Image
            src={"/Ellipse.png"}
            height={661}
            width={459}
            alt="iPhone Image1"
            className="hidden lg:block lg:absolute lg:top-[-1rem] lg:left-[7rem] lg:z-2"
          />
          <Image
            src={"/StarBg.png"}
            height={48}
            width={48}
            alt="Start Bg"
            className="hidden lg:block absolute right-2 bottom-28"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] relative hidden lg:block">
          <Image
            src={"/StarBg.png"}
            height={48}
            width={48}
            alt="Start Bg"
            className="hidden lg:block absolute -right-44 -bottom-28"
          />
          <div className="absolute top-[4rem] left-[14rem] h-[200px] w-[200px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
          <div className="absolute top-[5rem] left-[20rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
          <Image
            src={"/iPhoneFeatures.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="lg:absolute lg:top-[-0.80rem] lg:left-[6rem] lg:z-10"
          />
          <Image
            src={"/CreditCard.png"}
            height={504}
            width={249}
            alt="iPhone Image1"
            className="absolute top-[6rem] left-[1.5rem] lg:left-[7.5rem] lg:z-10"
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
          <Image
            src={"/StarBg.png"}
            height={48}
            width={48}
            alt="Start Bg"
            className="hidden lg:block absolute left-8 -top-24"
          />
        </div>
        <div className="lg:w-[50%] lg:py-32 pb-20 lg:pb-0">
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
        <div className="lg:hidden flex justify-center">
          <div className="w-full lg:w-[50%] relative ">
            <div className="absolute top-[4rem] left-[10rem] h-[200px] w-[200px] bg-[#fd3535] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
            <div className="absolute top-[5rem] left-[16rem] h-[120px] w-[120px] bg-[#fadf46] rounded-full mix-blend-multiply filter blur-2xl opacity-80"></div>
            <Image
              src={"/iPhoneFeatures.png"}
              height={504}
              width={249}
              alt="iPhone Image1"
              className="lg:absolute lg:top-[-0.80rem] lg:left-[6rem] lg:z-10"
            />
            <Image
              src={"/CreditCard.png"}
              height={504}
              width={249}
              alt="iPhone Image1"
              className="absolute top-[6rem] left-[1.5rem] lg:left-[7.5rem] lg:z-10"
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
        </div>
      </div>
    </section>
  );
}
