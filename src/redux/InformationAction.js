import axios from 'axios'
import {FETCH_INFO_REQUEST,FETCH_INFO_SUCCESS,FETCH_INFO_ERROR,INFO_DELETE_REQUEST,INFO_DELETE_SUCCESS, INFO_DELETE_ERROR,INFO_POSTING_REQUEST,INFO_POSTING_SUCCESS,INFO_POSTING_ERROR,INFO_DETAIL_REQUEST,INFO_DETAIL_SUCCESS,INFO_DETAIL_ERROR} from './Reporttype'

const fetchInfoRequest =() => {
    return{
        type : FETCH_INFO_REQUEST
    }
}
const fetchInfoSuccess = (data) => {
    return{
        type : FETCH_INFO_SUCCESS,
        payload : data
    }
}
const fetchInfoError = (data) => {
    return {
        type : FETCH_INFO_ERROR,
        payload : data
    }
}
export const fetchInfo = () => {
    return (dispatch) =>{
        dispatch(fetchInfoRequest())
        axios.get("https://strapi-production-f9be.up.railway.app/api/informations",
        {
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        }).then((res) => (dispatch(fetchInfoSuccess(res.data))))
        .catch((e)=> {dispatch(fetchInfoError(e))})
    }

}
// this function for delete information from API
const deleteInfoRequest = () => {
    return{
        type : INFO_DELETE_REQUEST
    }
}
const deleteInfoSuccess = (message) => {
    return {
        type : INFO_DELETE_SUCCESS,
        payload : message
    }
}
const deleteInfoError = (message) => {
    return{
        type : INFO_DELETE_ERROR,
        message : message
    }
}
export const deleteInfo = (id) => {
    return(dispatch)=> {
        dispatch(deleteInfoRequest())
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/informations/${id}`,{
        headers:{
            Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
        }
    }).then(() => dispatch(deleteInfoSuccess("Succesfully" , dispatch(fetchInfo()))))
    .catch((err) => dispatch(deleteInfoError(err.message)))
}      
}
// this function for request Information detail from API by ID
const infoDetailRequest = () =>{
    return{
        type : INFO_DETAIL_REQUEST
    }
}
const infoDetailSuceess = (data) =>{
    return{
        type : INFO_DETAIL_SUCCESS,
        payload : data
    }
}
const infoDetailError = (err) =>{
    return{
        type : INFO_DETAIL_ERROR,
        payload : err
    }
}
export const infoDetail = (id)=>{
    return (dispatch) =>{
        dispatch(infoDetailRequest())
        axios.get(`https://strapi-production-f9be.up.railway.app/api/informations/${id}`,{
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
            }
        }).then((res) => dispatch(infoDetailSuceess(res.data)))
        .catch((err) => {dispatch(infoDetailError(err.message))})

    }
}
// This function for posting info to API
const postingInfoRequest = () => {
    return{
        type : INFO_POSTING_REQUEST
    }
}
const postingInfoSuccess =(data) =>{
    return{
        type: INFO_POSTING_SUCCESS,
        payload : data
    }
}
const postingInfoError = (message) => {
    return{
        type : INFO_POSTING_ERROR,
        payload : message
    }
}
export const postingInfo = (title,username,information) => {
    return (dispatch) => {
        dispatch(postingInfoRequest())
        axios.post("https://strapi-production-f9be.up.railway.app/api/informations", {
                "data":{
                    "title" :  title,
                    "username": username,
                    "information": information,
                },
                headers:{
                    Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
                }
        },)
    }
}