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
                            <li> <Person2Icon/> Name: <strong>Saket Nanda</strong> </li>
                            <li><TableViewIcon/> <strong>Department: </strong> Mechanical Engg.</li>
                            <li><TodayIcon/><strong>DOB:</strong> 1/12/2002</li>
                            <li><WcIcon/> <strong>Gender:</strong> Male</li>
                            <li><ContactPhoneIcon/> <strong>Phone:</strong> 124152332</li>
                            <li><EmailIcon/><strong>Email: </strong> saket@gmail.com </li>
                            <li><AssignmentIcon /> <strong> Role:</strong> Curriculum Designer</li>
                    </div>
                </div>
            </div>
            </div>
          
        </div>
    )
}
