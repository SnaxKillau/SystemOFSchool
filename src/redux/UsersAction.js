import axios from 'axios'
import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR,USER_DELETE_ERROR,USER_DELETE_REQUEST,USER_DELETE_SUCCESS} from './Reporttype'


const fetchUserRequire = () => {
    return {
        type : FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (data) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : data
    }
}
const fetchUserError = (err) =>{
    return{
        type : FETCH_USER_ERROR,
        payload :err
    }
}
export const fetchUser = () =>{
    return(dispatch) =>{
        dispatch(fetchUserRequire())
        axios.get("https://strapi-production-f9be.up.railway.app/api/admins", {
           headers:{
            Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
           }
        })
        .then( respone => {
         

            dispatch(fetchUserSuccess(respone.data))
        }).catch(err => {
            const errorMss = err.message
            dispatch(fetchUserError(errorMss))
        }) 
    }
}
const deleteUserRequest = ()=> {
    return{
        type : USER_DELETE_REQUEST
    }
}
const deleteUserSuccess = (message) =>{
    return{
        type : USER_DELETE_SUCCESS,
        payload : message
    }
}
const deleteUserError = (message) =>{
    return{
        type : USER_DELETE_ERROR,
        payload : message
    }
}
export const deleteUser  =(id) =>{
    return(dispatch)=>{
        dispatch(deleteUserRequest())
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/admins/${id}`,{
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        }).then(() => dispatch(deleteUserSuccess("Successfully"),dispatch(fetchUser())))
        .catch((err) => dispatch(deleteUserError(err.message)))
    }
}
