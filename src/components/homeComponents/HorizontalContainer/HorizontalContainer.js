import React from 'react'
import './HorizontalContainer.scss'
function HorizontalContainer({children}) {
  return (
    <div className="horizontalContainer">
      <div className="horizontalContainer-items">
        {
          children
        }
      </div>
    </div>
  )
}

export default HorizontalContainer
