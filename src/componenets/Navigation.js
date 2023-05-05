import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Navigation() {
    let {lightTheme} = useContext(ThemeContext)
        return (
            <nav className={!lightTheme ? "darkTheme" : ""}>
                <ul>
                    <li><Link to="/top-headlines">Top headlines</Link></li>
                    <li><Link to="/general">General</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/politics">Politics</Link></li>
                    <li><Link to="/entertainment">Entertainments</Link></li>
                </ul>
            </nav>
        );

}

export default Navigation;