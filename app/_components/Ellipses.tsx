import React from "react";
import Image from "next/image";

function Ellipses() {
  return (
    <>
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
    </>
  );
}
