import React from "react";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills"
import Achievements from "./Achievements/Achievements";
import Certifications from "./Certifications/Certifications";
import Contact from "./Contact/Contact";
import { Slide } from "react-awesome-reveal";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Home />
      <Slide>
      <Skills />
      </Slide>
      <Slide direction="right">
      <Achievements />
      </Slide>
      <Slide>
      <Certifications />
      </Slide>
      <Slide direction="right">
      <Projects />
      </Slide>
      <Contact />           
    </div>
  );
}

export default App;
