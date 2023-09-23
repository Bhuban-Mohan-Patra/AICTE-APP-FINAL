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
          <p>Being a collective platform for educators, curriculum designers and administrators,
          the portal represents a pivotal step towards ensuring a consistent and high-quality technical education experience for students across India. </p>
          <p>This unified portal will serve as a central platform for curriculum development, collaboration among educational experts, and the continuous improvement of technical education standards.</p>
          <p>The portal's online nature ensures accessibility to educational experts, curriculum designers, and institutions regardless of their geographical location. </p>
          <p>With a strong emphasis on data security and scalability, the portal has the potential to shape the future of technical education in India, making it more responsive, relevant, and inclusive</p>
        </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export {Home};