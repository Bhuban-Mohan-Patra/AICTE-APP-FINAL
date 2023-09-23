import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const EduLogin = () => {
    const [loginDetails, setloginDetails] = useState({
      email: "",
      password: "",
    });
  
    const Navigate=useNavigate()
  
    const changeInputs = (e) => {
      setloginDetails((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
  
      // console.log(userDetails);
    };
  
    const Submit = async (e) => {
      e.preventDefault();
      console.log(loginDetails);
      try {
        const res = await fetch('/login/Edu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginDetails)
        })
  
        const response=await res.json();
  
        if (!res || res.status===400) {
          alert(response.error);
          // console.log(res.error);
        }
        else
        {
          // console.log(res.success);
          // console.log(response.authToken);
          localStorage.setItem('User',response.authToken );
          localStorage.setItem('UserType',response.type);
          const token=localStorage.getItem('User');
          console.log(localStorage.getItem('User'));
          console.log(localStorage.getItem('UserType'));
  
          alert(response.success)
          Navigate(`/educator/dashboard`);
  
        }
  
      }
      catch(err)
      {
        console.log(err);
      }
    }

    return(
        <div className="container">
            <div className="title">Registration</div>
            <form onSubmit={Submit}>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter Your Email" name='email' required onChange={changeInputs}/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="password" placeholder="Enter Your Password" name='password' required onChange={changeInputs}/>
                    </div>
                </div>
                <div className="button">
                    <input type="Submit" defaultValue="Register" />
                </div>
            </form>
        </div>
    )


}