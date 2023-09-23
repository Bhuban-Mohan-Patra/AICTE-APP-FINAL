import React from 'react';
// import Navbar from '../Components/Navbar';
import './About.css'
// import Footer from '../Components/Footer';
function About() {
  return (
    <><div>
        {/* <Navbar /> */}
        <div className='aboutpg'>
          <h1>About Us</h1>
          <p>All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level apex advisory body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner. And to ensure the same, as stipulated in the National Policy of Education (1986), AICTE was vested with:</p>
          <ul>
            <li>Statutory authority for planning, formulation, and maintenance of norms & standards</li>
            <li>Quality assurance through accreditation</li>
            <li> Funding in priority areas, monitoring, and evaluation</li>
            <li>Maintaining parity of certification & awards</li>
            <li>The management of technical education in the country</li>
          </ul>
        </div>
        {/* <Footer/> */}
    </div>
    </>
  )
};

export {About};