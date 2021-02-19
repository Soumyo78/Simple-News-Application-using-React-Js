import { Route , Switch } from 'react-router-dom';

import ApiCall from './ApiCall';


const Routes = ()=>{

    return(
        <Switch>
            <Route exact path='/'>
                <ApiCall countryCode={"in"}/>
            </Route>
            <Route path='/usa'>
                <ApiCall countryCode={"us"}/>
            </Route>  
            <Route path='/russia'>
                <ApiCall countryCode={"ru"}/>
            </Route>   
        </Switch>
    );
}

export default Routes;