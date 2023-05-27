import React from "react";
import Links from "./Links";

function About(props) {
  let bioCheck;
  if (props.bio) {
    bioCheck = <p>{props.bio}</p>;
  } else {
    bioCheck = null;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioCheck}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
