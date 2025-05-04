"use client";
import CountdownTimer from "@/app/ComponentsOfMentalMath/CountDownTimer";
import Game from "@/app/ComponentsOfMentalMath/Game";
import GameOverCard from "@/app/ComponentsOfMentalMath/GameOverCard";
import UserInputs from "@/app/ComponentsOfMentalMath/UserInputs";
import React, { useEffect, useState } from "react";

const MentalMath = () => {
   const [operations, setOperations] = useState({
      addition: true,
      subtraction: true,
      multiplication: true,
      division: true,
   });
   const [ranges, setRanges] = useState({
      additionRange: { name: "addition", from: 1, to: 100 },
      subtractionRange: { name: "subtraction", from: 1, to: 100 },
      multiplicationRange: { name: "multiplication", from: 1, to: 100 },
      divisionRange: { name: "division", from: 1, to: 100 },
   });
   const [duration, setDuration] = useState(120);
   const [startGame, setStartGame] = useState(false);
   const [gameOver, setGameOver] = useState(false);
   const [score, setScore] = useState(0);

   useEffect(() => {}, []);
   return (
      <>
         <h2 className="text-center mt-[12px]">MENTAL CALCULATION</h2>
         <UserInputs
            operations={operations}
            setOperations={setOperations}
            ranges={ranges}
            setRanges={setRanges}
            duration={duration}
            setDuration={setDuration}
            setStartGame={setStartGame}
            startGame={startGame}
            gameOver={gameOver}
            setGameOver={setGameOver}
         />

         {startGame && (
            <Game
               operations={operations}
               ranges={ranges}
               score={score}
               setScore={setScore}
            />
         )}
         {startGame && (
            <CountdownTimer
               duration={duration}
               setStartGame={setStartGame}
               setGameOver={setGameOver}
            />
         )}
         {gameOver && (
            <GameOverCard
               score={score}
               setStartGame={setStartGame}
               setGameOver={setGameOver}
               setScore={setScore}
            />
         )}
      </>
   );
};

export default MentalMath;
