import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import NavbarSearch from './NavbarSearch/NavbarSearch'
import { useGetMovies } from '../../../useMovies/useGetMovies'
import { useGetTvShow } from '../../../useTvShows/useGetTvShows'
import MenuIcon from '@material-ui/icons/Menu'
function Navbar() {
  const {
    getMoviePopular,
    getMovieNowPlaying,
    getMovieUpcoming,
    getMovieTopRated,
  } = useGetMovies()
  const { getTvPopular, getTvAiringToday, getTvLatest, getTvTopRated } =
    useGetTvShow()
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <button
        className='navbar-toggler ml-auto'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <MenuIcon style={{ fontSize: '32px', color: 'white' }} />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item dropdown'>
            <Link
              to='/'
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Movies
            </Link>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              <Link
                onClick={() => getMoviePopular()}
                to='/movies-page'
                className='dropdown-item'>
                Popular
              </Link>
              <Link
                onClick={() => getMovieNowPlaying()}
                to='/movies-page'
                className='dropdown-item'>
                Now Playing
              </Link>
              <Link
                onClick={() => getMovieUpcoming()}
                to='/movies-page'
                className='dropdown-item'>
                Upcoming
              </Link>
              <Link
                onClick={() => getMovieTopRated()}
                to='/movies-page'
                className='dropdown-item'>
                Top Rated
              </Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <Link
              to='/'
              className='nav-link dropdown-toggle'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Tv Shows
            </Link>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              <Link
                onClick={() => getTvPopular()}
                to='/tv-page'
                className='dropdown-item'>
                Popular
              </Link>
              <Link
                onClick={() => getTvAiringToday()}
                to='/tv-page'
                className='dropdown-item'>
                Airing Today
              </Link>
              <Link
                onClick={() => getTvLatest()}
                to='/tv-page'
                className='dropdown-item'>
                Latest
              </Link>
              <Link
                onClick={() => getTvTopRated()}
                to='/tv-page'
                className='dropdown-item'>
                Top Rated
              </Link>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <Link
              to='/'
              className='nav-link dropdown-toggle'
              id='navbarDropdownMenuLink'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              People
            </Link>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'>
              <Link to='/' className='dropdown-item'>
                Popular People
              </Link>
            </div>
          </li>
        </ul>
        <NavbarSearch />
      </div>
    </nav>
  )
}

export default Navbar
