import React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"

function App() {
  return (

    <div className="App">
     <Route path="/signin" component={SignInSignUpPage}></Route>
    </div>

  );
}

export default App;
