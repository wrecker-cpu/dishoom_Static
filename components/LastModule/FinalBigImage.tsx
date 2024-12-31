import Image from 'next/image'
import React from 'react'
import FinalBig from '@/public/FinalBig.png';

export default function FinalBigImage() {
  return (
    <div className='grid-container mb-20'>
      <div className='col-span-21 '>
        <div className='relative h-[540px] md:h-[720px]'>
        <Image className='w-full h-full object-cover' src={FinalBig} alt=''/>
        <div className='absolute bottom-10 md:bottom-28 left-7 md:left-32'>
            <p className='font-serif text-[white] mb-6 text-2xl md:text-4xl leading-[30px] md:leading-9 tracking-widest left-10'>Stay up to date with all the goings-on.</p>
            <div className="p-[2px] inline-block border-2 transition-colors ease-in-out duration-200 border-[#dad5c7]">
  <button type='submit' className="px-4 py-[6px] font-semibold font-sans border transition-colors ease-in-out duration-200 hover:border-[#dad5c7] border-[#7d7c74] text-[#fffdf9] bg-inherit">
    <p className='md:block hidden'>Subscribe to our newsletter</p>
    <p className='block md:hidden'>Subscribe</p>
  </button>
</div>

        </div>
        </div>
        
      </div>
      
    </div>
  )
}
