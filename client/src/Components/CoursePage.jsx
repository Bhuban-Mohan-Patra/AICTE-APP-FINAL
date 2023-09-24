import React, { useState, useEffect } from 'react';
import './CoursePage.css';
import DashBtn from './DashBtn';
import { Feedback } from './Feedback';

export const CoursePage = (props) => {
    const [course, setCourse] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getCourse = async () => {
        try {
            const res = await fetch('/coursepage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: props.id,
                }),
            });
            const courseData = await res.json();
            setCourse(courseData);
            setIsLoading(false); // Data is now available, set isLoading to false
        } catch (error) {
            console.error('Error fetching course data:', error);
            setIsLoading(false); // Handle error and set isLoading to false
        }
    }
    useEffect(()=>
    {
        getCourse();
    },[])

//   return (
//     <>
//     <div className='main-container'>
//         <h2>{course.subject}</h2>
//         <h4>Department of <strong> {course.title} </strong></h4>
//         <h4>Semester: {course.semester} </h4>
//         <h4>Credits: {course.credit} </h4>
//         <h4>Elective type: {course.elective}</h4>
//         {
//             course.modules?.map((module,index)=>
//             {
//                 return(
//                     <div className='moduledetails' key={index} >
//                         <div className='mod_noCls'>
//                         <h2>{`MODULE ${index+1} `}:</h2>
//                         <h3>({module.duration} Classes)</h3>
//                         </div>
//                         {
//                             module.topics?.map((topic,index)=>
//                                 {
//                                     return(
//                                         <div className='contentdetails' key={index}>
//                                              <h4 key={index} >{topic.title}</h4>
//                                              {
//                                                 topic.resources?.map((resource,index)=>
//                                                 {
//                                                     return(
//                                                         <div key={index} >
//                                                             <h4>{resource.type}</h4>
//                                                             <a href={resource.url} target='_blank'><h4>{resource.url}</h4></a>
//                                                             <h4>{resource.author}</h4>
//                                                         </div>
//                                                     )
//                                                 })
//                                              }
//                                         </div>
                                       
//                                     )
                                   
//                                 }) 
//                         }
                    
                        
//                     </div>
//                 )
//             })

//         }
//     };

 

    return (
        <>
            
                <div className="main-container">
                    {/* Render course details */}
                    <h2>{course.subject}</h2>
                    <h4>Department of <strong>{course.title}</strong></h4>
                    <h4>Semester: {course.semester}</h4>
                    <h4>Credits: {course.credit}</h4>
                    <h4>Elective type: {course.elective}</h4>
                    <h3>Objective: {course.objective}</h3>
                    {course.modules?.map((module, index) => (
                        <div className="moduledetails" key={index}>
                            <h2>{`MODULE ${index + 1} `}</h2>
                            <h3>No. of Classes: {module.duration}</h3>
                            {/* <br /> */}
                            {module.topics?.map((topic, topicIndex) => (
                                <div className="contentdetails" key={topicIndex}>
                                    <h4>{topic.title}</h4>
                                    {
                                        topic.resources.map((resource, resourceIndex) =>
                                        {
                                            return(
                                                <div> <a href={resource.url} target='_blank'>{resource.url}</a> </div>
                                            )
                                        })
                                    }
                                    {/* Add resource rendering if needed */}
                                </div>
                            ))}
                        </div>
                    ))}
                    <DashBtn />
                    {localStorage.getItem('UserType') === 'educator' ? <Feedback course={course} /> : ''}
                </div>
           
        </>
    );
};
