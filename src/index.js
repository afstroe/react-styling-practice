//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let greetings = "";
const hours = new Date().getHours();

const hStyle = {
  color: "black"
};

if (hours < 12) {
  greetings = "Good morning!";
  hStyle.color = "red";
} else if (hours < 18) {
  hStyle.color = "green";
  greetings = "Good Afternoon!";
} else {
  hStyle.color = "blue";
  greetings = "Good evening!";
}

ReactDOM.render(
  <>
    <h1 style={hStyle} className="heading">
      {greetings}
    </h1>
  </>,
  document.getElementById("root")
);
