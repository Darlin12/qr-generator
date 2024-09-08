import React from "react";
import NavBar from "./components/NavBar";
import QRCode from "qrcode";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";
import Info from "./components/info";
import "./App.css";

//Function that uses qrcode library to generate QR codes with the user input.
function generateQR(input) {
  var canvas = document.getElementById("canvas");
  QRCode.toCanvas(canvas, input, (error) => {
    if (error) console.error(error);
    console.log("success!");
  });
}

function App() {
  return (
    <div className="root">
      <NavBar />
      <div className="main-container">
        <Info />
        <Canvas createFunction={generateQR} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
