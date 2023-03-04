import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const previousMode = JSON.parse(localStorage.getItem("mode"));
      if (previousMode) {
         setDarkMode(previousMode);
      } else return;
   }, []);

   const backgroundGradient = darkMode
      ? {
           background: "linear-gradient(to right, #434343 0%, black 100%)",
        }
      : {
           background:
              "linear-gradient(89.9deg,rgba(216, 241, 230, 0.46) 0.1%,rgba(233, 226, 226, 0.28) 90.1%)",
        };

   return (
      <div
         id="home"
         style={backgroundGradient}
         className={darkMode ? "dark" : ""}
      >
         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
         <Hero />
         <About />
         <Skills darkMode={darkMode} />
         <Projects />
         <Contact />
      </div>
   );
}
