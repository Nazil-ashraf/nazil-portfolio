
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import uparrow from '../image/uparrow.png';

export default function Header() {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 10
            if (show) {
                setNavBackground(true)
            } else {
                setNavBackground(false)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
 const scrollToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

    return (
        <div className={navBackground ?  "scroll-header" : "header" }>
            {navBackground && 
             <div className='scroll-up-btn' onClick={scrollToTop}><img src ={uparrow}      height= "36px"/></div>
            }
          
             <nav className="nav__container__actions">
              
          <ul>
            <li>
              <Link activeClass="active" smooth spy to='home'     >
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
               ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skill" >
            SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="resume" offset={-50}>
                 RESUME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="connect"  offset={-100}>
                CONNECT
              </Link>
            </li>
          </ul>
        </nav>
      
           
        </div >

    );
}