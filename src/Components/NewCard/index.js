import './style.css';

const NewsCard = (props) =>{
    return(
        <main className="main-container">
        {props.titleArr.map((item, index)=>{
            return(
                <div key={index} className="news-card-main-container">
                    <article className="content-container">
                        <h3 className="news-title">{item}</h3>
                        <div className="news-description">{props.descriptionArr[index]}</div>
                        <div className="read-more-text-container"><a href={props.urlArr[index]} target="_blank" rel="noreferrer">Click here to read more ...</a></div>
                        <div className="author-publish-date-container">
                            {props.authorArr[index] && <h5>Author: <span>{props.authorArr[index]}</span></h5>}
                            <h5>Published at: <span>{props.publishDateArr[index]}</span></h5>
                        </div>
                    </article>
                    <div className="image-container">
                        <img className="news-img" src={props.imgUrlArr[index]} alt={item} />
                    </div>
                </div>
            )
        })}
        </main>
    );
}

export default NewsCard;