import React, { useEffect, useState } from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import { NavLink } from 'react-router-dom';
import './AllCourses.css'
import DashBtn from './DashBtn';
export const AllCourses = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [CourseArr, setCourseArr] = useState([]);
  const [deptArr, setdeptArr] = useState([]);
  const [dept, setDept] = useState("All");


  const getAllCourses = async () => {
    try
    {
      const res = await fetch('/allcourses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
  
      const AllCourses = await res.json();
      // console.log(AllCourses);
  
      setCourseArr(AllCourses);
      setIsLoading(false);
    }catch(err){console.log(err);}


  }

  const [search,setSearch]=useState('');

  const getTopicArr = () => {
    const Arr = CourseArr.map((course) => course.title);
    const deptSet = new Set(Arr);

    // Convert the Set back to an array (if needed)
    const distinctDepts = Array.from(deptSet);
    setdeptArr(distinctDepts);
    console.log(deptArr);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  useEffect(() => {
    // Call getTopicArr after CourseArr is updated
    getTopicArr();
  }, [CourseArr]);


  if (isLoading) {
    return <div>Loading...</div>;
}

  return (
    <>

    
    {/* <div className='container0'>
    {
       CourseArr.map((course,index)=>
       {
          return(
            <div className=' border border-dark  mt-3 p-4 rounded-3 w-50' key={index} >
              <h3>{course.subject}</h3>
              <h5>Department: {course.title}</h5>
              <h5>Credit: {course.credit}</h5>
              <NavLink to={course._id} >  <button className='btn bg-danger text-white' >View</button></NavLink>

            </div>
          )
       })
    } 
    </div> */}
    <DashBtn/>
   
    
    <h2 className='title' >All Courses</h2>
      <div className="filter">
        <select name="dept" id="dept" onChange={(e) => setDept(e.target.value)} >
          <option value="All">All</option>
          {

            deptArr.map((dept) => {
              return (
                <option value={dept}>{dept}</option>
              )
            })
          }
        </select>

        <input type="text" name="search" className='search' id="" placeholder="Search courses" onChange={(e)=>setSearch(e.target.value)} />
      </div>

      <div className='container0'>

        {
          dept === 'All' ?
          [...CourseArr].reverse().filter((course)=>
          {
            return(course.subject.toLowerCase().includes(search.toLowerCase()))
          })
            .map((course, index) => {
              return (
                <div className=' border border-dark  mt-3 p-4 rounded-3 w-50' key={index} >
                  <h3>{course.subject}</h3>
                  <h5>Department: {course.title}</h5>
                  <h5>Credit: {course.credit}</h5>
                  <NavLink to={course._id} >  <button className='btn bg-danger text-white' >View</button></NavLink>

                </div>
              )
            }) :
            [...CourseArr].reverse().filter((course) => {
              return (course.title === dept && course.subject.toLowerCase().includes(search.toLowerCase()))
            }).map((course, index) => {
              return (
                <div className=' border border-dark  mt-3 p-4 rounded-3 w-50' key={index} >
                  <h3>{course.subject}</h3>
                  <h5>Department: {course.title}</h5>
                  <h5>Credit: {course.credit}</h5>
                  <NavLink to={course._id} >  <button className='btn bg-danger text-white' >View</button></NavLink>

                </div>
              )
            })
        }
      </div>
    </>
  )

}
