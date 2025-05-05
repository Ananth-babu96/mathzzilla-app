"use client";
import React from "react";
import SelectOperators from "./SelectOperators";
import SelectRanges from "./SelectRanges";
import SelectDuration from "./SelectDuration";
import StartGame from "./StartGame";

const UserInputs = ({
   operations,
   setOperations,
   ranges,
   setRanges,
   duration,
   setDuration,
   setStartGame,
   setGameOver,
   startGame,
   gameOver,
}) => {
   return (
      <div className="my-[22px] px-[4px] flex flex-col gap-[140px] items-center">
         <div className="my-[22px] px-[] grid grid-cols-2 md:grid-cols-3 gap-[10px]">
            <SelectOperators
               operations={operations}
               setOperations={setOperations}
               startGame={startGame}
            />
            <SelectRanges
               ranges={ranges}
               setRanges={setRanges}
               startGame={startGame}
            />
            <SelectDuration
               duration={duration}
               setDuration={setDuration}
               startGame={startGame}
            />
         </div>
         {!startGame && !gameOver ? (
            <StartGame setStartGame={setStartGame} setGameOver={setGameOver} />
         ) : (
            <></>
         )}
      </div>
   );
};

export default UserInputs;
