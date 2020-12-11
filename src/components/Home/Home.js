import React from 'react'
import Banner from '../Banner/Banner'
import MovieToWatchContainer from '../MovieToWatchContainer/MovieToWatchContainer'
import MovieToWatchGroup from '../MovieToWatchGroup/MovieToWatchGroup'
import PopularContainer from '../PopularContainer/PopularContainer'
import PopularGroup from '../PopularGroup/PopularGroup'

function Home() {
  return (
    <>
     <Banner/> 
     
     <PopularGroup/>
     <PopularContainer/>

     <MovieToWatchGroup/>
     <MovieToWatchContainer/>
    </>
  )
}

export default Home
