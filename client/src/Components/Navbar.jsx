import React, { useEffect, useRef } from 'react';
import './navbar.css';
import {NavLink, useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  const Navigate=useNavigate();
  // const [loginAs,setLoginAs]=useState("");
  const logRef=useRef();
  const regRef=useRef();
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

  const Logout=()=>
  {
    localStorage.removeItem('User');
    localStorage.removeItem('UserType');
    Navigate('/');
    alert('logged Out Successfully');
  }

  // useEffect(()=>
  // {
  //   regRef.current.value="Register as";
  //   logRef.current.value="Login as";
  // },[location.pathname])

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

          {
            localStorage.getItem('User')?
            <li>
              <button className='loginbtn' onClick={Logout} id='logout' >Logout</button>
            </li>:
            <><li> <select name="login" id="login" className='loginbtn' onChange={goToLogin} ref={logRef} defaultValue="Login As" >
            <option value="Login as" hidden>Login As</option>
            <option value="educator"> Educator </option>
            <option value="designer">Designer</option>
            </select> </li>
          
          <li>
            <select name="signup" id="signup" className='signupbtn' defaultValue="Register As" ref={regRef} onChange={goToSignup}  >
              <option value="Register as" hidden>Register As</option>
              <option value="educator">Educator</option>
              <option value="designer">Desginer</option>
            </select>
          </li>
          </>
          }
          

            
        </ul>
    </div>
    </nav>
  );
};

export  {Navbar};