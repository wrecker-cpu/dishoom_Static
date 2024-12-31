import { FamilyPicData } from '@/data/data';
import { ArrowSvg } from '@/svg/svgs';
import Image from 'next/image';
import React, { useState } from 'react'

export default function CoursalSliderFirst() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, FamilyPicData.length - 1));
    };
  
    const imageWidth = 670;
    const spacerWidth = 130;
    const totalWidth = imageWidth + spacerWidth;
  return (
    <div className="grid-container group relative sub-container  mb-0 md:mb-20 ">
        {/* First Paragraph */}

        <div
            onClick={() => {
              currentIndex === 0 ? null : handlePrev();
            }}
            className={`hidden md:block absolute z-[10] w-36 cursor-pointer ${
              currentIndex === 0 ? "opacity-20" : "opacity-100"
            } left-[-36px] top-[50%] transition-all ease-in-out duration-500 translate-x-[-100%] group-hover:translate-x-[0%] translate-y-[-50%] `}
          >
            <div className="w-full flex justify-center items-center overflow-hidden h-[50px] transition-all duration-300 ease-in-out py-[6px] border border-[#353839] text-[#353839] bg-[#f1ece0]">
              <div className=" rotate-180 flex justify-center">
                <ArrowSvg />
              </div>
            </div>
          </div>

          <div
            onClick={() => {
              currentIndex === FamilyPicData.length - 1 ? null : handleNext();
            }}
            className={`hidden md:block absolute z-[10] w-36 cursor-pointer ${
              currentIndex === FamilyPicData.length - 1
                ? "opacity-20"
                : "opacity-100"
            }  right-[-36px] top-[50%] transition-all ease-in-out duration-500 group-hover:-translate-x-[0%] translate-x-[180%] translate-y-[-50%] `}
          >
            <div className="w-full flex justify-center items-center overflow-hidden h-[50px] transition-all duration-300 ease-in-out py-[6px] border border-[#353839] text-[#353839] bg-[#f1ece0]">
              <div className="  flex justify-center">
                <ArrowSvg />
              </div>
            </div>
          </div>

        <div className="relative col-start-1 col-end-7 md:col-start-3 md:col-end-21 mmd:col-start-4 mmd:col-end-21  xlg:col-start-6 xlg:col-end-21 mb-4 group flex justify-start items-center">
          

          <div
            className="relative gap-5 md:gap-32 flex overflow-x-scroll scrollbar-hide md:overflow-x-visible  snap-x snap-mandatory transition-transform ease-in-out duration-500"
            style={{
              width: imageWidth + spacerWidth * 2,
              transform: `translateX(-${currentIndex * totalWidth}px)`,
            }}
          >
            
            {FamilyPicData.map((item) => (
              <div
                key={item.id}
                className={`w-[330px] h-[240px] md:min-w-[672px] md:h-[481px] md:w-auto flex-shrink-0 snap-center transition-opacity duration-500 ease-in-out ${
                  item.id === currentIndex + 1 ? "opacity-100 md:opacity-100" : "opacity-100 md:opacity-20"
                }`}
              >
                <Image
                  className="w-full h-full object-cover md:object-contain"
                  src={item.image}
                  alt={`family-image-${item.id}`}
                />
              </div>
            ))}
            <div className="flex-shrink-0 w-[672px]"></div> {/* Right spacer */}
          </div>

          
        </div>
        <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16">

        <p className='font-serif text-sm text-start md:text-center text-dishoom'><span className='uppercase font-serif text-sm font-semibold tracking-widest'>Above :</span> Enim adipiscing quis in amet feugiat neque nibh. Ullamcorper egestas nunc convallis lacus. Nec mattis et viverra dictum nibh non gravida lectus tincidunt. Enim integer amet ligula mi sagittis.</p>

       </div>

    </div>
  )
}
