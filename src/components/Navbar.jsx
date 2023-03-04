import React from "react";
import Logo from "../images/Logo.jpg";
import { SiGithub } from "react-icons/si";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function Navbar({ darkMode, setDarkMode }) {
   return (
      <div className="sticky top-0 z-50 h-16 bg-lightbg text-zinc-600 dark:text-stone-100 dark:bg-darkbg">
         <nav className="flex items-center justify-between w-11/12 h-full mx-auto 2xl:w-9/12">
            <div className="hidden sm:block">
               <a href="#home">
                  <img
                     className="sm:h-8 sm:w-8 sm:rounded-2xl"
                     src={Logo}
                     alt="Logo"
                     width="32"
                     height="32"
                  />
               </a>
            </div>
            <a href="https://github.com/jmpark95" target="_blank">
               <SiGithub className="text-lg cursor-pointer dark:hover:text-cyan-200 hover:text-indigo-400 sm:hidden " />
            </a>

            <ul className="flex mx-auto">
               <li className="mx-2 text-xs font-semibold dark:hover:text-cyan-200 hover:text-indigo-400 sm:mx-4 lg:mx-7 sm:text-base">
                  <a href="#about">About</a>
               </li>
               <li className="mx-2 text-xs font-semibold dark:hover:text-cyan-200 hover:text-indigo-400 sm:mx-4 lg:mx-7 sm:text-base">
                  <a href="#skills">Skills</a>
               </li>
               <li className="mx-2 text-xs font-semibold dark:hover:text-cyan-200 hover:text-indigo-400 sm:mx-4 lg:mx-7 sm:text-base">
                  <a href="#projects">Projects</a>
               </li>
               <li className="mx-2 text-xs font-semibold dark:hover:text-cyan-200 hover:text-indigo-400 sm:mx-4 lg:mx-7 sm:text-base">
                  <a href="#contact">Contact</a>
               </li>
            </ul>

            <div className="flex items-center">
               <a href="https://github.com/jmpark95" target="_blank">
                  <SiGithub className="hidden cursor-pointer dark:hover:text-cyan-200 hover:text-indigo-400 sm:block sm:text-xl lg:text-2xl" />
               </a>

               {darkMode ? (
                  <BsSun
                     onClick={() => {
                        setDarkMode(!darkMode);
                        localStorage.setItem("mode", JSON.stringify(!darkMode));
                     }}
                     className="text-lg cursor-pointer dark:hover:text-cyan-200 hover:text-indigo-400 sm:text-xl lg:text-2xl sm:ml-5 xl:ml-6"
                  />
               ) : (
                  <BsMoonStarsFill
                     onClick={() => {
                        setDarkMode(!darkMode);
                        localStorage.setItem("mode", JSON.stringify(!darkMode));
                     }}
                     className="text-lg cursor-pointer dark:hover:text-cyan-200 hover:text-indigo-400 sm:text-xl lg:text-2xl sm:ml-5 xl:ml-6"
                  />
               )}
            </div>
         </nav>
      </div>
   );
}
