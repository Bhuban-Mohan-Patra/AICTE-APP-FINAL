import React from 'react'
import {NavLink} from 'react-router-dom';
import img from '../images/userimg.jpg';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import '../profile.css';
export const Sidebar = (props) => {
  return (


    <aside className='sidebar'>
                <div className="top">
                    <img src={img} className='prof_img' />
                    <h2 className='name' > {props.UserName}</h2>    
                </div>

                <div className="bottom">
                    <NavLink to='/dashboard' className="links" > <FormatListBulletedOutlinedIcon/> Dashboard </NavLink>
                    {
                      localStorage.getItem('UserType')==='designer'?<NavLink to='/create' className="links" > <FormatListBulletedOutlinedIcon/> Create new Curriculum</NavLink>:""
                    }
                    <NavLink to='/allcourses' className="links" > <FormatListBulletedOutlinedIcon/> All Courses</NavLink>
                    <NavLink to='/resources' className="links" > <FormatListBulletedOutlinedIcon/> Resources </NavLink>
                    <NavLink to='/notifications' className="links" > <FormatListBulletedOutlinedIcon/> Notifications  </NavLink>
                </div>

            </aside>
  )
}
