import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NG from 'react-navigation-guard';
import cookie from './cookie';

import Home from './components/Home.jsx';
import Auth from './components/Auth.jsx';
import Register from './components/Register.jsx';
import MainLogin from './components/MainLogin.jsx';
import NotFound from './components/NotFound.jsx';
import Token from './components/Token.jsx';

class Routes extends React.Component {
    returnBool = (url, params) => {
        if(cookie.getCookie('user_id')) {
           return true; 
        } else return false;
    }

    ifFalse = (url, params, blockRender) => {
        if(url !== '/login') {
            blockRender();
            alert('Please login first.');
            return window.location.href = '/login';
        }
    }

    ifTrue = (url, params, blockRender) => {
        if(url === '/login') {
            alert('You are already signed in.');
            return window.location.href = '/';
        }
    }

    render() {
        return (
            <Switch>
                <NG path='/' exact={true} component={Home} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue} />
                <Route path='/auth' exact component={Auth} />
                <NG path='/register' exact={true} component={Register} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue} />
                <NG path='/login' exact={true} component={MainLogin} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue} />
                <NG path='/token' exact={true} component={Token} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Routes;