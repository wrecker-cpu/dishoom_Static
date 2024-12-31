import { RepeaterSvg } from "@/svg/svgs";
import Image from "next/image";
import React from "react";
import firsthero from "@/public/firsthero.png";

export default function HeroSection() {
  return (
    <div className="pt-16">
      <div className=" sub-container">
        <div className="grid-container mb-10">
          <div className="  md:block hidden col-span-1">
            <RepeaterSvg />
          </div>
          <div className="col-start-1 col-end-7 mb-4 md:mb-0 md:col-start-2 md:col-end-10  self-center">
            {/* <p className="text-[6vw] lsm:text-[5.5vw] esm:text-[5vw] ew:text-[4.8vw] md:text-[2vw] xl:text-xl font-serif leading-7 tracking-widest"> */}
            <p className="text-[20px] mb-4 font-serif leading-7 tracking-widest">
              Bombay via Britain
            </p>
            {/* <p className="text-[8vw] ew:text-[8vw] md:text-[3.9vw] xl:text-[42px] font-serif"> */}
            <p className="text-4xl md:text-[38px] emd:text-[42px] mb-[20px] md:mb-[30px] max-w-full md:max-w-[20rem] leading-[100%] font-serif">
              Our Dishoom Cafés and Permit Rooms
            </p>
            {/* <p className="tracking-tight text-[4vw] ew:text-[3.5vw] md:text-[1.5vw] lg:text-[1.4vw] xl:text-lg"> */}
            <p className="tracking-tight text-[16px] md:text-[18px] leading-[24px] font-serif font-normal">
              Paying homage to the Irani cafés and the food of all Bombay. Vitae
              scelerisque et interdum quis laoreet lorem turpis. Neque duis
              metus a non amet ultrices id dui. Mattis senectus cum eu sit eu
              pellentesque quis. Pretium elit nullam lorem euismod ac. Ipsum
              aliquam a tristique enim pretium massa.
            </p>
          </div>
          <div className="md:block hidden col-start-10 place-self-end">
            <RepeaterSvg />
          </div>

          <div className="col-start-1 col-end-7  md:col-start-11 w-full h-full md:col-end-21 self-center">
            <Image
              src={firsthero}
              className="w-full h-full object-cover"
              alt="wth"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
