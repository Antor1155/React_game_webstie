import React from 'react';
import { Link } from 'react-router-dom';
import "./navigation.css";
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function Navigation() {
    let {lightTheme} = useContext(ThemeContext)
        return (
            <nav className={!lightTheme ? "darkTheme" : ""}>
                <ul>
                    <li><Link to="/world">World</Link></li>
                    <li><Link to="/business">Business</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/science">Science</Link></li>
                    <li><Link to="/politics">Politics</Link></li>
                    <li><Link to="/entertainment">Entertainments</Link></li>
                </ul>
            </nav>
        );

}

export default Navigation;