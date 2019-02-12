import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NG from 'react-navigation-guard';
import cookie from './cookie';

import Home from './components/Home.jsx';
import Auth from './components/Auth.jsx';
import Register from './components/Register.jsx';
import MainLogin from './components/MainLogin.jsx';
import NotFound from './components/NotFound.jsx';

class Routes extends React.Component {
    returnBool(path, url, params) {
        console.log(path, url, params);
        if(path === '/login') {
            return true
        } else {
            return false;
        }
    }

    ifFalse(path, url, params) {

    }

    ifTrue(path, url, params) {
        window.location.href = '/';
    }

    render() {
        return (
            <Switch>
                <NG path='/' exact={true} component={Home} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue}/>
                <NG path='/auth' exact={true} component={Auth} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue}/>
                <NG path='/register' exact={true} component={Register} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue}/>
                <NG path='/login' exact={true} component={MainLogin} returnBool={this.returnBool} ifFalse={this.ifFalse} ifTrue={this.ifTrue}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default Routes;