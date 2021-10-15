import React, { useState, useEffect } from "react";
import './App.css';
import Home from './components/home';
import './css/style.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';
import AliceCarousel from 'react-alice-carousel';


//import Sample from './components/image'

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Sabbath";

var n = weekday[d.getDay()];



function App() {
  {/*
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);*/}
    return (
      <div>

      {/*introduction*/}  
      <div id="top">
        <div className="intro-card card-shadow">
          {/* 
          <header>
            <nav>
              <div className="navbar">
                {/* 
                <h1 className="logo">
                  <span>O</span><span />
                  <span>W</span><span>E</span>
                  <span>l</span><span />
                </h1>
               
                <a  href="tel:+639635107622">
                   ronuelbmoralita.github.io/
                   </a>
              </div> 
              <ul>
                <li>
                  <a href="tel:+639635107622">Call</a>
                </li>
              </ul>
            </nav>
          </header>
            */}
          <div className="intro-container">
          {/* 
          <img className="img" src={process.env.PUBLIC_URL + '/images/ron.png'} alt="logo"/>
          */}
          <Jump>
            <h1>
              Hi! I'm Ronuel
            </h1>
            <div className="span-container">
              <span style={{color: 'black'}}>
                How's your <span style={{color: 'gray'}}>
                {n}?
                </span>
              </span>
            </div>
            </Jump>
          </div>

          <div className="arrow-container">
            <section id="arrow" className="arrow">
              <p><span/></p>
            </section>
          </div>
        </div>
      </div>

      {/*about*/}
      <div className="about">
        <div className="content-container">
        <Fade left>
        <div className="curves">
          <h1>
            About me
          </h1>
          </div>
          </Fade>
          <Fade right>
          <p className="content-para">
          I work as a Computer Programmer at some Local Government Unit. My experience developing, maintaining, debugging, and troubleshooting systems and software has fueled my curiosity in knowing new and existing technologies.           
          {/*During my spare time, I work on the frontend and backend of a website, desktop, and mobile application and learn new things about technology.*/}
            </p>
            </Fade>
        </div>
        <div className="content-container">
        <Fade bottom>
          <img className="school" src={process.env.PUBLIC_URL + '/images/school.jpg'} alt="school"/> 
         </Fade>
          <p className="content-para">
            I studied B.Sc. in Computer Science at Eulogio “Amang” Rodriguez Institute of Science and Technology (EARIST) Class of 2019.
          </p>
        </div>
      </div>

      {/*PROJECTS*/}

      <div className="projects">
        <div className="content-container">
        <Fade left>
        <div className="curves">
          <h1>
            Projects
          </h1>
          </div>
          </Fade>
          <Fade right>
          <p className="content-para">
            Here are some of my projects that are currently in development and for deployment.
          </p> 
          </Fade>
        </div>


         {/*DotBrgy*/}

        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/dotbrgy.png'} alt="dotBrgy"/>
        </div>
        </a> 
        <p>
          In development <i className="fa fa-wrench"></i>
        </p>
        </div>
       
        <div className="content-container">
          <h2>
            DotBrgy
          </h2>
          <p className="content-para">
            A desktop application for barangay records that lets you store, edit, and retrieve resident data in a structured manner. The data collected will then be used for Barangay Statistics. 
          </p> 
        </div>

        <div className="cards-project">
        <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db1.png'} alt="transaksyonOne"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db2.png'} alt="transaksyonTwo"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db3.png'} alt="transaksyonthree"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db4.png'} alt="transaksyonfour"/>
            </div>
            </Fade>
            <Fade bottom>
            <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db5.png'} alt="transaksyonthree"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db6.png'} alt="transaksyonfour"/>
          </div>
          </Fade>
        </div>

        <div className="content-container">
          <p className="content-para">
          Interested in a 5% commission? Please <a className="hyper-link"  href={process.env.PUBLIC_URL + '/projects/DotBrgy-Letter.docx'} download>click here to download</a> the letter and contact me for information.
          </p> 
        </div>

         {/*Transaksyon Tracer*/}

        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/transaksyonTracer.png'} alt="tracer"/>
        </div>
        </a>
        <p className="center">
          For deployment <i className="fa fa-rocket"></i> 
        </p>
        </div>
        <div className="content-container">
          <h2>
            Transaksyon Tracer
          </h2>
          <p className="content-para">
            A desktop application for the Municipal Civil Registrar Office. The app will be able to track all the daily transactions instantly.
          </p> 
        </div>
        <div className="cards-project">
        <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonOne.png'} alt="transaksyonOne"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonTwo.png'} alt="transaksyonTwo"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonThree.png'} alt="transaksyonthree"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonFour.png'} alt="transaksyonfour"/>
            </div>
            </Fade>
        </div>

        {/*SDA Himno*/}
        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/sdaHimnoLogo.png'} alt="himno"/>
        </div>
        </a>
        <p className="center">
          For deployment <i className="fa fa-rocket"></i> 
        </p>
        </div>
        <div className="content-container">
          <h2>
            SDA Himno
          </h2>
          <p className="content-para">
            A desktop application of the Seventh Day Adventist Hymnal. This App contains the Tagalog hymns for your worship. The appication runs locally on the device and doesn't require anything else to be functional.
          </p> 
          {/*
           <video controls autoPlay>
            <source src="./videos/gcash-video.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          
          <p className="content-para">
            Do you want to support the application with some advanced features? Including:
          </p>
          <div className="content-update">
            <p>
              &#8718; <span className="update-color">Mac OS Compatibility.</span> The app is currently compatible with Windows operating systems only. 
            </p> 
           </div>
           <div className="apple">
           <i className="fa fa-apple"></i>
           </div>
          <div className="content-update">
            <p>
              &#8718; <span className="update-color">Future integration of instrumental music.</span> Here's an example.
            </p>
           </div>
            <div style={{padding: '2em', width: '100%'}}>
              <audio controls src={process.env.PUBLIC_URL + '/audio/428.mp3'} style={{width: '100%'}} />
            </div>
            
            <div className="content-update">
            <p>
              &#8718; <span className="update-color">Multilingual support.</span> Consider the following languages:
            </p>
           </div>
            <div className="content-lang">
              <p>BICOL</p>
              <p>CEBUANO</p>
              <p>ILOCANO</p>
              <p>ENGLISH</p>
              <p>JAPANESE</p>
              <p>KOREAN</p>
              <p>SPANISH and etc.</p>
              </div>
            <div className="content-update">
            <p>
              &#8718; Users will be able to control the <span className="update-color">font size</span> depends on their preferences.
            </p>
           </div>
            <div className="font">
              <h6>SDA Himno</h6>
              <h5>SDA Himno</h5>
              <h4>SDA Himno</h4>
              <h3>SDA Himno</h3>
            </div> 
            */}
        </div>

        <div className="content-container">
          <p className="content-para">
            "Music has been identified as one of the rich heritages of the Seventh-day Adventist church".  
          </p> 
        </div>
        <div className="cards-project">
        <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-one.png'} alt="himnoOne"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-two.png'} alt="himnoTwo"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-three.png'} alt="himnothree"/>
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-four.png'} alt="himnofour"/>
          </div>
          </Fade>
        </div>

        {/*
        <div className="content-container">
          <p className="content-para">
            Part of your donation will go to REINA district-wide ministry and for the renovation of our church. 
          </p> 
        </div>
        */}
        
        <div className="content-container">
          <p className="content-para">
            Feel free to contact me for any software bugs that will possibly occur.  Send your feedback or suggestion for better usage of the app.
            <a className="hyper-link"  href={process.env.PUBLIC_URL + '/projects/SDAHimnoSetup.zip'} download>Click here to download</a>
          </p> 
        </div>
      </div>

      {/*AYDI*/}

      <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/AYDI-ICON-BLACK.png'} alt="tracer"/>
        </div>
        </a>
        <p className="center" style={{color: "gray"}}>
          In deployment <i className="fa fa-wrench"></i> 
        </p>
        </div>
        <div className="content-container">
          <h2 style={{color: "gray"}}>
            AYDI
          </h2>
          <p className="content-para" style={{color: "gray"}}>
            The app is under development.
          </p> 
        </div>
      
      <div className="content-container">
          <div className="curves">
            <h1>
             Services
            </h1>
            </div>
            <h2>
              You name it I build it.
            </h2>
          </div>

         
          <div className="cards-project">
        <Fade bottom>
          <div className="project-container">
            <div className="services">
            <i class="material-icons">desktop_windows</i>
            <p>
            Desktop app Development
            </p>
            </div>         
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
          <div className="services">
          <i class="material-icons">android</i>
          <p>
           Mobile app Development
            </p>
            </div>         
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
          <div className="services">
          <i class="material-icons">language</i>
          <p>
           Web app Development
            </p>
            </div>         
          </div>
          </Fade>
          <Fade bottom>
          <div className="project-container">
          <div className="services">
          <i class="material-icons">developer_mode</i>
          <p>
           Technical Support
            </p>
            </div>         
          </div>
          </Fade>
        </div>


        {/*contacts*/}
       
        <div className="contacts" id="contact">
          <div className="content-container">
          <Fade left>
          <div className="curves">
            <h1>
              Contacts
            </h1>
            </div>
            <Jump>
            <h1 className="center">
              Let's Connect
            </h1>
            </Jump>
            </Fade>
            <Fade right>
            <p className="content-para">
              Feel free to contact me anytime except on Saturdays. Get in touch here:
            </p>
            </Fade>
          </div>
          <div className="social">
            <span>
              <a className="calling" href="tel:+63963510762">Call</a>
            </span>
            <span>
              <a className="fb" href="https://www.facebook.com/ronuel06">Facebook</a>
            </span>
            <span>
              <a className="gmail" href="mailto: moralitaronuel@gmail.com">Email</a>
            </span>
          </div>  
          {/* 
          <div className="vm">
            <p>“Let's build something that will create more.”</p>
          </div>
           */}
        </div>
        {/*end div tag*/} 
    </div>

);
}
export default App;