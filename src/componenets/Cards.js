import React from 'react';
import notFound from "../asset/notFound.png";
import "./cards.css"

const Cards = ({data}) => {
    const {urlToImage, author, title, source, publishedAt} = data
    return (
        <div className='cards'>
            <img src={urlToImage? urlToImage : notFound} alt="Img of the rews"></img>
            <p>{author ? author: "N/A"}</p>
            <p>{title ? title : "N/A"}</p>
            <p>{source.name ? source.name : "N/A"}</p>
            <p>{publishedAt? publishedAt : "N/A"}</p>
        </div>
    );
};

export default Cards;