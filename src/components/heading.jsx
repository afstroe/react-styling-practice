import React from "react";

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

function Heading() {
  return (
    <>
      <h1 style={hStyle} className="heading">
        {greetings}
      </h1>
    </>
  );
}

export default Heading;
