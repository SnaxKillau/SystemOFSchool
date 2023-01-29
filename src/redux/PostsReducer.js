import {FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_ERORR,POSTS_DETAIL_REQUEST, POSTS_DETAIL_SUCCESS,OST_DETAIL_ERORR} from "../redux/Reporttype"

const initialState = {
    loading : false,
    posts : [],
    error : ''
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_POSTS_SUCCESS:
            return{
                loading : false,
                posts : action.payload,
                error : ''
            }
        case FETCH_POSTS_ERORR:
            return{
                loading : false,
                posts : [],
                error : action.payload
            }
        default: return state
    }
}

export default reducer
