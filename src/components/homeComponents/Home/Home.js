import React from 'react'
import AllMovies from '../AllMovies/AllMovies'
import Banner from '../Banner/Banner'
import MovieToWatchGroup from '../MovieToWatchGroup/MovieToWatchGroup'
import PopularGroup from '../PopularGroup/PopularGroup'
import TvToWatchGroup from '../TvToWatchGroup/TvToWatchGroup'

function Home() {
  return (
    <>
      <Banner />

      <PopularGroup />
      <MovieToWatchGroup />
      <TvToWatchGroup />

      <AllMovies />
    </>
  )
}

export default Home
