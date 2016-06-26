import React from 'react'
import ShowDetailsContainer from '../containers/ShowDetailsContainer'



export default (props) => (
  <div>
    <input type ="text"  onChange={(e)=>(props.realTimeSearch(e.target.value))}  placeholder="type here"/>
    <ul>
      {props.jobs.map((job)=>{
        return <li key={job.id}>
          <p>Title:{' '}{job.title}<br/>{' '}Day:{job.day}{' '}Earn:${job.money}{' '}Job Duration: {job.duration}</p>
          {<button onClick={()=>props.showDetails(job.id)}>Show Details</button>}
          {job.id === props.selectedJob && <ShowDetailsContainer/>}
        </li>
      })}
    </ul>

  </div>
)
