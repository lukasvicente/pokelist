import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

import Login from '../src/pages/Login';
import Home from '../src/pages/Home';

function Routes(){
    return (
        <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
         </Switch>
        </BrowserRouter>
    );
}

export default Routes;