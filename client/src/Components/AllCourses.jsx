import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
export const AllCourses = () => {

  const [CourseArr,setCourseArr]=useState([]);

const getAllCourses=async ()=>
{
    const res=await fetch('/allcourses',{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })

    const AllCourses=await res.json();
    // console.log(AllCourses);

    setCourseArr(AllCourses);

}

useEffect(()=>
{
    getAllCourses();
},[])



  return (
    <div className='container'>
    {
       CourseArr.map((course,index)=>
       {
          return(
            <div className=' border border-dark  mt-3 p-4 rounded-3 w-50' key={index} >
              <h3>{course.subject}</h3>
              <h5>Department: {course.title}</h5>
              <h6>Credit: {course.credit}</h6>
              <NavLink to={course._id} >  <button className='btn bg-danger text-white' >View</button></NavLink>

            </div>
          )
       })
    } 
    </div>
  )
}
