"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdSpeed } from "react-icons/md";

const Game = ({ operations, ranges, score, setScore }) => {
   const [numbers, setNumbers] = useState({ numOne: 0, numTwo: 0 });
   const [operators, setOperators] = useState([]);
   const [currentOpIndex, setCurrentOpIndex] = useState(0);
   const [userInput, setUserInput] = useState("");

   const inputRef = useRef(null);
   useEffect(() => {
      let tempOperators = [];
      for (let key in operations) {
         if (operations[key]) {
            switch (key) {
               case "addition":
                  tempOperators.push("+");
                  break;
               case "subtraction":
                  tempOperators.push("-");
                  break;
               case "multiplication":
                  tempOperators.push("x");
                  break;
               case "division":
                  tempOperators.push("÷");
                  break;
               default:
                  return;
            }
         }
      }
      setOperators(tempOperators);
   }, [operations]);
   useEffect(() => {
      if (operators.length === 0) return;
      const randomOpIndex = Math.floor(Math.random() * operators.length);
      let op = operators[randomOpIndex];
      setCurrentOpIndex(randomOpIndex);
      let randomNumOne;
      let randomNumTwo;
      switch (op) {
         case "+":
            randomNumOne = Math.floor(
               Math.random() *
                  (ranges.additionRange.to - ranges.additionRange.from) +
                  ranges.additionRange.from
            );

            randomNumTwo = Math.floor(
               Math.random() *
                  (ranges.additionRange.to - ranges.additionRange.from) +
                  ranges.additionRange.from
            );
            break;
         case "-":
            randomNumOne = Math.floor(
               Math.random() *
                  (ranges.subtractionRange.to - ranges.subtractionRange.from) +
                  ranges.subtractionRange.from
            );
            randomNumTwo = Math.floor(
               Math.random() *
                  (ranges.subtractionRange.to - ranges.subtractionRange.from) +
                  ranges.subtractionRange.from
            );
            if (randomNumOne < randomNumTwo) {
               [randomNumOne, randomNumTwo] = [randomNumTwo, randomNumOne];
            }
            break;
         case "x":
            randomNumOne = Math.floor(
               Math.random() *
                  (ranges.multiplicationRange.to -
                     ranges.multiplicationRange.from) +
                  ranges.multiplicationRange.from
            );
            randomNumTwo = Math.floor(
               Math.random() *
                  (ranges.multiplicationRange.to -
                     ranges.multiplicationRange.from) +
                  ranges.multiplicationRange.from
            );
            break;
         case "÷":
         case "÷":
            const userMax = ranges.divisionRange.to;
            let quotiant;

            // Extend the range: allow bigger numbers (up to 5x or 6x)
            const extendedMax = userMax * 6;

            // Randomly pick numTwo between 1 and userMax (or slightly above)
            randomNumTwo = Math.floor(Math.random() * userMax) + 1;

            // Now find a safe quotiant
            const maxQuotiant = Math.floor(extendedMax / randomNumTwo);
            const minQuotiant = 1;

            if (maxQuotiant < 1) {
               randomNumTwo = 1;
               quotiant = 1;
               randomNumOne = 1;
            } else {
               quotiant =
                  Math.floor(Math.random() * (maxQuotiant - minQuotiant + 1)) +
                  minQuotiant;

               randomNumOne = randomNumTwo * quotiant;
            }
            break;
         default:
            return;
      }
      setNumbers((prev) => ({
         ...prev,
         numOne: randomNumOne,
         numTwo: randomNumTwo,
      }));
   }, [operators, score]);
   useEffect(() => {
      if (userInput === 0) return;
      let correctAnswer;
      switch (operators[currentOpIndex]) {
         case "+":
            correctAnswer = numbers.numOne + numbers.numTwo;
            break;
         case "-":
            correctAnswer = numbers.numOne - numbers.numTwo;
            break;
         case "x":
            correctAnswer = numbers.numOne * numbers.numTwo;
            break;
         case "÷":
            correctAnswer = numbers.numOne / numbers.numTwo;
            break;
         default:
            return;
      }
      if (correctAnswer === userInput) {
         setScore((prev) => prev + 1);
         setUserInput("");
      }
   }, [userInput]);
   useEffect(() => {
      inputRef.current?.focus();
   }, []);
   const handleUserInput = (e) => {
      const val = e.target.value;
      if (val === "") {
         setUserInput("");
      } else {
         setUserInput(Number(val));
      }
   };

   return (
      <div className="flex flex-col items-center justify-center gap-[4px]  mt-[10%] mb-[32px]">
         <div className="flex items-center gap-[4px] mb-[22px] text-[#aaa]">
            <p>
               <MdSpeed />
            </p>
            <p>{score}</p>
         </div>
         <div className="flex items-center gap-[4px]">
            <p className="text-[32px]">{numbers.numOne}</p>
            <p className="text-[32px]">{operators[currentOpIndex]}</p>
            <p className="text-[32px]">{numbers.numTwo}</p>
            <p className="text-[32px]">=</p>
            <input
               type="number"
               className="border-[#fff] border-[1px] text-[32px] w-[84px] h-[44px] px-[5px]"
               onChange={(e) => handleUserInput(e)}
               value={userInput}
               ref={inputRef}
            />
         </div>
      </div>
   );
};

export default Game;
