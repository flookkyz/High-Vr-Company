import React from "react";
import { BsArrowRight } from "react-icons/bs";


function About() {
  return (
    <div className="bg-[#00081E] py-[200px] px-[100px] text-white">
      <div className="flex justify-between">
        <div className="w-[60%]">
          <span className="text-[82px]">
            Design, build <br />
            and maintain <br />
            products
          </span>
        </div>
        <div className="pt-10">
          <span>
            Based out of Serbia Handmade Company has become<br />one of the best
            quality Digital Agency in Eastern Europe.<br />Our focus has always been
            to create<br /> enjoyable,intuitive,engaging and remarkable experience<br />
            for people — that's what sets us apart from everyone else.<br /><br /> We are a
            team of creatives who design identities, <br />custom-built websites and
            launch digital products<br /> that empower teams.
          </span><br />
          <button className="bg-white text-black mt-[40px] px-4 py-2 rounded-full flex flex-row items-center"><BsArrowRight className="w-[20px] h-[20px] mr-1"/>About us</button>
        </div>
      </div>
    </div>
  );
}

export default About;
