import React from 'react'

interface buttonProps{
    button1: string;
    button2: string;
    custom?:boolean; 
    className?:string;
}

export default function CustomButton({button1,button2,custom,className}:buttonProps) {
  return (
    <div className={`${className?(className):"font-sans mt-4 text-[15px] font-bold flex gap-3 "}`}>
                        <div className="p-[2px] w-full md:w-auto border-2 transition-colors ease-in-out duration-200  hover:border-dishoom border-[#80807c]">
                          {/* <button className=" md:px-[5.5vw] w-full emd:px-14 py-[6px] border border-[#dad5c7]"> */}
                          <button className={` ${custom===true?"md:px-4 py-[5px] md:py-[6px]":"   md:px-[5.5vw] emd:px-14 py-[6px]"} w-full   border transition-colors ease-in-out duration-200    hover:border-dishoom border-[#dad5c7]`}>
                            {button1}
                          </button>
                        </div>
                        <div className="p-[2px] w-full md:w-auto border-2 transition-colors ease-in-out duration-200 border-[#353839] bg-[#353839]">
                          <button className={`${custom===true?"md:px-4 py-[5px] md:py-[6px]":"   md:px-[5.5vw] emd:px-14 py-[6px]"} w-full   border transition-colors ease-in-out duration-200 hover:border-[#dad5c7] border-[#7d7c74] text-[#fffdf9] bg-[#353839]`}>
                            {button2}
                          </button>
                        </div>
                      </div>
  )
}
