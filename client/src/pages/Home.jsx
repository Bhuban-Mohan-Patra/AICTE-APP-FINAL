import React from 'react';
import './Home.css';
// import {Navbar} from '../Components/Navbar';
// import {Footer} from '../Components/Footer';

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <div className='contenthome1'>
        <img src='https://i.postimg.cc/28C2mYG3/college-project-rafiki.png' height="500px" weight="400px"></img>
        <div className='contenthome'><h1>AICTE Curriculum Portal</h1>
          <p>This portal is collective platform for educators, curriculum designers and administrators as well</p>
        </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export {Home};