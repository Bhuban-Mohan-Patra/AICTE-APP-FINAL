import React from 'react'
import { useState,useEffect } from 'react';
import DashBtn from './DashBtn'
import './Resources.css'
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
    
        const AllCourses=await res.json()
        
        setCourseArr(AllCourses);
        // console.log(`${AllCourses} from resources`);
    
    }
    
    useEffect(()=>
    {
        getAllCourses();
    },[])
    


  return (
    <>
    <DashBtn/>
    <div className='container2'>
    <h3>All Resources</h3>
    <div className='table-container'>
    <table border="solid">
      {/*className='table'*/}
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Semester</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Articles</th>
          <th>Videos</th>
          <th>Books</th>
          <th>Assignments</th>
          <th>Quizs</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>ug</td>
          <td>cse</td>
          <td>4th</td>
          <td>ada</td>
          <td>sorting</td>
          <td className='link'>click here</td>
          <td className='link'>click here</td>
          <td className='link'>click here</td>
          <td className='link'>click here</td>
          <td className='link'>click here</td>
        </tr> */}


      </tbody>
    </table>
    </div>
  </div>
  </>
);

  
}
