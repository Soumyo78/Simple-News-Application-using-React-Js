import './style.css';
import { NavLink, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import ApiCall from '../../ApiCall';

const NewsCategory = ()=>{

    let { path, url } = useRouteMatch();
    console.log(path)

    const countryCodes = {
        '/india': "in",
        '/usa': "us",
        '/russia': "ru",
        '/china': "cn",
        '/brazil': "br",
        '/germany': "de",
        '/france': "fr",
        '/uk': "gb",
        '/italy': "it",
        '/japan': "jp",
        '/south_korea': "kr",
        '/mexico': "mx",
        '/saudi_arabia': "sa"
    }

    console.log(countryCodes[path])
    
    return(
       <>
        <nav className="news-category-nav-container">
            <NavLink to={`${url}/top_headlines`} exact activeStyle={{backgroundColor:'indigo'}}>Top Headlines</NavLink>
            <NavLink to={`${url}/business`} exact activeStyle={{backgroundColor:'indigo'}}>Business</NavLink>
            <NavLink to={`${url}/entertainment`} exact activeStyle={{backgroundColor:'indigo'}}>Entertainment</NavLink>
            <NavLink to={`${url}/general`} exact activeStyle={{backgroundColor:'indigo'}}>General</NavLink>
            <NavLink to={`${url}/health`} exact activeStyle={{backgroundColor:'indigo'}}>Health</NavLink>
            <NavLink to={`${url}/science`} exact activeStyle={{backgroundColor:'indigo'}}>Science</NavLink>
            <NavLink to={`${url}/sports`} exact activeStyle={{backgroundColor:'indigo'}}>Sports</NavLink>
            <NavLink to={`${url}/technology`} exact activeStyle={{backgroundColor:'indigo'}}>Technology</NavLink>
        </nav>

        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}/top_headlines`}/>
            </Route>
            <Route path={`${path}/business`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"business"}/>
            </Route>
            <Route path={`${path}/entertainment`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"entertainment"}/>
            </Route>
            <Route path={`${path}/general`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"general"}/>
            </Route>
            <Route path={`${path}/health`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"health"}/>
            </Route>
            <Route path={`${path}/science`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"science"}/>
            </Route>
            <Route path={`${path}/sports`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"sports"}/>
            </Route>
            <Route path={`${path}/technology`}>
                <ApiCall countryCode={countryCodes[path]} categoryCode={"technology"}/>
            </Route>
        </Switch>
       </>
    );
}

export default NewsCategory;