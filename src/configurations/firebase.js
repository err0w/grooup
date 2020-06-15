
import * as firebase from 'firebase';

//configurations for firebase projectname: interviewApp
var config = {
    apiKey: "AIzaSyC_pEZ06UzC5MF8CTJzfems-mZ_kpH-miY",
    authDomain: "interviewapp-71ef9.firebaseapp.com",
    databaseURL: "https://interviewapp-71ef9.firebaseio.com",
    projectId: "interviewapp-71ef9",
    storageBucket: "interviewapp-71ef9.appspot.com",
    messagingSenderId: "568360617451",
    appId: "1:568360617451:web:13fcdfa5a34954d1e285ae",
    measurementId: "G-C34DDE0N8J"
};

var firebaseApp = firebase.initializeApp(config);
export const fireAuth = firebaseApp.auth();