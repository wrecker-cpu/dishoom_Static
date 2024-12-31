import { FooterRepeaterSvg, LastSectionSvg, ShareSvg } from "@/svg/svgs";
import React from "react";

export default function LastParaSection() {
  return (
    <div className="mb-12 md:mb-32 relative">
      <div className="grid-container sub-container mb-0 md:mb-20 ">
        {/* First Paragraph */}
        <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16 mb-20">
          <div>
            <p className="first-letter:float-left font-normal first-letter:text-[72px] mb-8 md:mb-0 first-letter:text-[black] text-[21px] md:text-2xl text-dishoom first-letter:leading-[66px] md:first-letter:leading-[58px] first-letter:tracking-wider tracking-[4%] text-justify leading-9 first-letter:p-[3px]">
              Compassion. Generosity. Discipline. Honesty. Selflessness.
              Tolerance. These principles lie at the heart of Islam. Our Muslim
              brothers and sisters are bound to give, share, and take care of
              others - whether those joined by family bonds or by friendship, or
              simply those less fortunate than themselves.
            </p>

            <p className="block md:hidden text-[21px] md:text-2xl text-dishoom  first-letter:tracking-wider md:tracking-[4%] text-justify leading-9 ">
            Id enim pharetra ullamcorper eu. Quam consectetur tristique urna egestas nam vivamus. Iaculis potenti dignissim bibendum elementum lacus. Orci porttitor sed eget volutpat ut. augue euismod. 
            </p>
          </div>
        </div>
        {/* SVG */}
        <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16 mb-20 mx-auto">
          <LastSectionSvg />
        </div>
        {/* Second Paragragh */}
        <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16  ">
          <p className=" font-normal mb-10  text-[21px] text-dishoom   tracking-[4%] leading-[150%] ">Faith doesn&apos;t just mean believing in God -- it means tangible actions and rituals, built around the Five Pillars of Islam. Carrying out these Pillars (Iman, serving god; Salah, prayer five times each day; Sawm, fasting during Ramadan; Hajj, making the pilgrimage to Mecca, and Zakat, charity) is the foundation of each day and is like a compass to guide one through life.</p>
          <p className=" font-normal mb-10  text-[21px] text-dishoom   tracking-[4%] leading-[150%] ">Thus, as a Muslim, charity is not just something to be carried out when the mood strikes you; it really is a lifelong duty. There are even rules on how much each person should donate from their earnings each year. Giving generously and regularly, and offering aid to those less fortunate - both within and outside the community - is part of the essence of Islam.</p>
          <p className=" font-normal mb-0 md:mb-10  text-[21px] text-dishoom   tracking-[4%] leading-[150%] ">During Ramadan, this essence is alive more than ever. Alongside the rituals of prayer and fasting, giving is a natural element of this auspicious month. It is a time for sacrifice and self-discipline; and parting with hard-earned money for the benefit of others is a reminder that we are not defined by our possessions, but by our purpose.</p>
        </div>
      </div>
      <div className="border md:flex hidden absolute top-0 hover:border-dishoom transition-colors ease-in-out duration-200 cursor-pointer p-3 border-[#C4BFAF80] items-center gap-3 right-0">
        <div className="w-[14px] h-[15px]"><ShareSvg/></div>
        <button className="uppercase text-dishoom font-semibold text-[14px] leading-4 tracking-[0.3rem] font-sans ">Share</button>
      </div>
    </div>
  );
}
