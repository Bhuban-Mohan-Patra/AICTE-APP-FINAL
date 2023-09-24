import React from 'react'
import { NavLink } from 'react-router-dom'

function DashBtn() {
  return (
    <div className='dash'>
        <button className='dashbtn'><NavLink to='/dashboard'>Go to Dashboard</NavLink></button>
    </div>
  )
}

export default DashBtn