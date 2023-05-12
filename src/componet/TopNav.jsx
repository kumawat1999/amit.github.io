import React from 'react'
import './TopNav.css';
import aklogo from './img/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import Projects from './Projects';
import Experiences from './Experiences';
const TopNav = () => {
  return (
    <>
    <div className='contaaner'>
        <img src={aklogo} alt="" className='logo' /><h2 className='hey'> Hey ! Amit As</h2>
        <div className='nav'>
                <Link to="/Home" className='home'><b>Home</b></Link>
                <Link to="/about" className='home'><b>About</b></Link>
                <Link to="/Contactus" className='home'><b>Contactus</b></Link>
                <Link to="/Experiences" className='home'><b>Experience</b></Link>
                <Link to="/Projects" className='home'><b>Projects</b></Link>
        </div>
        </div>
      </>
  )
}

export default TopNav
