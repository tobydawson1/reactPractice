import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Hi = ({ name, second }) => (
  <div>
    Hello {name} {second}
    <h1> This is in red </h1>
    <p> Oy oy </p>
  </div>
);

const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    {title}
    <p> {body} </p>
    <img src={imageUrl} alt="ShawShank" />
  </div>
);

function Open(props) {
  return <p>Open</p>;
}

function Closed(props) {
  return <h1>Closed</h1>;
}

const Gate = ({ isOpen }) => {
  if (isOpen) {
    return <Open />;
  }
  return <Closed />;
};

function Slow() {
  return <h1>Danger!</h1>;
}

function OK(props) {
  return <h1>probably fine!</h1>;
}

const Speeding = ({ speed }) => (speed > 80 ? <Slow /> : <OK />);

ReactDOM.render(
  <MediaCard
    title={<h1> Shawshank Redemption </h1>}
    body={<strong>Prison escape</strong>}
    imageUrl="https://static.rogerebert.com/uploads/movie/movie_poster/the-shawshank-redemption-1994/large_9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
  />,
  document.querySelector("#root")
);
ReactDOM.render(<Gate isOpen={true} />, document.querySelector("#root"));
ReactDOM.render(<Speeding speed={8} />, document.querySelector("#root"));
