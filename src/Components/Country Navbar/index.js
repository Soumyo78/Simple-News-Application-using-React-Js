import './style.css';
import { NavLink, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import NewsCategory from '../Category Navbar/index';
import ApiCall from '../../ApiCall';

const CountryNavBar = ()=>{
    
    let { url, path } = useRouteMatch();

    return(
        <>
        <nav className="country-navbar-container">
            <NavLink to={`${url}india`} exact activeStyle={{backgroundColor:"green"}}>India</NavLink>
            <NavLink to={`${url}usa`} exact activeStyle={{backgroundColor:"green"}}>USA</NavLink>
            <NavLink to={`${url}russia`} exact activeStyle={{backgroundColor:"green"}}>Russia</NavLink>
            <NavLink to={`${url}china`} exact activeStyle={{backgroundColor:"green"}}>China</NavLink>
            <NavLink to={`${url}brazil`} exact activeStyle={{backgroundColor:"green"}}>Brazil</NavLink>
            <NavLink to={`${url}germany`} exact activeStyle={{backgroundColor:"green"}}>Germany</NavLink>
            <NavLink to={`${url}france`} exact activeStyle={{backgroundColor:"green"}}>France</NavLink>
            <NavLink to={`${url}uk`} exact activeStyle={{backgroundColor:"green"}}>UK</NavLink>
            <NavLink to={`${url}italy`} exact activeStyle={{backgroundColor:"green"}}>Italy</NavLink>
            <NavLink to={`${url}japan`} exact activeStyle={{backgroundColor:"green"}}>Japan</NavLink>
            <NavLink to={`${url}south_korea`} exact activeStyle={{backgroundColor:"green"}}>South Korea</NavLink>
            <NavLink to={`${url}mexico`} exact activeStyle={{backgroundColor:"green"}}>Mexico</NavLink>
            <NavLink to={`${url}saudi_arabia`} exact activeStyle={{backgroundColor:"green"}}>Saudi Arabia</NavLink>
        </nav>

        <Switch>
            <Route exact path={path}>
                <Redirect to={`${path}india`}/>
            </Route>
            <Route path={`${path}india`}>
                <NewsCategory/>
                <ApiCall countryCode={"in"} categoryCode={""}/>
            </Route>
            <Route path={`${path}usa`}>
                <NewsCategory/>
                <ApiCall countryCode={"us"} categoryCode={""}/>
            </Route>  
            <Route path={`${path}russia`}>
                <NewsCategory/>
                <ApiCall countryCode={"ru"} categoryCode={""}/>
            </Route>
            <Route path={`${path}china`}>
                <NewsCategory/>
                <ApiCall countryCode={"cn"} categoryCode={""}/>
            </Route>
            <Route path={`${path}brazil`}>
                <NewsCategory/>
                <ApiCall countryCode={"br"} categoryCode={""}/>
            </Route>
            <Route path={`${path}germany`} categoryCode={""}>
                <NewsCategory/>
                <ApiCall countryCode={"de"} categoryCode={""}/>
            </Route>
            <Route path={`${path}france`}>
                <NewsCategory/>
                <ApiCall countryCode={"fr"} categoryCode={""}/>
            </Route>
            <Route path={`${path}uk`}>
                <NewsCategory/>
                <ApiCall countryCode={"gb"} categoryCode={""}/>
            </Route>
            <Route path={`${path}italy`}>
                <NewsCategory/>
                <ApiCall countryCode={"it"} categoryCode={""}/>
            </Route>
            <Route path={`${path}japan`}>
                <NewsCategory/>
                <ApiCall countryCode={"jp"} categoryCode={""}/>
            </Route>
            <Route path={`${path}south_korea`}>
                <NewsCategory/>
                <ApiCall countryCode={"kr"} categoryCode={""}/>
            </Route>
            <Route path={`${path}mexico`}>
                <NewsCategory/>
                <ApiCall countryCode={"mx"} categoryCode={""}/>
            </Route>
            <Route path={`${path}saudi_arabia`}>
                <NewsCategory/>
                <ApiCall countryCode={"sa"} categoryCode={""}/>
            </Route>
        </Switch>
        </>
    );
}

export default CountryNavBar;