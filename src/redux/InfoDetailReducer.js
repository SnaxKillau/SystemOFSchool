import {FETCH_INFO_REQUEST,FETCH_INFO_SUCCESS,FETCH_INFO_ERROR,INFO_DELETE_REQUEST,INFO_DELETE_SUCCESS, INFO_DELETE_ERROR,INFO_POSTING_REQUEST,INFO_POSTING_SUCCESS,INFO_POSTING_ERROR,INFO_DETAIL_REQUEST,INFO_DETAIL_SUCCESS,INFO_DETAIL_ERROR} from './Reporttype'

const initialState = {
    loading : false,
    posts : [],
    error : ''
}

const infoDetailReducer = (state = initialState ,action) => {
    switch(action.type){
        case INFO_DETAIL_REQUEST:
            return {
                ...state,
                loading : true
            }
        case INFO_DETAIL_SUCCESS:
            return{
                loading : false,
                posts : action.payload,
                error : ''
            }
        case INFO_DETAIL_ERROR:
            return{
                loading : false,
                posts : [],
                error : action.payload
            }
        default: return state
    }
}

export default infoDetailReducer
