import { connect } from 'react-redux'

import jobsList from '../components/jobslist'


const mapStateToProps = (state) => (
  { jobs: state.jobs }
)

export default connect(mapStateToProps)(jobsList)
