import React from "react";

interface ButtonProps {
  btnName: string;
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ btnName, icon }) => {
  return (
    <>
      <button className="bg-[#000000] text-[#FFFFFF] py-[10px] px-[30px] rounded-sm lg:w-fit w-[20rem] border-[2px] border-[#000000] duration-300 hover:bg-transparent hover:text-[#000000]">
        <div className="flex justify-center items-center gap-2">
          {btnName}
          <>{icon}</>
        </div>
      </button>
    </>
  );
};

export default Button;
