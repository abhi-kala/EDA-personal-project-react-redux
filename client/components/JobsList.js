import React from 'react'
import JobsListContainer from '../containers/JobsListContainer'

export default (props) => (
  <ul>
    {props.jobs.map((job)=>{
      return <li key={job.id}>
        {job.title}{' '}{job.day}{' '}{job.money}{' '}{job.duration}
      </li>
    })}
  </ul>
)
