import React from 'react';
import './App.css';
import logo from './Logo.png';
import {
          BrowserRouter as Router,
          Switch,
          Route,
          Link
        } from 'react-router-dom';
import { useEffect } from 'react';
import {CalcKilos, CalcPounds } from './View/Index.js';

export default function App() {

  useEffect(()=> {
    alert('Welcome to my page!')
  })

  return (
    <Router>
    <>
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo" className='App-logo' />;
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
