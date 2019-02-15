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
            state: ''
        }
    }

    componentWillMount() {
        const state = rs.generate();
        this.setState({
            client_id: '9x3bEdlVe9XS1fQ5P0BohJHbow88vO8X',
            redirect_url: 'http://localhost:3001/login/auth',
            scope: 'email',
            state,
        })
        cookie.setCookie('state', state, 1);
    }

    buttonClick = () => {
        const query = qs.stringify({
            client_id: this.state.client_id,
            redirect_url: this.state.redirect_url,
            scope: this.state.scope,
            state: this.state.state,
        })
        window.location.href = `http://localhost:3002/auth?${query}`
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