import { combineReducers } from 'redux'
import dataReducer from '../Reducer/DataReducer'
import cartReducer from '../Reducer/CartReducer'
import CategoryReducer from '../Reducer/CategoryReducer'
import SearchReducer from '../Reducer/SearchReducer'
export default combineReducers({
  dataReducer,
  cartReducer,
  CategoryReducer,
  SearchReducer
})
