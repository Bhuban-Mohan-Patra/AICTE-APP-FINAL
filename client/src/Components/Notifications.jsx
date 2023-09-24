import React from 'react'
import {Sidebar} from './Sidebar';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Not.css';
export const Notifications = () => {

    const [feedbackArr,setFeedbackArr]=useState([]);
    const Navigate=useNavigate();
    const getUser=async ()=>
    {
        const token=localStorage.getItem('User')
        const UserType=localStorage.getItem('UserType');
        // setUserType(UserType)
        // console.log(token);
        if(token===null)
            Navigate('/');
        const res=await fetch('/getUser',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: token,
              type: UserType
            })
         
          })

          const currUser=await res.json()
        //   setUser(currUser);
          if(UserType==='designer')
          {
            setFeedbackArr(currUser.feedbacks);
          }
        //   console.log(currUs);
    }

    useEffect(()=>
    {
        getUser();
    },[])



  return (
    <>
    
    <div className="main_container">
        <Sidebar/>
        <div className="cont">
       { feedbackArr.length===0? <div>No Notifications</div>:
        
            [...feedbackArr].reverse().map((feedback,index)=>
            {
                return(
                    <div className='section'>
                        <h3 className='c_name' >{feedback.c_name}</h3>
                        <h4 className='c_degree'>{feedback.c_degree}</h4>
                        <h5 className='class'>{feedback.c_dept}</h5>
                        <h5 className='class'>{feedback.c_sem}</h5>
                       Feedback: <h4 className='feedback'>{feedback.feedback}</h4>

                    </div>
                )
            })
        }
        </div>
    
    </div>
    </>
    
  )
}
