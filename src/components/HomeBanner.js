import Typist from 'react-typist';

import React, { useEffect } from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../assets/pic6.png";
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js"></script> */}


export default function HomeBanner({id}) {

  // useEffect(() => {
  //   Caman('#canvas', 'path/to/your-image.png', function () {
  //     this.replaceColor('#FFFFFF', 'rgba(255, 255, 255, 0)');
  //     this.render();
  //   });
  // }, []);
  return (

    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Muhammad Abubakar</div>
              <div className="dynamicTitle">
                <li><span>Web Developer</span></li> 
                
                {/* <div className='hrLine'> <br/></div> */}
              </div>
              <ul className="dynamicTitle" style={{marginLeft:'20px'}}>
                  <li>+<span>App Developer</span></li>                 
                
               
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/muhammadabubakr2005/" target="_blank" rel="noopener noreferrer"style={{background: '#7722e7' ,borderColor: '#7722e7'}}>Hire Me</a>
            </div>
        </div>
        <div className="mask">

            {/* <canvas id="canvas" class="bg"></canvas>  */}
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  ) 
}
