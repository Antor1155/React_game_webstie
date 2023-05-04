import React, { useState } from 'react';
import notFound from "../asset/notFound.png";
import "./cards.css";
import { Link } from 'react-router-dom';

const Cards = ({data}) => {

    
    const {urlToImage, author, title, source, publishedAt, description, url} = data

    let [expand, setExpand] = useState(false)

    function handleClick (){
        setExpand(!expand)
    }


    return (
        <div className={`cards ${expand ? "fullHeight" : ""}`}>
            <img src={urlToImage? urlToImage : notFound} alt="Img of the rews"></img>
            <ul>
                <li><b>Author: </b>{author ? author: "N/A"}</li>
                <li><b>Source: </b>{source.name ? source.name : "N/A"}</li>
                <li><b>Date: </b>{publishedAt? publishedAt : "N/A"}</li>
            </ul>

            <p><b>Title: </b> {title ? title : "N/A"}</p>
            <Link className='readMore' to={url} target='_blank'>{url ? "Read full article": "N/A"}</Link>

            <button className='expandBtn' onClick={handleClick}>{expand ? "Collapse": "Expand" }  </button>

            <p className='description'><b>Description: </b> {description ? description : "N/A"}</p>

        </div>
    );
};

export default Cards;