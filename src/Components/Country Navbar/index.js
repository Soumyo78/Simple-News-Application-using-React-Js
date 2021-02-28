import './style.css';
import { NavLink, useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import NewsCategory from '../Category Navbar/index';
import ApiCall from '../../ApiCall';

const CountryNavBar = ()=>{
    
    let { url, path } = useRouteMatch();

    return(
        <>
        <nav className="country-navbar-container">
            <NavLink to={`${url}india`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>India</NavLink>
            <NavLink to={`${url}usa`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>USA</NavLink>
            <NavLink to={`${url}russia`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Russia</NavLink>
            <NavLink to={`${url}china`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>China</NavLink>
            <NavLink to={`${url}brazil`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Brazil</NavLink>
            <NavLink to={`${url}germany`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Germany</NavLink>
            <NavLink to={`${url}france`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>France</NavLink>
            <NavLink to={`${url}uk`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>UK</NavLink>
            <NavLink to={`${url}italy`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Italy</NavLink>
            <NavLink to={`${url}japan`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Japan</NavLink>
            <NavLink to={`${url}south_korea`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>South Korea</NavLink>
            <NavLink to={`${url}mexico`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Mexico</NavLink>
            <NavLink to={`${url}saudi_arabia`} activeStyle={{backgroundColor:"white", color:"black", borderRadius: "5px 5px 0px 0px"}}>Saudi Arabia</NavLink>
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