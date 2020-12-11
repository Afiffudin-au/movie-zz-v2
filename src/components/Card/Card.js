import React from 'react'
import LazyLoad from 'react-lazyload'
import { LightTooltip } from '../LightTooltip/LightTooltip'
import './Card.scss'
function Card({id,releaseDate,originalTitle,posterPath}) {
  const handleDetail = ()=>{  
    console.log('detail')
  }
  return (
    <div className="Card">
      <div onClick={handleDetail} className="Card-content" >
        <LazyLoad 
          width={150}
          height={200}
          >
          <LightTooltip enterDelay={10} title={`Movie Detail`} placement="top" arrow>
            <img src={posterPath} alt={''}/>
          </LightTooltip>
        </LazyLoad>
        <div className="Card_desc">
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
