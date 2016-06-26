import { connect } from 'react-redux'

import Menu from '../components/Menu'
import { selectMenu } from '../actions'



const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    selectedMenu: state.selectedMenu
   }
}

const mapDispatchToProps = (dispatch) => {
  return { selectMenu: (id) => {
    dispatch(selectMenu(id))
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
