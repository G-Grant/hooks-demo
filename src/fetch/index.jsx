import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fetch(){

    const [news, setNews] = useState({hits: []});

    // useEffect(async ()=>{
    //     const result = await axios.get('http://hn.algolia.com/api/v1/search?query=redux');
    //     setNews(result.data);
    // })

    useEffect(()=>{
        async function fetchData(){
            // const result = await axios.get('http://hn.algolia.com/api/v1/search?query=redux');
            setNews(result.data);
        }
        fetchData();
    })

    return (
        <div>
        {
            news.hits.map((item)=>{
                return <div key={item.nbHits}>{item.title}</div>
            })
        }
        </div>
    )
}