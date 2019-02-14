import React from 'react';
import axios from 'axios';
import cookie from '../cookie';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appname: '',
            redirect_url: '',
            apps: [],
        }
    }

    componentWillMount() {
        const setApps = this.setApps;
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/sign/get/app',
        })
        .then(function(res) {
            setApps(res.data.slice());
        })
        .catch(function(err) {
            alert(err);
        })
    }

    setApps = (apps) => {
        this.setState({
            apps,
        })
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
        const setApps = this.setApps;
        axios({
            method: 'post',
            data: {
                appname: this.state.appname,
                redirect_url: this.state.redirect_url,
                user_id: cookie.getCookie('user_id'),
            },
            url: 'http://localhost:3002/api/sign/app'
        })
        .then(function(res) {
            setApps(res.data.slice());
            alert('App register succeeded.');
            document.getElementById('appname').value = '';
            document.getElementById('redirect').value = '';
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
                <input id='appname' type='text' onChange={this.onAppnameChange} />
                <br/>
                <label>Redirect URL</label>
                <input id='redirect' type='text' onChange={this.onRedirectUrlChange}/>
                <br/>
                <button onClick={this.onButtonClick}>Create</button>
                <hr/>
                {this.state.apps && this.state.apps.length ? <div><h2>Registered Apps</h2><hr/></div> : <div><h2>No Apps</h2><hr/></div>}
                {this.state.apps && this.state.apps.length ? this.state.apps.map((app, index) => {
                    return (
                        <div>
                            <h3>Appname : {app.appname}</h3>
                            <h3>Client ID : {app.client_id}</h3>
                            <h3>Client Secret : {app.client_secret}</h3>
                            <hr/>
                        </div>
                    )
                }) : <div></div>}
            </div>
        )
    }
}

export default Register;