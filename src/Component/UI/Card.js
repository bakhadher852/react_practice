import React from 'react'
import './Card.css'
const Card = (props) => {
  const classes = 'cardStyle ' + props.className
  return <div className={classes}>{props.children}</div>
}
export default Card
