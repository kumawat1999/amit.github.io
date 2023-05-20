import './Contactus.css';
import React, { useState } from 'react';
import logo from './img/logo.jpg';
export const Contactus = () => {
        const  [name, setName] = useState('');
        const  [ocupType, setocupType] = useState('');
        const  [orgName, setorgName] = useState('');
        const  [email, setemail] = useState('');
        const  [msg, setmsg] = useState('');

        const  [nameError, setameError] = useState('');
        const  [ocupTypeError, setocupTypeError] = useState('');
        const  [orgNameError, setorgNameError] = useState('');
        const  [emailError, setemailError] = useState('');
        const  [msgError, setmsgError] = useState('');

        function isValiid(itemName, value){

            let regex;
            if(itemName === 'name'){
                regex = /[A-Za-z]{3,15}$/;
            }
            else if(itemName === 'ocupType'){
                regex = /[A-Za-z]+$/;
            }
            else if(itemName === 'orgName'){
                regex = /[A-Za-z]{3,15}$/;
            }
            else if(itemName === 'email'){
                regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            }
            else if(itemName === 'msg'){
                regex = /[A-Za-z]+$/;
            }
            return regex.test(value);
        }
          const onContact = () => {
            if(!isValiid('name', name)){
                setameError('Enter a valid name');
            }
            else {
                setameError('')
            }
            if(!isValiid('ocupType', ocupType)){
                setocupTypeError('Enter a valid Ocuupation');
            }
            else {
                setocupTypeError('')
            }
            if(!isValiid('orgName', orgName)){
                setorgNameError('Enter a valid Organization / Instiute Name');
            }
            else {
                setorgNameError('')
            }
            if(!isValiid('email', email)){
                setemailError('Enter a valid Email');
            }
            else {
                setemailError('')
            }
            if(!isValiid('msg', msg)){
                setmsgError('Enter a valid Message');
            }
            else {
                setmsgError('')
            }
            console.log(name,ocupType, orgName, email, msg);
        }
  return (
    <>
    <div className='mandiv'> {/* mandiv started */}  

        <div className='heding_detials'> {/* heding_detials start*/ }
            <div className='contect_form'>   {/* contect_form start*/ }
                <img src={logo} alt="" className='logos' />
                <h1 className='form'>Contect Form </h1>
                <label htmlFor="">Name:</label>
                {nameError ? <p style={{color:'yellow'}}>{nameError}</p> : null }
                <input id='name' name="setName" placeholder='Name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
               
               
                <label htmlFor="">Ocuupation Type</label>
                {ocupTypeError && <p style={{color:'yellow'}}>{ocupTypeError}</p> }
                <input id='Ocuupation' placeholder='Ocuupation Type' name="setocupType" type="text"  value={ocupType} onChange={(e)=>setocupType(e.target.value)}/>
                
                <label htmlFor="">Organization / Instiute Name</label>
                {orgNameError && <p style={{color:'yellow'}}>{orgNameError}</p> }
                <input id='Instiute' name="setorgName" placeholder='Ocuupation Instiute' type="text"  value={orgName} onChange={(e)=>setorgName(e.target.value)}/>

                <label htmlFor=""> Email:</label>
                {emailError && <p style={{color:'yellow'}}>{emailError}</p> }
                <input id='Email' name="setemail"  placeholder='Email' type="text" value={email} onChange={(e)=>setemail(e.target.value)} />

                <label htmlFor="">Message</label>
                {msgError && <p style={{color:'yellow'}}>{msgError}</p> }
                <textarea name="setmsg" id="Message" placeholder='Message' cols="30" rows="5" value={msg} onChange={(e)=>setmsg(e.target.value)}>
                </textarea>

                <div className='mybutton'>
                    <button type="submit" onClick={onContact}>Send Message</button>
                </div>
            </div>   {/* contect_form start*/ }
        </div>   {/* heding_detials start*/ }
    </div> {/* mandiv end */}



 {/* <div>
        <form action="">
            <div className='mandiv'>
                <p><h1 className='us'><u>Contact Us</u></h1></p>
                <div className='inputs'>
                    <input type="text" name="" id="name"  placeholder='Name'/>
                </div>

                <div className='inputs'>
                    <input type="text" name="" id="lname"placeholder='Last Name' />
                </div>

                <div className='inputs'>
                    <input type="email" name="" id="email" placeholder='Email'/>
                </div>

                <div className='inputs'>
                    <input type="password" name="" id="password" placeholder='Password'/>
                </div>

                <div className='inputs'>
                    <input type="text" name="" id="address" placeholder='Address'/>
                </div>

                <div className='inputs'>
                    <input type="button" className='btnn' value="Submit" />
                    <input type="button" className='btnn2' value="Next" />
                </div>
                <div className='inputs'>
                </div>
            </div>
        </form>
    </div> */}

    </>
  )
}

export default Contactus