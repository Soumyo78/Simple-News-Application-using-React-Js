import './style.css';
import { NavLink, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import ApiCall from '../../ApiCall';

const NewsCategory = ()=>{

    let { path, url } = useRouteMatch();

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
    
    return(
       <>
        <nav className="news-category-nav-container">
            <NavLink to={`${url}/top_headlines`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Top Headlines</NavLink>
            <NavLink to={`${url}/business`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Business</NavLink>
            <NavLink to={`${url}/entertainment`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Entertainment</NavLink>
            <NavLink to={`${url}/general`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>General</NavLink>
            <NavLink to={`${url}/health`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Health</NavLink>
            <NavLink to={`${url}/science`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Science</NavLink>
            <NavLink to={`${url}/sports`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Sports</NavLink>
            <NavLink to={`${url}/technology`} exact activeStyle={{textDecoration: 'underline', textUnderlinePosition: 'under', color: '#2874F0'}}>Technology</NavLink>
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