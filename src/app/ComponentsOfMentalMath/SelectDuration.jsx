"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

const SelectDuration = ({ duration, setDuration }) => {
   const [isOpen, setIsOpen] = useState(false);
   const durations = [30, 60, 120, 180];
   return (
      <div className="relative  col-span-2 justify-self-center md:justify-self-auto md:col-span-1">
         <div
            className={`text-[#000] bg-[var(--secondary)] w-[130px] md:w-[160px] h-[32px] flex items-center justify-between px-[8px] rounded-[8px] cursor-pointer  ${
               isOpen ? "rounded-b-[0]" : ""
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <p>Duration(sec)</p>
            <MdArrowDropDown
               size={28}
               className={`${isOpen && "rotate-180"} transition-transform `}
            />
         </div>
         <div
            className={` w-[130px] md:w-[160px] bg-[var(--surface)] absolute top-[32px] rounded-b-[8px] ${
               isOpen ? "" : "hidden"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <ul className="px-[8px] py-[12px] flex flex-col gap-[12px]">
               {durations.map((dur, idx) => {
                  return (
                     <li
                        key={idx}
                        className={` flex items-center justify-between cursor-pointer group`}
                        onClick={() => setDuration(dur)}
                     >
                        <p className="group-hover:translate-x-[4px] text-[14px] md:text-[16px] transition-transform duration-200">
                           {dur}
                        </p>
                        <div
                           className={`border-[] bg-[var(--primary)] h-[16px] w-[16px] md:h-[20px] md:w-[20px] flex items-center justify-center rounded-[50%] ${
                              duration === dur ? "" : "hidden"
                           }`}
                        >
                           <FaCheck size={12} />
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default SelectDuration;
