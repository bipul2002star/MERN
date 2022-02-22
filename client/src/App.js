import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Bipul from './components/Bipul';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout'
import "./App.css";

import { Switch, Route } from 'react-router-dom'


import { initialState, reducer } from "../src/reducer/UseReducer"

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />

      </Route>
      <Route exact path="/bipul">

        <Bipul />
      </Route >

      <Route exact path="/contact">

        <Contact />
      </Route >

      <Route exact path="/about">

        <About />
      </Route >

      <Route exact path="/login">

        <Login />
      </Route >


      <Route exact path="/signup">

        <Signup />
      </Route >

      <Route exact path="/logout">

        <Logout />
      </Route >

      <Route >

        <ErrorPage />
      </Route >


    </Switch>

  )

}



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      
      <UserContext.Provider value = {{ state, dispatch }}>
      <Navbar />
          <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App
