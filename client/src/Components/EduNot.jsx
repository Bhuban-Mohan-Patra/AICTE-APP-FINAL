import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './EduNot.css';
export const EduNot = () => {

    const [notArr,setnotArr]=useState([]);
    const getNot=async ()=>
    {

        const notResp=await fetch('/getnotification',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const nots=await notResp.json();
        setnotArr(nots);
        console.log(nots);
    
      
    }

useEffect(()=>
{
    getNot();
},[])

  return (
    <div className='wrapper'>
    
       {
            [...notArr].reverse().map((not,index)=>
            {
                return(
                    <div className='outer-container'>
                        <div className='box-container'>
                        <h3 className='h3'>New Course Added !</h3>
                        </div>
                        <div className='inner-container'>
                         <h4>Course Name: {not.c_name}</h4>
                         <h4>Department: {not.c_branch}</h4>
                         <h4>Degree: {not.c_degree}</h4>
                         <NavLink  className='nav-link' to= {`/allcourses/${not.c_id}`}><button className='link-btn'>Check it Out</button></NavLink>
                        </div>
                    </div>
                )
                
            })
       } 
    </div>
   
  )
}
