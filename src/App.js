import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './modules/authentication/SignIn';
import SignUp from './modules/authentication/SignUp'
import ViewSlots from './modules/user-modules/view_slots';
import SetInterview from './modules/user-modules/setInterview';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProtectedRoute from './HOCs/ProtectedRoute'
import {fireAuth} from './configurations/firebase'
import firebase from 'firebase';

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
                <Router>
                <Switch>
                <ProtectedRoute
                    exact path = '/view_slots'
                    component = {ViewSlots} />
                <Route path = "/setInterview" component={SetInterview} />
                <Route exact path = "/" component ={SignIn}/>
                <Route path = '/signup' component={SignUp} />
                </Switch>
                </Router>
        )
    }
    
}

export default App;