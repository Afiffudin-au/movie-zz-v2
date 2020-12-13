import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/homeComponents/Home/Home';
import MovieDetail from './components/secondPagesComponents/MovieDetail/MovieDetail';
import SearchResult from './components/secondPagesComponents/SearchResult/SearchResult';
import Navbar from './components/usedAnyComponents/Navbar/Navbar';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/movies-catagory">

          </Route>
          <Route path="/detail">
            <MovieDetail/>
          </Route>
          <Route path="/search-result">
            <SearchResult/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
