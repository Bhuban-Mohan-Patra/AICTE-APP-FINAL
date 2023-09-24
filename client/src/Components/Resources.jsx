import React from 'react'
import { useState,useEffect } from 'react';
export const Resources = () => {

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
        
        setCourseArr(AllCourses);
        // console.log(`${AllCourses} from resources`);
    
    }
    
    useEffect(()=>
    {
        getAllCourses();
    },[])
    


  return (
    <div className='container2'>
    <h3>All Resources</h3>
    <table border="solid" >
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Subject</th>
          <th>Articles</th>
          <th>Videos</th>
          <th>Books</th>
        </tr>
      </thead>
      <tbody>
        


      </tbody>
    </table>
  </div>
);

  
}
