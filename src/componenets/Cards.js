import React, { useState } from 'react';
import notFound from "../asset/notFound.png";
import "./cards.css";
import { Link } from 'react-router-dom';

const Cards = ({data}) => {
    const {urlToImage, author, title, publishedAt, content, url} = data

    // const url = readMoreUrl
    const description = content
    // const publishedAt = date
    // const urlToImage = imageUrl
    const source = "www.inshots.com"
    // const {urlToImage, author, title, source, publishedAt, description, url} = [null] * 7

    let [expand, setExpand] = useState(false)

    function handleClick (){
        setExpand(!expand)
    }


    return (
        <div className={`cards ${expand ? "fullHeight" : ""}`}>
            <img src={urlToImage? urlToImage : notFound} alt="Img of the news"></img>
            <ul>
                <li><b>Author: </b>{author ? author.slice(0, 20): "N/A"}</li>
                <li><b>Source: </b>{source ? source : "N/A"}</li>
                <li><b>Date: </b>{publishedAt? publishedAt.slice(0, 10) : "N/A"}</li>
            </ul>

            <p><b>Title: </b> {title ? title.slice(0, 150) : "N/A"}</p>
            <Link className='readMore' to={url} target={url ? '_blank':""}>{url ? "Read full article": "N/A"}</Link>

            <button className='expandBtn' onClick={handleClick}>{expand ? "Collapse": "Expand" }  </button>

            <p className='description'><b>Description: </b> {description ? description : "N/A"}</p>

        </div>
    );
};

export default Cards;