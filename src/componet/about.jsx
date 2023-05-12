import React from 'react'
import './about.css';
import profilimg from './img/ass.jpeg';
import View_img from './img/ass.jpeg';
import madalimg from './img/resum.jpg';
import buttonprofile from './img/Amitcv.pdf';
const about = () => {
  return (
    <>
        <div className='aboutss'>
            <div className='profile'>
                <h2 className='h22'> My Profile</h2>
            </div>
            <div className='profilepic'>
                <div className='myimgdiv'>
                <img src={profilimg} alt="" className='myimg' />
                </div>
                <p className='Address'><b>Name : </b>Amit Kumawat</p>
                <p className='Address'><b>Email : </b>Amitbhaixyz1999@gmail.com</p>
                <p className='Address'><b>Mobile : </b>9785964646</p>
                <p className='Address'><b>Address : </b>Bharat Petrol Pump Ke Piche Hathoj, Jaipur</p>
                <p className='Address'><b>Pin Code : </b>302012</p>
                <p className='Address'><b>City : </b>Jaipur</p>
                <p className='Address'><b>State : </b>Rajasthan</p>
                <div>
                </div> 
            </div>
            {/* modale file resum uploded  */}
                
            <a href={buttonprofile} target='blank' download="My">
                    <button className='Downlod'>
                        Download CV
                    </button>
                </a>

                <div className='resum_man_div'> 
                        <input type="button" value="View Cv" className='inputtt' id="modal-btn" name="modal-btn"  />
                            {/* <lable className="">View Cv <i class='iclass'></i></lable> */}
                <div>
                        <img src={View_img} alt="" className='View_img' />  
                        <div class="modal-wrap">
                            <img src={madalimg} alt="" className='imgclass' />
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default about
