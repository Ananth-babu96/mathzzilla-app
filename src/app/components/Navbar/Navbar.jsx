"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiMenuBurger } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
   const pathname = usePathname();
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   const activeLink = (href) => {
      return pathname === href ? "text-[var(--primary)] " : "";
   };

   return (
      <section className="relative py-[12px] px-[12px]  md:px-[26px] bg-[var(--surface)]">
         <nav className="flex items-center justify-between ">
            <div className="logo">
               <h1 className="text-[24px] md:text-[34px] font-[600] tracking-[8px]">
                  MathZillah
               </h1>
            </div>

            <ul className={`md:flex gap-[18px] hidden`}>
               <li>
                  <Link href="/" className={activeLink("/")}>
                     Mental math
                  </Link>
               </li>
               <li>
                  <Link href="/reasoning" className={activeLink("/reasoning")}>
                     Reasoning
                  </Link>
               </li>
               <li>
                  <Link href="/questions" className={activeLink("/questions")}>
                     Questions
                  </Link>
               </li>
            </ul>
            <div
               className="md:hidden block"
               onClick={() => setMobileMenuOpen(true)}
            >
               <CiMenuBurger />
            </div>
         </nav>
         <div
            className={`absolute transition-transform    left-[0] top-[0] h-[180px] w-[100%] bg-[var(--surface)] z-[9] ${
               !mobileMenuOpen ? "translate-y-[-180px]" : "translate-y-[0]"
            }`}
         >
            <ul
               className={`flex flex-col items-center justify-center h-[100%] gap-[18px] `}
            >
               <li onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/" className={activeLink("/")}>
                     Mental math
                  </Link>
               </li>
               <li onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/reasoning" className={activeLink("/reasoning")}>
                     Reasoning
                  </Link>
               </li>
               <li onClick={() => setMobileMenuOpen(false)}>
                  <Link href="/questions" className={activeLink("/questions")}>
                     Questions
                  </Link>
               </li>
            </ul>
            <div
               className="absolute top-[20px] right-[10px] md:top-[24px] md:right-[24px] "
               onClick={() => setMobileMenuOpen(false)}
            >
               <FaTimes />
            </div>
         </div>
      </section>
   );
};

export default Navbar;
