import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import NavbarSearch from './NavbarSearch/NavbarSearch'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Movies
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/movie-popular" className="dropdown-item">
                Popular
              </Link>
              <Link to="/movie-now-playing" className="dropdown-item">
                Now Playing
              </Link>
              <Link to="/movie-upcoming" className="dropdown-item">
               Upcoming
              </Link>
              <Link to="/movie-top-rated" className="dropdown-item">
               Top Rated
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tv Shows
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/tv-popular" className="dropdown-item">
                Popular
              </Link>
              <Link to="/tv-airing-today" className="dropdown-item">
                Airing Today
              </Link>
              <Link to="/tv-on-tv" className="dropdown-item">
                On Tv
              </Link>
              <Link to="/tv-top-rated" className="dropdown-item">
                Top Rated
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              People
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/icon-all" className="dropdown-item">
                Popular People
              </Link>
            </div>
          </li>
        </ul>
        <NavbarSearch/>
      </div>
    </nav>
  )
}

export default Navbar
