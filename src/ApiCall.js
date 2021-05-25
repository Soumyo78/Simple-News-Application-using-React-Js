import NewsCard from "./Components/NewCard/index";
import { useEffect, useRef, useState } from "react";

const axios = require("axios");
let newsArr = [];
let loading = true;

const ApiCalls = (props) => {
  let url;
  const apiKey1 = "apiKey=268e054927524b29a1ee6bc18d52e589";
  const apiKey2 = "apiKey=a9b320f1f47644f99dab6b9407db90b0";

  const [titleArr, setTitle] = useState([]);
  const [descriptionArr, setDescription] = useState([]);
  const [urlArr, setUrl] = useState([]);
  const [imgUrlArr, setImg] = useState([]);
  const [authorArr, setAuthor] = useState([]);
  const [publishDateArr, setPublishDate] = useState([]);
  const pageNo = useRef(1);

  const newsCall = () => {
    loading = true;
    url = `https://newsapi.org/v2/top-headlines?source=google-news&country=${props.countryCode}&${apiKey1}&category=${props.categoryCode}&page=${pageNo.current}`;

    console.log(url);
    axios
      .get(url)
      .then((res) => {
        loading = false;
        console.log(res.data);
        const { data } = res;
        return data;
      })
      .then((res) => {
        newsArr = newsArr.concat(res.articles);
        console.log(newsArr)
        return newsArr;
      })
      .then((newsArr) => {
        for (let i = 0; i < newsArr.length; i++) {
          const { title, description, url, urlToImage, author, publishedAt } =
            newsArr[i];
          setTitle((oldTitle) => [...oldTitle, title]);
          setDescription((oldDescription) => [...oldDescription, description]);
          setUrl((oldUrl) => [...oldUrl, url]);
          setImg((oldUrlToImage) => [...oldUrlToImage, urlToImage]);
          setAuthor((oldAuthor) => [...oldAuthor, author]);
          var d = new Date(publishedAt);
          setPublishDate((oldPublishedDates) => [
            ...oldPublishedDates,
            d.toLocaleString("en-IN", { hour12: true }),
          ]);
        }
      })
      .catch((err) => alert(err));
  };

  const clearStates = () => {
    setTitle([]);
    setDescription([]);
    setUrl([]);
    setImg([]);
    setAuthor([]);
    setPublishDate([]);
  };

  useEffect(() => {
    clearStates();
    newsArr = [];
    newsCall();
    return () => {
      clearStates();
      newsArr = [];
    };
  }, [props.countryCode, props.categoryCode]);

  return loading ? (
    <div className="loader"></div>
  ) : (
    <div className="category-newscard-container">
      <NewsCard
        titleArr={titleArr}
        descriptionArr={descriptionArr}
        urlArr={urlArr}
        imgUrlArr={imgUrlArr}
        authorArr={authorArr}
        publishDateArr={publishDateArr}
      />
      <button
        id="load-more-btn"
        onClick={() => {
          clearStates();
          pageNo.current += 1;
          console.log(pageNo.current);
          newsCall();
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default ApiCalls;
