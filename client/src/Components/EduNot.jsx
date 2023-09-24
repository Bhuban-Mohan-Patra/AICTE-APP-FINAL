import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
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
    <>
       {
            [...notArr].reverse().map((not,index)=>
            {
                return(
                    <div>
                         <h3>New Course Added !</h3>
                         <h4>Course Name:{not.c_name}</h4>
                         <h5>Department: {not.c_branch}</h5>
                         <h5>Degree:{not.c_degree}</h5>
                         <h4>Check it Out <NavLink to={`/allcourses/${not.c_id}`}>Link</NavLink> </h4>
                    </div>
                )
                
            })
       } 
    </>
  )
}
