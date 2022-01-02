import React, { useState } from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { amber } from '@material-ui/core/colors'
import './Card.scss'
import { useHistory } from 'react-router-dom'
import { useGetDetail } from '../../../useDetail/useGetDetail'
import { LightTooltip } from '../../extraComponents/LightTooltip/LightTooltip'
function Card({
  url,
  mediaType,
  styleProps,
  id,
  releaseDate,
  originalTitle,
  posterPath,
  voteAverage,
}) {
  const [display, setDipslay] = useState('none')
  const [imageLoaded, setImageLoaded] = useState(false)
  const { getDetail } = useGetDetail()
  const history = useHistory()
  const handleDetail = () => {
    getDetail(id, url, mediaType)
    history.push('/detail')
  }
  const handleImageLoad = () => {
    setImageLoaded(true)
    setDipslay('block')
  }
  return (
    <div className='Card' style={styleProps}>
      <div onClick={handleDetail} className='Card-content'>
        {!imageLoaded && <img src='/220x330.png' alt='' />}
        <LightTooltip
          enterDelay={10}
          title={originalTitle || ''}
          placement='top'
          arrow>
          <img
            onLoad={handleImageLoad}
            style={{ display: display }}
            src={posterPath}
            alt={posterPath}
          />
        </LightTooltip>
        <div className='Card_desc'>
          <h1>{originalTitle}</h1>
          <p>{releaseDate}</p>
        </div>
        <div className='Card-star-rate'>
          <StarRateIcon style={{ color: amber[600] }} />
          <span>{voteAverage}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
