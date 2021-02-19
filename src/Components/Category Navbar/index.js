import './style.css';
import { NavLink } from 'react-router-dom';

const NewsCategory = ()=>{
    return(
        <nav className="news-category-nav-container">
            <NavLink to={'/top_headlines'} exact activeStyle={{backgroundColor:'indigo'}}>Top Headlines</NavLink>
            <NavLink to={'/business'} exact activeStyle={{backgroundColor:'indigo'}}>Business</NavLink>
            <NavLink to={'/entertainment'} exact activeStyle={{backgroundColor:'indigo'}}>Entertainment</NavLink>
            <NavLink to={'/general'} exact activeStyle={{backgroundColor:'indigo'}}>General</NavLink>
            <NavLink to={'/health'} exact activeStyle={{backgroundColor:'indigo'}}>Health</NavLink>
            <NavLink to={'/science'} exact activeStyle={{backgroundColor:'indigo'}}>Science</NavLink>
            <NavLink to={'/sports'} exact activeStyle={{backgroundColor:'indigo'}}>Sports</NavLink>
            <NavLink to={'/technology'} exact activeStyle={{backgroundColor:'indigo'}}>Technology</NavLink>
        </nav>
    );
}

export default NewsCategory;