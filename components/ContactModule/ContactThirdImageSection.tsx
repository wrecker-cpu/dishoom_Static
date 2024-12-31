import Image from "next/image";
import React from "react";
import contactImage from "@/public/ContactImageThirdSection.png";
import { ContactThirdSvg } from "@/svg/svgs";
import Silder from "./Silder";




export default function ContactThirdImageSection() {



  return (
    <div className="grid-container">
      <div className="col-start-1 col-end-21">
        <div className="w-full h-auto relative group">
          <Image className="w-full h-[390px] md:h-[700px] object-cover" src={contactImage} alt="wth" />
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-450%] md:translate-x-0 md:translate-y-0 md:top-[9rem] md:left-[5rem]">
            <ContactThirdSvg />
          </div>
          <div className="md:translate-x-[90%] translate-x-0 max-w-full md:max-w-[32rem] h-full transition-transform duration-700 ease-in-out md:group-hover:translate-x-0 static md:absolute top-0 right-0 ">
            <Silder/>
          </div>
        </div>
      </div>
    </div>
  );
}
