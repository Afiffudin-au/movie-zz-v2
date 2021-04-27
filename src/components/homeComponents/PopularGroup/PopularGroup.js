import React, { useEffect, useRef } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import MovieIcon from '@material-ui/icons/Movie'
import TheatersIcon from '@material-ui/icons/Theaters'
import './PopularGroup.scss'
import { useGetPopular } from '../../../usePopular/useGetPopular'
import PopularContainer from '../PopularContainer/PopularContainer'
function PopularGroup() {
  const [value, setValue] = React.useState(0)
  const {
    getMoviePopular,
    getTvPopular,
    getMoviePopularInTheater,
  } = useGetPopular()
  const refGetMoviePopular = useRef(getMoviePopular)
  useEffect(() => {
    refGetMoviePopular.current()
  }, [])
  return (
    <div className='popularGroup'>
      <div className='popularWrap'>
        <h1>What's Popular</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
          showLabels
          style={{ width: '320px' }}>
          <BottomNavigationAction
            onClick={getMoviePopular}
            label='Streaming'
            icon={<MovieIcon />}
          />
          <BottomNavigationAction
            onClick={getTvPopular}
            label='On Tv'
            icon={<LiveTvIcon />}
          />
          <BottomNavigationAction
            onClick={getMoviePopularInTheater}
            label='In Theaters'
            icon={<TheatersIcon />}
          />
        </BottomNavigation>
      </div>
      <PopularContainer />
    </div>
  )
}

export default PopularGroup
