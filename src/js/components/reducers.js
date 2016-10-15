import { combineReducers } from "redux"

// import tweets from "./tweetsReducer"
// import user from "./userReducer"

import menu from './menu/MainMenu.reducer'
import form from './form/Form.reducer'

export default combineReducers({
  menu,
  form
})
