import React from "react";
import './Experiences.css';
const Experiences = () => {
  return (
    <>
      <p>Experrience</p>
      <div className="man_div">
          <p className="frontend">Front-End Web Development</p>
        <div className="frintend_sit">
            <div className="Html"><b>HTML</b></div>

            <div className="Html"><b>CSS</b></div>  

            <div className="Html"><b>BOOTSTRAP</b></div>


            <div className="Html"><b>JAVASCRIPT</b></div>
            
          
            <div className="Html"><b>JQUERY</b></div>

            <div className="Html"><b>PHP</b></div>
 
        </div>
      </div>
      <div  className="man_div">
        <p className="frontend">Back-End Web Development</p>
        <div className="backend_sit">
          <div className="Html"><b>CI</b></div>
          
          <div className="Html"><b>REACT</b></div>

          <div className="Html"><b>LARAVEL</b></div>
        </div>
      </div>
     
      {/* mane div and  */}
    </>
  );
};

export default Experiences;
