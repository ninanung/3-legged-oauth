import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NG from 'react-navigation-guard';
import cookie from './cookie';

import Home from './component/Home';
import Auth from './component/Auth';
import Login from './component/Login';

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>404 Not Found</h1>
            </div>
        )
    }
}

class Routes extends React.Component {
    returnBool = (url, params) => {
        if(!cookie.getCookie('token')) {
            return false;
        } else {
            return true;
        }
    }

    ifFalse = (url, params, blockRender) => {
        if(url !== '/login') {
            blockRender();
            alert('Please login first');
            window.location.href = '/login';
        }
    }

    ifTrue = (url, params, blockRender) => {
        if(url === '/login') {
            alert('You already logged-in');
            return window.location.href = '/';
        }
    }

    render() {
        return (
            <Switch>
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/' component={Home} />
                <Route exact path='/login/auth' component={Auth} />
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;