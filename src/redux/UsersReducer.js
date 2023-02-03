import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR,USER_DELETE_ERROR,USER_DELETE_REQUEST,USER_DELETE_SUCCESS} from './Reporttype'

const initialState = {
    loading : false,
    user : [],
    error : ''
}

const fetchUserreducer = (state = initialState ,action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading : false,
                user : action.payload,
                error : ''
            }
        case FETCH_USER_ERROR:
            return{
                loading : false,
                user : [],
                error : action.payload
            }
        default: return state
    }
}

export default fetchUserreducer