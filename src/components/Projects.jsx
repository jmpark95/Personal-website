import React from "react";
import Todo from "../images/Todo.jpg";
import MemeGenerator from "../images/Meme.jpg";
import Movie from "../images/Movie.jpg";
import Bacefook from "../images/Bacefook.jpg";

export default function Projects() {
   return (
      <section
         id="projects"
         className="text-zinc-600 min-h-[calc(100vh-64px)] flex flex-col justify-center"
      >
         <div className="w-9/12 pb-8 mx-auto dark:text-stone-100">
            <div className="pb-10">
               <h3 className="text-2xl font-extrabold text-indigo-300 dark:text-cyan-200 xl:text-4xl">
                  Projects
               </h3>
            </div>

            <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2 xl:gap-y-32">
               <div className="flex flex-col justify-self-center gap-y-2 w-52 xl:w-64">
                  <h4 className="text-lg font-bold text-center">To-do App</h4>
                  <img
                     className="w-full h-48 mx-auto"
                     src={Todo}
                     alt="Todo project image"
                  />
                  <p className="flex justify-between font-medium text-center justify-self-center">
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 btn-hover border-zinc-600 dark:border-stone-100"
                        href="https://minpark-todo.netlify.app/"
                        target="_blank"
                     >
                        View Live
                     </a>
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/1st-project-Todo"
                        target="_blank"
                     >
                        Github
                     </a>
                  </p>
               </div>
               <div className="flex flex-col justify-self-center gap-y-2 w-52 xl:w-64">
                  <h4 className="text-lg font-bold text-center">
                     Meme Generator
                  </h4>
                  <img
                     className="w-5/6 h-48 mx-auto xl:w-4/6"
                     src={MemeGenerator}
                     alt="Meme generator project image"
                  />
                  <p className="flex justify-between font-medium text-center justify-self-center">
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://minpark-memegenerator.netlify.app/"
                        target="_blank"
                     >
                        View Live
                     </a>
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/2nd-project-Meme-generator"
                        target="_blank"
                     >
                        Github
                     </a>
                  </p>
               </div>
               <div className="flex flex-col justify-self-center gap-y-2 w-52 xl:w-64">
                  <h4 className="text-lg font-bold text-center">To-do MERN</h4>
                  <img
                     className="w-full h-48 mx-auto"
                     src={Todo}
                     alt="Todo MERN project image"
                  />
                  <p className="flex justify-between font-medium text-center justify-self-center">
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/3rd-project-Todo-MERN"
                        target="_blank"
                     >
                        View Live
                     </a>
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/3rd-project-Todo-MERN"
                        target="_blank"
                     >
                        Github
                     </a>
                  </p>
               </div>
               <div className="flex flex-col justify-self-center gap-y-2 w-52 xl:w-72">
                  <h4 className="text-lg font-bold text-center">Movie App</h4>
                  <img
                     className="w-full h-48 mx-auto"
                     src={Movie}
                     alt="First project image"
                  />
                  <p className="flex justify-between font-medium text-center justify-self-center">
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://minpark-movieapp.up.railway.app/"
                        target="_blank"
                     >
                        View Live
                     </a>
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/4th-project-Movie-app"
                        target="_blank"
                     >
                        Github
                     </a>
                  </p>
               </div>
               <div className="flex flex-col justify-self-center gap-y-2 w-52 xl:w-64">
                  <h4 className="text-lg font-bold text-center">
                     Social Network App "BaceFook"
                  </h4>
                  <img
                     className="w-full h-48 mx-auto"
                     src={Bacefook}
                     alt="Bacefook project image"
                  />
                  <p className="flex justify-between font-medium text-center justify-self-center">
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 btn-hover border-zinc-600 dark:border-stone-100"
                        href="https://minpark-bacefook.up.railway.app/"
                        target="_blank"
                     >
                        View Live
                     </a>
                     <a
                        className="px-4 py-2 text-sm font-semibold border rounded-lg dark:hover:text-cyan-200 dark:hover:border-cyan-200 dark:border-stone-100 btn-hover border-zinc-600"
                        href="https://github.com/jmpark95/5th-project-Social-Network"
                        target="_blank"
                     >
                        Github
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
