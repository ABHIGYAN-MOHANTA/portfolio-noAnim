import React from "react";
import Navbar from "./Navbar";
import Home from "./Home/Home";
import Skills from "./Skills/Skills"
import Achievements from "./Achievements/Achievements";
import Certifications from "./Certifications/Certifications";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />  
      <Home />
     
      <Skills />
      
      <Achievements />
      
      <Certifications />
      
      <Projects />
      
      <Contact />           
    </div>
  );
}

export default App;
