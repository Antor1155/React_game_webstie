import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import "./head.css";
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import {ThemeContext} from "./ThemeProvider";

function Head(){
        let theme  = useContext(ThemeContext);

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
        function handleTheme(){
            console.log("dark is: ", theme)
        }
        return (
            <header className='headSection'>
                <div className='search'>
                    <input type='text' onChange={handleChange} value={topic} maxLength={50} placeholder='topic'></input>
                    <button onClick={handleSearch}> Search</button>
                </div>
                <h1><button className='themeChanger' onClick={handleTheme}><img src={require("../asset/icons/sun.png")} alt="sun"></img></button> News Feed <button className='themeChanger' onClick={handleTheme}><img src={require("../asset/icons/moon.png")} alt="moon icon"></img></button></h1>
                <aside>
                    <Link to="https://www.linkedin.com/in/md-antor/" target='_blank'>
                        <img src={require("../asset/giphy.gif")} alt="add" />
                    </Link>
                </aside>
            </header>
        );
    }

export default Head;
