import { TypeAnimation } from "react-type-animation"
import Card from 'react-animated-3d-card'
import Img from'../image/img.jpg'
import Arrow from'../image/arrow.png'
import { useRef } from "react"

export const Home = ({handleBackClick})=>{

  
    return(
    <div className='home' id='home'>
       <div  data-aos="fade-down" className='nnnn'>

       <Card
         cursorPointer={false}
         shineStrength={0.4}
         style={{
         background: "transparent",
         width: "900px",
        height: "450px",
        cursor: "pointer",
        boxShadow: "#000000 9px 5px 34px -16px"
        
      }}
    >
      <div className='flex'>
        <div className="home-content-flex">
   
          <h3>Hello , I'm</h3>
     <h2 >  Nazil Ashraf C</h2>

<span>
<div className='line'></div>

     <TypeAnimation
    sequence={[
      'Web Developer',
      2000,
      'React Developer',
      2000,
      'App Developer',
      2000,
     
    ]}
    speed={10}
    className="box"
    repeat={Infinity}
  />
  </span>

  <TypeAnimation
    sequence={[
      'I am a frontend web developer from kerala who is passionate about crafting seamless user experiences with React.js',
      2000,
     
    ]}
    speed={10}
    className="sub-text"
    repeat={Infinity}
  />


  <i class="fa-regular fa-arrow-right"></i>

     </div>
     <img src={Img} height="40%" width="200px" style={{    borderRadius: "10%" ,objectFit: "cover" , marginTop:"20px"}} />
     </div>

    </Card>

    <div className='btn2'  onClick={handleBackClick}>ABOUT ME <img src={Arrow} height="18px"/> </div>



 
    </div>




  </div>
    )
}

export default Home