import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <input type='text' value ="" placeholder='topic'></input>
                <button> New</button>
                <ul>
                    <li><Link to="general">General</Link></li>
                    <li><Link to="general">Business</Link></li>
                    <li><Link to="general">Education</Link></li>
                    <li><Link to="general">Technology</Link></li>
                    <li><Link to="general">Politics</Link></li>
                    <li><Link to="general">Entertainments</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;