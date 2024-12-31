
import React from 'react'

interface BlackCustomButtonProps{
    name: string;
  className?: string;
  custom?:boolean;
}

export default function BlackCustomButton({name,className,custom}:BlackCustomButtonProps) {
  return (
    <div className={className}>
    <button type='submit' className={` ${custom?"px-4 py-[6px]":" emd:px-4 py-[6px] md:px-[5.5vw]"}  w-full   font-semibold font-sans border transition-colors ease-in-out duration-200 hover:border-[#dad5c7] border-[#7d7c74] text-[#fffdf9] bg-[#353839]`}>
      {name}
    </button>
  </div>
  )
}
