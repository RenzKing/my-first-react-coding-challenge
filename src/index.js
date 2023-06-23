import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//COMPONENTS//
function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />

      <div className="data"></div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/pic.jpg" alt="renz" />;
}

function Intro() {
  return (
    <div>
      <h1>Renz King Gayacao</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML" emoji="💪" color="red" />
      <Skill skill="CSS" emoji="💪" color="orange" />
      <Skill skill="JS" emoji="💪" color="yellow" />
      <Skill skill="GIT" emoji="💪" color="gray" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// function Buttons() {
//   return <Button color="red" name="HTML" />;
//   <Button color={{ color: "red" }} name="CSS" />;
// }

// function Button() {
//   return (
//     <div>
//       <button>BTN</button>
//     </div>
//   );
// }

// function Text() {
//   return (
//     <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum</p>
//   );
// }

// function Name() {
//   return <h1>Renz King Gayacao</h1>;
// }

// function Image() {
//   return <img src="public/logo192.png" alt="pic" />;
// }

//RENDER ROOT//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
