"use client";
import React, { useEffect, useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
const CountdownTimer = ({ duration, setStartGame, setGameOver }) => {
   const [timeLeft, setTimeLeft] = useState(duration);

   useEffect(() => {
      if (timeLeft <= 0) {
         setStartGame(false);
         setGameOver(true);
         return;
      }

      const timerId = setInterval(() => {
         setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId); // cleanup
   }, [timeLeft, setStartGame, setGameOver]);

   const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
         2,
         "0"
      )}`;
   };

   return (
      <div className="text-white text-[23px] mb-4 flex justify-center items-center gap-[4px]">
         <p>
            <GiSandsOfTime className="text-[white] " size={24} />
         </p>
         <p className=""> {formatTime(timeLeft)}</p>
      </div>
   );
};

export default CountdownTimer;
