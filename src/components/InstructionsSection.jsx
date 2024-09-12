import React from 'react'
import InstruccionCuadro from "./InstruccionCuadro";
import OrderNumber from "./OrderNumber";
import Footer from './Footer.jsx'
import instructions from '../../public/data/instructions.js'


const InstructionsSection = () => {
  return (
        <div className="instructions-container">
        <div className="instructions-title"><h2>How to use QReate?</h2></div>
        
        <div className="main-instructions-container">
          <div className="instructions-left-side">
            {instructions.map((instruction, index) => {
              return (<div key={index} className="single-instruction-container"><OrderNumber order={index+1} /><InstruccionCuadro instruction={instruction}/></div>)
            })}
          </div>
          <div className="instructions-right-side">
            <img id="homepage"src="/img/homeScreenshot.png" alt="homepage" />
            <img id="macbook-img"src="./img/macbook.png" alt="MacBook" />
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default InstructionsSection;