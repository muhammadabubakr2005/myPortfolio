import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import {DiGit} from "react-icons/di";
import {SiVisualstudiocode, SiReact, SiReactrouter, SiMicrosoftsqlserver, SiMongoose, SiMongodb } from "react-icons/si";
import {TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbAssembly} from "react-icons/tb";
import {IoLogoWindows, IoLogoNpm} from "react-icons/io"

export default function SkillCard({id}) {
  return (
    <>
        <div className="skill-container" id = {id} style={{ backdropFilter:"blur(3px)",
      webkitBackdropFilter: "blur(5px)",}}>
          <div className="skill-header">My Skills</div>
          <div className="skill-box">
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title='C/C++'><CgCPlusPlus className='techLogo'/></abbr>
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo'/></abbr>
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo'/></abbr>
              <abbr title='SQL'><SiMicrosoftsqlserver className='techLogo'/></abbr>
              <abbr title='Assembly Language'><TbAssembly className='techLogo'/></abbr>
            </div>                     
          </div>
          <div className="skill-box">
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title='ReactJS'><SiReact className='techLogo'/></abbr>
              <abbr title='ReactNative'><SiReact className='techLogo'/></abbr>
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo'/></abbr>
              <abbr title='Git/Github'><DiGit className='techLogo'/></abbr>
              <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr>
              {/* <abbr title='Bootstrap'><SiBootstrap className='techLogo'/></abbr> */}
              <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr>
              <abbr title='Mongoose'><SiMongoose className='techLogo'/></abbr>
            </div>            
          </div>
          <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='SQL Server Management System'><SiMicrosoftsqlserver className='techLogo'/></abbr>
              <abbr title='MongoDB'><SiMongodb className='techLogo'/></abbr>
              
            </div>            
          </div>
        </div>
    </>

  )
}
