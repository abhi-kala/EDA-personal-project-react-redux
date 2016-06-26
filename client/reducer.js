import { REAL_TIME_SEARCH, SELECT_MENU, ADD_JOB, SHOW_DETAILS, HIDE_DETAILS } from './actions'

import { INITIAL_STATE } from './data/initialState'


export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case REAL_TIME_SEARCH:
      return Object.assign({}, state, {searchString:action.term})
    case SELECT_MENU:
      return Object.assign({}, state, {selectedMenu:action.id})
    case SHOW_DETAILS:
      return Object.assign({}, state, {selectedJob:action.id})
    case HIDE_DETAILS:
      return Object.assign({}, state, {selectedJob:null})
    default:
      return state
  }
}
