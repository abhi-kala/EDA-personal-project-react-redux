import React from 'react'
import JobsListContainer from '../containers/JobsListContainer'

export default React.createClass({
  render () {
    return (
      <div>
        <h1>Jobs</h1>
        <JobsListContainer/>
      </div>
    )
  }
})
