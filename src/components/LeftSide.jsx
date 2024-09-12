import React from "react";
import QRTypesGrid from "./QRTypesGrid";
import createQRcode from "../createQRcodeFunction";

const LeftSide = () => {
  return (
    <div className="left-side">
      <h1>You can create QR codes for various types of content!</h1>
      <div className="main-content-left-side">
        <div className="grid-and-message">
          <QRTypesGrid />
          <canvas id="left-side-canvas"></canvas>
          <p>
            Simply enter your information, and Qreate will generate a custom QR
            code for you instantly!
          </p>
          <input
          id="data-input"
          type="text"
          placeholder="Ej. https://tusitioweb.com"
        />
        <button onClick={()=>{createQRcode('left-side-canvas')}} id="left-side-button">Generate</button>
        </div>

        
      </div>
      <h2>Instructions down below 👇</h2>
    </div>
  );
};

export default LeftSide;
