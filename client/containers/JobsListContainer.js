import { realTimeSearch, showDetails } from '../actions'
import { connect } from 'react-redux'

import jobsList from '../components/jobslist'


const mapStateToProps = (state) => {
    const searchString = state.searchString.trim().toLowerCase()
    if(searchString.length > 0){
      const sortedJobs = state.jobs.filter((job) => {
        return job.title.toLowerCase().match( searchString )
      })
    return {
      jobs: sortedJobs,
      selectedJob: state.selectedJob
     }
  }else {
    return {
      jobs: state.jobs,
      selectedJob: state.selectedJob
    }
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      realTimeSearch: (term) => {
      dispatch(realTimeSearch(term))
    },
    showDetails: (id) => {
      dispatch(showDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(jobsList)
