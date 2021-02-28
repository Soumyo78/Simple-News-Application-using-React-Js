import NewsCard from './Components/NewCard/index';
import {useEffect, useState} from 'react';
import NewsCategory from './Components/Category Navbar/index';

const axios = require('axios');

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

    let newsArr = [];
    let titleArr1 = [];
    let descriptionArr1 = [];
    let urlArr1 = [];
    let imgUrlArr1 = [];
    let authorArr1 = [];
    let publishDateArr1 = [];

    useEffect(() => {

        url=`https://newsapi.org/v2/top-headlines?source=google-news&country=${props.countryCode}&${apiKey1}&category=${props.categoryCode}`;
        
        console.log(url)

        axios.get(url)
        .then(res =>{
            const { data } = res;
            return data;
        })
        .then(res =>{
            newsArr.push(res.articles);
            return newsArr;
        })
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
        .catch(err => alert(err))
    }, [props.countryCode, props.categoryCode])

    return(
        <div className="category-newscard-container">
            <NewsCard titleArr={titleArr} descriptionArr={descriptionArr} urlArr={urlArr} imgUrlArr={imgUrlArr} authorArr={authorArr} publishDateArr={publishDateArr}/>
        </div>
    );
}

export default ApiCalls;