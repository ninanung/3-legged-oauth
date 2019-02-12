import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appname: '',
            redirect_url: '',
        }
    }

    onAppnameChange = (e) => {
        this.setState({
            appname: e.target.value,
        })
    }

    onRedirectUrlChange = (e) => {
        this.setState({
            redirect_url: e.target.value,
        })
    }

    onButtonClick = () => {
        axios({
            method: 'post',
            data: {
                appname: this.state.appname,
                redirect_url: this.state.redirect_url,
            },
            url: 'http://localhost:3002/api/sign/app'
        })
        .then(function(res) {
            alert('App register succeeded.');
        })
        .catch(function(err) {
            alert(err);
        })
    }

    render() {
        return (
            <div>
                <h1>Register Your App</h1>
                <label>App Name</label>
                <input type='text' onChange={this.onAppnameChange} />
                <label>Redirect URL</label>
                <input type='text' onChange={this.onRedirectUrlChange}/>
                <button onClick={this.onButtonClick}>Create</button>
            </div>
        )
    }
}

export default Register;