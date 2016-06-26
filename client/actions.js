export const REAL_TIME_SEARCH = 'REAL_TIME_SEARCH'

export const realTimeSearch = (term) => (
  {
    type: REAL_TIME_SEARCH,
    term: term
  }
)
