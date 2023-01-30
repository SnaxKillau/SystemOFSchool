import {FETCH_ANNOUNCEMENT_REQUEST,FETCH_ANNOUNCEMENT_SUCCESS,FETCH_ANNOUNCEMENT_ERROR,DELETE_ANNOUNCEMENT_REQUEST,DELETE_ANNOUNCEMENT_SUCCESS,DELETE_ANNOUNCEMENT_ERROR,POSTING_ANNOUNCEMENT_REQUEST,POSTING_ANNOUNCEMENT_SUCCESS,POSTING_ANNOUNCEMENT_ERROR,VIEW_ANNOUNCEMENT_REQUEST,VIEW_ANNOUNCEMENT_SUCCESS,VIEW_ANNOUNCEMENT_ERROR} from './Reporttype'

const initialState = {
    loading : false,
    report : [],
    error : ''
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case FETCH_ANNOUNCEMENT_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_ANNOUNCEMENT_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error : ''
            }
        case FETCH_ANNOUNCEMENT_ERROR:
            return{
                loading : false,
                report : [],
                error : action.payload
            }
        default: return state
    }
}

export default reducer