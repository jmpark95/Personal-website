import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiResponsive } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
// import { SiMui } from "react-icons/si";

export default function Skills({ darkMode }) {
   const list = [
      { JSX: <AiFillHtml5 className="text-6xl xl:text-8xl" />, name: "HTML" },
      { JSX: <DiCss3 className="text-6xl xl:text-8xl" />, name: "CSS" },
      {
         JSX: (
            <DiJsBadge className="text-6xl xl:text-8xl justify-self-center" />
         ),
         name: "JavaScript",
      },
      { JSX: <DiReact className="text-6xl xl:text-8xl" />, name: "React" },
      { JSX: <DiMongodb className="text-6xl xl:text-8xl" />, name: "MongoDB" },
      { JSX: <SiExpress className="text-6xl xl:text-8xl" />, name: "Express" },
      { JSX: <DiNodejs className="text-6xl xl:text-8xl" />, name: "Node" },
      {
         JSX: <DiGit className="text-6xl xl:text-8xl justify-self-center" />,
         name: "Git & Github",
      },
      {
         JSX: (
            <DiResponsive className="text-6xl xl:text-8xl justify-self-center" />
         ),
         name: "Responsive Design",
      },
      {
         JSX: (
            <SiTailwindcss className="text-6xl xl:text-8xl justify-self-center" />
         ),
         name: "Tailwind CSS",
      },
      {
         JSX: (
            <svg
               fill={darkMode ? "rgb(245 245 244)" : "rgb(51 65 85)"}
               width="65px"
               height="70px"
               viewBox="0 0 24 24"
               role="img"
            >
               <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0l-3 1.73V7.67l3-1.732V2.474Z" />
            </svg>
         ),
         name: "Material UI",
      },
   ];

   const skillsList = list.map((item) => {
      return (
         <div
            key={item.name}
            className="grid self-center text-zinc-600 dark:text-stone-100 justify-self-center"
         >
            {item.JSX}
            <p className="font-medium text-center">{item.name}</p>
         </div>
      );
   });

   return (
      <section
         id="skills"
         className="mb-20 sm:mb-0 flex flex-col justify-center min-h-[calc(100vh-64px)]"
      >
         <div className="w-9/12 pb-8 mx-auto ">
            <div className="pb-10">
               <h3 className="text-2xl font-extrabold text-indigo-300 dark:text-cyan-200 xl:text-4xl">
                  Skills
               </h3>
            </div>

            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 xl:grid-cols-4">
               {skillsList}
            </div>
         </div>
      </section>
   );
}
