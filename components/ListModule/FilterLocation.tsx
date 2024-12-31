import { FilterLocationData } from "@/data/data";
import { CloseSvg, FooterRepeaterSvg } from "@/svg/svgs";
import React from "react";


interface FilterProps{
  divRef:React.RefObject<HTMLDivElement>;
  closeFilter: () => void;
}

export default function FilterLocation({divRef,closeFilter}:FilterProps) {


  return (
    <div className="fixed inset-0 bg-[#f1ece0] bg-opacity-50  z-[100] flex items-center backdrop-blur-sm justify-end">
    <div ref={divRef} className="max-w-full md:max-w-[430px] w-[92%] border-l-2 border-dishoom md:w-full overflow-y-auto  h-screen bg-[#f1ece0]">
      <div className="w-[90%] overflow-hidden mx-auto my-10">
        <div className="mb-72">
          <div className="flex justify-between mb-8">
            <p className="text-[#353839] text-[15px] font-bold uppercase leading-tight tracking-widest font-sans">
              Filter Locations
            </p>
            <div onClick={closeFilter} className="flex active:scale-90 hover:opacity-80 transition-opacity ease-in-out duration-200 items-center cursor-pointer">
              <div>
                <CloseSvg />
              </div>
              <p className="text-[#353839] text-[13px] font-medium uppercase leading-tight tracking-[3.25px] font-sans">
                Close
              </p>
            </div>
          </div>
          <div className="w-[968px] mb-8">
            <FooterRepeaterSvg />
          </div>
          <div className="mb-8">
            <p className="text-[#353839] mb-3 text-[13px] font-bold uppercase leading-tight tracking-widest font-sans">
              {FilterLocationData.type.title}
            </p>
            <div>
              <ul className="flex flex-wrap gap-3">
                {FilterLocationData.type.options.map((item) => {
                  return (
                    <li
                      className={`px-5 py-2 cursor-pointer font-sans text-sm border border-[#C4BFAF] active:scale-[0.98]  transition-colors ease-in-out duration-200 hover:bg-[#363839] hover:text-[white] `}
                      key={item.id}
                    >
                      <a>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <p className="text-[#353839] mb-3 text-[13px] font-bold uppercase leading-tight tracking-widest font-sans">
              {FilterLocationData.showMore.title}
            </p>
            <div>
              <ul className="flex flex-wrap  gap-3">
                {FilterLocationData.showMore.options.map((item) => {
                  return (
                    <li
                      className={`px-5 py-2 font-sans cursor-pointer text-sm border border-[#C4BFAF]  active:scale-[0.98]  transition-colors ease-in-out duration-200 hover:bg-[#363839] hover:text-[white] `}
                      key={item.id}
                    >
                      <a>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-sans  font-semibold gap-3 mb-2">
          <div className="p-[2px] w-full md:w-auto border-2 transition-colors ease-in-out duration-300  hover:border-dishoom border-[#80807c]">
            <button className=" md:px-[5.5vw] w-full emd:px-14 py-[6px] transition-colors ease-in-out duration-300   border hover:border-dishoom border-[#dad5c7]">
              Clear Selection
            </button>
          </div>
          <div className="p-[2px] w-full md:w-auto transition-colors ease-in-out duration-300 border-2 border-[#353839] bg-[#353839]">
                    <button className="md:px-[5.5vw] w-full  emd:px-14 py-[6px] border transition-colors ease-in-out duration-300 hover:border-[#dad5c7]  border-[#7d7c74] text-[#fffdf9] bg-[#353839]">
                      Save & Apply
                    </button>
                  </div>
        </div>
      </div>
    </div>
    </div>
  );
}
