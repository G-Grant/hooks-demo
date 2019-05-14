import React, { useState, useEffect } from 'react';
import axios from 'axios';

// export default class Fetch extends React.PureComponent{

//     constructor(props){
//         super(props);
//         this.state = {
//             news: {
//                 hits: []
//             }
//         }
//     }

//     componentDidMount(){
//         axios.get('http://hn.algolia.com/api/v1/search?query=redux').then((result)=>{
//             this.setState({
//                 news: result.data
//             })
//         })
//     }

//     render(){
//         let { news } = this.state;
//         return (
//             <div>
//                 {news.hits.map(item=>{
//                     return <div key={item.created_at}>{item.title}</div>
//                 })}
//             </div>
//         )
//     }
// }




// export default function Fetch(){

//     const [news, setNews] = useState({hits: []});

//     const [query, setQuery] = useState('redux');

//     const [search, setSearch] = useState('redux');

//     // 如果写成如下代码，会报错警告错误，那是因为 async 函数会隐式的返回一个 promise，useEffect 所接收的返回值要么什么都不返回，要么是一个函数，所以会报错
//     // useEffect(async ()=>{
//     //     const result = await axios.get('http://hn.algolia.com/api/v1/search?query=redux');
//     //     setNews(result.data);
//     // }, [])

//     useEffect(()=>{
//         async function fetchData(){
//             const result = await axios.get(`http://hn.algolia.com/api/v1/search?query=${search}`);
//             setNews(result.data);
//         }
//         fetchData();
//     }, [search])

//     // return (
//     //     <ul>
//     //     {news.hits.map(item => (
//     //         <li key={item.objectID}>
//     //         <a href={item.url}>{item.title}</a>
//     //         </li>
//     //     ))}
//     // </ul>
//     // )

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={event => setQuery(event.target.value)}
//             />
//             <ul>
//                 {news.hits.map(item => (
//                     <li key={item.objectID}>
//                     <a href={item.url}>{item.title}</a>
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={()=>{setSearch(query)}}>查询</button>
//         </div>
//     )
// }


// 使用

export default function Fetch(){

    const [news, setNews] = useState({hits: []});

    const [query, setQuery] = useState('redux');

    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=redux');

    // 如果写成如下代码，会报错警告错误，那是因为 async 函数会隐式的返回一个 promise，useEffect 所接收的返回值要么什么都不返回，要么是一个函数，所以会报错
    // useEffect(async ()=>{
    //     const result = await axios.get('http://hn.algolia.com/api/v1/search?query=redux');
    //     setNews(result.data);
    // }, [])

    useEffect(()=>{
        async function fetchData(){
            const result = await axios.get(url);
            setNews(result.data);
        }
        fetchData();
    }, [url])

    // return (
    //     <ul>
    //     {news.hits.map(item => (
    //         <li key={item.objectID}>
    //         <a href={item.url}>{item.title}</a>
    //         </li>
    //     ))}
    // </ul>
    // )

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <ul>
                {news.hits.map(item => (
                    <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <button onClick={()=>{setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}}>查询</button>
        </div>
    )
}