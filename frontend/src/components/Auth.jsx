import React from 'react';
import qs from 'query-string';
import cookie from '../cookie';
import axios from 'axios';

class Auth extends React.Component {
    componentWillMount() {
        const query = qs.parse(window.location.search);
        if(!query.client_id || !query.state || !query.code || !query.scope || !query.redirect_url) {
            alert('invalid authorization');
            return window.location.href = '/notfound';
        }
        if(!cookie.getCookie('user_id')) {
            const forLogin = qs.stringify({
                client_id: query.client_id,
                state: query.state,
                code: query.code,
                scope: query.scope,
                redirect_url: query.redirect_url,
            })
            alert('please login for authorization');
            return window.location.href = `/login?${forLogin}`;
        }
        const parsed = {
            client_id: query.client_id,
            user_id: cookie.getCookie('user_id'),
            redirect_url: query.redirect_url,
            scope: query.scope,
            state: query.state,
            code: query.code,
        }
        const url = `http://localhost:3002/api/auth/register?${qs.stringify(parsed)}`
        axios({
            method: 'get',
            url,
        })
        .then(function(res) {
            if(res.data.registered) {
                console.log(res.data);
                return window.location.href = res.data.url;
            }
            if(window.confirm('You want to register your account to this App?')) {
                console.log(res.data);
                return window.location.href = res.data.url;
            } else {
                return window.location.href = '/';
            }
        })
        .catch(function(err) {
            alert(err);
            return window.location.href = '/notfound';
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Auth;