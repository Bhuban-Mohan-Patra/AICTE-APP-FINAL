import React, { createContext, useEffect,useState } from 'react'
import '../profile.css';
import Person2Icon from '@mui/icons-material/Person2';
import TableViewIcon from '@mui/icons-material/TableView';
import TodayIcon from '@mui/icons-material/Today';
import WcIcon from '@mui/icons-material/Wc';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Sidebar} from './Sidebar'
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {

    const [User,setUser]=useState({});
    const [userType,setUserType]=useState("");
    const [feedbackArr,setFeedbackArr]=useState([]);
    const Navigate=useNavigate();
    const getUser=async ()=>
    {
        const token=localStorage.getItem('User')
        const UserType=localStorage.getItem('UserType');
        setUserType(UserType)
        console.log(token);
        if(token===null)
            Navigate('/');
        const res=await fetch('/getUser',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: token,
              type: UserType
            })
         
          })

          const currUser=await res.json()
          setUser(currUser);
          if(UserType==='designer')
          {
            setFeedbackArr(currUser.feedbacks);
          }
        //   console.log(currUs);
    }

    useEffect(()=>
    {
        getUser();
    },[])



    return (
        <div>
            <div className="main">
            <Sidebar UserName={User.name} feedbackarr={feedbackArr} />
            <div className="content">
                <div className="profileDet">
                    <h3>Profile Details</h3>
                    <div className="details">
                            <li> <Person2Icon/> <strong> Name:</strong><span>{User.name}</span> </li>
                            {
                                userType==='designer'?<li><TableViewIcon/> <strong>Department: </strong><span>{User.department}</span></li>:""
                            }
                            
                            <li><TodayIcon/><strong>DOB:</strong> <span>{User.dob}</span></li>
                            <li><WcIcon/> <strong>Gender:</strong> <span>{User.gender}</span></li>
                            <li><ContactPhoneIcon/> <strong>Phone:</strong> <span>{User.mobileno}</span></li>
                            <li><EmailIcon/><strong>Email: </strong><span>{User.email}</span>  </li>
                            {
                                userType==='designer'?<li><AssignmentIcon /> <strong> Role:</strong><span> Curriculum Designer</span></li>:
                                <li><AssignmentIcon /> <strong> Role:</strong><span> Educator</span></li>
                            }
                            
                    </div>
                </div>
            </div>
            </div>
          
        </div>
    )
}
