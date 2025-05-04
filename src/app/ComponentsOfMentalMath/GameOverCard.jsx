import React from "react";

const GameOverCard = ({ score, setStartGame, setGameOver, setScore }) => {
   const handleClickOne = () => {
      setStartGame(true);
      setGameOver(false);
      setScore(0);
   };
   const handleClickTwo = () => {
      setGameOver(false);
      setScore(0);
   };
   return (
      <div className="h-[300px] w-[100%] bg-[var(--surface)] flex justify-center items-center flex-col gap-[12px]">
         <div className="flex flex-col items-center">
            <h1 className="text-[42px]">Your Score!</h1>
            <h1 className="text-[42px]">{score}</h1>
         </div>
         <div className="flex  gap-[22px]">
            <button
               className="bg-[var(--secondary)] text-[#000] w-[120px] py-[4px] rounded-[8px] cursor-pointer"
               onClick={handleClickOne}
            >
               Try Again
            </button>
            <button
               className="bg-[#bcbcbc] text-[#000] w-[120px] py-[4px] rounded-[8px] cursor-pointer"
               onClick={handleClickTwo}
            >
               Back
            </button>
         </div>
      </div>
   );
};

export default GameOverCard;
