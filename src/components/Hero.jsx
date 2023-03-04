import React from "react";

export default function Hero() {
   return (
      <section
         id="hero"
         className="flex flex-col justify-center min-h-[calc(100vh-64px)]"
      >
         <div className="flex flex-col w-10/12 mx-auto font-medium text-zinc-700 gap-y-5 sm:w-9/12 xl:gap-y-8 dark:text-stone-100">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-7xl">
               Hi, my name is{" "}
               <span className="text-indigo-400 dark:text-cyan-200">Min</span>
            </h1>
            <h2 className="text-base text-zinc-500 sm:text-xl xl:text-3xl dark:text-stone-300">
               I love building things for the web
            </h2>
            <div className="mt-8">
               <a
                  className="px-6 py-3 text-sm text-indigo-400 border-2 border-indigo-400 rounded-md dark:border-cyan-200 dark:text-cyan-200 xl:text-base"
                  href="#about"
               >
                  About me
               </a>
            </div>
         </div>
      </section>
   );
}
