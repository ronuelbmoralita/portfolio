import React, { useRef, useState, useEffect, useCallback } from "react";
import './App.css';
import Home from './components/home';
import './css/style.scss';
import images from "./images";

import $ from "jquery";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

//import Sample from './components/image'

console.log(images);


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

function App () {
  {/*
    if (window.performance) {
    if (performance.navigation.type == 1) {
      window.location = "https://ronuelbmoralita.github.io/" 
     }
  }
  */}
  function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ y: 100 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }

  function SlideUp({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0, type: 'spring', duration: 1, bounce: 0.3, visibility: 'hidden'
        }}
        variants={{
          visible: { opacity: 1, y: 0  },
          hidden: { opacity: 0, y: '10vw' }
        }}
      >
        {children}
      </motion.div>
    );
  }

  function ContactTransition({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          delay: 0, type: 'spring', duration: 1, bounce: 0.5, visibility: 'hidden'
        }}
        variants={{
          visible: { opacity: 1, y: 0  },
          hidden: { opacity: 0, y: '10vw' }
        }}
      >
        {children}
      </motion.div>
    );
  }
  
  
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        x: 0,
        transition:{
          delay: 0.7, type: 'spring', duration: 1, bounce: 0.3, visibility: 'hidden'
        }
      });
    }
  }, [inView]);


  const [width, setWidth] = useState(0);

  const carousel = useRef();


  //useEffect(()=>{
  //  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //}, []);

  const [date , setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())


  useEffect(() => {
      getYear();
  }, [])
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
          {/* 
            <motion.h1 initial={{opacity: 1}}  animate={{scale: 1.5}} transition={{duration: .5}}>
              Hi! I'm Ronuel
            </motion.h1>*/}
            <h1>
              Hi! I'm Ronuel
            </h1>
            <motion.div initial={{x: '-100vw'}} animate={{x: 1, duration: 2}} className="span-container">
              <span>
                How's your <span style={{color: 'gray'}}>
                {n}?
                </span>
              </span>
              </motion.div>
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
      <FadeInWhenVisible>
        <div className="curves">
          <h1>
            About me
          </h1>
          </div>
          </FadeInWhenVisible>
          <SlideUp>
          <p className="content-para">
          I work as a Computer Programmer in our Local Government Unit. I developed and deployed Transaksyon Tracer.          
          {/*During my spare time, I work on the frontend and backend of a website, desktop, and mobile application and learn new things about technology.*/}
            </p>
          <p className="content-para">
            With the mix of my technical expertise and experience, I provide quality software solutions at an affordable cost. <a className="hyper-link"  href="#service-link">Services</a>
           </p>
          </SlideUp>
        </div>
        {/* 
        <div className="content-container">
        <Fade bottom>
          <img className="school" src={process.env.PUBLIC_URL + '/images/school.jpg'} alt="school"/> 
         </Fade>
          <p className="content-para">
            I studied B.Sc. in Computer Science at Eulogio “Amang” Rodriguez Institute of Science and Technology (EARIST) Class of 2019.
          </p>
        </div>
        */}
      </div>

      {/*PROJECTS*/}

      <div className="projects">
        <div className="content-container">
        <FadeInWhenVisible>
        <div className="curves">
          <h1>
            Projects
          </h1>
          </div>
          </FadeInWhenVisible>
          <SlideUp>
          <p className="content-para">
            Here are some of my projects that are currently in development and for deployment.
          </p> 
          </SlideUp>
        </div>


         {/*DotBrgy*/}

        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/dotbrgy.png'} alt="dotBrgy"/>
        </div>
        </a> 
        <p>
          For deployment
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



          {/*
        <SlideUp>
        <motion.div className="carousel">
            <motion.div drag="x" ref={carousel} dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}} className="inner-carousel">
              {images.map(image =>{
                return(
                  <motion.div whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 4px gray"
                  }} className="item" key={image}>
                    <img src={image} alt=""/>
                  </motion.div>
                ); 
              })}
            </motion.div>
          </motion.div>
        </SlideUp>
            */}
        <div className="cards-project">
        <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db1.png'} alt="transaksyonOne"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db2.png'} alt="transaksyonTwo"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db3.png'} alt="transaksyonthree"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db4.png'} alt="transaksyonfour"/>
            </div>
            </SlideUp>
            <SlideUp>
            <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db5.png'} alt="transaksyonthree"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/db6.png'} alt="transaksyonfour"/>
          </div>
          </SlideUp>
        </div>
        {/*
        <div className="content-container">
          <p className="content-para">
          Interested in a 5% commission? Please <a className="hyper-link"  href={process.env.PUBLIC_URL + '/projects/DotBrgy-Letter.docx'} download>click here to download</a> the letter and contact me for information.
          </p> 
        </div>
        */}
     

         {/*Transaksyon Tracer*/}

        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/transaksyonTracer.png'} alt="tracer"/>
        </div>
        </a>
        <p>
          For deployment
        </p>
        </div>
        <div className="content-container">
          <h2>
            Transaksyon Tracer
          </h2>
          <p className="content-para">
            A desktop application for the Municipal Civil Registrar Office. The app will instantly track all the daily transactions for a better and much faster issuance of Philippine government identification documents needed for important business, job, or personal uses. 
          </p> 
        </div>
        <div className="cards-project">
        <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonOne.png'} alt="transaksyonOne"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonTwo.png'} alt="transaksyonTwo"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonThree.png'} alt="transaksyonthree"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/transaksyonFour.png'} alt="transaksyonfour"/>
            </div>
            </SlideUp>
        </div>

        {/*SDA Himno */}
        <div className="center">
        <a href="tel:+63963510762">
        <div className="project-shadow">
          <img src={process.env.PUBLIC_URL + '/images/sdaHimnoLogo.png'} alt="himno"/>
        </div>
        </a>
        <p>
          For deployment
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
        <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-one.png'} alt="himnoOne"/>
          </div>
          </SlideUp>
          <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-two.png'} alt="himnoTwo"/>
          </div>
         </SlideUp>
         <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-three.png'} alt="himnothree"/>
          </div>
         </SlideUp>
         <SlideUp>
          <div className="project-container">
              <img className="project-img" src={process.env.PUBLIC_URL + '/images/sdaHimno-four.png'} alt="himnofour"/>
          </div>
          </SlideUp>
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
            Contact me for any software bugs that will possibly occur.  Send your feedback or suggestion for better usage of the app. <a className="hyper-link"  href={process.env.PUBLIC_URL + '/projects/SDAHimnoSetup.zip'} download>Click here to download for free.</a>
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
          In development
        </p>
        </div>
        <div className="content-container">
          <h2 style={{color: "gray"}}>
            AYDI
          </h2>
          <p className="content-para" style={{color: "gray"}}>
            The software is under development. <i className="material-icons">build</i>
          </p> 
          {/*
           <h1>
          <a className="hyper-link"  href="#contact">Be the first to try out this apps!</a>
          </h1>
          */}
        </div>

        <div className="content-container">
        <FadeInWhenVisible>
        <div className="curves">
          <h1>
            Partners
          </h1>
          </div>
          </FadeInWhenVisible>
          <div className="partner-container">
            {/*
          <div className="partner">
            <img src={process.env.PUBLIC_URL + '/images/lubayat.png'} alt="lubayat"/>
          </div>
        */}
        </div>
          <img className="credentials" src={process.env.PUBLIC_URL + '/images/lubayat-sb.png'} alt="school"/> 
          {/*
          <p className="content-para">
            DotBrgy Software will be available soon at Barangay Lubayat, Real, Quezon Province.
          </p> 
        */}
        </div>
        
        <div className="content-container">
          <p className="content-para">
            Interested in Partnership? <a className="hyper-link"  href="#contact">Please contact me</a>
          </p> 
        </div>


      {/*services*/}
      <div className="services-link" id="service-link">
      <div className="content-container">
      <FadeInWhenVisible>
        <div className="curves">
            <h1>
             Services
            </h1>
            </div>
            </FadeInWhenVisible>
          <p className="content-para">
            Let's bring your customized website, mobile or desktop application into the world of technology.
          </p> 
      </div>
      </div>
      <div className="cards-project">
          <div className="project-container">
          <SlideUp>
            <div className="services">
            <i className="material-icons">desktop_windows</i>
            <p>
            Desktop Development
            </p>
            </div>   
            </SlideUp>      
          </div>
          <div className="project-container">
          <SlideUp>
          <div className="services">
          <i className="material-icons">android</i>
          <p>
           Mobile app Development
            </p>
            </div>  
            </SlideUp>       
          </div>
          <div className="project-container">
          <SlideUp>
          <div className="services">
          <i className="material-icons">language</i>
          <p>
           Web Development
            </p>
            </div>
            </SlideUp>         
          </div>
          <div className="project-container">
          <SlideUp>
          <div className="services">
          <i className="material-icons">code</i>
          <p>
           Technical Support
            </p>
            </div>  
            </SlideUp>       
          </div>
        </div>

        {/*
          <div className="partners">
        <div className="partner-container">
        <Fade bottom>
          <div className="partner">
            <img className="project-img" src={process.env.PUBLIC_URL + '/images/lubayat.png'} alt="himnoTwo"/>
          </div>
          </Fade>
        </div>
        </div>
        */}


      {/*credentials
      <div className="content-container">
      <FadeInWhenVisible>
        <div className="curves">
          <h1>
            Credentials
          </h1>
          </div>
          </FadeInWhenVisible>
        </div>
        <div className="content-container">
          <img className="credentials" src={process.env.PUBLIC_URL + '/images/rwd.png'} alt="school"/> 
         <a className="hyper-link" href="https://www.freecodecamp.org/certification/ronuelbmoralita/responsive-web-design">Show Certification</a>
        </div>
        */}  
        {/*contacts*/}
        
        <div className="contacts" id="contact">
          <div className="content-container">
          <FadeInWhenVisible>
          <div className="curves">
            <h1>
              Contacts
            </h1>
            </div>
            </FadeInWhenVisible>
            <ContactTransition>
            <h1 className="center">
              Let's Connect!
            </h1>
            <p className="content-para">
              Feel free to contact me anytime except on Saturdays. Get in touch here:
            </p>
            </ContactTransition>
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
        <footer>&copy; {date} Ronuel Moralita</footer>
    </div>
);
}
export default App;