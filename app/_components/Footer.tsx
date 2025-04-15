import React from "react";
import Image from "next/image";

//internal imports
import Button from "./Button";

export default function Footer() {
  return (
    <section id="footer">
      <div className="flex flex-col lg:flex-row pt-[8rem] pb-[4rem] lg:py-[8rem] gap-10 lg:gap-0">
        <div className="flex flex-col justify-start gap-4 w-full lg:w-1/6">
          <div className="flex justify-start items-center gap-2">
            <Image src={"/Frame.png"} height={34} width={34} alt="uifry logo" />
            <Image
              src={"/Vector.png"}
              height={29}
              width={65}
              alt="uifry logo"
            />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/EmailIcon.png"}
              height={24}
              width={24}
              alt="uifry logo"
            />
            <h1>Help@Frybix.com</h1>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/PhoneIcon.png"}
              height={24}
              width={24}
              alt="uifry logo"
            />
            <h1>+00 12345 67890</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/6 lg:pl-10">
          <h1 className="font-semibold text-3xl">Links</h1>
          <ul className="lg:flex lg:flex-col gap-4 grid grid-cols-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/6">
          <h1 className="font-semibold text-3xl">Legal</h1>
          <ul className="lg:flex lg:flex-col gap-4 grid grid-cols-2">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/6">
          <h1 className="font-semibold text-3xl">Product</h1>
          <ul className="lg:flex lg:flex-col gap-4 grid grid-cols-2">
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="flex flex-col w-full lg:w-2/6 ">
          <div className="w-[50%] gap-4 flex flex-col pb-12">
            <h1 className="font-semibold text-3xl">Newsletter</h1>
            <ul className="flex flex-col gap-4">
              <li>Stay Up To Date</li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center gap-4">
            <h1 className="text-neutral-500">
              <a
                href="mailto:20je0998@cse.iitism.ac.in"
                className="cursor-pointer"
              >
                20je0998@cse.iitism.ac.in
              </a>
            </h1>
            <Button btnName="Subscribe" />
          </div>
        </div>
      </div>
      <div className="py-4 text-center border-t-2">
        Copyright 2022 Uifry.Com All Rights Reserved
        <p>Changes Approved by Friendly Streetfight Organiser</p>
      </div>
    </section>
  );
}
