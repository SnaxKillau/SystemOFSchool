import { FETCH_REPORT_ERROR, FETCH_REPORT_REQUEST, FETCH_REPORT_SUCCESS } from "./Reporttype"

 
const initialState = {
    loading : false,
    report : [],
    error : ''
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case FETCH_REPORT_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_REPORT_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error : ''
            }
        case FETCH_REPORT_ERROR:
            return{
                loading : false,
                report : [],
                error : action.payload
            }
        default: return state
    }
}

export default reducer