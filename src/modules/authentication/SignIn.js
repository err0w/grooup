import React from 'react';
import Auth from './Auth';
import Copyright from '../Copyright'
import './../../App.css';  

function SignIn() {
  return (
    <React.StrictMode>
        <Auth />
        <Copyright/>
    </React.StrictMode>
  );
}

export default SignIn;
