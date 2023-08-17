import React from "react";
import {Link, NavLink} from "react-router-dom";
import './style.css';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="items"><NavLink to={"/"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></div>
            <div className="items"><NavLink to={"/stuff"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Stuff</NavLink></div>
            <div className="items"><NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink></div>
        </div>
    );
}

export default Navbar;