import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./head.css"

class Head extends Component {
    render() {
        return (
            <section className='head-section'>
                <div className='search'>
                    <input type='text' value="" placeholder='topic'></input>
                    <button> New</button>
                </div>
                <h1>Heading</h1>
                <aside>
                    <Link to="https://www.linkedin.com/in/md-antor/" target='_blank'>
                        <img src={require("../asset/giphy.gif")} alt="add" />
                    </Link>
                </aside>
            </section>
        );
    }
}

export default Head;
