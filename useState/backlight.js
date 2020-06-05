import React, { useState } from "react";
import ReactDOM from "react-dom";


function Room() {
  const [isLit, setLit] = useState(true);

  return (
    <div className="room">
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root')); 


// with a css to alter background colour

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Room() {
  const [isLit, setLit] = useState(true);
  const brightness = isLit ? "Lit" : "dark";

  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      <button onClick={() => setLit(!isLit)}>
        flip
      </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root')); 

// and the css

html, body, #root, .room {
  height: 100%;
  margin: 0;
}

.lit {
background-color: white;
color: black;
}

.dark {
background-color: black;
color: white;
}