import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Room() {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(22)

  return (
    <div className={`room ${isLit ? "Lit" : "dark"}`}>
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit("Lit")}>
        On
      </button>
      <br />
      <button onClick={() => setLit()}>
        Off
      </button>
      <br />
      <br />
      The room temperature is {temp}
      <br />
      <button onClick={() => setTemp(temp + 1)}>
        +
      </button>
      <br />
      <button onClick={() => setTemp(temp - 1)}>
        -
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root')); 