import { REPORT_DETAIL_REQUEST,REPORT_DETAIL_SUCCESS,REPORT_DETAIL_ERROR,REPORT_DETAIL_ID } from "./Reporttype"

 
const initialState = {
    loading : false,
    report : [],
    error : '',
    
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case REPORT_DETAIL_REQUEST:
            return {
                ...state,
                loading : true
            }
        case REPORT_DETAIL_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error : ''
            }
        case REPORT_DETAIL_ERROR:
            return{
                loading : false,
                report : [],
                error : action.payload
            }
      
        default: return state
    }
}

export default reducer