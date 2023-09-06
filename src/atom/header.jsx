
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

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

    return (
        <div className={navBackground ?  "scroll-header" : "header" }>
          
             <nav className="nav__container__actions">
              
          <ul>
            <li>
              <Link activeClass="active" smooth spy to='home'>
                HOME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="about">
               ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="skill">
            SKILLS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="resume">
                 RESUME
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="connect">
                CONNECT
              </Link>
            </li>
          </ul>
        </nav>
           
        </div >
    );
}