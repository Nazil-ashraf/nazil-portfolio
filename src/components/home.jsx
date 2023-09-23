import { TypeAnimation } from "react-type-animation"
import Card from 'react-animated-3d-card'
import Img from'../image/img.jpg'
import Arrow from'../image/arrow.png'
import document from'../Nazil_Ashraf.pdf (1).pdf'


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
        height: "414px",
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


  <i className="fa-regular fa-arrow-right"></i>

     </div>
     <img src={Img} height="40%" width="200px" style={{    borderRadius: "10%" ,objectFit: "cover" , marginTop:"20px"}} />
     </div>

    </Card>

    {/* <div   onClick={handleBackClick}>  </div> */}
    <a
        href={document}
        download="Nazil_Resume"
        target="_blank"
        rel="noreferrer"
        className='btn2'
      >
        Download Resume
        <img src={Arrow} height="18px"/>
     
      </a>


 
    </div>




  </div>
    )
}

export default Home