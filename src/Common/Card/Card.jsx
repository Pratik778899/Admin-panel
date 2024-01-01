import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div id="card-main">
        <h3 className='green-grade'>{props.title}</h3>
        <h4>{props.numbers}</h4>
    </div>
  )
}

export default Card