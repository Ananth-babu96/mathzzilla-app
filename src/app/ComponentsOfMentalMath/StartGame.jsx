"use client";
import React from "react";

const StartGame = ({ setStartGame, setGameOver }) => {
   const handleClick = () => {
      setGameOver(false);
      setStartGame(true);
   };
   return (
      <div>
         <button
            className={`bg-[var(--secondary)] py-[8px] px-[56px] font-bold text-[22px] cursor-pointer text-[#000] rounded-[8px]`}
            onClick={handleClick}
         >
            Start
         </button>
      </div>
   );
};

export default StartGame;
