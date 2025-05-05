"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
const SelectOperators = ({ operations, setOperations, startGame }) => {
   const [isOpen, setIsOpen] = useState(false);
   const operationsList = [
      "addition",
      "subtraction",
      "multiplication",
      "division",
   ];
   const handleOperationsSelection = (op) => {
      switch (op) {
         case "addition":
            setOperations((prev) => ({ ...prev, addition: !prev.addition }));
            break;
         case "subtraction":
            setOperations((prev) => ({
               ...prev,
               subtraction: !prev.subtraction,
            }));
            break;
         case "multiplication":
            setOperations((prev) => ({
               ...prev,
               multiplication: !prev.multiplication,
            }));
            break;
         case "division":
            setOperations((prev) => ({ ...prev, division: !prev.division }));
            break;
         default:
            return;
      }
   };

   return (
      <div className={`relative ${startGame ? "pointer-events-none" : ""}`}>
         <div
            className={`text-[#000] bg-[var(--secondary)] w-[130px] md:w-[160px]  h-[32px] flex items-center justify-between px-[8px] rounded-[8px] cursor-pointer ${
               isOpen ? "rounded-b-[0]" : ""
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <p className="text-[16px] ">Operations</p>
            <MdArrowDropDown
               size={28}
               className={`${isOpen && "rotate-180"} transition-transform `}
            />
         </div>
         <div
            className={` w-[130px] md:w-[160px] bg-[var(--surface)] absolute top-[32px] rounded-b-[8px] z-9 ${
               isOpen ? "" : "hidden"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <ul className="px-[8px] py-[12px] flex flex-col gap-[12px]">
               {operationsList.map((op, idx) => {
                  const isSelected = operations[op];
                  return (
                     <li
                        key={idx}
                        className={` flex items-center justify-between cursor-pointer group ${
                           isSelected ? "text-[#ffff]" : "text-[grey]"
                        }`}
                        onClick={() => handleOperationsSelection(op)}
                     >
                        <p className=" group-hover:translate-x-[4px] transition-transform duration-200 text-[14px] md:text-[16px]">
                           {op}
                        </p>
                        <div className=" bg-[var(--primary)] h-[16px] w-[16px] md:h-[20px] md:w-[20px] flex items-center justify-center rounded-[50%]">
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

export default SelectOperators;
