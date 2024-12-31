import { ContactPageData } from "@/data/data";
import { ContactBottomRepaterSvg } from "@/svg/svgs";
import React from "react";
import InputContactDetails from "./InputContactDetails";
import ContactAccordion from "./ContactAccordion";
import Footer from "../Footer";
import SomethingElseList from "./SomethingElseList";
import ContactThirdImageSection from "./ContactThirdImageSection";
import BlackCustomButton from "@/utils/BlackCustomButton";
import NavSmallScreen from "../NavSmallScreen";
import NavBigScreen from "../NavBigScreen";

export default function ContactDetails() {
  return (
    <>
    <div className=" border-t border-[#C4BFAF80] sticky block md:hidden top-[104px]  mb-[25px] z-[30]">
            
              <NavSmallScreen mapData={ContactPageData.navOptions}/>
               <div
            className="border-b border-[#C4BFAF80] bg-[#f0ece0] absolute bottom-0 left-0 right-0 md:hidden"
            style={{ borderBottomWidth: "1px", borderBottomColor: "#C4BFAF80" }}
          ></div> 
            </div>
      <div className=" sub-container">
        <div className="grid-container py-2 md:py-20 text-[#353839]">
          <div className="  col-start-1 col-end-7 md:col-start-2 md:col-end-8 ">
            <NavBigScreen mapData={ContactPageData.sideOptions.options} title={ContactPageData.sideOptions.title}/>
          </div>
          <div className="col-start-1 col-end-7 md:col-start-8  md:col-end-20">
            <p className="text-[36px] md:text-[42px] mb-4 font-serif">
              Contact Dishoom
            </p>
            <p className="tracking-tight text-light-dishoom text-[18px] md:text-[21px] w-full font-serif font-normal leading-7  mb-14">
              Congue ac vulputate sed a sit dictum ipsum. Commodo mattis sit.
            </p>
            <p className="uppercase  font-sans font-bold mb-3 text-base tracking-[3px]">
              Enquiries
            </p>
            <p className="tracking-tight text-light-dishoom mb-12 text-[18px] md:text-[18px]">
              Good. Bad. Ugly. We'd love to hear it. If it's good, we'll feel
              warm inside and be glad that we made you happy. If it's bad (or
              god forbid, ugly!) then we'll earnestly convene huddles, figure
              out what happened, and put it right.
            </p>

            <InputContactDetails />

            <p className="uppercase  font-sans font-bold mb-3 text-base tracking-[3px]">
              Contact a Café
            </p>
            <p className="tracking-tight  mb-10 text-light-dishoom text-[18px] md:text-[21px]">
              Urna magna cras suspendisse quis nec bibendum sagittis vitae.
              Blandit consectetur varius varius sed adipiscing. Lorem sagittis
              eu sagittis et enim.
            </p>
            <ContactAccordion />

            <p className="uppercase  font-sans font-bold mb-3 text-base tracking-[3px]">
              Chit-chat
            </p>
            <p className="tracking-tight text-light-dishoom  mb-10  text-[18px] md:text-[21px]">
              Weekdays from 9am-7pm and on weekends from 10am-5pm our trusted
              Dishoom-wallas are on hand to help with all types of queries and
              questions. Simply click the icon in the bottom right-hand corner
              of this page to get in touch (kindly note, this will only be
              visible during the aforementioned hours).
            </p>

            <BlackCustomButton custom={true} name="Start a Chat" className="p-[2px] md:inline-block border-2 mb-10 border-[#353839] bg-[#353839]" />
            <div>
              <p className="text-[#353839] text-[16px] mb-4 font-bold font-sans uppercase leading-tight tracking-widest">
                {ContactPageData.SocioLinks.title}
              </p>
              <ul className="flex flex-wrap gap-3 justify-center lsm:gap-0 lsm:justify-between w-full mmd:w-[90%] emd:w-[80%]">
                {ContactPageData.SocioLinks.details.map((item) => {
                  return (
                    <li
                      className="font-serif  text-[15px] lsm:text-[16px] esm:text-[17px] em:text-lg text-[#353839] tracking-tight"
                      key={item.id}
                    >
                      <a href={item.href} className="whitespace-nowrap hover:opacity-60 transition-opacity ease-in-out duration-150">{item.name}</a>
                    </li>
                  );
                })}
              </ul>
             
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <ContactBottomRepaterSvg />
      </div>
      <SomethingElseList/>
      <ContactThirdImageSection/>
      <Footer/>
    </>
  );
}
