import React from 'react';
import {fireAuth} from '../configurations/firebase';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component{
    render(){
        const Component = this.props.component;
        var user = localStorage.getItem('user');
        console.log(user);
        const isAuthenticated = ((user !== 'null') && user !== null && user !== undefined)?true:false
        console.log(isAuthenticated)
        return isAuthenticated?(
            <Component/>
        ):(
            <Redirect to ={{pathname: '/'}} />
        )
    }
}

export default ProtectedRoute;