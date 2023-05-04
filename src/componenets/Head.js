import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./head.css"

class Head extends Component {
    render() {
        return (
            <header className='headSection'>
                <div className='search'>
                    <input type='text'  maxLength={50} placeholder='topic'></input>
                    <button> Search</button>
                </div>
                <h1>Heading</h1>
                <aside>
                    <Link to="https://www.linkedin.com/in/md-antor/" target='_blank'>
                        <img src={require("../asset/giphy.gif")} alt="add" />
                    </Link>
                </aside>
            </header>
        );
    }
}

export default Head;
