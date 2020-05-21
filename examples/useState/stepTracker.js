import React, { useState } from "react";
import ReactDOM from "react-dom";

function StepTracker() {
  const [steps, setSteps] = useState(0)

  function increment() {
    setSteps(prevState => prevState + 1);
  }

  return (
    <div>
      Today you've take {steps} steps!
      <br />
      <button onClick={increment}>
        I took another step
      </button>
    </div>
  );
}

ReactDOM.render(
  <StepTracker />,
  document.querySelector('#root')
);