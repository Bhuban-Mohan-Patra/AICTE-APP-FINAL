import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='foot'>
        <p><a href='/contact'>Contact Us</a> | <a href='/about'>About Us</a> <br/>
        Nelson Mandela Marg, Vasant Kunj<br/>
        New Delhi-110070</p>
        <ul className='icons'>
            <li><a href='https://www.facebook.com/OfficialAICTE/' target='blank'><img className="fb" src="https://i.postimg.cc/9X6YVTW1/facebook.png"></img></a></li>
            <li><a href='https://twitter.com/AICTE_INDIA' target='blank'><img className="fb" src="https://i.postimg.cc/90dRcDpN/twitter.png"></img></a></li>
            <li><a href='https://www.aicte-india.org/' target='blank'><img className="fb" src="https://i.postimg.cc/mgRkyZwT/internet.png"></img></a></li>
        </ul>
    </div>
  )
}

export {Footer}
