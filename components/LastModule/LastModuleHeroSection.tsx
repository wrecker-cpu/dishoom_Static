import {RepeaterSvg} from "@/svg/svgs";
import Image from "next/image";
import React from "react";
import pavBhaji from "@/public/pavbhaji.png";


export default function LastModuleHeroSection() {
  return (
<div className="relative">
    <div className="border-b absolute w-full md:hidden block top-0 bg-cream border-[#C4BFAF80]">
        <div className="w-[90%] uppercase text-[9px] font-bold leading-4 tracking-[0.12rem] font-serif py-3 mx-auto">
        <p>Explore  /  <span className="opacity-35 cursor-pointer">Recipes</span></p>
        </div>
        </div>
    <div className="pt-16 mb-12 md:mb-20  border-b border-[#C4BFAF80] bg-[#f0ece0]">
        <div className=" sub-container">
          <div className="grid-container text-[#353839] pb-8 md:pb-20">
            <div className="  md:block hidden col-span-1">
              <RepeaterSvg />
            </div>
            <div className="col-start-1 col-end-7 mb-8 md:mb-0 md:col-start-2 md:col-end-10  self-center">
              <p className=" text-lg md:text-xl mb-3 font-serif leading-7 tracking-widest">
                Sub Heading
              </p>
              <p className="text-[36px] md:text-[42px] leading-[100%] mb-5 md:mb-8 font-serif">
                Heading
              </p>
              <p className="tracking-[4%] font-serif leading-6 text-base md:text-lg">
              Et interdum ipsum lectus tristique erat. Sem parturient faucibus non blandit donec in nunc. Nulla nisl feugiat viverra sodales eu a urna magna. Eget ut urna orci erat pharetra. Tortor turpis sit et etiam nunc morbi.
              </p>

            </div>
            <div className="md:block hidden col-start-10 place-self-end">
              <RepeaterSvg />
            </div>

            <div className=" block col-start-1 col-end-7  md:col-start-11 w-full h-full md:col-end-21 self-center">
              <Image
                src={pavBhaji}
                className="w-full h-full object-cover"
                alt="wth"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
