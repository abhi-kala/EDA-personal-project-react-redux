import { connect } from 'react-redux'

import ShowDetails from '../components/ShowDetails'
import { hideDetails } from '../actions'


const mapStateToProps = (state) => {
  const jobDetails = state.jobs.filter((job) => {
    return (job.id === state.selectedJob)
  })[0]
  console.log('logging the selected job',jobDetails);
  return {
    job: jobDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetails: () => (
      dispatch(hideDetails())
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails)
