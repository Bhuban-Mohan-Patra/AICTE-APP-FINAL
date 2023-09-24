import React from 'react'
import { useState,useEffect } from 'react';
import DashBtn from './DashBtn'
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
    <table border="solid">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Article</th>
          <th>Video</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        {CourseArr.map((course, index) => {
          return (
            <tr key={course.id}>
              <td>{course.degree}</td>
              <td>{course.title}</td>
              <td>{course.subject}</td>
              {course.modules.map((module, index) => {
                return module.topics.map((topic, index) => {
                  return (
                    <>
                      <td key={topic.id}>{topic.title}</td>
                      {topic.resources.map((resource, index) => {
                        if (resource.type === 'Article') {
                          return (
                            <td key={resource.id}>{resource.url}</td>
                          );
                        }
                        // Add handling for other resource types here
                        return null;
                      })}
                    </>
                  );
                });
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

  </>
);

  
}
