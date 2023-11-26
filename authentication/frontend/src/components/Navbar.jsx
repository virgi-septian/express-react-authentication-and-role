import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {logOut, reset} from'../features/authSlice';
import {NavLink, useNavigate} from'react-router-dom';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);

    const logout = () => {
      dispatch(reset());
      dispatch(logOut());
      navigate("/");
    }
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="{/dashboard}" className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/>
          </NavLink>
      
          <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;