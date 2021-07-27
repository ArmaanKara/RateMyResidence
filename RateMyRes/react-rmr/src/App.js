import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Components/pages/Home'



function App() {
  return (
    <div>
    <Router>
      <Navbar>Yo</Navbar>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
