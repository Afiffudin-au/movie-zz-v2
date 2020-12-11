import React from 'react'
import { useSelector } from 'react-redux'
import { selectPopularBlock } from '../../features/movieSlice'
import { StyledLinearProgress } from '../LoadingProgress/LoadingProgress'
import './PopularContainer.scss'
import Card from '../Card/Card'
function PopularContainer() {
  const {populars,loading} = useSelector(selectPopularBlock)
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
            <Card id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${process.env.REACT_APP_POSTER_URL}${item.poster_path}`} key={item.id} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default PopularContainer
