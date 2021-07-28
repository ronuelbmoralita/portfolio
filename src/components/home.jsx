import React, { Component } from 'react';

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
export default class Home extends Component {
    render() {
      return (
        <div>
          {/*introduction*/}  
          <div className="intro" id="top">
            <div className="intro-card card-shadow">
              <header>
                <nav>
                  <div className="navbar">
                    <h1 className="logo">
                      <span>O</span><span />
                      <span>W</span><span>E</span>
                      <span>l</span><span />
                    </h1>
                  </div> 
                  <ul>
                    <li>
                      <a href="tel:+639635107622">Call</a>
                    </li>
                  </ul>
                </nav>
              </header>
              <div className="intro-container">
                {/*
            <img class="img" src={process.env.PUBLIC_URL + '/images/ron.png'} alt="logo">
          */}
                <h1>
                  Hi, I'm Ronuel
                </h1>
                <div className="span-container">
                  <span style={{color: 'black'}}>
                    How's your <span style={{color: '#a1978d'}}>
                    {n}?
                    </span>
                  </span>
                
                  
                </div>
              </div>
              <div className="arrow-container">
                <section id="arrow" className="arrow">
                  <p><span/></p>
                </section>
              </div>
            </div>
          </div>
          {/*about*/}
          <div className="about" id="about">
            <div className="content-container">
              <h1>
                About me
              </h1>
              <p className="content-para">
              I work as a Computer Programmer at the Municipal Civil Registrar of Real, Quezon. My experience developing, maintaining, debugging, and troubleshooting systems and software has fueled my curiosity in knowing new and existing technologies.           
              {/*During my spare time, I work on the frontend and backend of a website, desktop, and mobile application and learn new things about technology.*/}
                </p>
            </div>
            <div className="content-container">
              <img className="school" src={process.env.PUBLIC_URL + '/images/school.jpg'} alt="school"/> 
              <p className="content-para">
                I studied B.Sc. in Computer Science at Eulogio “Amang” Rodriguez Institute of Science and Technology (EARIST) Class of 2019.
              </p>
            </div>
          </div>
          {/*projects*/}
          <div className="projects">
            {/**/}
            <div className="content-container">
              <h1>
                Projects
              </h1>
              <p className="content-para">
                Here are some of my projects that are currently in development and for deployment.
              </p> 
            </div>

            <img className="img-shadow" src={process.env.PUBLIC_URL + '/images/dotbrgy.png'} alt="dotBrgy"/>
            <p className="center">
              In development
            </p>
            <div className="content-container">
              <h2>
                DotBrgy
              </h2>
              <p className="content-para">
                A desktop application for barangay records that lets you store, edit, and retrieve resident data in a structured manner. The data collected will then be used for Barangay Statistics. <a className="hyper-link" href="tel:+63963510762">
                Learn more
              </a> 
              </p> 
            </div>
          

            <img className="img-shadow" src={process.env.PUBLIC_URL + '/images/transaksyonTracer.png'} alt="tracer"/>
            <p className="center">
              For deployment 
            </p>
            <div className="content-container">
              <h2>
                Transaksyon Tracer
              </h2>
              <p className="content-para">
                A desktop application for the Municipal Civil Registrar Office. The app will be able to track all the daily transactions instantly. <a className="hyper-link" href="tel:+63963510762">
                Learn more
              </a> 
              </p> 
            </div>
            <div className="cards-project">
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonOne.png'} alt="transaksyonOne"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonTwo.png'} alt="transaksyonTwo"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonThree.png'} alt="transaksyonthree"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonFour.png'} alt="transaksyonfour"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonFive.png'} alt="transaksyonFive"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/transaksyonSix.png'} alt="transaksyonSix"/>
                </div>
              </div>
            </div>
           
            {/*SDA Himno*/}
            <img className="img-shadow" src={process.env.PUBLIC_URL + '/images/sdaHimnoLogo.png'} alt="himno"/>
            <p className="center">
              For deployment
            </p>
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
              */}
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
            </div>
            {/**/}
            <div className="content-container">
              <p className="content-para">
                "Music has been identified as one of the rich heritages of the Seventh-day Adventist church".  
              </p> 
            </div>
            {/**/}
            <div className="cards-project">
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-one.png'} alt="himnoOne"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-two.png'} alt="himnoTwo"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-three.png'} alt="himnothree"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-four.png'} alt="himnofour"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-five.png'} alt="himnoFive"/>
                </div>
              </div>
              <div className="card-projectZoom">
                <div className="imgZoom">
                  <img className="zoom" src={process.env.PUBLIC_URL + '/images/sdaHimno-six.png'} alt="himnoSix"/>
                </div>
              </div>
            </div>

            <div className="content-container">
              <p className="content-para">
              Part of your donation will go to REINA district-wide ministry and for the renovation of our church. 
              </p> 
            </div>

            <div className="content-container">
              <p className="content-para">
              Feel free to contact me for any software bugs that will possibly occur.  Send your feedback or suggestion for better usage of the app.
                You can download the app here. <a className="hyper-link"  href={process.env.PUBLIC_URL + '/projects/SDAHimnoSetup.zip'} download>Click me</a>
              </p> 
            </div>
            {/*

             <div class="content-container">
      <p className="content-para">
        Ojuola, Olusegun. “The Importance of Music in Adventist Education.” Seventh-Day Adventist Educators, 22 Oct. 2020, <a className="hyper-link" href="https://adventisteducators.org/2020/05/importance-of-music-adventist-education/">adventisteducators.org/2020/05/importance-of-music-adventist-education/.</a> 
      </p>
    </div>
  <div class="github">
    <span>
      <a class="calling" href="https://github.com/ronuelbmoralita">Github</a>
    </span>
    <span>
  </div>
  */}
  </div>
            {/*technologies*/}
            <div className="technologies">
              <div className="content-container">
                <h1>
                  Technologies
                </h1>
                <p className="content-para">
                  These are the primary tools and programming languages that I used to build projects. 
                </p>
              </div>
              <h1 className="skill">
                  Top expertise
                </h1>
            <ul id="rig">
              <li>
                <a className="rig-cell" href="https://docs.microsoft.com/en-us/dotnet/">
                  <img className="rig-img" alt="c#" src={process.env.PUBLIC_URL + '/images/cSharp.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">C#</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://visualstudio.microsoft.com/">
                  <img className="rig-img" alt="vStudio" src={process.env.PUBLIC_URL + '/images/visualStudio.png'}/>
                  <span className="rig-overlay" />
                  <span className="rig-text">Visual Studio</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://code.visualstudio.com/">
                  <img className="rig-img" alt="vCode" src={process.env.PUBLIC_URL + '/images/visualStudioCode.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">Visual Studio Code</span>
                </a>
              </li>
              
              <li>
                <a className="rig-cell" href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">
                  <img className="rig-img" alt="sqlite" src={process.env.PUBLIC_URL + '/images/sqlServer.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">Microsoft SQL Server</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://www.sqlite.org/index.html">
                  <img className="rig-img" alt="sqlite" src={process.env.PUBLIC_URL + '/images/sqlite.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">SQLite</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="http://materialdesigninxaml.net/">
                  <img className="rig-img" alt="theme" src={process.env.PUBLIC_URL + '/images/theme.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">Material Design In XAML</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://www.nuget.org/packages/ZXing.Net/">
                  <img className="rig-img" alt="zxing" src={process.env.PUBLIC_URL + '/images/zxing.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">ZXing.Net</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://lvcharts.net/">
                  <img className="rig-img" alt="lvcharts" src={process.env.PUBLIC_URL + '/images/livecharts.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">LiveCharts</span>
                </a>
              </li>
              </ul>
              <h1 className="skill">
                  Novice at
                </h1>
              <ul id="rig">
              <li>
                <a className="rig-cell" href="https://reactjs.org/">
                  <img className="rig-img" alt="react" src={process.env.PUBLIC_URL + '/images/react.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">React</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://www.javascript.com/">
                  <img className="rig-img" alt="django" src={process.env.PUBLIC_URL + '/images/js.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">JavaScript</span>
                </a>
              </li> 
              <li>
                <a className="rig-cell" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <img className="rig-img" alt="django" src={process.env.PUBLIC_URL + '/images/html.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">HTML</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <img className="rig-img" alt="django" src={process.env.PUBLIC_URL + '/images/css.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">CSS</span>
                </a>
              </li>
              <li>
                <a className="rig-cell" href="https://www.python.org/">
                  <img className="rig-img" alt="python" src={process.env.PUBLIC_URL + '/images/python.png'} />
                  <span className="rig-overlay" />
                  <span className="rig-text">Python</span>
                </a>
              </li>
           </ul>
          </div>
          {/*
              <div className="tech-container">
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/cSharp.png'} alt="image"/>
                  <div className="center">
                  <p>About:
                    <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
                      C#
                    </a>
                  </p>
                  </div>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/visualStudio.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://visualstudio.microsoft.com/">
                      Visual Studio
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/visualStudioCode.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://code.visualstudio.com/">
                      Visual Studio Code
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/sqlite.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://www.sqlite.org/index.html">
                      SQLite
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/theme.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="http://materialdesigninxaml.net/">
                      Material Design In XAML
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/zxing.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://www.nuget.org/packages/ZXing.Net/">
                      ZXing.Net
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/livecharts.gif" alt="Logo"/>
                  <p className="center">
                    About:
                    <a href="https://lvcharts.net/">
                      LiveCharts
                    </a>
                  </p>
                </div>
                <p className="center">
                  My interest pushes me to learn more about new tech including:
                </p>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/react.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://reactjs.org/">
                      React
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/python.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://www.python.org/">
                      Python
                    </a>
                  </p>
                </div>
                <div className="tech">
                  <img className="img" src={process.env.PUBLIC_URL + '/images/django.png'} alt="image"/>
                  <p className="center">
                    About:
                    <a href="https://www.djangoproject.com/">
                      Django
                    </a>
                  </p>
                </div>
              </div>
            */}
           
            {/*pro member*/}
            {/*
  <div class="pro">
    <div class="content-container">
      <h1>
        Membership
      </h1>
      <p>
      </p>
    </div>
    <div class="container">
      <div class="layout">
        <div class="col col-main">
          <h2>Non-pro</h2>
          <strong>PHP 0.00/month</strong><br> 
          <ul class="w3-ul">
            <li></li>
          </ul>
        </div>
        <div class="col col-complementary" role="complementary">
          <h2>Pro</h2>
        <p>
          <strong>PHP 1000/month</strong><br> 
        </p>  
        <ul class="w3-ul">
          <li>Software maintenance and Technical support.</li>
          <li>Exclusive access for new features and security updates.</li>
        </ul>
      </div>  
    </div>
  </div>
  </div>
  */}
            {/*contacts*/}
            <div className="contacts" id="contact">
              <div className="content-container">
                <h1>
                  Contacts
                </h1>
                {/*
                  <h2>
                  Interested in collaborating or investing?
                </h2>
                */}
                <p className="content-para">
                  Interested in collaborating or investing? Feel free to contact me anytime except on Saturdays. Get in touch here:
                </p>
              </div>
              <div className="social">
                <span>
                  <a className="calling" href="tel:+63963510762">Call</a>
                </span>
                <span>
                  <a className="fb" href="https://www.facebook.com/ronuel06">Facebook</a>
                </span>
                <span>
                  <a className="gmail" href="mailto: moralitaronuel@gmail.com">Gmail</a>
                </span>
              </div>  
              <div className="vm">
                <p>“Let's build something that will create more.”</p>
              </div>
            </div>
        </div>
      );
    }
  };