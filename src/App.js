
// import Typed from "react-typed";
import "./App.css";
// import "./style.scss";
// import ReactTyped from "react-typed";
// import Typist from "react-typist";
import ParticleConfig from "./particleConfig.js";
import HomeBanner from "./components/HomeBanner.js";
import Navbar from "./components/Navbar.js";
import ProjectCard from "./components/ProjectCard.js";
import AboutMe from "./components/AboutMe.js";
import ContactForm from "./components/ContactForm.js";
import SkillCard from "./components/SkillCard.js";
import Footer_ from "./components/Footer.js";
import CoalGame from "./assets/coalGame.mp4";
import WebApp from "./assets/ArtGallery.mp4";
// import { Typed } from "react-typed";
const App = () => {
  
  return (
    <div>
      <ParticleConfig />
      <div >
    
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          // id = "project"
          // className = "odd"
          projectTitle="Online Art Gallery"
          projectDesc="A web application for art lovers to explore. The application is developed using ReactJS and NodeJS. The application is integrated with MS-SQL for database management. This App contains a lot of features such as chatbox, notifications, upload and explore arts etc."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          // deployedProjectLink="https://wiggles.vercel.app"
           projectImg={WebApp}
        />
        <ProjectCard
          id = "project"
          className = "odd"
          projectTitle="CatchAlpha Game"
          projectDesc="A console based Game developed in Assemly Language 8088 archeitecture. The game is based on the concept of catching the alphabets falling."
          projectLink="https://github.com/DevanshSahni/Wiggles"
          // deployedProjectLink="https://wiggles.vercel.app"
           projectImg={CoalGame}
        />
        

        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
        <Footer_ />
        
      </div>
    </div>
  );
};

export default App;



