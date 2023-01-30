import axios from 'axios'
import {FETCH_ANNOUNCEMENT_REQUEST,FETCH_ANNOUNCEMENT_SUCCESS,FETCH_ANNOUNCEMENT_ERROR,DELETE_ANNOUNCEMENT_REQUEST,DELETE_ANNOUNCEMENT_SUCCESS,DELETE_ANNOUNCEMENT_ERROR,POSTING_ANNOUNCEMENT_REQUEST,POSTING_ANNOUNCEMENT_SUCCESS,POSTING_ANNOUNCEMENT_ERROR,VIEW_ANNOUNCEMENT_REQUEST,VIEW_ANNOUNCEMENT_SUCCESS,VIEW_ANNOUNCEMENT_ERROR} from './Reporttype'


const fetchAnnouncementRequest = () =>{
    return{
        type : FETCH_ANNOUNCEMENT_REQUEST
    }
}
const fetchAnnouncementSuccess = (announcement) => {
    return{
        type : FETCH_ANNOUNCEMENT_SUCCESS,
        payload : announcement
    }
}
const fetchAnnouncementError = (error) => {
    return{
        type : FETCH_ANNOUNCEMENT_ERROR,
        payload : error
    }
}
export const fetchAnnouncement = () =>{

    return(dispatch) =>{
        dispatch(fetchAnnouncementRequest())
        axios.get("https://strapi-production-f9be.up.railway.app/api/announcements", {
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
             }
        }).then((res) => {dispatch(fetchAnnouncementSuccess(res.data))})
        .catch(e => {dispatch(fetchAnnouncementError(e.message))})
    }
}

// This function for delete announcements from API

const deleteAnnouncementRequest = () => {
    return {
        type : DELETE_ANNOUNCEMENT_REQUEST
    }
}
const deleteAnnouncementSuccess = (message) => {
    return {
        type : DELETE_ANNOUNCEMENT_SUCCESS,
        payload : message
    }
}
const deleteAnnouncementError = (message) => {
    return {
        type : DELETE_ANNOUNCEMENT_ERROR,
        payload : message
    }
}
export const deleteAnnouncement = (id) => {
    return (dispatch) => {
        dispatch(deleteAnnouncementRequest)
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/announcements/${id}`, {
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
             }
        }).then(() => 
            dispatch(deleteAnnouncementSuccess("Successfully"),dispatch(fetchAnnouncement()))

        ).catch((err) => {dispatch(deleteAnnouncementError(err.message))})
    }
}

// This function for view detail of annoucement by id from API 
export const viewAnnouncementRequest = ()=>{
    return {
        type : VIEW_ANNOUNCEMENT_REQUEST
    }
}
export const viewAnnouncementSuccess = (announcement) =>{
    return {
        type : VIEW_ANNOUNCEMENT_SUCCESS,
        payload : announcement
    }
}
export const viewAnnouncementErorr =(err) => {
    return {
        type : VIEW_ANNOUNCEMENT_ERROR,
        payload : err
    }
}
export const viewAnnouncementDetail = (id) => {
    return (dispatch) =>{
        dispatch(viewAnnouncementRequest())
        axios.get(`https://strapi-production-f9be.up.railway.app/api/announcements/${id}`, {
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
             }
        })
        .then((res) => dispatch(viewAnnouncementSuccess(res.data)))
        .catch((err)=> dispatch(fetchAnnouncementError(err.message)))
    }
}

// This for posting Announcement 

const postingAnnouncementRequest = ()=> {
    return {
        type: POSTING_ANNOUNCEMENT_REQUEST
    }
}
const postingAnnouncementSuccess = (message) => {
    return {
        type : POSTING_ANNOUNCEMENT_SUCCESS,
        payload : message
    }
}
const postAnnouncementError = (error) => {
    return{
        type : POSTING_ANNOUNCEMENT_ERROR,
        payload :error
    }
}
export const postAnnouncement = (title , information , photo) => {
    return (dispatch) => {
        dispatch(postingAnnouncementRequest())
        axios.post("https://strapi-production-f9be.up.railway.app/api/announcements", {
            "data":{
                "title" :  title,
                "information": information,
                "photo_url" : photo

            },
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        },).then(() => dispatch(postingAnnouncementSuccess("Successfully") , dispatch(fetchAnnouncement())))
        .catch(err => dispatch(postAnnouncementError(err.message)))
    }

}
