import React from 'react';
import queryString from 'query-string';

class Auth extends React.Component {
    componentWillMount() {
        const query = queryString.parser(window.location.search);
        console.log(query);
    }
}

export default Auth;