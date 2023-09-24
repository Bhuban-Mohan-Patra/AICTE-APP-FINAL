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
        AllCourses.forEach((course) => {
          console.log('Course:', course.title);
          course.modules.forEach((module, index) => {
            console.log(`Module ${index + 1}: Duration - ${module.duration}`);
            module.topics.forEach((topic, topicIndex) => {
              console.log(`  Topic ${topicIndex + 1}: ${topic.title}`);
              topic.resources.forEach((resource) => {
                console.log(`    Resource Type: ${resource.type}`);
                console.log(`    URL: ${resource.url}`);
                console.log(`    Author: ${resource.author}`);
                console.log(`    Date: ${resource.date}`);
              });
            });
          });
        });
        console.log('Course Data:', AllCourses);
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
    <table border="solid" >
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Subject</th>
          <th>Topic</th>
          <th>Articles</th>
          <th>Videos</th>
          <th>Books</th>
          <th>Assignment</th>
          <th>Quiz</th>
        </tr>
      </thead>
      <tbody>
            {CourseArr.map((course) => (
              <tr key={course.id}>
                <td>{course.degree}</td>
                <td>{course.title}</td>
                <td>{ course.subject}</td>
                <td>
                  {/* Assuming you want to display the first topic's title */}
                  {course.modules[0]?.topics[0]?.title || ''}
                </td>
                <td>
                  {/* Display the number of articles (assuming "resources" contains articles) */}
                  {course.modules[0]?.topics[0]?.resources
                    .filter((resource) => resource.type === 'Article')
                    .map((article) => article.title)
                    .join(', ')}
                </td>
                <td>
                  {/* Display the names of videos */}
                  {course.modules[0]?.topics[0]?.resources
                    .filter((resource) => resource.type === 'Video')
                    .map((video) => video.title)
                    .join(', ')}
                </td>
                <td>
                  {/* Display the names of books */}
                  {course.modules[0]?.topics[0]?.resources
                    .filter((resource) => resource.type === 'Book')
                    .map((book) => book.title)
                    .join(', ')}
                </td>
                <td>
                  {/* Display the names of assignments */}
                  {course.modules[0]?.topics[0]?.resources
                    .filter((resource) => resource.type === 'Assignment')
                    .map((assignment) => assignment.title)
                    .join(', ')}
                </td>
                <td>
                  {/* Display the names of quizzes */}
                  {course.modules[0]?.topics[0]?.resources
                    .filter((resource) => resource.type === 'Quiz')
                    .map((quiz) => quiz.title)
                    .join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
    </table>
  </div>
  </>
);

  
}
