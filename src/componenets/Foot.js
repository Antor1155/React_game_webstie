import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <h4> News feed footer</h4>
            <p>This is an one day Project to remind the concepts of React, router, dom and hooks.</p>

            <p>All right reserverd 	&#169; by a programmer</p>
            <h3> Md. Antor</h3>

            <div className='links'>
                <Link to="https://www.facebook.com/md.antor.16/" target="_blank"><img src={require("../asset/icons/fb.png")} alt='img of facebook icon'/></Link>
                <Link to="https://github.com/Antor1155" target="_blank"><img src={require("../asset/icons/github.png")} alt='img of github'/></Link>
                <Link to="mailto:md.antor1155@gmail.com" target="_blank"><img src={require("../asset/icons/gmail.png")} alt='img of gmail'/></Link>
                <Link to="https://www.linkedin.com/in/md-antor/" target="_blank"><img src={require("../asset/icons/linkedin.png")} alt='img of linkedin'/></Link>
                <Link to="https://wa.me/+8801325407015" target="_blank"><img src={require("../asset/icons/whatsapp.png")} alt='img of whatsapp'/></Link>
            </div>
        </footer>
    );
};

export default Footer;