
import React from "react";
import FilterClientCompo from "../ListModule/FilterClientCompo";
import {
  CrossSvg,
  ListItemData,
  
} from "@/svg/svgs";
import CustomButton from "@/utils/CustomButton";

export default function MapsInfo() {
  return (
    <>
    <div className="grid-container">
        <div className="col-start-1 col-end-7 md:col-end-21 border-b-2 relative border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.496898237713!2d72.49884367537537!3d23.07889921422373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d61b056cb41%3A0x1e36380ab233f9cf!2sJamstacky%20-%20JAMstack%20and%20Headless%20Web%20Development%20Agency!5e0!3m2!1sen!2sin!4v1726207262069!5m2!1sen!2sin"
            width="100%"
            height="820"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className=" max-w-[350px] em:max-w-[394px] w-[90%] mx-auto lsm:w-full absolute md:bottom-6 md:left-6 bottom-2 md:translate-x-0 md:translate-y-0  left-[50%] translate-x-[-50%] translate-y-[-120%] ">
            <div className=" md:pr-4 border-2 border-black  w-full bg-[#F0ECE0] ">
              <div className=" text-[#363839] relative  p-4  mb-4 md:mb-0">
                <p className=" mb-2   mt-3 md:mt-0 text-2xl font-serif leading-9 tracking-wide">
                  Dishoom Covent Garden
                </p>
                <div>
                  {ListItemData.details.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`flex items-center py-3 ${
                          item.id === 3
                            ? "border-y border-[#C4BFAF]"
                            : "border-t border-t-[#C4BFAF]"
                        } ${item.id === 1 && "mt-0 md:mt-4"} gap-2`}
                      >
                        <div className=" flex justify-center w-[22px]">
                          {item.svg}
                        </div>

                        <p className="text-base font-sans leading-6">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <CustomButton className="font-sans mt-4 text-[15px] font-bold flex gap-2 justify-between" button1="View" button2="Book"/>
              </div>
              <div className="absolute top-4 right-4 cursor-pointer hover:opacity-70 active:scale-90"><CrossSvg/></div>
            </div>
          </div>
          <div className="p-[2px] cursor-pointer w-[90%] mx-auto bg-[#f0ece0] border-2 absolute md:hidden  translate-x-[-50%] translate-y-[-50%] top-[80%] left-[50%] transition-colors ease-in-out duration-200  hover:border-dishoom  border-[#80807c]">
          <div className="px-3 py-2 flex justify-center w-full border transition-colors ease-in-out duration-200    hover:border-dishoom border-[#7d7c74] text-[#fffdf9] bg-[#f0ece0]">
            <FilterClientCompo mainpage={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
