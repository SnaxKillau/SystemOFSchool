import { combineReducers } from "redux";
import reportReducer from './ReportReducer'
import UserReducer from "./UserReducer";


const rootReducer = combineReducers({
    report:  reportReducer,
    users : UserReducer
})
export default rootReducer