
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import uparrow from '../image/uparrow.png';
import { Drawer } from '@mui/material';
import { BurgerSpin } from '../icons/BurgerSpin';
import ICON from '../image/letter-n.png';


const drawerWidth = 240;



export default function Header(props) {

    const [navBackground, setNavBackground] = useState(false)
    const navRef = React.useRef()
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const headerContent =[{name : 'home' , offset: -100} , {name : 'about' , offset: -200},{name : 'skills' , offset: -100},{name : 'resume' , offset: -80} ,{name : 'connect' , offset: -100}]

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
      setIsClosedList(!isClosedList);
    };

    const [isClosedList, setIsClosedList] = useState(false);
  

    const handleBurgerClicked = (index: number) => {
      // const isClosedListCopy = [...isClosedList];
      // isClosedListCopy[index] = !isClosedListCopy[index];
      setIsClosedList(!isClosedList);
      setMobileOpen(!mobileOpen)
    };
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
            <img  src={ICON} width="40px" height="40px" className='app-icon'/>
          
             <nav className="nav__container__actions">
              
          <ul>
            {headerContent.map((item)=>(
            <li key ={item.name}>
              <Link activeclassname="active" smooth spy to={item.name}  offset={item.offset}    >
             {item.name}
              </Link>
            </li>
            ))}

          </ul>
        </nav>
      
           
        <div className='siderbar-icon' onClick={handleBurgerClicked}>
              <BurgerSpin isClosed={isClosedList} />
              
            <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className='drawer'
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
       <div className='drawer'>
       {headerContent.map((item)=>(
       <div className='drawer--text' key ={item.name}>
                <Link activeclassname="active" smooth spy to={item.name}  offset={item.offset} onClick={handleDrawerToggle}    >
             {item.name}
              </Link>
        </div>
       ))}
       </div>
        </Drawer>
            </div>

        </div >

        

    );
}