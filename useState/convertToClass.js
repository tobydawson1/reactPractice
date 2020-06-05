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

import React from 'react';
import { render } from 'react-dom';

class OneTimeButton extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.props.onClick();
    this.setState({ clicked: true});
  }

  render() {
    return ( 
      <button
        onClick={this.handleClick}
        disabled={this.state.clicked}
      >
        You Can Only Click Me Once
      </button>
    );
  }
}

render(
  <OneTimeButton />,
  document.querySelector('#root')
);

// this is great and works but has changed a lot of code and made it longer. The second way of adding state would be to use hooks. Like so:

import React, { useState } from "react";
import { render } from "react-dom";

function OneTimeButton(props) {
  const [clicked, setClicked] = useState(false)
  
  function doClick() {
    props.onCick();
    setClicked(true)
  }

  return (
    <button 
      onClick={clicked ? undefined : doClick}
      disabled={clicked}
    >
      You Can Only Click This Once
    </button>
  );
}

render(
  <OneTimeButton />,
  document.querySelector('#root')
);


