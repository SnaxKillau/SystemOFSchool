import {DELETE_REPORT_REQUEST,DELETE_REPORT_SUCCESS,DELETE_REPORT_ERROR } from './Reporttype'
 
const ReportState = {
    loading : false,
    report : '',
    error : ''
}

const deletereportReducer = (state = ReportState , action)=> {
    switch(action.type){
        case DELETE_REPORT_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case DELETE_REPORT_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error: ''
            }
        case DELETE_REPORT_ERROR:
            return{
                loading : false,
                report : '',
                error : action.payload
            }
        default :return state
    }
}
export default deletereportReducer;
