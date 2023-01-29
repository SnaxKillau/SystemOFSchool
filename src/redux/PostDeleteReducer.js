import {POST_DELETE_ERORR,POST_DELETE_REQUEST,POST_DELETE_SUCCESS} from './Reporttype'

const PostState = {
    loading : false,
    report : '',
    error : '',
    
}

const deletepostReducer = (state = PostState , action)=> {
    switch(action.type){
    
        case POST_DELETE_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case POST_DELETE_SUCCESS:
            return{
                loading : false,
                report : action.payload,
                error: ''
            }
        case POST_DELETE_ERORR:
            return{
                loading : false,
                report : '',
                error : action.payload
            }
        default :return state
    }
}
export default deletepostReducer;
