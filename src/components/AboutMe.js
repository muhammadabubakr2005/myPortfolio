import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../assets/prof.png";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id} >
        <div className="aboutMe-text" style={{ backdropFilter:"blur(3px)",
        webkitBackdropFilter: "blur(5px)",}}>
          <h3>Hey there, 👋</h3>
          I'm <span> Muhammad Abubakar </span>, a third year student pursuing <span>B.Sc in CS </span> from FAST NUCES, Lahore. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner. While I specialize in <span>frontend development,</span> I'm also delving into <span>backend technologies.</span> I'm all ears for <span>new opportunities</span> to create awesome software solutions. Let's team up and cook up some digital wonders together.
          <br/> <br/>
          
          Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/1MD0AD4T7e0WC-m_yvVarXoGg-HkPa26F/view?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name" >Abubakar</div>
      </div>
  );
}