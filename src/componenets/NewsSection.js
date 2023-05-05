import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./newsSection.css"
import Cards from './Cards';
import { ThemeContext } from './ThemeProvider';


function NewsSection() {
    let [news, setNews] = useState(null)
    let [serverError, setServerError] = useState(false)
    let { id } = useParams()

    let {lightTheme} = useContext(ThemeContext)

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
                if (data.status ==="error"){
                    setServerError(true)
                }
                else{
                    setNews(data.articles)
                    console.log(data)
                    setServerError(false)
                }
            })
            .catch(error =>{
                setServerError(true)
                console.log("error" + error)
            })
    }


    useEffect(() => {
        setNews(null)
        newsCollector(id)
        console.log("news: " + news)
    }, [id])




    return (
        <main  className={!lightTheme ? "darkTheme" : ""}>
            <h2>{id}</h2>
            <p className='resultCounter'>results: {news ? news.length : 0}</p>
            <section className='cardsSection'>
                {news && ! serverError  && news.length > 0 && news.map((data, i) => <Cards key={i} data={data}></Cards>)}
                {serverError && <img className='loading' src={require("../asset/error.gif")} />}
                {!serverError && !news && <img className='loading' src={require("../asset/loading.gif")} alt="loading gif"></img>}

                {news && news.length == 0 && <img className='loading' src={require("../asset/noResFound.png")} />}
            </section>
        </main>
    );

}

export default NewsSection;