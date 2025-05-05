"use client";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus, FaMinus, FaDivide, FaTimes } from "react-icons/fa";

const SelectRanges = ({ ranges, setRanges, startGame }) => {
   const [isOpen, setIsOpen] = useState(false);
   //    const symbols = ["+", "-", "x", "÷"];
   const symbols = [
      { name: "addition", icon: <FaPlus /> },
      { name: "subtraction", icon: <FaMinus /> },
      { name: "multiplication", icon: <FaTimes /> },
      { name: "division", icon: <FaDivide /> },
   ];
   const handleRange = (e, name, str) => {
      const input = e.target.value;
      const key = `${name}Range`;

      if (input === "") {
         setRanges((prev) => ({
            ...prev,
            [key]: {
               ...prev[key],
               [str === "min" ? "from" : "to"]: "",
            },
         }));
         return;
      }

      let value = Number(input);

      // Clamp value between 1 and 100
      if (value < 1) value = 1;
      if (value > 100) value = 100;

      setRanges((prev) => ({
         ...prev,
         [key]: {
            ...prev[key],
            [str === "min" ? "from" : "to"]: value,
         },
      }));
      console.log(ranges);
   };

   return (
      <div className={`relative ${startGame ? "pointer-events-none" : ""}`}>
         <div
            className={`text-[#000] bg-[var(--secondary)] w-[130px] md:w-[160px] h-[32px] flex items-center justify-between px-[8px] rounded-[8px] cursor-pointer ${
               isOpen ? "rounded-b-[0]" : ""
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <p>Ranges</p>
            <MdArrowDropDown
               size={28}
               className={`${isOpen && "rotate-180"} transition-transform `}
            />
         </div>
         <div
            className={` w-[130px] md:w-[160px]  bg-[var(--surface)] absolute top-[32px] rounded-b-[8px] z-9  ${
               isOpen ? "" : "hidden"
            }`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
         >
            <ul className="px-[8px] py-[12px] flex flex-col gap-[12px]">
               {symbols.map((symbol, idx) => {
                  const rangeValue =
                     symbol.name === "addition"
                        ? ranges.additionRange
                        : symbol.name === "subtraction"
                        ? ranges.subtractionRange
                        : symbol.name === "multiplication"
                        ? ranges.multiplicationRange
                        : symbol.name === "division"
                        ? ranges.divisionRange
                        : "";
                  return (
                     <li
                        key={idx}
                        className={` flex items-center justify-between  text-[#ffff]`}
                     >
                        <div className=" text-[12px] md:text-[16px]">
                           {" "}
                           {symbol.icon}
                        </div>
                        <div className="flex gap-[4px] ">
                           <input
                              type="number"
                              value={rangeValue.from}
                              className="border-[1px] w-[32px] md:w-[42px] px-[4px] text-[12px] md:text-[16px]"
                              onChange={(e) =>
                                 handleRange(e, symbol.name, "min")
                              }
                           />
                           <p>to</p>
                           <input
                              type="number"
                              value={rangeValue.to}
                              className="border-[1px]  px-[4px] w-[32px] md:w-[42px] text-[12px] md:text-[16px]"
                              onChange={(e) =>
                                 handleRange(e, symbol.name, "max")
                              }
                           />
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

export default SelectRanges;
