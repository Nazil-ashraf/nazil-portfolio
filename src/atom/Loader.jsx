
import React  from 'react';


export const Loader =()=>{

      const date = new Date();
      var hrs = date.getHours();
      var greet;
      if (hrs < 12) greet = 'Good Morning';
      else if (hrs >= 12 && hrs < 16) greet = 'Good Afternoon';
      else if (hrs >= 16 && hrs <= 18) greet = 'Good Evening';
      else if (hrs >= 18 && hrs <= 24) greet = 'Good Night';


      
    return(
        <div className="loader">
  
           <p>Hi {greet}  <br/><a >Welcome to my Portfolio:</a></p>
   

        </div>
    )
}
export default Loader;
