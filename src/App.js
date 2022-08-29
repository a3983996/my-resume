import React from "react";
import "./styles/style.css";
import Transitions from "./components/Transitions";
import Aside from "./components/Aside";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Transitions />
      <div style={{ display: "flex" }}>
        <Aside />
        <Home />
      </div>
    </div>
  );
};

export default App;
