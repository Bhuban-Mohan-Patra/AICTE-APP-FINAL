import React from 'react'
import '../profile.css';
import Person2Icon from '@mui/icons-material/Person2';
import TableViewIcon from '@mui/icons-material/TableView';
import TodayIcon from '@mui/icons-material/Today';
import WcIcon from '@mui/icons-material/Wc';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Sidebar} from '../Components/Sidebar'
export const DesProfile = () => {
    return (
        <div>
            <div className="main">
            <Sidebar/>
            <div className="content">
                <div className="profileDet">
                    <h3>Profile Details</h3>
                    <div className="details">
                            <li> <Person2Icon/> <strong> Name:</strong><span>Saket Nanda</span> </li>
                            <li><TableViewIcon/> <strong>Department: </strong><span> Mechanical Engg.</span></li>
                            <li><TodayIcon/><strong>DOB:</strong> <span>1/12/2002</span></li>
                            <li><WcIcon/> <strong>Gender:</strong> <span>Male</span></li>
                            <li><ContactPhoneIcon/> <strong>Phone:</strong> <span>124152332</span></li>
                            <li><EmailIcon/><strong>Email: </strong><span>saket@gmail.com</span>  </li>
                            <li><AssignmentIcon /> <strong> Role:</strong><span> Curriculum Designer</span></li>
                    </div>
                </div>
            </div>
            </div>
          
        </div>
    )
}
