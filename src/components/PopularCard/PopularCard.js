import React from 'react'
import LazyLoad from 'react-lazyload'
import { LightTooltip } from '../LightTooltip/LightTooltip'
import './PopularCard.scss'
function PopularCard({URL,id,releaseDate,originalTitle,posterPath}) {
  const handleDetail = ()=>{  
    console.log('detail')
  }
  return (
    <div className="popularCard">
      <div onClick={handleDetail} className="popularCard-content" >
        <LazyLoad 
          width={150}
          height={200}
          >
          <LightTooltip enterDelay={10} title={`Movie Detail`} placement="top" arrow>
            <img src={posterPath} alt={''}/>
          </LightTooltip>
        </LazyLoad>
        <div className="popularCard_desc">
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
