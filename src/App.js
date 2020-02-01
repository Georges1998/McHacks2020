import React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (

    <div className="App">
     <Route path='/signin' component={SignInAndSignUpPage} />
    </div>

  );
}

export default App;
