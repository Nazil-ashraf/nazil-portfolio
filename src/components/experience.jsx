import { useState } from "react"
import { Link } from "react-scroll"
import Arrow from '../image/arrow.png'

export const Experience =()=>{
    const [tabValue,setTabValue]=useState(1)
    return(
        <div className="experience-page" id='resume'>
            <div className="experience-page--heading">My Resume</div>
            <div className="experience-page--tab">
            <div className={tabValue === 1 ? "experience-page--tab--title-active" :"experience-page--tab--title"} onClick={()=>{setTabValue(1)}}>
            Education
            </div>
            <div className={tabValue === 2 ? "experience-page--tab--title-active" :"experience-page--tab--title"} onClick={()=>{setTabValue(2)}}>

               Experience

            </div>
            <div className={tabValue === 3 ? "experience-page--tab--title-active" :"experience-page--tab--title"} onClick={()=>{setTabValue(3)}}>

               Projects

            </div>
            </div>

           {tabValue === 1 &&  <div className="experience-page--education" >

            <div className="experience-page--education--first">
                   <div className="experience-page--education--first--circle">
                    
                    </div>
                    <div className="experience-page--education--first--line">
                    
                    </div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
                <div className="experience-page--education--first--box--year">
                 2017 - 2021
                </div>
                <div className="experience-page--education--first--box--heading">
                 MES College Of Engineering -Kerala
                </div>
                <div className="experience-page--education--first--box--subHeading">
                 Bachelor Of Technology
                </div>
                <div className="experience-page--education--first--box--para">
                . Completed professional degree in computers
                  science engineer with 6.4 cgpa
                . Select web development as elective course
                . Volunteer in welfare association
                . College football team captain 
                </div>
           
                </div>


            </div>
            <div className="experience-page--education--second">
                <div className="experience-page--education--second--h-line"></div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
                <div className="experience-page--education--first--box--year">
                 2015 - 2017
                </div>
                <div className="experience-page--education--first--box--heading">
                Chentrappinni Higher Secondary School - Thrissur
                </div>
                <div className="experience-page--education--first--box--subHeading">
                 Higher Secondary
                </div>
                <div className="experience-page--education--first--box--para">
                .Completed with 79%
                .Selected computer science as a stream
                .Fine arts leader
                .President, a computer science student association
                </div>
           
                </div>

            </div>
            <div className="experience-page--education--third">
            <div className="experience-page--education--second">
                <div className="experience-page--education--second--h-line"></div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
                <div className="experience-page--education--first--box--year">
                 2014 - 2015
                </div>
                <div className="experience-page--education--first--box--heading">
                  Sree Gokulam Public School - Pazhuvil
                </div>
                <div className="experience-page--education--first--box--subHeading">
                 High School
                </div>
                <div className="experience-page--education--first--box--para">
                .Completed with 8.8 CGPA
                 .Leader of student association
                </div>
           
                </div>

            </div>
            </div>

            </div>
            }
           {tabValue === 2 &&  
           <div className="experience-page--education">

           <div className="experience-page--education--first">
                  <div className="experience-page--education--first--circle">
                   
                   </div>
                   <div className="experience-page--education--first--line">
                   
                   </div>
               <div className="experience-page--education--first--box" data-aos="flip-right">
               <div className="experience-page--education--first--box--year">
                2022-present
               </div>
               <div className="experience-page--education--first--box--heading">
               Datamatics Global Services Limited -Banglore
               </div>
               <div className="experience-page--education--first--box--para">
            . Outsource web developer of idfc bank  who have experience in Three 
               Projects using React js in IDFC Education Loan Sector <br/>
             . Developed many Features ,components ,Common components for CMS
             platform for the admin as well as Customer Platform
             <br/>
             . Developed  Education Loan reimbursement Platform .
              <br/>
              . worked on the razor payment system, D2C platforms.have good knowledge on Agile / Scrum and also continuous integration and deployment.
              <br/>
              . Do regular testing
              using Jest and make clean and secure code by
              solving issues and scanning through checkmarx
             Regularly deploy the code in DEV and UAT server
               </div>
          
               </div>


           </div>
           <div className="experience-page--education--second">
               <div className="experience-page--education--second--h-line"></div>
               <div className="experience-page--education--first--box" data-aos="flip-right">
               <div className="experience-page--education--first--box--year">
                2021-2022
               </div>
               <div className="experience-page--education--first--box--heading">
               Service Options Private Limited 
               </div>
               <div className="experience-page--education--first--box--para">
               . Developed an official Responsive product website
               for the start up company
               <br/>
               . Developed UI by only following workflow
               <br/>
               . Created many features and common components
               using javascript, HTML, SCSS
               Used redux, and react query for storing Rest APIs
               and other common functions
               <br/>
                . Wrote many test cases by using Jest Testing.
                Used other libraries such as chakra, Mui, and
                 Used GIT for tracking changes in source code.
               </div>
          
               </div>

           </div>
          

           </div>
             }
            {tabValue === 3 && 
            <div className="experience-page--education">

            <div className="experience-page--education--first">
                   <div className="experience-page--education--first--circle">
                    
                    </div>
                    <div className="experience-page--education--first--line">
                    
                    </div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
                {/* <div className="experience-page--education--first--box--year">
                 2017 - 2021
                </div> */}
                <div className="experience-page--education--first--box--heading">
                 IDFC Education Loan
                </div>
                <a className="experience-page--education--first--box--link" href="https://www.firstuni.in/">
                   FIRST UNI <img src={Arrow} height="18px"/> 
                </a>
                <div className="experience-page--education--first--box--para">
                . Developed  IDFC EDucation Loan Platform -First Uni, in which user can explore Education loan details , Colleges,Scholarships,Courses ,schedule counsellors and highly secured  D2C platform etc...
                <br/>
                . Created many features and common components
                 using javascript-ES6, HTML, SCSS
                 Used redux for storing Rest APIs
                 and other common functions 
                 <br/>
                 . Wrote many test cases by using Jest Testing<br/>
                 . Used other libraries such as Mui, <br/>
                 . Used GIT ,Bitbucket for tracking changes in source code.<br/>
                . Used Jira for  planning, executing, and monitoring all of the tasks , bugs and Sprint Estimation required to reach a set business goal
                </div>
               
              
           
                </div>


            </div>
            <div className="experience-page--education--second">
                <div className="experience-page--education--second--h-line"></div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
                <div className="experience-page--education--first--box--heading">
                 CMS For IDFC Education Loan
                </div>
                <div className="experience-page--education--first--box--para">
                . Developed CMS Platform that helps IDFC Bank Admin create, manage, and modify content on IDFC Education Loan  without any technical knowledge. 
                </div>
           
                </div>
                <div className="experience-page--education--second--v-line"></div>
                <div className="experience-page--education--first--box" data-aos="flip-right">
             

                <div className="experience-page--education--first--box--heading">
                Reimbursement - IDFC Education Loan
                </div>
                <a className="experience-page--education--first--box--link" href="https://www.firstuni.in/first-orient/login">
                   FIRST ORIENT <img src={Arrow} height="18px"/> 
                </a>
                <div className="experience-page--education--first--box--para">
                . Developed a platform for the user to know about  Reimbursement of Existing Loan which user can update ,change their  highly secured Documents and details.
                </div>
           
                </div>
            </div>
            <div className="experience-page--education--third">
            <div className="experience-page--education--second">

                <div className="experience-page--education--first--box" data-aos="flip-right">
             
                <div className="experience-page--education--first--box--heading">
                 Service Options
                </div>
                <div className="experience-page--education--first--box--para">
               . Developed an official Responsive product website
               for the start up company which is not released yet
               <br/>
               . Developed UI by only following workflow
               <br/>
               . Created many features and common components
               using javascript, HTML, SCSS
               Used redux, and react query for storing Rest APIs
               and other common functions
               <br/>
                . Wrote many test cases by using Jest Testing.
                Used other libraries such as chakra, Mui, and
                 Used GIT for tracking changes in source code.
               </div>
           
                </div>

            </div>
            </div>

            </div>
              }

            {/* <div className="experience-page--container1">
                <div className=""
            </div> */}

        </div>
    )
}
export default Experience