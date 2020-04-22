import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';


import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Detail from '../src/pages/Detail';
import Register from '../src/pages/Register';
import { isAuthenticated } from './services/auth';

const AuthRoute = ({ component : Component, ... rest}) =>(
    <Route 
    {... rest}
    render={props =>
    isAuthenticated() ? (
        <Component { ... props} />
    ) : ( <Redirect to={{pathname: "/login", state: {from : props.location}}} />)
    }
    />
);



function Routes(){
    return (
        <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            
            <AuthRoute path="/detail/:name/:id" component={Detail}/>
         </Switch>
        </BrowserRouter>
    );
}

export default Routes;