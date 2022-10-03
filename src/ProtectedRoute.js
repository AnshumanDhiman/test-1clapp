import React from 'react'
import { Redirect } from 'react-router-dom'

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('token');
       if(this.props.pathName=="/signup"||this.props.pathName=="/login"){
           console.log("entered");
           return !isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/service' }} />
        );
       }
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;