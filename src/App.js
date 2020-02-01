import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import {ShelterList} from "./components/shelter-list/shelter-list.component";

import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Contact from './components/contactus/contactus.component';
import ShelterPage from "./pages/shelter/shelter.component"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shelters:[],
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users=>this.setState({shelters:users}))    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {shelters} = this.state;
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <ShelterList shelters={shelters}></ShelterList>
        <About></About>
       
        <Contact></Contact>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);