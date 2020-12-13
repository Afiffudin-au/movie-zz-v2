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
import Movie from './components/secondPagesComponents/Movie/Movie';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/movies-page">
            <Movie/>
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
