import React from 'react'

interface WhiteCustomButtonProps{
    name: string;
  className?: string;
}

export default function WhiteCustomButton({name,className}:WhiteCustomButtonProps) {
  return (
    <div className={className}>
                          <button className={`  py-[6px] w-full   border transition-colors ease-in-out duration-200    hover:border-dishoom border-[#dad5c7]`}>
                            {name}
                          </button>
                        </div>
  )
}
