import { REAL_TIME_SEARCH, SELECT_MENU, ADD_JOB } from './actions'

import { INITIAL_STATE } from './data/initialState'


export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case REAL_TIME_SEARCH:
      return Object.assign({}, state, {searchString:action.term})
    case SELECT_MENU:
      return Object.assign({}, state, {selectedMenu:action.id})
    default:
      return state
  }
}
