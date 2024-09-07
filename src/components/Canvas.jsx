import React, { useState } from "react";

//Canvas, input and button component.
const Canvas = (props) => {
  //UseState hook for saving the value put in the input.
  const [value, setValue] = useState();

  //Gets current value from input.
  function getInputValue(event) {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <div className="canvasContainer">
      <canvas id="canvas"></canvas>
      <div className="inputContainer">
        <input
          placeholder="Paste your URL or text here"
          onChange={getInputValue}
          type="text"
        />
        <button
          onClick={() => {
            props.createFunction(value);
          }}
        >
          crear
        </button>
      </div>
    </div>
  );
};

export default Canvas;
