import React from 'react';
import cookie from '../cookie';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }

    getEmail = (email) => {
        this.setState({
            email,
        })
    }

    componentWillMount() {
        const getEmail = this.getEmail;
        const headers = {
            Authorization: `bearer ${cookie.getCookie('token')}`
        }
        axios({
            method: 'get',
            url: 'http://localhost:3002/api/get/email',
            headers,
        })
        .then(function(res) {
            getEmail(res.data.email);
        })
        .catch(function(err) {
            alert(err);
        })
    }

    render() {
        return (
            <div>
                <h1>Sample Application</h1>
                <h2>Hi user! Is you email {this.state.email}?</h2>
            </div>
        )
    }
}

export default Home;