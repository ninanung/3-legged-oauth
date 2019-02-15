import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NG from 'react-navigation-guard';
import cookie from './cookie';

import Home from './component/Home';
import Auth from './component/Auth';
import Login from './component/Login';

class Routes extends React.Component {
    returnBool = (url, params) => {
        if(!cookie.getCookie('token')) {
            return false;
        } else {
            return true;
        }
    }

    ifFalse = (url, params, blockRender) => {
        blockRender();
        if(url !== '/login') {
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
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/auth' component={Auth} />
                <NG exact={true} ifTrue={this.ifTrue} ifFalse={this.ifFalse} returnBool={this.returnBool} path='/login' component={Login} />
            </Switch>
        )
    }
}

export default Routes;