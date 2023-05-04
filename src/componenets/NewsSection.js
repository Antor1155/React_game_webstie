import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./newsSection.css"
import Cards from './Cards';


function NewsSection() {
    let [news, setNews] = useState(null)
    let { id } = useParams()
    console.log(id)

    
    function newsCollector (searchid){
        let url = ""
        if (searchid === "top-headlines"){
            url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6ecfe613f5e94a768cef67f7eecfd949"
        }else{
            url = `https://newsapi.org/v2/everything?q=${searchid}&apiKey=6ecfe613f5e94a768cef67f7eecfd949`
        }
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                setNews(data.articles)
                console.log(data)
            })
            .catch(error =>{
                console.log("error" + error)
            })
    }


    useEffect(() => {
        setNews(null)
        newsCollector(id)
        console.log("news: " + news)
    }, [id])




    return (
        <main>
            <h2>{id}</h2>
            <section className='cardsSection'>
                {news ? news.map((data, i) => <Cards key={i} data={data}></Cards>) : "nothing found yet"}
            </section>
        </main>
    );

}

export default NewsSection;