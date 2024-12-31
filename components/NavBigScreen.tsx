import React from "react";

// Define the type for the props
interface NavBigOptionsProps {

    title:string;

  mapData: Array<{
    id: number;
    name: string;
  }>;
}

const NavBigScreen: React.FC<NavBigOptionsProps> = React.memo(({ title,mapData }) => {


  console.log("NavbigScreenRenders")

  return (

    <div className=" sticky md:block hidden top-[190px]  mb-20 z-[10]">
              <p className="uppercase md:block hidden  font-sans font-bold mb-3 text-xs  tracking-[3px]">
                {title}
              </p>
              <div className="md:block overflow-x-scroll whitespace-nowrap gap-5 w-[90%] bg-[#f0ece0] md:w-full mx-auto flex">
                {mapData.map((item) => {
                  return (
                    <div key={item.id} className="w-full mb-2">
                      <p className="text-[#363839d8] md:inline-block cursor-pointer text-xl leading-7 font-serif tracking-tight">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
               <div
            className="border-b border-[#C4BFAF80] bg-[#f0ece0] absolute bottom-0 left-0 right-0 md:hidden"
            style={{ borderBottomWidth: "1px", borderBottomColor: "#C4BFAF80" }}
          ></div> 
            </div>
  );
});

export default NavBigScreen;

