import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NG from 'react-navigation-guard';
import cookie from './cookie';

import Home from './component/Home';
import Auth from './component/Auth';
import Login from './component/Login';

class Routes extends React.Component {
    returnBool = (url, params) => {
        
    }

    ifFalse = (url, params, blockRender) => {

    }

    ifTrue = (url, params, blockRender) => {

    }

    render() {
        return (
            <Switch>
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/' component={Home} />
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/auth' component={Auth} />
                <Route exact path='/login' component={Login} />
            </Switch>
        )
    }
}

export default Routes;