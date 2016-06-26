export const REAL_TIME_SEARCH = 'REAL_TIME_SEARCH'
export const SELECT_MENU = 'SELECT_MENU'
export const SHOW_DETAILS = 'SHOW_DETAILS'
export const HIDE_DETAILS = 'HIDE_DETAILS'


export const realTimeSearch = (term) => (
  {
    type: REAL_TIME_SEARCH,
    term: term
  }
)

export const selectMenu = (id) => (
  {
    type: SELECT_MENU,
    id: id
  }
)

export const showDetails = (id) => (
  {
    type: SHOW_DETAILS,
    id: id
  }
)

export const hideDetails = () => (
  {
    type: HIDE_DETAILS
  }
)
