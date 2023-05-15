import React from 'react';
import TopNav from './TopNav';
import './home.css';
import './about';
import mainBaking from './img/mypic.png';
const Home = () => {
  return (
    <>
    <div className='home_mane'>
        {/* <TopNav></TopNav> */}
        <div className='my_info_cotainer'>
          <div className='about'>
           
            <h1 className='hh11'> 
              About Me
              </h1>
            <img src={mainBaking} className='pic_my' alt="" ></img>
              <p ><h5 className='ppp'><b><i>Hi, I'm Amit kumawat,</i></b> and I graduated from University of rajasthan in 2023 with a degree in Computer Science. My inter I previously worked at Compny X, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo cum iure voluptate recusandae accusamus fugit nulla laborum praesentium aspernatur, delectus ut sunt incidunt nisi eius iste blanditiis repellendus modi quasi possimus ducimus voluptates repudiandae quidem eaque. Reprehenderit sint maxime sapiente laudantium obcaecati similique. Dolor dolorem, nihil possimus quisquam modi suscipit.</h5>
              </p>
              <div class='buttons'>
                <button class="btn-hover color-6"><p className='Contectme'> Contect Me</p>
               
                </button>
              </div>
          </div>
          <div className='my_pic'>
          </div>
        </div>
            {/* <img src={image} className='bg_img' alt="no img"/> */}
    </div>
    </>
  )
}
export default Home

