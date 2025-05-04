"use client";

import { CLIENT_STATIC_FILES_RUNTIME_MAIN } from "next/dist/shared/lib/constants";
import React, { useEffect, useState } from "react";

const GameStartCountdown = () => {
   const [time, setTime] = useState(3);
   useEffect(() => {
      if (time > 1) {
         const delay = setTimeout(() => {
            setTime((prev) => prev - 1);
         }, 1000);

         return () => clearTimeout(delay);
      }
   }, [time]);

   return <div>{time}</div>;
};

export default GameStartCountdown;
