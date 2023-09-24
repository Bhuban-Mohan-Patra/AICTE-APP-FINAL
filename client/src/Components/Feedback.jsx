import React, { useState } from 'react'

export const Feedback = (props) => {

    const [feedbackdet,setFeedbackdet]=useState({
        c_name: "",
        c_degree:"",
        c_dept: "",
        c_sem: "",
        feedback:"",
    });
    const [feedback,setFeedback]=useState("");


    const handleChange=(e)=>
    {
                
            setFeedback(e.target.value)       

        }

    const handleSubmit=async (e)=>
    {   e.preventDefault();
        console.log(props.course)
        const feedbackobj={
            c_name: props.course.subject,
            c_degree: props.course.degree,
            c_dept: props.course.title,
            c_creator: props.course.creator,
            c_sem: props.course.semester,
            feedback: feedback
        }
        console.log(feedbackobj);
        const res = await fetch('/feedback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackobj)
          })
    
          const response=await res.json();
    
          if (!res || res.status===400) {
            alert(response.error);
            // console.log(res.error);
          }
          else
          {
            console.log("error in giving feedback");
          }
    }

  return (
    <div>
        <form method='POST' onSubmit={handleSubmit}>
            <input type="text" name="c_name" value={props.course.subject} disabled placeholder='Enter course name' onChange={handleChange}/>
            <input type="text" name="c_degree" value={props.course.degree} disabled placeholder='Enter the degree to which the course belongs' onChange={handleChange}/>
            <input type="text"name="c_dept" value={props.course.title}  disabled placeholder='Enter Department name' onChange={handleChange}/>
            <input type="text"name="c_sem" value={props.course.semester} disabled  placeholder='Enter Semester' onChange={handleChange}/>
            <textarea name="feedback" id="" cols="30" rows="10" placeholder='Please write your feedback' onChange={handleChange}></textarea>
            <input type="submit" value="Submit feedback" />
        </form>
    </div>
  )
}