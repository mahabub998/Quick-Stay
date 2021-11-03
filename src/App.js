import React from 'react';
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Services from './Components/Services/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';

function App() {
  return (

  <Router>
  <Navbar />
  <Switch>
      <Route path="/home">
      <Home />
      </Route>
      <Route exact  path="/">
       <Home />
      </Route>
      <Route path="/users">
      <User />
      </Route>
      
      <Route path="/services">
      <Services />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
    </Switch>

</Router>
  );
}

export default App;
