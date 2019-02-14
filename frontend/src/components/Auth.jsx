import React from 'react';
import qs from 'query-string';
import cookie from '../cookie';
import axios from 'axios';

class Auth extends React.Component {
    componentWillMount() {
        const query = qs.parse(window.location.search);
        if(!query.client_id || !query.state || !query.redirect_url || !query.scope) {
            alert('invalid authorization');
            if(cookie.getCookie('user_id')) {
                return window.location.href = '/';
            } else return window.location.href = '/login';
        }
        if(!cookie.getCookie('user_id')) {
            const forLogin = qs.stringify({
                client_id: query.client_id,
                state: query.state,
                redirect_url: query.redirect_url,
                scope: query.scope,
            })
            alert('please login for authorization');
            return window.location.href = `/login?${forLogin}`;
        }
        const parsed = {
            client_id: query.client_id,
            user_id: cookie.getCookie('user_id'),
            state: query.state,
            redirect_url: query.redirect_url,
            scope: query.scope,
        }
        const url = `http://localhost:3002/api/auth/app?${qs.stringify(parsed)}`
        axios({
            method: 'get',
            url,
        })
        .then(function(res) {
            console.log(res.data);
            return window.location.href = res.data;
        })
        .catch(function(err) {
            alert(err);
            return window.location.href = '/';
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Auth;