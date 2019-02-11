import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home.jsx';
import Auth from './components/Auth.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import NotFound from './components/NotFound.jsx';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/auth' exact={true} component={Auth}/>
                <Route path='/register' exact={true} component={Register}/>
                <Route path='/login' exact={true} component={Login}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default Routes;