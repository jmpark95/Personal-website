import React from "react";
import Profile from "../images/Profile.jpg";

export default function About() {
   return (
      <section
         id="about"
         className="flex flex-col justify-center min-h-[calc(100vh-64px)] mb-20 sm:mb-0"
      >
         <div className="flex flex-col w-9/12 pb-8 mx-auto font-medium dark:text-stone-100 text-zinc-600 gap-y-5 sm:flex-row">
            <div className="sm:basis-3/5 xl:basis-8/12">
               <div className="pb-10">
                  <h3 className="text-2xl font-extrabold text-indigo-300 dark:text-cyan-200 xl:text-4xl">
                     About
                  </h3>
               </div>

               <p className="xl:text-2xl">
                  Hi! My name is Min and I'm a self-taught aspiring web
                  developer. I love{" "}
                  <span className="text-indigo-300 dark:text-cyan-200 ">
                     problem solving
                  </span>{" "}
                  and
                  <span className="text-indigo-300 dark:text-cyan-200 ">
                     {" "}
                     building
                  </span>{" "}
                  things for the web. This passion is what drove my career
                  change from healthcare to web development.
                  <br />
                  <br />
                  My main area of focus so far has been full stack{" "}
                  <span className="text-indigo-300 dark:text-cyan-200 ">
                     MERN
                  </span>
                  . However, I am eager and open to learning a variety of
                  different technologies.
                  <br />
                  <br />I believe embracing web development as a journey of{" "}
                  <span className="text-indigo-300 dark:text-cyan-200 ">
                     lifelong learning
                  </span>{" "}
                  is key in staying relevant in this ever changing landscape.
               </p>
            </div>

            <div className="flex justify-center sm:basis-2/5 sm:flex-col sm:items-center xl:basis-4/12">
               <div className="relative after:absolute after:border-2 after:-z-10 after:border-indigo-300 after:w-full after:h-full after:top-3 after:left-3">
                  <img
                     src={Profile}
                     alt="Profile picture"
                     className="w-36 sm:h-48 sm:w-44 xl:h-52 xl:w-52"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
