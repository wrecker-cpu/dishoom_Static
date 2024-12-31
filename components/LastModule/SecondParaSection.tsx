"use client";
import Image from "next/image";
import React, { useState } from "react";

import CoursalSliderFirst from "./CoursalSliderFirst";

export default function SecondParaSection() {
  return (
    <div className="mb-16 md:mb-20">
      <div className="grid-container group relative overflow-hidden mb-10 md:mb-20 sub-container">
        {/* First Paragraph */}
        <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16 mb-4 md:mb-20">
          <p className=" font-normal  text-2xl text-dishoom text-justify tracking-[4%] leading-9 ">
          For Ramadan 2015, as our act of charity (zakat) we supported two wonderful charities – Magic Breakfast in the UK, and The Akshaya Patra Foundation in India. At Diwali the same year, we made this partnership permanent. For every meal we serve, we donate a meal to a child who would otherwise go hungry. A meal for a meal. Since then, thanks to your kind support, we have donated over 20 million meals to children in the UK and India! We are beyond grateful to you all, dear patrons, and to our brilliantly big-hearted team.
          </p>
        </div>
      </div>
      <CoursalSliderFirst/>
    </div>
  );
}
