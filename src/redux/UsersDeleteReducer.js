import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR,USER_DELETE_ERROR,USER_DELETE_REQUEST,USER_DELETE_SUCCESS} from './Reporttype'
const userState = {
    loading : false,
    user : '',
    error : '',
    
}

const deleteUserReducer = (state = userState , action)=> {
    switch(action.type){
    
        case USER_DELETE_REQUEST:
          return{
            ...state,
            loading : true
          }  
        case USER_DELETE_SUCCESS:
            return{
                loading : false,
                user : action.payload,
                error: ''
            }
        case USER_DELETE_ERROR:
            return{
                loading : false,
                user : '',
                error : action.payload
            }
        default :return state
    }
}
export default deleteUserReducer;