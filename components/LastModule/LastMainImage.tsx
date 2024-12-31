import Image from 'next/image'
import React from 'react'
import MainImg from "@/public/LastMainImage.png";

export default function LastMainImage() {
  return (
    <div className='grid-container sub-container mb-20 '>
      <div className='col-start-1 col-end-7 md:col-start-1 md:col-end-21 mb-5'>
      <div className='h-[235px]  sm:h-auto'>
        <Image className='w-full h-full object-cover' src={MainImg} alt="Wth"/>
        </div>
        
      </div>
      <div className=' col-start-1 col-end-7 md:col-end-11 pb-5  border-b border-[#C4BFAF80]'>
        <p className='font-serif text-sm text-dishoom'><span className='uppercase font-serif text-sm font-semibold tracking-widest'>Above :</span> Enim adipiscing quis in amet feugiat neque nibh. Ullamcorper egestas nunc convallis lacus. Nec mattis et viverra dictum nibh non gravida lectus tincidunt. Enim integer amet ligula mi sagittis.</p>
      </div>
    </div>
  )
}
