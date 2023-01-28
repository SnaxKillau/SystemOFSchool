import { combineReducers } from "redux";
import reportReducer from './ReportReducer'
import UserReducer from "./UserReducer";
import deletereportReducer from "./ReportDeleteReducer";


const rootReducer = combineReducers({
    report:  reportReducer,
    users : UserReducer,
    deletereport : deletereportReducer
})
export default rootReducer