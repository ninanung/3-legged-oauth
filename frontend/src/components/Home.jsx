import React from 'react';
import {Link} from 'react-router-dom';
import cookie from '../cookie';

class Home extends React.Component {
    logout = () => {
        cookie.deleteCookie('user_id');
        window.location.href = '/login';
    }

    render() {
        return (
            <div>
                <h1>Sample Service</h1>
                <h2>This is sample service home page.</h2> 
                <Link to='/register'>Register App</Link>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;