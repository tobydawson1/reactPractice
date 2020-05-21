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