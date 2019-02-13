import React from 'react';
import queryString from 'query-string';
import cookie from '../cookie';
import axios from 'axios';

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            needRender: true,
        }
    }

    componentWillMount() {
        const query = queryString.parse(window.location.search);
        if(!query.client_id || !query.state || !query.redirect_url || !query.scope) {
            alert('invalid authorization');
            return window.location.href = '/';
        }
        if(!cookie.getCookie('user_id')) {
            alert('please login for authorization');
             return window.location.href = '/login';
        }
        const parsed = {
            client_id: query.client_id,
            user_id: cookie.getCookie('user_id'),
            state: query.state,
            redirect_url: query.redirect_url,
            scope: query.scope,
        }
        const url = `http://localhost:3002/api/auth/app${queryString.stringify(parsed)}`
        console.log(url);
        /*axios({
            method: 'get',
            url,
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(err) {
            alert(err);
        })*/
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Auth;