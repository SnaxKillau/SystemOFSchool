import {POST_REPORT_REQUEST,POST_REPORT_SUCCESS,POST_REPORT_ERORR} from './Reporttype'

const PostingState = {
    loading : false,
    report : '',
    error : '',
    
}

const postReportReducer = (state = PostingState , action)=> {
    switch(action.type){
    
        case POST_REPORT_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case POST_REPORT_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error: ''
            }
        case POST_REPORT_ERORR:
            return{
                loading : false,
                report : '',
                error : action.payload
            }
        default :return state
    }
}
export default postReportReducer;