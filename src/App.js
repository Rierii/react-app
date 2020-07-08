import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from 'react-router-dom';
import {CalcKilos, CalcPounds } from './View/Index.js';

export default function App() {
  return (
    <Router>
    <>
    <div className="App">
      <header className="App-header">
      <svg src={logo} alt="My logo" />
        <h1> Do you want to... </h1>
        <button> <Link to="/Pounds">Using Pounds</Link> </button> or <button> <Link to="/Kilos">Using Kilos</Link> </button>
      </header>
      <Switch>
         <Route path="/Kilos">
           <CalcKilos />
         </Route>
         <Route path="/Pounds">
           <CalcPounds />
         </Route>
       </Switch>
    </div>

    </>
    </Router>
  );
}
