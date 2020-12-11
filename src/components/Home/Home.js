import React from 'react'
import Banner from '../Banner/Banner'
import MovieToWatchContainer from '../MovieToWatchContainer/MovieToWatchContainer'
import MovieToWatchGroup from '../MovieToWatchGroup/MovieToWatchGroup'
import PopularContainer from '../PopularContainer/PopularContainer'
import PopularGroup from '../PopularGroup/PopularGroup'
import TvToWatchContainer from '../TvToWatchContainer/TvToWatchContainer'
import TvToWatchGroup from '../TvToWatchGroup/TvToWatchGroup'

function Home() {
  return (
    <>
     <Banner/> 

     <PopularGroup/>
     <PopularContainer/>

     <MovieToWatchGroup/>
     <MovieToWatchContainer/>

     <TvToWatchGroup/>
     <TvToWatchContainer/>
    </>
  )
}

export default Home
