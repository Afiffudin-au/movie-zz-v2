import React from 'react'
import { LightTooltip } from '../LightTooltip/LightTooltip'
import './PopularCard.scss'
function PopularCard() {
  const handleDetail = ()=>{  

  }
  return (
    <div className="popularCard">
      <div onClick={handleDetail} className="popularCard-content" >
         {/* <LazyLoad 
          width={150}
          height={200}
          > */}
        <LightTooltip enterDelay={10} title={`Movie Detail`} placement="top" arrow>
          <img src="https://image.tmdb.org/t/p/original/4n8QNNdk4BOX9Dslfbz5Dy6j1HK.jpg" alt=""/>
        </LightTooltip>
        {/* </LazyLoad> */}
        <div className="popularCard_desc">
          <h1>{'titledddddddddddd'}</h1>
          <p>{'12-12-2020'}</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCard
