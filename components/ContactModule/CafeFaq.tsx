import { ContactPageData, FaqPageData } from "@/data/data";
import { ContactBottomRepaterSvg } from "@/svg/svgs";
import React from "react";
import Footer from "../Footer";
import ContactThirdImageSection from "./ContactThirdImageSection";
import FaqAccordion from "./FaqAccordion";
import NavSmallScreen from "../NavSmallScreen";
import NavBigScreen from "../NavBigScreen";

export default function CafeFaq() {
  return (
    <>
    <div className=" border-t border-[#C4BFAF80] sticky block md:hidden top-[104px]  mb-8 z-[30]">
              <NavSmallScreen mapData={FaqPageData.navOptions}/>
               <div
            className="border-b border-[#C4BFAF80] bg-[#f0ece0] absolute bottom-0 left-0 right-0 md:hidden"
            style={{ borderBottomWidth: "1px", borderBottomColor: "#C4BFAF80" }}
          ></div> 
            </div>
      <div className=" sub-container">
        <div className="grid-container py-2 md:py-20 text-[#353839]">
          <div className="  col-start-1 col-end-7 md:col-start-2 md:col-end-8 ">
            <NavBigScreen mapData={FaqPageData.sideOptions.options} title={ContactPageData.sideOptions.title}/>
          </div>
          <div className="col-start-1 col-end-7 md:col-start-8  md:col-end-20">
            <p className="text-4xl  md:text-[42px] mb-4 font-serif">
            Café FAQs
            </p>
            <p className="tracking-tight text-[4vw] w-full leading-6  mb-14 text-lg md:text-[21px]">
            Congue ac vulputate sed a sit dictum ipsum. Commodo mattis sit.
            </p>
                      
            <FaqAccordion />
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <ContactBottomRepaterSvg />
      </div>
      <ContactThirdImageSection/>
      <Footer/>
    </>
  )
}
