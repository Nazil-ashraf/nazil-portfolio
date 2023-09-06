import Facebook from'../image/facebook.svg'
import linkedin from'../image/linkedin.svg'
import Instagram from'../image/Instagram.svg'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
 
 const  Connect =()=>{

    const form = useRef();
    const [open, setOpen] = useState(false);
    const [value, setvalue] = useState()

    // const handleClick = () => {
    //   setOpen(true);
    // };
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yero86o', 'template_pbbf7yh', form.current, 'QLqgy756AG0_xgN7K')
        .then((result) => {
            console.log(result.text);
            setOpen(true);
            
            console.log('send message ')
        }, (error) => {
            console.log(error.text);
        });
  };
  const onlyNumberKey=(e)=> {    
    e = e.target.value.replace(/[^0-9]+/g, '');
    console.log(e,'dddd')
   setvalue(e)
}

return (
    <div className="connect-page" id='connect'>
         <div className="connect-page--heading" >Get In Touch With</div>
         <div className="connect-page--flex">
         <div className="connect-page--flex--contact" >
         <div className="connect-page--flex--contact--text" >I'm constantly ready to connect with you. Feel free to reach out to me through </div>
         <div className="connect-page--flex--contact--link" >Phone : +91 9746620352</div>
         <div className="connect-page--flex--contact--link" >Email : nazilashrafc@gmail.com</div>
         <div className="connect-page--flex--contact--text" >FIND WITH ME</div>
         <div className="connect-page--flex--contact--flex" >
         <div className="connect-page--flex--contact--flex--box" ><a href='https://m.facebook.com/profile.php/?id=100004269961220'><img src={Facebook} className="connect-page--flex--contact--flex--box-img" height={'30px'} width={'30px'}/></a></div>
         <div className="connect-page--flex--contact--flex--box" ><a href='https://www.instagram.com/nazil__ashraf/'><img src={Instagram} className="connect-page--flex--contact--flex--box-img" height={'30px'} width={'30px'}/></a></div>
         <div className="connect-page--flex--contact--flex--box" ><a href='https://www.linkedin.com/in/nazil-ashraf-289162191/'><img src={linkedin} className="connect-page--flex--contact--flex--box-img" height={'30px'} width={'30px'}/></a></div>
        </div>
         </div>
         <form ref={form} onSubmit={sendEmail} className="connect-page--flex--connect">
         {/* <div  > */}
         <div className="connect-page--flex--connect--wrap" >
           <div className="connect-page--flex--connect--label" >
           YOUR NAME
           </div>
           <input className="connect-page--flex--connect--input"  name="user_name" type="text" maxLength={20}/>
         </div>
         <div className="connect-page--flex--connect--wrap" >
           <div className="connect-page--flex--connect--label" >
          PHONE NUMBER
           </div>
           <input className="connect-page--flex--connect--input" name="user_phone" type="tel" maxLength={11} onChange={(e)=>onlyNumberKey(e)} value={value}/>
         </div>
         <div className="connect-page--flex--connect--wrap1" >
           <div className="connect-page--flex--connect--label" type="email" name="user_email" >
            EMAIL
           </div>
           <input className="connect-page--flex--connect--input" />
         </div>

         <div className="connect-page--flex--connect--wrap1" >
           <div className="connect-page--flex--connect--label" >
           YOUR MESSAGE
           </div>
           <input className="connect-page--flex--connect--input1" name="message" />
         </div>

         <input className='connect-page--flex--connect--submit' type="submit" value="SEND MESSAGE"  />
    
         {/* </div> */}
         </form>
         </div>
         <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}   
        message="Message send successfully !"
        // action={action}
      />
     
    </div>
)
}
export default Connect