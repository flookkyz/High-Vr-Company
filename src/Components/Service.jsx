import React from "react";
import Pic_VR from "../images/Services/VR.svg";
import Pic_AR from "../images/Services/AR.svg";
import Pic_MR from "../images/Services/MR.svg";
import Pic_360 from "../images/Services/360.svg";

function Service() {
  return (
    <div className="bg-[#00081E] py-[80px]">
      <div className="text-white flex justify-center">
        <span className="text-[48px] font-bold">Service</span>
      </div>
      <div className="text-white flex flex-row justify-center mt-[100px] text-[20px]">
        <div className="flex flex-col text-center mr-[150px]">
          <div className="w-[160px] h-[160px] ">
            <img src={Pic_AR} alt="" />
          </div>
          <div className="mt-[30px]">
            Augmented <br /> Reality (AR)
          </div>
        </div>
        <div className="flex flex-col text-center mr-[150px]">
          <div className="w-[160px] h-[160px] ">
            <img src={Pic_VR} alt="" />
          </div>{" "}
          <div className="mt-[30px]">
            Virtual <br /> Reality (VR)
          </div>
        </div>
        <div className="flex flex-col text-center mr-[150px]">
          <div className="w-[160px] h-[160px] ">
            <img src={Pic_MR} alt="" />
          </div>{" "}
          <div className="mt-[30px]">
            Mixed <br /> Reality (XR)
          </div>
        </div>
        <div className="flex flex-col text-center">
          <div className="w-[160px] h-[160px] ">
            <img src={Pic_360} alt="" />
          </div>{" "}
          <div className="mt-[30px]">
            Video <br /> 360° VR
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-[170px] mt-[60px] text-[#4AE3EA] ">
        <a href="#" className="underline underline-offset-4">
          view all
        </a>
      </div>
    </div>
  );
}

export default Service;
