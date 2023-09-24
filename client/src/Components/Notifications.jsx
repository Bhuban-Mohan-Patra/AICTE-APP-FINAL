import React from 'react'
import {Sidebar} from './Sidebar';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="main">
        <Sidebar/>
       { feedbackArr.length===0? <div>No Notifications</div>:
        
            feedbackArr.map((feedback,index)=>
            {
                return(
                    <div>
                        <h3>{feedback.c_name}</h3>
                        <h4>{feedback.c_degree}</h4>
                        <h5>{feedback.c_dept}</h5>
                        <h5>{feedback.c_sem}</h5>
                        <h4>{feedback.feedback}</h4>

                    </div>
                )
            })
        }
    
    </div>
    
  )
}
