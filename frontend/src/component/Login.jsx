import React from 'react';
import rs from 'randomstring';
import cookie from '../cookie';
import qs from 'query-string';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client_id: '',
            redirect_url: '',
            scope: '',
        }
    }

    componentWillMount() {
        this.setState({
            client_id: '9x3bEdlVe9XS1fQ5P0BohJHbow88vO8X',
            redirect_url: 'http://localhost:3001/login/auth',
            scope: 'email',
        })
    }

    buttonClick = () => {
        const state = rs.generate();
        cookie.setCookie('newstate', state, 1);
        const query = qs.stringify({
            client_id: this.state.client_id,
            redirect_url: this.state.redirect_url,
            scope: this.state.scope,
            state,
        })
        window.location.href = `http://localhost:3002/api/auth/app?${query}`
    }

    render() {
        return (
            <div>
                <h1>Sample Application</h1>
                <button onClick={this.buttonClick}>Login with Sample Service</button>
            </div>
        )
    }
}

export default Login;