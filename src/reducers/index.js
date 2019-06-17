import { combineReducers } from 'redux'
import counter from './counter'
import item from './item'

export default combineReducers({
  counter,
  item
})
