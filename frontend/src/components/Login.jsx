import React from 'react';
import axios from 'axios';
import cookie from '../cookie';
import queryString from 'query-string';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    onButtonClick = () => {
        const query = queryString.parse(window.location.search);
        axios({
            method: 'post',
            data: {
                username: this.state.username,
                password: this.state.password,
            },
            url: this.props.url,
        })
        .then(function(res) {
            cookie.setCookie('user_id', res.data, 3);
            if(query.client_id && query.state && query.redirect_url && query.scope) {
                if(window.confirm(`Do you allow this app to connect to your ${query.scope} data?`)) {
                    return window.location.href = `/auth?client_id=${query.client_id}&state=${query.state}&scope=${query.scope}&redirect_url=${query.redirect_url}`;
                } else {
                    alert('back to main page');
                    return window.location.href = '/';
                }
            }
            window.location.href = '/';
        })
        .catch(function(err) {
            alert(err);
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <label>Username</label>
                <input type='text' onChange={this.onUsernameChange}/>
                <br/>
                <label>Password</label>
                <input type='password' onChange={this.onPasswordChange}/>
                <br/>
                <button onClick={this.onButtonClick}>Login</button>
            </div>
        )
    }
}

export default Login;