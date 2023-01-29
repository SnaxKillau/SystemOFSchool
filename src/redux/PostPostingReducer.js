import {POST_POSTING_ERROR,POST_POSTING_SUCCESS , POST_POSTING_REQUEST} from './Reporttype'

const PostingState = {
    loading : false,
    report : '',
    error : '',
    
}

const postPostingReducer = (state = PostingState , action)=> {
    switch(action.type){
    
        case POST_POSTING_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case POST_POSTING_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error: ''
            }
        case POST_POSTING_ERROR:
            return{
                loading : false,
                report : '',
                error : action.payload
            }
        default :return state
    }
}
export default postPostingReducer;