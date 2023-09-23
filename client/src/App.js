
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import { Routes, Route } from "react-router-dom";
import {EduProfile} from './Components/EduProfile';
import {DesProfile} from './Components/DesProfile';
import { Navbar } from "./Components/Navbar";
import {CreateCurr} from './Components/CreateCurr';
import {AllCourses} from './Components/AllCourses'
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About'
import { Footer } from "./Components/Footer";
import { useEffect, useState } from "react";
import './pages/Home.css';
import './Components/Footer.css';
import {CoursePage} from "./Components/CoursePage";
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
  },[])




  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/about' element={<About/>}  />
        <Route exact path='/contact' element={<Contact/>}  />
        {
          localStorage.getItem('type')==='educator'?  <Route exact path='/profile' element={<EduProfile/>} ></Route> :  <Route exact path='/profile' element={<DesProfile/>} ></Route>
        }

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
