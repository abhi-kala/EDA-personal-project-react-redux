import React from 'react'

export default (props) => {
  if (props.job) {
    return(
      <div>
      <h2>Details</h2>
      <p>{props.job.description}</p>
      <button onClick={props.hideDetails}>Hide Details</button>
    </div>
  )}
  return null
}
