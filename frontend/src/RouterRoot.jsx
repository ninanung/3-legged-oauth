import React from 'react';
import Routes from './Routes.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

class RouterRoot extends React.Component {
    render() {
        return (
            <Router>
                <Routes/>
            </Router>
        )
    }
}

export default RouterRoot;