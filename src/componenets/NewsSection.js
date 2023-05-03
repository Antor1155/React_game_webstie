import React, { Component } from 'react';
import {useParams } from 'react-router-dom';
function NewsSection() {
        let k = useParams()
        console.log(k.id)
        return (
            <div>
                <h2> hellow world</h2>
            </div>
        );

}

export default NewsSection;