import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home.jsx';
import Auth from './components/Auth.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';

class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exaxt={true} component={Home}/>
                <Route path='/auth' exaxt={true} component={Auth}/>
                <Route path='/app/register' exaxt={true} component={Register}/>
                <Route path='/login' exaxt={true} component={Login}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        )
    }
}

export default Router;