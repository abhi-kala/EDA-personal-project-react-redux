import React from 'react'


export default (props) => (
  <div>
    <input type ="text"  onChange={(e)=>(props.realTimeSearch(e.target.value))}  placeholder="type here"/>
    <ul>
      {props.jobs.map((job)=>{
        return <li key={job.id}>
          {job.title}{' '}{job.day}{' '}{job.money}{' '}{job.duration}
        </li>
      })}
    </ul>
  </div>
)
