import NewsCard from './Components/NewCard/index';
import {useEffect, useState} from 'react';

const axios = require('axios');
let newsArr = [];
let titleArr1 = [];
let descriptionArr1 = [];
let urlArr1 = [];
let imgUrlArr1 = [];
let authorArr1 = [];
let publishDateArr1 = [];

const ApiCalls = (props)=>{

    let url;
    const apiKey1 = "apiKey=268e054927524b29a1ee6bc18d52e589";
    const apiKey2 = "apiKey=a9b320f1f47644f99dab6b9407db90b0";

    const [titleArr, setTitle] = useState([]);
    const [descriptionArr, setDescription] = useState([]);
    const [urlArr, setUrl] = useState([]);
    const [imgUrlArr, setImg] = useState([]);
    const [authorArr, setAuthor] = useState([]);
    const [publishDateArr, setPublishDate] = useState([]);

    const [pageNo, setPageNo] = useState(1)

 
    useEffect(() => {

        url=`https://newsapi.org/v2/top-headlines?source=google-news&country=${props.countryCode}&${apiKey1}&category=${props.categoryCode}&page=${pageNo}`;
        
        console.log(url)

        axios.get(url)
        .then(res =>{
            const { data } = res;
            return data;
        })
        .then(res =>{
            newsArr=newsArr.concat(res.articles);
            console.log(newsArr)
            return newsArr;
        })
        .then(newsArr =>{
            for (let i=0; i<newsArr.length; i++){
                const {title, description, url, urlToImage, author, publishedAt} = newsArr[i];
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
        .catch(err => alert(err))

        return ()=>{
            titleArr1 = [];
            descriptionArr1 = [];
            urlArr1 = [];
            imgUrlArr1 = [];
            authorArr1 = [];
            publishDateArr1 = [];
        }

    }, [props.countryCode, props.categoryCode, pageNo])

    useEffect(() => {
        setPageNo(1)
        return () => {
            console.log("Hello")
            newsArr = [];
        }
    }, [props.countryCode, props.categoryCode])

    return(
        <div className="category-newscard-container">
            <NewsCard titleArr={titleArr} descriptionArr={descriptionArr} urlArr={urlArr} imgUrlArr={imgUrlArr} authorArr={authorArr} publishDateArr={publishDateArr}/>
            <button id="load-more-btn" onClick={()=>{
                setPageNo(pageNo+1)
            }}>Load More</button>
        </div>
    );
}

export default ApiCalls;