import React from 'react';
import axios from 'axios';
import cookie from '../cookie';

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
                <label>Password</label>
                <input type='password' onChange={this.onPasswordChange}/>
                <button onClick={this.onButtonClick}>Login</button>
            </div>
        )
    }
}

export default Login;