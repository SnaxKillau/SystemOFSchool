import {POSTS_DETAIL_REQUEST, POSTS_DETAIL_SUCCESS, POST_DETAIL_ERORR} from "../redux/Reporttype"

const initialState = {
    loading : false,
    posts : [],
    error : ''
}

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case POSTS_DETAIL_REQUEST:
            return {
                ...state,
                loading : true
            }
        case POSTS_DETAIL_SUCCESS:
            return{
                loading : false,
                posts : action.payload,
                error : ''
            }
        case POST_DETAIL_ERORR:
            return{
                loading : false,
                posts : [],
                error : action.payload
            }
        default: return state
    }
}

export default reducer
