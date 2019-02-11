import React from 'react';
import Router from './Router.jsx';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        )
    }
}

export default App;