
import {CONFIRM_ADMIN} from './Reporttype'

const initialState = {
    admin : false
}

const UserReducer = (state = initialState , action) => {
    switch(action.type){
        case CONFIRM_ADMIN:
            return{
                ...state,
                admin:true
            }
        default:
            return state
                
    }
}
export default UserReducer