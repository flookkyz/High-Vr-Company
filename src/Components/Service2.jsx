import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Pic_player from "../images/player.png";

function Service2() {
  return (
    <div className="bg-gradient-to-r from-[#000A2C] via-[#112C71] to-[#000A2C] py-[87px] px-[100px]">
      <span className="text-white text-[75px] font-bold">
        We help Companies all <br /> around the world to grow
      </span>

      <div className="flex flex-row mt-[30px]">
        <button className="bg-gradient-to-r from-[#FC6A19] to-[#E9B531] py-2 px-4 rounded-full mr-[50px] flex flex-row items-center">
          <BsArrowRight className="w-[20px] h-[20px] mr-1" /> Our Portfolio
        </button>
        <button className="bg-white py-2 px-4 rounded-full flex flex-row items-center">
          <BsArrowRight className="w-[20px] h-[20px] mr-1" />
          Contact us
        </button>
      </div>

      <div className="flex flex-col mt-[120px]">
        <div className="flex justify-between">
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg"
          >
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg">
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg">
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[80px]">
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg">
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg">
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
          <div className="border-2 border-transparent hover:border-2 hover:border-[#4AE3EA] rounded-lg">
            <img src={Pic_player} alt="" className="h-[270px] rounded-t-lg" />
            <div className="bg-[#111827] h-[50px] text-white flex items-center px-4 rounded-b-lg">
              Virtual Reality (VR)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service2;
