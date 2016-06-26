import React from 'react'
import JobsListContainer from '../containers/JobsListContainer'
import AddJob from './AddJob'


export default (props) => (
  <div>
      {props.menu.map((menuItem) =>{
        return <button key={menuItem.id} onClick={()=>props.selectMenu(menuItem.id)}>{menuItem.title}</button>
      })}
      {props.selectedMenu === 1 && <JobsListContainer/>}
      {props.selectedMenu === 2 && <AddJob/>}
  </div>
)
