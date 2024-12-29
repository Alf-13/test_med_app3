import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import ProfileCard from '../ProfileCard/ProfileCard';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setUsername('');
        window.location.reload();
    };

    const handleDropdown = (event) => {
        event.stopPropagation();
        setShowDropdown(!showDropdown);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.substring(0, storedEmail.indexOf('@')));
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleProfileClick = (event) => {
        event.preventDefault();
        setShowDropdown(false);
        navigate("/profile");
    };

    const handleReportsClick = (event) => {
        event.preventDefault();
        setShowDropdown(false);
        navigate("/reports");
    };

    return (
        <nav>
            <div className="nav__logo">
                <Link to="/">StayHealthy <i style={{color:'#2190FF'}} className="fa fa-user-md"></i></Link>
                <span>.</span>
            </div>
            <div className="nav__icon" onClick={handleClick}>
                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={click ? 'nav__links active' : 'nav__links'}>
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/appointment-form">Appointments</Link>
                </li>
                <li className="link">
                    <Link to="/healthblog">Health Blog</Link>
                </li>
                <li className="link">
                    <Link to="/reviews">Reviews</Link>
                </li>
                <li className="link">
                    <Link to="/instant-consultation">Instant Consultation</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li className="link welcome-user" onClick={handleDropdown} ref={dropdownRef}>
                            Welcome, {username}
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <ProfileCard />
                                    <Link to="/profile" className="dropdown-link" onClick={handleProfileClick}>Edit Profile</Link>
                                    <Link to="/reports" className="dropdown-link" onClick={handleReportsClick}>Reports</Link>
                                </div>
                            )}
                        </li>
                        <li className="link">
                            <button className="btn2" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <Link to="/signup">
                                <button className="btn1">Sign Up</button>
                            </Link>
                        </li>
                        <li className="link">
                            <Link to="/login">
                                <button className="btn1">Login</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
