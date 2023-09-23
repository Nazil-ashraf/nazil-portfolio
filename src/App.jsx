import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import particlesConfig from './atom/particle';
import Card from 'react-animated-3d-card'
import Img from'./image/img.jpg'
import facebook from'./image/facebook.svg'
import linkedin from'./image/linkedin.svg'
import Arrow from'./image/arrow.png'
import git from'./image/git.svg'
import Aos from 'aos';
import Call from"./image/call.png"
import Location from"./image/location.png"
import Email from"./image/mail.png"
import "aos/dist/aos.css";
import { TypeAnimation } from 'react-type-animation';
import About from './components/about';
import Skill from './components/skill';
import Experience from './components/experience';
import Header from './atom/header';
import Home from './components/home';
import Connect from './components/connect';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Loader from './atom/Loader';


export const  App =()=> {
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const [loading, setLoading] = useState(false);
  const navRef = React.useRef()
  navRef.current = navBackground
  const Ref = useRef()


  useEffect(()=>{
   Aos.init({
    duration: 1500,
   })
  },[])


  function handleBackClick() {
    Ref.current.scrollIntoView({ behavior: 'smooth' })
   }
 
const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};
const particlesLoaded = (container) => {
  console.log(container);
};


    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {loading === true ? 
      <Loader/>
      :
      <>
      <div id= "splash">
  <div className="anim">
    <div id="loader">
      <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
        <defs>
          <filter id="f1" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
    
        <g id="shadow" transform="scale(.9)">
          <path fill="#000" fillOpacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
      		h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
      		c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
      		c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
      		c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
      		C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
        </g>
      </svg>
    </div>
  </div>
</div>
       <div style={{ position: 'absolute',background: "linear-gradient(144deg, rgba(32,1,33,1) 22%, rgba(1,6,28,1) 98%)"}}>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      </div>


    <Header  />
    <Home handleBackClick={handleBackClick}/>
    <About Ref={Ref}/>
    <Skill/>
    
    <Experience/>
    <Connect/>
    </>
}
    </div>
  );
}

export default App;