import React from 'react';
import {Switch, Route} from "react-router-dom";
import { auth } from './firebase/firebase.utils';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Contact from './components/contactus/contactus.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        <About></About>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;