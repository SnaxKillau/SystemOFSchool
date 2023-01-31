import axios from 'axios'
import {FETCH_FOUND_REQUEST,FETCH_FOUND_SUCCESS,FETCH_FOUND_ERROR,DELETE_FOUND_REQUEST,DELETE_FOUND_SUCCESS,DELETE_FOUND_ERORR, VIEW_FOUND_REQUEST,VIEW_FOUND_SUCCESS,VIEW_FOUND_ERROR,POSTING_FOUND_REQUEST, POSTING_FOUND_SUCCESS,POSTING_FOUND_ERROR} from './Reporttype'

const fetchFoundRequest = () => {
    return {
        type : FETCH_FOUND_REQUEST
    }
}
const fetchFoundSuccess = (data) => {
    return {
        type: FETCH_FOUND_SUCCESS,
        payload: data
    }
}
const fetchFoundError = (message) => {
    return {
        type : FETCH_FOUND_ERROR,
        payload : message
    }
}
export const fetchFound = () => {
    return(dispatch) => {
        dispatch(fetchFoundRequest())
        axios.get("https://strapi-production-f9be.up.railway.app/api/founds" , {
            headers : {
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
            }
        }).then((res) => dispatch(fetchFoundSuccess(res.data)))
        .catch((err) => dispatch(fetchFoundError(err.message)))
    }
}
const deleteFoundRequest = () => {
    return {
        type : DELETE_FOUND_REQUEST
    }
}
const deleteFoundSuccess = (data) => {
    return {
        type : DELETE_FOUND_SUCCESS,
        payload : data
    }
}
const deleteFoundError = (message) => {
    return {
        type : DELETE_FOUND_ERORR,
        payload : message
    }
}
export const deleteFound = (id) => {
    return (dispatch) => {
        dispatch(deleteFoundRequest())
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/founds/${id}`,{
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
            }
        })   .then(() => dispatch(deleteFoundSuccess("Successfully"), dispatch(fetchFound())))
        .catch((err) => dispatch(deleteFoundError(err.message)))
    }
}
const viewFoundRequest = ()=> {
    return {
        type : VIEW_FOUND_REQUEST
    }
}
 const viewFoundSuccess =(foundData) =>{
    return {
        type : VIEW_FOUND_SUCCESS,
        payload : foundData
    }
} 
 const viewFoundError = (err) => {
    return {
        type : VIEW_FOUND_ERROR,
        payload : err
    }
}
export const viewFound = (id)=> {
    return(dispatch) => {
        dispatch(viewFoundRequest)
        axios.get(`https://strapi-production-f9be.up.railway.app/api/founds/${id}`,{
                headers:{
                    Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
                }
        }).then((res) => dispatch(viewFoundSuccess(res.data)))
        .catch(err => dispatch(viewFoundError(err.message)))
    }
}
const postingRequire = () => {
    return {
        type : POSTING_FOUND_REQUEST
    }
} 
const postingSucess = (message) => {
    return {
        type : POSTING_FOUND_SUCCESS,
        payload: message
    }
}
const postingError = (message) => {
    return {
        type : POSTING_FOUND_ERROR,
        payload : message
    }
}
export const postingLostorFound = (type,item,unique,place,contact,title) => {
    return(dispatch) =>{
        dispatch(postingRequire())
        axios.post("https://strapi-production-f9be.up.railway.app/api/founds", {
            "data":{
                "type":type,
                "item":item,
                "unique":unique,
                "place":place,
                "contact":contact,
                "title":title


            },
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        }).then(() => dispatch(postingSucess("Successfully"),dispatch(fetchFound())))
        .catch((err) => {dispatch(postingError(err.message))})
    }
}
