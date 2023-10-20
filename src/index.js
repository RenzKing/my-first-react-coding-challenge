import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import Intro from "./components/Intro";
// // COMPONENTS //

// // function App() {
// //   return (
// //     <div className="card">
// //       <Avatar />
// //       <div className="data">
// //         <Intro />
// //         <SkillList />
// //       </div>
// //     </div>
// //   );
// // }

// // function Avatar() {
// //   return <img className="avatar" src="/pic.jpg" alt="Renz King Gayacao" />;
// // }

// // function Intro() {
// //   return (
// //     <div>
// //       <h1>Renz King Gayacao</h1>
// //       <p>
// //         Lorem Ipsum is simply dummy text of the printing and typesetting
// //         industry. Lorem Ipsum has been the industry's standard dummy text ever
// //         since the 1500s, when an unknown printer took a galley of type and
// //         scrambled it to make a type specimen book. It has survived not only five
// //         centuries,{" "}
// //       </p>
// //     </div>
// //   );
// // }

// // function SkillList() {
// //   return (
// //     <div className="skill-list">
// //       <Skill skill="HTML" color="red" emoji="💪" />
// //       <Skill skill="CSS" color="orange" emoji="💪" />
// //       <Skill skill="JAVASCRIPT" color="yellow" emoji="💪" />
// //       <Skill skill="REACT" color="blue" emoji="💪" />
// //     </div>
// //   );
// // }

// // function Skill(props) {
// //   return (
// //     <div className="skill" style={{ backgroundColor: props.color }}>
// //       <span>{props.skill}</span>
// //       <span>{props.emoji}</span>
// //       {props.color}
// //     </div>
// //   );
// // }

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
//   return <img className="avatar" src="/pic.jpg" alt="Renz" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Renz King Gayacao</h1>
//       <p>Lorem ipsum lorem ipsum lorem ipsum</p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill name="HTML" emoji="💪" color="red" />
//       <Skill name="CSS" emoji="💪" color="brown" />
//       <Skill name="JAVASCRIPT" emoji="💪" color="yellow" />
//       <Skill name="REACT" emoji="💪" color="blue" />
//       <Skill name="GIT" emoji="💪" color="gray" />
//     </div>
//   );
// }
// function Skill(props) {
//   return (
//     <div className="style" style={{ backgroundColor: props.color }}>
//       {props.name}
//       {props.emoji}
//     </div>
//   );
// }

// CARD CODING CHALLENGE V1 //
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
//       <p>sdfasdfas asfasf asdfadfasdfadsfa asdfa asdfa afasadfa</p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill name="HTML" color="red" emoji="😁" />
//       <Skill name="CSS" color="green" emoji="😁" />
//       <Skill name="JAVASCRIPT" color="yellow" emoji="😁" />
//       <Skill name="REACT" color="blue" emoji="😁" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       {props.name}
//       {props.emoji}
//     </div>
//   );
// }
//RENDER ROOT//

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Introduction />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz" />;
// }
// function Introduction() {
//   return (
//     <div className="introduction">
//       <h1>Renz King</h1>
//       <p>sdfasdfas asfasf asdfadfasdfadsfaasdfasdfdasfasfasfasfasfsd asdfa</p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="HTML" emoji="💪" color="red" />
//       <Skill skill="CSS" emoji="💪" color="blue" />
//       <Skill skill="Javascript" emoji="💪" color="yellow" />
//       <Skill skill="Git" emoji="💪" color="gray" />
//       <Skill skill="React" emoji="💪" color="lightblue" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       {props.skill} {props.emoji}
//     </div>
//   );
// }

//***************************** 10/20/2023 ***************************//

// function App() {
//   return (
//     <div className="card">
//       <Avatar />

//       <div className="data">
//         <Introduction />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz King Gayacao" />;
// }

// function Introduction() {
//   return (
//     <div className="Introduction">
//       <h1>Renz King Gayacao</h1>
//       <p>
//         loremIpsum,loremIpsumloremIpsum, asdfafd sdfasfasfasdfasd
//         asdfadsfasdfasdfasfasfasfasdfas
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="React" emoji="💪" color="#123456" />
//       <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
//       <Skill skill="JavaScript" emoji="💪" color="yellow" />
//       <Skill skill="Svelte" emoji="💪" color="orange" />
//     </div>
//   );
// }

// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );

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

//***************************** 10/20/2023 ***************************//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
