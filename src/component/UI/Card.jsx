import React from 'react'

function Card(props) {
    const classes = 'card rounded-xl shadow-gray-950 shadow-xl ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card