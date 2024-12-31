import React, { useState } from "react";

// Define the type for the props
interface NavOptionsProps {
  mapData: Array<{
    id: number;
    name: string;
  }>;
}

const NavSmallScreen: React.FC<NavOptionsProps> = React.memo(({ mapData }) => {

    const [currentIdx, setcurrentIdx] = useState<number>(0)


    const handleClick=(idx:number)=>{
        setcurrentIdx(idx)
    }

  return (
    <div className="md:block overflow-x-scroll scrollbar-hide whitespace-nowrap gap-5 w-[90%] bg-[#f0ece0] md:w-full mx-auto flex">
      {mapData.map((item,idx) => (
        <div key={item.id} className="w-full mt-2 mb-3">
          <p onClick={()=>{handleClick(idx)}} className={`text-[#363839d8] ${idx===currentIdx?" border-opacity-100 transition-colors":"border-opacity-0"}  border-b-2 border-dishoom  ease-in-out duration-300 md:inline-block cursor-pointer text-xl font-serif leading-normal tracking-tight`}>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
});

export default NavSmallScreen;
