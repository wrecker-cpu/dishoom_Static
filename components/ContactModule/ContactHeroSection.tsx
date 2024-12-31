"use client";
import {
  RepeaterSvg,
  BurgerSvg,
  DishLogo,
  DishSmallLogo,
  SearchLogoSvg,
  ShopLogoSvg,
  UserLogoSvg,
} from "@/svg/svgs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import contactPage from "@/public/contactpage.png";
import Navbar from "../Navbar";
import SelectionPage from "./SelectionPage";

export default function ContactHeroSection() {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);



  const handleChange=(value:string)=>{
    if(value==="FAQ"){
      setShowMenu(!showMenu); 
    }

  }


  const handleScroll = () => {
    if (window.scrollY > 130) {
      // Adjust the scrollY value as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${isSticky ? "sticky-navbar" : ""}`}>
       <Navbar/>
      </div>
      <div className="pt-8 md:pt-16 sticky z-50  md:border-b border-[#C4BFAF80] bg-[#f0ece0]">
        <div className="sub-container">
          <div className="grid-container text-[#353839] pb-10 md:pb-20">
            <div className="  md:block hidden col-span-1">
              <RepeaterSvg />
            </div>
            <div className="col-start-1 col-end-7 mb-4 md:mb-0 md:col-start-2 md:col-end-10  self-center">
              <p className=" text-lg md:text-xl mb-3 font-serif leading-7 tracking-widest">
                Help centre
              </p>
              <p className="text-[36px] md:text-[42px] leading-[100%] mb-8 font-serif">
                How can we help you?
              </p>
              <p className="tracking-tight text-base mb-[40px] md:text-lg">
                Egestas augue et convallis pulvinar sit integer enim at. Vel in
                mauris mauris in hac. Vitae nulla cras erat velit. Vitae ante et
                facilisi aenean. Urna mauris vestibulum enim tortor diam ut
                fermentum pellentesque pellentesque.
              </p>

              <div className="flex flex-col w-full emd:w-[350px]">
                <label
                  htmlFor="cars"
                  className="font-serif text-lg font-bold tracking-tight "
                >
                  Select an area:
                </label>
                <select onChange={()=>{handleChange("FAQ")}} className="py-3 pl-4 cursor-pointer appearance-none select-with-arrow outline-none bg-[#f0ece0] border border-[#c4bfaf] font-serif text-lg tracking-tight]" name="cars" id="cars">
                  <option value="#">Get in touch with us</option>
                  <option value="FAQ">Café FAQs</option>
                </select>
              </div>
            </div>
            <div className="md:block hidden col-start-10 place-self-end">
              <RepeaterSvg />
            </div>

            <div className=" md:block hidden col-start-11 w-full h-full col-end-21 self-center">
              <Image
                src={contactPage}
                className="w-full h-full object-cover"
                alt="wth"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <SelectionPage showMenu={showMenu}/>
    </>
  );
}
