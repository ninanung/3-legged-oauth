import React from 'react';
import cookie from '../cookie';
import axios from 'axios';
import qs from 'query-string';

const client_id = '9x3bEdlVe9XS1fQ5P0BohJHbow88vO8X';
const client_secret = 'VEJNF6HcuOWWpkRxB376bvqzK5pKhMza';
const redirect_url = 'http://localhost:3001/login/auth';

class Auth extends React.Component {
    componentWillMount() {
        const query = qs.parse(window.location.search);
        if(!query.code || !query.state) {
            alert('unallowed connection');
            return window.location.href = '/';
        }
        if(query.state !== cookie.getCookie('state')) {
            alert('invalid authorization');
            return window.location.href = '/';
        } else {
            const queryString = qs.stringify({
                client_id,
                client_secret,
                redirect_url,
                code: query.code,
                state: query.state,
            })
            axios({
                method: 'get',
                url: `http://localhost:3002/api/auth/token?${queryString}`,
            })
            .then(function(res) {
                cookie.setCookie('token', res.data, 100);
                return window.location.href = '/';
            })
            .catch(function(err) {
                alert(err);
                return window.location.href = '/login';
            })
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Auth;