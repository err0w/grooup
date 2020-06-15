import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './modules/authentication/SignIn';
import SignUp from './modules/authentication/SignUp'
import ViewSlots from './modules/user-modules/view_slots';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProtectedRoute from './HOCs/ProtectedRoute'
import {fireAuth} from './configurations/firebase'
import firebase from 'firebase';
// const ProtectedProfile = WithAuthProtection('/view_slots')(ViewSlots)

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({user: user})
                localStorage.setItem('user', JSON.stringify(user))
            } else{
                this.setState({user:null});
                localStorage.setItem('user', null);
            }
            
        })
    }
    
    render() {
        return(
            <React.StrictMode>
                <Router>
                <Route exact path = "/" component ={SignIn}/>
                <Route path = '/signup' component={SignUp} />
                <ProtectedRoute 
                    path = '/view_slots'
                    exact = {true}
                    component = {ViewSlots} />
                </Router>
            </React.StrictMode>
        )
    }
    
}

export default App;