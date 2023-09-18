import profile from "../image/name.jpg"

const detailas =[{title : 'Birthday' ,sub: "18-11-1999"},{title : 'E-mail' ,sub: "nazilashrafc@gmail.com"},{title : 'Age' ,sub: "23 yrs"},{title : 'phone' ,sub: "9746620352"},{title : 'Linkedin' ,sub: "Nazil Ashraf"},{title : 'Nation' ,sub: "India"},{title : 'State' ,sub: "Kerala"},{title : 'Address' ,sub: "Chiraparambil House Kizhuppillikara"}]
const About =({Ref})=>{
    
    return(
 
        <div className="about-page" ref={Ref}  id="about" >
            
             <div class="common-heading">
              <h1>About</h1>
            </div>
  
       <div className="flex">


                   {/* <section id="about"> */}
            <div className="about-page--left"     >
            <img src={profile} height="366px"/>
            </div>
            <div className="about-page--right" data-aos="fade-right">
                <div className="about-page--right--heading">
                    Nazil Ashraf C
                </div>
                <div className="about-page--right--sub-heading">
                    A Web Developer at <b>Datamatics Global Services Limited</b>
                </div>
                <div className="about-page--right--description">
                A Front End Developer with 1.8 years of experience in coding, testing and establishing platform improvements.
                Developed many features and components as per the client's requirements and follows agile methodology 
                </div>

                <div className="about-page--right--grid">
                    {detailas?.map((i)=>
                <div className="about-page--right--grid--flex">
                <div className="about-page--right--grid--flex--title">
                {i?.title}
                </div>
                <div className="about-page--right--grid--flex--line">
                
                </div>
                <div className="about-page--right--grid--flex--sub-title">
                {i?.sub}
                </div>
                </div>
               ) }
                </div>

            </div>
            </div>
            {/* </section> */}
        </div>
 
    )
}
export default About