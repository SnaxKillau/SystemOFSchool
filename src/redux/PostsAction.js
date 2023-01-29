import axios from "axios"
import {FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_ERORR,POSTS_DETAIL_REQUEST, POSTS_DETAIL_SUCCESS, POST_DETAIL_ERORR ,POST_DELETE_REQUEST,POST_DELETE_SUCCESS,POST_DELETE_ERORR, DELETE_REPORT_REQUEST, DELETE_REPORT_SUCCESS} from "../redux/Reporttype"
import {POST_POSTING_ERROR,POST_POSTING_SUCCESS , POST_POSTING_REQUEST} from './Reporttype'

// This function for request the data from post data (API)
export const fetchPostsRequest = () => {
    return {
        type : FETCH_POSTS_REQUEST
    }
}
export const fetchPostsSuccess = (posts) => {
    return {
        type : FETCH_POSTS_SUCCESS,
        payload : posts
    }
}
export const fetchPostsError = (err) => {
    return {
        type : FETCH_POSTS_ERORR,
        payload : err
    }
}
export const fetchPublicPosts = () => {
    return (dispatch) =>{
        dispatch(fetchPostsRequest)
        axios.get("https://strapi-production-f9be.up.railway.app/api/public-posts" , {
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
             }
        }).then((res) => {
            dispatch(fetchPostsSuccess(res.data))
        }).catch((e) => {
            dispatch(fetchPostsError(e.message))
        })
    }
}


// This function for request the post detail data from post data (API)
export const postDetailRequest = () => {
    return {
        type : POSTS_DETAIL_REQUEST
    }
}
export const postDetailSuccess = (posts) => {
    return {
        type : POSTS_DETAIL_SUCCESS,
        payload : posts
    }
}
export const postDetailError = (err) => {
    return {
        type : POST_DETAIL_ERORR,
        payload : err
    }
}
export const fetchPostDetail = (id) => {

        return(dispatch) => {
            dispatch(postDetailRequest())
            axios.get(`https://strapi-production-f9be.up.railway.app/api/public-posts/${id}`,{
                headers:{
                    Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
                }
            }).then((res) => {
               const respone = res.data
               dispatch(postDetailSuccess(respone))
            }).catch(err => {dispatch(postDetailError(err.message))})

        }

}
// This function for delete the data from public post data by ID

const deleteRequest = () => {
    return{
        type : POST_DELETE_REQUEST
    }
}
const deleteSuccess = (message) => {
    return {
        type : POST_DELETE_SUCCESS,
        payload : message
    }
}
const deleteErorr = (err) => {
    return {
         type : POST_DELETE_ERORR,
         payload : err
    }
}
export const deletePost = (id) => {
    return(dispatch) => {
        dispatch(deleteRequest())
       
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/public-posts/${id}`,{
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        })
        .then(res =>
            dispatch(deletePost(),
            
            dispatch(fetchPublicPosts()))
            
        
        )
        .catch(err => {
            dispatch(deleteErorr(err.message))
        })
    }
}

// This from posting post to API

export const postingRequest = () => {
    return {
        type : POST_POSTING_REQUEST
    }
}
export const postingSuccess = (message) => {
    return {
        type : POST_POSTING_SUCCESS,
        payload : message
    }
}
export const postingError = (error) => {
    return {
        type : POST_POSTING_ERROR,
        payload : error
    }
}
export const postingPost = (title , information,username,photo) => {
    return (dispatch) => {
        dispatch(postingRequest())
        axios.post("https://strapi-production-f9be.up.railway.app/api/public-posts", {
            "data":{
                "title" :  title,
                "username": username,
                "information": information,
                "img_link" : photo

            },
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        },
        ).then((res) => {
            dispatch(postingSuccess(),
            dispatch(fetchPublicPosts())
            
            )
        }).catch(err => dispatch(postingError(err)))
    }
}