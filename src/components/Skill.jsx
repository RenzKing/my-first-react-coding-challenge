import React from "react";
import "../index.css";

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>
        <span>{props.skill}</span> <span>{props.emoji}</span>
      </p>
    </div>
  );
};

export default Skill;
