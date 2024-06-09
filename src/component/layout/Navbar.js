import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import {IconButton } from "@mui/material";
const Navbar = () => {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
        // Thay đổi class của body dựa trên theme
        document.body.className = theme === 'light' ? 'bg-light ' : 'bg-dark';
    }, [theme]);
    const handleClick = (e) => {
        e.preventDefault();
        (theme === "dark" ? setTheme("light") : setTheme('dark'));
    }
    return (
        <nav className="navbar bg-success">
            <h1>
                <i className="fab fa-github" />Github Finber
            </h1>
            <ul>
                <li>
                    <IconButton sx={{ color: "white" }} onClick={handleClick}>{theme === "dark" ? (<NightsStayOutlinedIcon />) : (<WbSunnyIcon/>)}</IconButton>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;