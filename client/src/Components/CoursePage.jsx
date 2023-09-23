import React, { useState,useEffect } from 'react'

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
        console.log(Course);
        setCourse(Course);
    }

    useEffect(()=>
    {
        getCourse();
    },[])

  return (
    <div className='main'>
        <h2>{course.subject}</h2>
        <h3>Department of <strong> {course.title} </strong></h3>
        <h3>Semester: {course.semester} </h3>
        <h4> Credits: {course.credit} </h4>
        <h4>Elective type: {course.elective}</h4>
        {
            course.modules?.map((module,index)=>
            {
                return(
                    <div key={index} >
                        <h3>{`MODULE ${index+1} `}</h3> <br />
                        <h6>No. of Classes: {module.duration}</h6>
                        {
                            module.topics?.map((topic,index)=>
                                {
                                    return(
                                        <div key={index}>
                                             <h5 key={index} >{topic.title}</h5>
                                             {
                                                topic.resources?.map((resource,index)=>
                                                {
                                                    return(
                                                        <div key={index} >
                                                            <h6>{resource.type}</h6>
                                                            <a href={resource.url} target='_blank'><h6>{resource.url}</h6></a>
                                                            <h6>{resource.author}</h6>
                                                        </div>
                                                    )
                                                })
                                             }
                                        </div>
                                       
                                    )
                                   
                                }) 
                        }
                    
                        
                    </div>
                )
            })
        }
    </div>
  )
}
