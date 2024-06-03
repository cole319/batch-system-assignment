import React from "react";

interface ButtonProps {
  btnName: string;
  icon?: JSX.Element;
}

const Button: React.FC<ButtonProps> = ({ btnName, icon }) => {
  return (
    <>
      <button className="bg-[#000000] text-[#FFFFFF] py-[10px] px-[30px] rounded-sm">
        <div className="flex items-center gap-2">
          {btnName}
          <>{icon}</>
        </div>
      </button>
    </>
  );
};

export default Button;
