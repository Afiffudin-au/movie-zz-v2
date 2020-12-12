import React from 'react'
import LazyLoad from 'react-lazyload'
import { LightTooltip } from '../extraComponents/LightTooltip/LightTooltip'
import StarRateIcon from '@material-ui/icons/StarRate';
import {amber} from '@material-ui/core/colors';
import './Card.scss'
import { useGetDetail } from '../../useDetail/useGetDetail';
import { useHistory } from 'react-router-dom';
function Card({url,mediaType,styleProps,id,releaseDate,originalTitle,posterPath,voteAverage}) {
  const {getDetail} = useGetDetail()
  const history = useHistory()
  const handleDetail = ()=>{  
    getDetail(id,url,mediaType)
    history.push('/detail')
  }
  return (
    <div className="Card" style={styleProps}>
      <div onClick={handleDetail} className="Card-content" >
        <LazyLoad 
          width={150}
          height={200}
          once={false}
          >
          <LightTooltip enterDelay={10} title={originalTitle || ''} placement="top" arrow>
            <img src={posterPath} alt={''}/>
          </LightTooltip>
        </LazyLoad>
        <div className="Card_desc">
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
        <div className="Card-star-rate bg-blue-600 rounded-full p-1 flex items-center">
          <StarRateIcon style={{color : amber[600]}} />
          <span>{voteAverage}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
