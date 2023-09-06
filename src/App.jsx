import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import particlesConfig from './atom/particle';
import Particles from 'react-particles-js';
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


function App() {



  useEffect(()=>{
  Aos.init({

    duration: 1500,
  })
  },[])

  const Ref = useRef()

  function handleBackClick() {
    Ref.current.scrollIntoView({ behavior: 'smooth' })
}
 


const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
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

  return (
    <div className='App'>
      
 
       <div style={{ position: 'absolute',background: "linear-gradient(144deg, rgba(32,1,33,1) 22%, rgba(1,6,28,1) 98%)"}}>
        <Particles height="303vh" width="100%" params={particlesConfig} />
      </div>
{/* 
      <svg viewBox="0 0 960 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">AUYK. </text>
    <text text-anchor="middle" x="52%" y="80%">AUYK. </text>
    
  </symbol>

  <g class = "g-ants">
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
  </g>
</svg> */}

    <Header  />
    <Home handleBackClick={handleBackClick}/>
    <About Ref={Ref}/>
    <Skill/>
    <Experience/>
    <Connect/>

    </div>
  );
}

export default App;