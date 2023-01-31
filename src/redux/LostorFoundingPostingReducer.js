import {FETCH_FOUND_REQUEST,FETCH_FOUND_SUCCESS,FETCH_FOUND_ERROR,DELETE_FOUND_REQUEST,DELETE_FOUND_SUCCESS,DELETE_FOUND_ERORR, VIEW_FOUND_REQUEST,VIEW_FOUND_SUCCESS,VIEW_FOUND_ERROR,POSTING_FOUND_REQUEST, POSTING_FOUND_SUCCESS,POSTING_FOUND_ERROR} from './Reporttype'
const PostingState = {
    loading : false,
    report : '',
    error : '',
    
}

const lostPostingReducer = (state = PostingState , action)=> {
    switch(action.type){
    
        case POSTING_FOUND_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case POSTING_FOUND_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error: ''
            }
        case POSTING_FOUND_ERROR:
            return{
                loading : false,
                report : '',
                error : action.payload
            }
        default :return state
    }
}
export default lostPostingReducer;