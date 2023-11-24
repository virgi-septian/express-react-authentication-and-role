import React from 'react'
import {NavLink} from 'react-router-dom';
import {IoPerson, IoPricetag, IoHome, IoLogOut} from'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='mt-4'>
      <aside className="pl-4 menu has-shadow">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
          <li><NavLink to={'/products'}><IoPricetag/> Product</NavLink></li>
        </ul>
        <p className="menu-label">
          Admin
        </p>
        <ul className="menu-list">
          <li><NavLink to={"/users"}><IoPerson/> Users</NavLink></li>
        </ul>
        <p className="menu-label">
          Setting
        </p>
        <ul className="menu-list">
          <li><button className='button is-white'><IoLogOut/> Logout</button></li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar