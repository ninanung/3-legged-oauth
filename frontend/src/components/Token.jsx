import React from 'react';
import cookie from '../cookie';
import axios from 'axios';
import qs from 'query-string';

class Token extends React.Component {
    componentWillMount() {
        const query = qs.parse(window.location.search);
        if(!query.client_id || !query.state || !query.redirect_url || !query.scope || !query.client_secret) {
            alert('invalid authorization');
            return window.location.href = '/';
        }
        if(!cookie.getCookie('user_id')) {
            alert('please login for authorization and try again');
            return window.location.href = '/login';
        }
        const parsed = {
            client_id: query.client_id,
            user_id: cookie.getCookie('user_id'),
            state: query.state,
            redirect_url: query.redirect_url,
            scope: query.scope,
            client_secret: query.client_secret,
        }
        const url = `http://localhost:3002/api/auth/token?${qs.stringify(parsed)}`
        axios({
            method: 'get',
            url,
        })
        .then(function(res) {
            console.log(res.data);
        })
        .catch(function(err) {
            alert(err);
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Token;