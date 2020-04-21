import React from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';

import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Detail from '../src/pages/Detail';


function Routes(){
    return (
        <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/detail/:name/:id" component={Detail}/>
         </Switch>
        </BrowserRouter>
    );
}

export default Routes;