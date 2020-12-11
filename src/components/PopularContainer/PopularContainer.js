import React from 'react'
import { useSelector } from 'react-redux'
import { selectPopularBlock } from '../../features/movieSlice'
import { StyledLinearProgress } from '../LoadingProgress/LoadingProgress'
import PopularCard from '../PopularCard/PopularCard'
import './PopularContainer.scss'
function PopularContainer() {
  const {populars,loading} = useSelector(selectPopularBlock)
  const posterUrl = 'https://image.tmdb.org/t/p/original'
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
            <PopularCard URL={URL} id={item.id} releaseDate={item.release_date || item.first_air_date} originalTitle={item.original_title || item.original_name} posterPath={`${posterUrl}${item.poster_path}`} key={item.id} />
          ))
          }
        </div>
      </div>
    </>
  )
}

export default PopularContainer
