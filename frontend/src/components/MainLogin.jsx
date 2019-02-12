import React from 'react';
import Login from './Login.jsx';

class MainLogin extends React.Component {
    render() {
        return (
            <div>
                <h1>To the Sample Service</h1>
                <Login url='http://localhost:3002/api/sign/login'/>
            </div>
        )
    }
}

export default MainLogin;