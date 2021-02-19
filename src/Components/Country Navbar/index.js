import './style.css';
import { NavLink } from 'react-router-dom';

const CountryNavBar = ()=>{
    
    return(
        <nav className="country-navbar-container">
            <NavLink to={'/'} exact activeStyle={{backgroundColor:"green"}}>India</NavLink>
            <NavLink to={'/usa'} exact activeStyle={{backgroundColor:"green"}}>USA</NavLink>
            <NavLink to={'/russia'} exact activeStyle={{backgroundColor:"green"}}>Russia</NavLink>
        </nav>
    );
}

export default CountryNavBar;