import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./head.css";
import { useNavigate } from 'react-router-dom';

function Head(){

        let [topic, setTopic] = useState("")
        let navigate = useNavigate()

        function handleChange(e){
            setTopic(e.target.value)
        }
        function handleSearch(){
            if (topic){
                navigate(`/${topic}`)
                setTopic("")
            }
        }
        return (
            <header className='headSection'>
                <div className='search'>
                    <input type='text' onChange={handleChange} value={topic} maxLength={50} placeholder='topic'></input>
                    <button onClick={handleSearch}> Search</button>
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

export default Head;
