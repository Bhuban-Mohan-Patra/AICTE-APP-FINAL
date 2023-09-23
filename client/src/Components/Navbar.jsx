import React from 'react';
import './navbar.css';
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const Navigate=useNavigate();
  // const [loginAs,setLoginAs]=useState("");

  const goToLogin=(e)=>
  {
    console.log(e.target.value)
    // setLoginAs(e.target.value);
    if(e.target.value==='educator')
    {
      Navigate('/educator/login');
    }
    else if(e.target.value==='designer')
    {
      Navigate('/designer/login');
    }
  }


  const goToSignup=(e)=>
  {
    if(e.target.value==='educator')
    {
      Navigate('/educator/register');
    }
    else if(e.target.value==='designer')
    {
      Navigate('/designer/register');
    }
  }

  return (
    <nav>
        <div className='nav-container'>
            <div className='logoname'>
                <img className='mainlogo' src='https://i.postimg.cc/5N8ZRXDQ/logoaicte.png'/>AICTE Curriculum Portal<br/>Smart India Hackathon 2023
            </div>
        <ul typeof='none'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact us</NavLink></li>
            <li> <select name="login" id="login" className='loginbtn' onChange={goToLogin}  defaultValue="Login As" >
              <option value="Login as" hidden>Login As</option>
              <option value="educator"> Educator </option>
              <option value="designer">Designer</option>
              </select> </li>
            {/* <li><button className='loginbtn'><NavLink to='/login'>Log in</NavLink></button></li> */}
            {/* <li><button className='signupbtn'><NavLink to='/signup'>Register</NavLink></button></li> */}
            <li>
              <select name="signup" id="signup" className='signupbtn' defaultValue="Resgiter As" onChange={goToSignup}  >
                <option value="RegisterAs" hidden>Resgister As</option>
                <option value="educator">Educator</option>
                <option value="designer">Desginer</option>
              </select>
            </li>
        </ul>
    </div>
    </nav>
  );
};

export  {Navbar};