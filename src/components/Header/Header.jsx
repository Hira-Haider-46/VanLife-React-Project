import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/avatar-icon.png';
import './Header.css';

function Header() {
    const styles = {
        "font-weight": "bold",
        "text-decoration": "underline",
        "color": "#161616"
    };

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" className={({ isActive }) => isActive ? "active-link" : null}>Host</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : null}>About</NavLink>
                <NavLink to="/vans" className={({ isActive }) => isActive ? "active-link" : null}>Vans</NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={logo}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Header;