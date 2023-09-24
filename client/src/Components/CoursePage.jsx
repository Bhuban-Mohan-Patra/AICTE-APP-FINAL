import React, { useState,useEffect } from 'react'

import './CoursePage.css'
import DashBtn from './DashBtn';

import './CoursePage.css';
import {Feedback} from './Feedback';

export const CoursePage = (props) => {
    
    const [course,setCourse]=useState({});
    const getCourse=async ()=>
    {
        const res=await fetch('/coursepage',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": props.id
            })
        })
        const Course=await res.json();
        // console.log(Course);
        setCourse(Course);
    }

    useEffect(()=>
    {
        getCourse();
    },[])

  return (
    <>
    <div className='main-container'>
        <h2>{course.subject}</h2>
        <h4>Department of <strong> {course.title} </strong></h4>
        <h4>Semester: {course.semester} </h4>
        <h4>Credits: {course.credit} </h4>
        <h4>Elective type: {course.elective}</h4>
        {
            course.modules?.map((module,index)=>
            {
                return(
                    <div className='moduledetails' key={index} >
                        <div className='mod_noCls'>
                        <h2>{`MODULE ${index+1} `}:</h2>
                        <h3>({module.duration} Classes)</h3>
                        </div>
                        {
                            module.topics?.map((topic,index)=>
                                {
                                    return(
                                        <div className='contentdetails' key={index}>
                                             <h4 key={index} >{topic.title}</h4>
                                             {/* {
                                                topic.resources?.map((resource,index)=>
                                                {
                                                    return(
                                                        <div key={index} >
                                                            <h4>{resource.type}</h4>
                                                            <a href={resource.url} target='_blank'><h4>{resource.url}</h4></a>
                                                            <h4>{resource.author}</h4>
                                                        </div>
                                                    )
                                                })
                                             } */}
                                        </div>
                                       
                                    )
                                   
                                }) 
                        }
                    
                        
                    </div>
                )
            })
        }
    </div>

    <DashBtn/>

    {
        localStorage.getItem('UserType')==='educator'?<Feedback course={course}/>:""
    }
    
    </>
  )
}
