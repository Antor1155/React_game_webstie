import React from 'react';
import notFound from "../asset/notFound.png";
import "./cards.css"

const Cards = ({data}) => {
    const {urlToImage, author, title, source, publishedAt} = data
    return (
        <div className='cards'>
            <img src={urlToImage? urlToImage : notFound} alt="Img of the rews"></img>
            <ul>
                <li><b>Author: </b>{author ? author: "N/A"}</li>
                <li><b>Source: </b>{source.name ? source.name : "N/A"}</li>
                <li><b>Date: </b>{publishedAt? publishedAt : "N/A"}</li>
            </ul>

            <p><b>Title: </b> {title ? title : "N/A"}</p>
            <p></p>
        </div>
    );
};

export default Cards;