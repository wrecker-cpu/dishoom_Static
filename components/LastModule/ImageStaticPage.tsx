import Image from 'next/image'
import React from 'react'
import familyImg from "@/public/FamilyLastSec.png";
import oldImg from "@/public/oldpic.png";
import { ImageStaticPageData, SecondImageStaticPageData } from '@/data/data';



export default function ImageStaticPage() {
  return (
    <div>
      
      <div className="grid-container overflow-hidden mb-16 md:mb-20 sub-container">
      <div className="col-start-1 col-end-7 md:col-start-6 md:col-end-16 mb-20 font-normal text-justify text-lg md:text-[21px] text-dishoom  tracking-[4%] leading-6 md:leading-9 ">
          <p className="mb-10 ">
            Sollicitudin lorem neque faucibus justo imperdiet eleifend porta
            pulvinar. Vestibulum quam diam ac eu nunc integer. Et non elit
            aenean fermentum fames sed vulputate sed. Risus ut at sagittis nunc
            rhoncus mollis nisi. Feugiat elit et quis tristique mauris mauris
            morbi id nisl. Massa egestas ipsum aliquet vulputate mauris.
          </p>
          <p>
            Dui ut sollicitudin scelerisque molestie adipiscing turpis euismod
            at. Molestie magna amet id ornare euismod dolor. Arcu diam phasellus
            turpis elementum.
          </p>
        </div>
        <div className="col-start-1 col-end-6 md:block hidden md:col-start-2 md:col-end-20 mb-20">
          <div className="flex flex-row items-center mb-16 gap-4">
            {ImageStaticPageData.map((item)=>{
                return(
                    <div key={item.id} className="relative">
            <Image className=" object-contain" src={item.image} alt="wth" />
            <div className="absolute -bottom-6">
                <p className="font-bold text-dishoom font-serif">{item.id}</p>
            </div>
            </div>
                )
            })}
            
          </div>
          <div className="flex justify-end marker:font-bold ">
            <ul className="list-decimal font-serif text-sm  ">
              <li>
                Metus orci diam donec aliquam commodo felis tellus fermentum
              </li>
              <li> Risus sollicitudin est at diam lacus congue consequat ut</li>
            </ul>
          </div>
       
        </div>
        <div className="col-start-1 col-end-6 md:block hidden  md:col-start-6 md:col-end-16 mb-20 font-normal  text-[21px] text-dishoom  tracking-[4%] leading-9 ">
          <p className="mb-10 ">
            Sollicitudin lorem neque faucibus justo imperdiet eleifend porta
            pulvinar. Vestibulum quam diam ac eu nunc integer. Et non elit
            aenean fermentum fames sed vulputate sed. Risus ut at sagittis nunc
            rhoncus mollis nisi. Feugiat elit et quis tristique mauris mauris
            morbi id nisl. Massa egestas ipsum aliquet vulputate mauris.
          </p>
          <p>
            Dui ut sollicitudin scelerisque molestie adipiscing turpis euismod
            at. Molestie magna amet id ornare euismod dolor. Arcu diam phasellus
            turpis elementum.
          </p>
        </div>
        <div className="col-start-1 col-end-7 md:col-start-2 md:col-end-20 mb-0 md:mb-20">
          <div className="flex flex-col md:flex-row items-center mb-16 gap-10 md:gap-4">
            {SecondImageStaticPageData.map((item)=>{
                return(
                    <div key={item.id} className="relative w-[350px] sm:w-[394px]">
            <Image className=" object-contain" src={item.image} alt="wth" />
            <div className="absolute -bottom-6">
                <p className="font-bold text-dishoom font-serif">{item.id}</p>
            </div>
            </div>
                )
            })}
            
          </div>
          <div className="flex justify-start  esm:justify-center md:justify-end ">
            <ul className=" max-w-[288px] esm:max-w-full font-serif text-sm  ">
              <li>
                <span className='font-bold pr-1'>1.</span>Metus orci diam donec aliquam commodo felis tellus fermentum
              </li>
              <li> <span className='font-bold pr-1'>2.</span> Risus sollicitudin est at diam lacus congue consequat ut</li>
              <li>  <span className='font-bold pr-1'>3.</span> Volutpat in viverra tellus ac facilisi venenatis commodo urna</li>
            </ul>
          </div>
       
        </div>
      </div>
    </div>
  )
}
