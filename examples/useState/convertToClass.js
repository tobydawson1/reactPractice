import React from 'react';
import { render } from 'react-dom';

function OneTimeButton(props) {
  return (
    <button onClick={props.onClick}>
      You can only Click Me Once
    </button>
  );
}

function sayHi() {
  console.log('yo');
}

render(
  <OneTimeButton onClick={sayHi}/>,
  document.querySelector('#root')
)


// in order to add state so the button can only be clicked once you need to convert the function to a class like so:

