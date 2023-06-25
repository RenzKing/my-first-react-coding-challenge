import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// COMPONENTS //

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz King Gayacao" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Renz King Gayacao</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries,{" "}
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="HTML" color="red" emoji="💪" />
//       <Skill skill="CSS" color="orange" emoji="💪" />
//       <Skill skill="JAVASCRIPT" color="yellow" emoji="💪" />
//       <Skill skill="REACT" color="blue" emoji="💪" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//       {props.color}
//     </div>
//   );
// }

//RENDER ROOT//

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/pic.jpg" alt="Renz" />;
}

function Intro() {
  return (
    <div>
      <h1>Renz King Gayacao</h1>
      <p>Lorem ipsum lorem ipsum lorem ipsum</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="💪" color="red" />
      <Skill name="CSS" emoji="💪" color="brown" />
      <Skill name="JAVASCRIPT" emoji="💪" color="yellow" />
      <Skill name="REACT" emoji="💪" color="blue" />
      <Skill name="GIT" emoji="💪" color="gray" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="style" style={{ backgroundColor: props.color }}>
      {props.name}
      {props.emoji}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
