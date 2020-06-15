import React from 'react';
import {fireAuth} from './../../configurations/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import EmailSignIn from './EmailSignIn';
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
 import firebase from 'firebase';

var uiConfig = {
  callbacks: { 
    signInSuccessWithAuthResult: function(currentUser, redirectUrl ){
      const userId = currentUser.uid;
      window.location.assign('/view_slots');
      return false;
    }
  },
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: [
        'profile',
        'email'
      ], 
      customParameters:{
        prompt: 'select_account'
      }
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        auth_type: 'reauthenticate'
      }
    }
  ]
}

function Auth() {
    return(
      <div>
      <EmailSignIn /> 
      <p style = {{textAlign: 'center'}}> or </p>
      <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth = {fireAuth}/>  
      </div>
    )
}

export default Auth;