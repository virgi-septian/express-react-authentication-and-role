import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom';
import {IoPerson, IoPricetag, IoHome, IoLogOut} from'react-icons/io5'
import {useDispatch, useSelector} from 'react-redux'
import {logOut, reset} from'../features/authSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const logout = () => {
      dispatch(logOut());
      dispatch(reset());
      navigate("/");
    }
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
          <li><button onClick={logout} className='button is-white'><IoLogOut/> Logout</button></li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar