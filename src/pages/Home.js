import React from "react";
import Resume from "../components/Resume";
import AboutMe from "../components/AboutMe";
import CallMe from "../components/CallMe";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="home">
      <AboutMe />
      <Resume />
      <CallMe />
      <Projects />
    </div>
  );
};

export default Home;
