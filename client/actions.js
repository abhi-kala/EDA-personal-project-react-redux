export const REAL_TIME_SEARCH = 'REAL_TIME_SEARCH'
export const SELECT_MENU = 'SELECT_MENU'


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
