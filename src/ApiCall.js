import NewsCard from './Components/NewCard/index';
import {useEffect, useState} from 'react';

const axios = require('axios');
const ApiCalls = ()=>{

    const [titleArr, setTitle] = useState([]);
    const [descriptionArr, setDescription] = useState([]);
    const [urlArr, setUrl] = useState([]);
    const [imgUrlArr, setImg] = useState([]);
    const [authorArr, setAuthor] = useState([]);
    const [publishDateArr, setPublishDate] = useState([]);

    let newsArr = [];
    let titleArr1 = [];
    let descriptionArr1 = [];
    let urlArr1 = [];
    let imgUrlArr1 = [];
    let authorArr1 = [];
    let publishDateArr1 = [];

    useEffect(() => {
        
        const url='https://newsapi.org/v2/top-headlines?source=google-news&country=in&apiKey=268e054927524b29a1ee6bc18d52e589'; // my api key
        // const url='https://newsapi.org/v2/top-headlines?source=google-news&country=in&apiKey=a9b320f1f47644f99dab6b9407db90b0'; // other api key
        axios.get(url)
        .then(res =>{
            const { data } = res
            return data
        })
        .then(res =>{
            console.log(res)
            newsArr.push(res.articles);
            return newsArr;
        })
        .catch(err => console.log(err))
        .then(newsArr =>{
            for (let i=0; i<newsArr[0].length; i++){
                const {title, description, url, urlToImage, author, publishedAt} = newsArr[0][i];
                titleArr1.push(title);
                descriptionArr1.push(description);
                urlArr1.push(url);
                imgUrlArr1.push(urlToImage);
                authorArr1.push(author);
                var d = new Date(publishedAt);
                publishDateArr1.push(d.toLocaleString('en-IN', { hour12: true }));
                
            }

            setTitle(titleArr1);
            setDescription(descriptionArr1);
            setUrl(urlArr1);
            setImg(imgUrlArr1);
            setAuthor(authorArr1);
            setPublishDate(publishDateArr1);
        })
    }, [])

    return(
        <>
            <NewsCard titleArr={titleArr} descriptionArr={descriptionArr} urlArr={urlArr} imgUrlArr={imgUrlArr} authorArr={authorArr} publishDateArr={publishDateArr}/>
        </>
    );
}

export default ApiCalls;