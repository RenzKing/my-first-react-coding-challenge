import React from "react";
import Skill from "../components/Skill";
import "../index.css";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🏆" color="orange" />
      <Skill skill="HTML and CSS" emoji="🏆" color="blue" />
      <Skill skill="JavaScript" emoji="🏆" color="yellow" />
      <Skill skill="Svelte" emoji="🏆" color="orangered" />
    </div>
  );
};

export default SkillList;
