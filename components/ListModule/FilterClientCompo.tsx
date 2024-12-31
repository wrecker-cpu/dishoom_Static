'use client';
import { FilterGroupSvg } from '@/svg/svgs';
import Modal from './Modal';
import React, { useEffect, useRef, useState } from 'react';
import FilterLocation from './FilterLocation'; // Ensure correct import path
import { AnimatePresence,motion } from 'framer-motion';


interface Filterprops{
  mainpage:boolean;
}

export default function FilterClientCompo({mainpage}:Filterprops) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState(false);

  const toggleFilter = () => {
    setToggle(!toggle);
  };

  const closeFilter = () => {
    setToggle(false);
  };

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        divRef.current?.contains(e.target as Node) ||
        btnRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setToggle(false); // Close the modal when clicked outside
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick); // Correct cleanup
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when the modal is open
    document.body.style.overflow = toggle ? 'hidden' : 'auto';
  }, [toggle]);

  return (
    <>
      <div
        onClick={toggleFilter}
        ref={btnRef}
        className={`${mainpage===true?"py-1 hidden md:flex items-center cursor-pointer gap-2":"py-1 flex w-full justify-center cursor-pointer gap-2"}`}
      >
        <FilterGroupSvg />
        <p className="text-[12px] whitespace-nowrap pt-[2px]  text-[#353839] font-semibold font-sans tracking-[3.25px] uppercase">
          FILTER LOCATIONS
        </p>
      </div>
      <AnimatePresence>
      {toggle && (

        <Modal>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.3 }}
          >
          <FilterLocation closeFilter={closeFilter} divRef={divRef} />
          </motion.div>
          </Modal>
          
      )}
    </AnimatePresence>
    </>
  );
}
