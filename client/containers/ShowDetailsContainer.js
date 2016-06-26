import { connect } from 'react-redux'

import ShowDetails from '../components/ShowDetails'


const mapStateToProps = (state) => {
  const jobDetails = state.jobs.filter((job) => {
    return (job.id === state.selectedJob)
  })[0]
  console.log('logging the selected job',jobDetails);
  return {
    job: jobDetails
  }
}

export default connect(mapStateToProps)(ShowDetails)
