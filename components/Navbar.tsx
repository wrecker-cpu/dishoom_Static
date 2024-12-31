import {
  BurgerSvg,
  DishLogo,
  DishSmallLogo,
  SearchLogoSvg,
  ShopLogoSvg,
  UserLogoSvg,
} from "@/svg/svgs";
import React from "react";

export default function Navbar() {

  const NavbarLinks=[
    {
      id:1,
      label: 'Cafés',
      link: '#',
    },
    {
      id:2,
      label: 'Menu',
      link: '#',
    },
    {
      id:3,
      label: 'Shop',
      link: '#',
    },
    
  ]

  return (
    <div className="py-10 md:border-b  border-[#C4BFAF80] relative border-b-0">
        <div className="border-y border-[#C4BFAF80] p-[2px] bg-[#f0ece0] absolute bottom-[-5px] left-0 right-0 md:hidden" style={{ borderBottomWidth: '1px', borderBottomColor: '#C4BFAF80' }}></div>
        <div className="sub-container">
      <div className="grid-container ">
        <div className=" md:col-start-1 md:col-end-8  xlg:col-end-7 text-[15px] uppercase font-sans font-semibold tracking-[3.25px] hidden lg:flex items-center justify-between">
          <p className="font-sans text-[15px] cursor-pointer font-semibold tracking-[3.25px] uppercase text-[#353839]  ">
            Explore
          </p>
          <div className="border h-[2vh] 2xl:h-[20px]  border-[#c4bfaf]"></div>
          {NavbarLinks.map((item)=>{
            return(
              <a key={item.id} className="hover:bg-dishoom hover:text-[white] transition-colors ease-in-out duration-200 rounded-lg py-1 px-2" href={item.link}>
                {item.label}
              </a>
            )
          })}
        </div>
        <div className=" col-start-1 col-end-3 lg:col-start-9 lg:col-end-13 flex gap-4 justify-start lg:justify-center items-center">
          <div className="block lg:hidden">
            <BurgerSvg />
          </div>
          <div className="col-start-2 col-end-4 lg:col-start-9 lg:col-end-13  flex items-center justify-start lg:justify-center">
            <div className="lg:block hidden">
              <DishLogo />
            </div>
            <div className="lg:hidden block">
              <DishSmallLogo />
            </div>
          </div>
        </div>

        <div className="col-start-5 col-end-7 md:col-start-15 xlg:col-start-16 md:col-end-21 flex gap-2 md:gap-8 items-center justify-end">
          <div className="col-span-3 esm:block hidden">
            <p className="cursor-pointer text-[15px] font-semibold text-[#353839] font-sans tracking-[3.25px] flex gap-2 items-center md:whitespace-nowrap uppercase">
              Book<span className="lg:block hidden"> a table</span>
            </p>
          </div>
          <div className="col-span-2 flex gap-3 items-center">
            <div className="lg:block hidden">
              <SearchLogoSvg />
            </div>
            <div>
              <UserLogoSvg />
            </div>
            <div>
              <ShopLogoSvg />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
