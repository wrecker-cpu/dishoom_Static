"use client"
import {
  ListIconSvg,
  MapGroupSvg,
  SearchLogoSvg,
} from "@/svg/svgs";
import React, { useState } from "react";
import PermitListSection from "./PermitListSection";
import Footer from "../Footer";
import FilterClientCompo from "./FilterClientCompo";
import BlogList from "./BlogList";
import MapsInfo from "../MapsModule/MapsInfo";
import { AnimatePresence,motion } from "framer-motion";


export default function ListSection() {


  const [listOpen, setlistOpen] = useState(true);
  const [mapOpen, setmapOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsError(false); // Reset error when the user starts typing
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!inputValue) {
        // If the input is empty, show error
        setIsError(true);
      } else {
        // Perform the search or any other action
        console.log("Search:", inputValue);
      }
    }
  };

  const openList=()=>{
    setlistOpen(true);
    setmapOpen(false);
  }

  const openMap=()=>{
    setlistOpen(false);
    setmapOpen(true);
  }



  return (
    <div>
      <div className=" sticky top-[104px] z-[10] bg-[#f0ece0]  py-4 mb-1 border-t border-[#C4BFAF80] border-b  md:border-b-4 md:border-b-[#C4BFAF] ">
        <div className="grid-container  sub-container">
          <div className="flex items-center gap-1 esm:gap-2 col-start-1 col-end-4 esm:col-end-5 md:col-end-6 xl:col-end-5">
            <SearchLogoSvg />
            <input
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder={isError ? "Name field is empty" : "Enter a location"}
              className={` bg-cream rounded-lg esm:pl-2 outline-none w-[calc(100%-10%)] ${
                isError ? "placeholder-[#800000]" : "placeholder-dishoom"
              }`}
            ></input>
          </div>
          <div className="flex justify-end items-center gap-3 col-start-4 esm:col-start-5 col-end-7 md:col-start-10  lg:col-start-12 xl:col-start-13 md:col-end-21">
            <div className="border block md:hidden h-[3vh] border-[#c4bfaf]"></div>
            <div onClick={openList} className={`px-2 py-1 flex cursor-pointer items-center gap-2 border transition-colors ease-in-out duration-500 ${listOpen?"border-[#353839]":"border-[#C4BFAF80]"}`}>
              <div className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]">
                <ListIconSvg />
              </div>

              <p className="text-[10px] md:block hidden pt-[2px] text-[#353839] font-semibold font-sans tracking-[3.25px] uppercase">
                list
              </p>
            </div>

            <div onClick={openMap} className={`px-2 py-1 flex cursor-pointer items-center gap-2 border transition-colors ease-in-out duration-500 ${mapOpen?"border-[#353839]":"border-[#C4BFAF80]"}`}>
              <div className="w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]">
                <MapGroupSvg />
              </div>

              <p className="text-[10px] md:block hidden pt-[2px] text-[#353839] font-semibold font-sans tracking-[3.25px] uppercase">
                MAP
              </p>
            </div>

            <div className="border md:block hidden h-[2vh] 2xl:h-[20px] border-[#c4bfaf]"></div>
            <FilterClientCompo mainpage={true}/>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {listOpen && (
          <motion.div
            key="list-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{ duration: 0.3 }}
          >
            <BlogList />
            <PermitListSection />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mapOpen && (
          <motion.div
            key="map-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MapsInfo />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
