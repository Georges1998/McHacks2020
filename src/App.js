import React from 'react';
import {Switch, Route} from "react-router-dom";
import { auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Contact from './components/contactus/contactus.component';
import Shelter from "./components/shelter/shelter.component"


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
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
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/signin' component={SignInAndSignUpPage} />
          <Route path='/shelter' component={Shelter} />
        </Switch>
        <About></About>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;