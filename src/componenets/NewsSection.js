import React, { useState } from 'react';
import {useParams } from 'react-router-dom';
import "./newsSection.css"
function NewsSection() {
        let [ news, setNews] = useState(null)
        let k = useParams()
        console.log(k)

        return (
            <div>
                {news ? "hello" : "no news"}
            </div>
        );

}

export default NewsSection;