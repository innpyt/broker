import {combineReducers} from "redux";
import financialItem from './financialItemReducer'
import auth from './auth'

export default combineReducers({
    financialItem,
    auth
})