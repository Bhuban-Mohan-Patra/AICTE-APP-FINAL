
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import {EduProfile} from './Components/EduProfile';
import { Navbar } from "./Components/Navbar";
import {CreateCurr} from './Components/CreateCurr';
import {AllCourses} from './Components/AllCourses'
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About'
import { Footer } from "./Components/Footer";
import { useEffect, useState } from "react";
import { EduRegd } from "./Components/EduRegd";
import {Notifications} from "./Components/Notifications";
import { DesRegd } from "./Components/DesRegd";
import {EduLogin} from './Components/EduLogin'
import {DesLogin} from './Components/DesLogin'
import { Resources } from "./Components/Resources";
import {Dashboard} from './Components/Dashboard'
import './pages/Home.css';
import './Components/Footer.css';
import {CoursePage} from "./Components/CoursePage";
import {EduNot} from "./Components/EduNot";
function App() {

  const [courseArr,setCourseArr]=useState([]);

  const getCourses=async()=>
  {
    const res=await fetch('/allcourses',{
      method: 'GET',
      headers:{
          'Content-Type': 'application/json',
      }
    })

    const AllCourses=await res.json();
    setCourseArr(AllCourses);
  }

  useEffect(()=>
  {
    getCourses();
  },[courseArr])




  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/about' element={<About/>}  />
        <Route exact path='/contact' element={<Contact/>}  />
        <Route exact path='/resources' element={<Resources/>}  />
        <Route exact path='/educator/register' element={<EduRegd/>} />
        <Route exact path='/designer/register' element={<DesRegd/>} />
        <Route exact path='/educator/login' element={<EduLogin/>} />
        <Route exact path='/designer/login' element={<DesLogin/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
        
        <Route exact path='/notifications' element={<Notifications/>} />
        <Route exact path='/educator/notifications' element={<EduNot/>} />
        {/* {
          localStorage.getItem('type')==='educator'?  <Route exact path='/profile' element={<EduProfile/>} ></Route> :  <Route exact path='/profile' element={<DesProfile/>} ></Route>
        } */}

       <Route exact path='/create' element={<CreateCurr/>} />
       <Route  exact path='/allcourses' element={<AllCourses/>} />
       {
        courseArr.map((course,index)=>
        {
          return(
            <Route key={index} exact path={`/allcourses/${course._id}`} element={<CoursePage id={course._id}/>}  />
          )
        })
       }
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
