import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
