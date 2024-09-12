import React from "react";
import NavBar from "./components/NavBar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Footer from "./components/Footer";
import InstructionsSection from "./components/InstructionsSection";
import "./App.css";

function App() {
  return (
    <div className="root">
      <NavBar />
      <div className="flex-container">
        <LeftSide />
        <RightSide />
      </div>
      <InstructionsSection/>
      
    </div>
  );
}

export default App;
