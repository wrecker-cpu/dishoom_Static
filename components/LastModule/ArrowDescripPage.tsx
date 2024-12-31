import { DownWardSvg, LastSectionSvg } from '@/svg/svgs'
import React from 'react'

export default function ArrowDescripPage() {
  return (
    <div className='grid-container md:sub-container mb-20'>
      <div className='col-start-1 col-end-7 md:col-start-2 md:col-end-20 xlg:col-start-3 xlg:col-end-19 border mb-1 border-dishoom'></div>
      <div className='relative col-start-1 col-end-7 md:col-start-2 md:col-end-20 xlg:col-start-3 xlg:col-end-19 border border-dishoom'>
        <div className='absolute w-[82px] h-[56px] md:w-[185px] md:h-[110px] top-0 left-3 md:left-[-13px]'>
            <DownWardSvg/>
        </div>
      </div>
      <div className='col-start-2 col-end-7 md:col-start-7 md:col-end-20 pt-1 xlg:col-start-6 xlg:col-end-19 mb-8 sm:mb-16 md:mb-20'>
        <p className='font-serif  text-left font-normal md:block hidden pl-0  text-[32px] text-dishoom leading-[40.90px] tracking-wider'>Giving generously and regularly, and offering aid to those less fortunate – both within and outside the community – is part of the essence of Islam.</p>
        <p className='font-serif text-2xl text-left font-normal md:hidden block pl-10 text-dishoom  leading-[30px]  tracking-[0.15rem] '>When I was a child, I remember first trying a dish similar to Haleem called Kichdha, another authentic Hyderabadi speciality. After the first mouthful I became addicted to it!</p>
      </div>
      <div className="col-start-1 col-end-7 w-[90%] md:w-full mx-auto  md:col-start-7 md:col-end-17  xlg:col-start-6 xlg:col-end-16 mb-20 font-normal text-lg md:text-[21px] text-justify text-dishoom tracking-[2%] md:tracking-[4%] leading-6 md:leading-9 ">
          <p className="mb-10 ">
          Whether you are fasting or whether you are of a different faith, Ramadan is an opportunity to honour the universal values of love, giving and unity. In doing so, we just might remind ourselves that we all have much more in common than we think.
          </p>
          <p>
          So - wishing you all Ramadan Mubarak! May your prayers and fasts be accepted.
          </p>
        </div>
        <div className="col-start-1 col-end-7  mx-auto  md:col-start-6 md:col-end-16 ">
          <LastSectionSvg />
        </div>
    </div>
  )
}
