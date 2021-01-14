import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import React, { useEffect, useRef } from 'react'
import StarIcon from '@material-ui/icons/Star';
import TodayIcon from '@material-ui/icons/Today';
import { useTvToWatch } from '../../../useTvToWatch/useTvToWatch';
import './TvToWatchGroup.scss'
import TvToWatchContainer from '../TvToWatchContainer/TvToWatchContainer';
function TvToWatchGroup() {  
  const [value, setValue] = React.useState(0)
  const {getTvTopRated,getTvAiringToday} = useTvToWatch()
  const refGetTvTopRated = useRef(getTvTopRated)
  useEffect(()=>{
    refGetTvTopRated.current()
  },[])
  return (
    <div className="tvToWatchGroup">
       <div className="tvToWatchGroupWrap">
        <h1>Tv to watch</h1>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{width : '320px'}}
        >
          <BottomNavigationAction onClick={getTvTopRated} label="Top Rated" icon={<StarIcon/>} />
          <BottomNavigationAction onClick={getTvAiringToday} label="Airing Today" icon={<TodayIcon/>} />
        </BottomNavigation>
      </div>
      <TvToWatchContainer/>
    </div>
  )
}

export default TvToWatchGroup
