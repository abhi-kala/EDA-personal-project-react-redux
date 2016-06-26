import { realTimeSearch } from '../actions'
import { connect } from 'react-redux'

import jobsList from '../components/jobslist'


const mapStateToProps = (state) => {
    const searchString = state.searchString.trim().toLowerCase()
    console.log("logging searchstring", searchString);
    if(searchString.length > 0){
      const sortedJobs = state.jobs.filter((job) => {
        return job.title.toLowerCase().match( searchString )
        console.log(sortedJobs, "logging sorted jobs");
      })
    return { jobs: sortedJobs }
  }else {
    return { jobs: state.jobs}
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      realTimeSearch: (term) => {
      console.log('running realTimeSearch', term);
      dispatch(realTimeSearch(term))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(jobsList)
