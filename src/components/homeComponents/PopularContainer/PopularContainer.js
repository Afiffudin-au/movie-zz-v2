import React from 'react'
import { useSelector } from 'react-redux'
import { StyledLinearProgress } from '../../extraComponents/LoadingProgress/LoadingProgress'
import './PopularContainer.scss'
import { selectPopularBlock } from '../../../features/movieSlice'
import Card from '../../Card/Card'
function PopularContainer() {
  const {populars,loading,url} = useSelector(selectPopularBlock)
  return (
    <>
      {
        loading && 
        <div className="loading">
          <StyledLinearProgress/>
        </div>
      }
      <div className="popularContainer">
        <div className="popularContainer-items">
          {
          populars?.results?.map((item,index)=>(
            <Card url={url} id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} voteAverage={item.vote_average || 0} key={item.id} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default PopularContainer
