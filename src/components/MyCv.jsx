import React from "react";
import { scrollTo, topScroll } from "../helper";
import Div from "./Div";
const MYCv = () => {
  const cond = topScroll();
  return (
    <Div
      className={`fixed bottom-7 ${cond ?"right-[20%]":"right-[4%]"} ${cond ?"md:right-[10%]":"md:right-[4%]"} text-White font-medium font-oswald text=gradient flex justify-center items-center transition-all `}
    >
      <div className="absolute w-[70px] h-[70px] bg-black/[0.2] blur-lg"></div>
      <div className="bg-[#78E9C5] flex items-center justify-center cursor-pointer relative py-2 px-5 rounded-md">
        <a href="https://drive.google.com/file/d/1H5PmleSz1Mnqu_qWoE6bEldUvjZaF9l6/view" target="_blank">My Resume</a>
      </div>
    </Div>
  );
};

export default MYCv;
