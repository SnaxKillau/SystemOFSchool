import {FETCH_REPORT_REQUEST,FETCH_REPORT_SUCCESS,FETCH_REPORT_ERROR} from './Reporttype' 
import {DELETE_REPORT_REQUEST,DELETE_REPORT_SUCCESS,DELETE_REPORT_ERROR } from './Reporttype'
import { REPORT_DETAIL_REQUEST,REPORT_DETAIL_SUCCESS,REPORT_DETAIL_ERROR } from "./Reporttype"
import axios from 'axios'



// FOR FETCHING REPORT DATA FROM API
export const fetchReportRequest = () => {
    return {
        type : FETCH_REPORT_REQUEST,

    }
}
export const fetchReportSuccess = (reports) => {
    return {
        type: FETCH_REPORT_SUCCESS,
        payload: reports
    }
}
export const fetchReportError = (error) => {
    return {
        type: FETCH_REPORT_ERROR,
        payload: error
    }
}
export const fetchReport =() => {
    return (dispatch) => {
        dispatch(fetchReportRequest())

         axios.get("https://strapi-production-f9be.up.railway.app/api/reports", {
           headers:{
            Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
           }
        })
        .then( respone => {
            const reports = respone.data

            dispatch(fetchReportSuccess(reports))
        }).catch(err => {
            const errorMss = err.message
            dispatch(fetchReportError(errorMss))
        }) 

    }
}

// FOR DELETE REPORT DATA FROM API

export const deleteReportRequest = () => {
    return{
        type : DELETE_REPORT_REQUEST
    }
}
export const deleteReportSuccess = (message) => {
    return{
        type: DELETE_REPORT_SUCCESS,
        payload : message
    }
}
export const deleteReportError = (error) => {
    return{
        type : DELETE_REPORT_ERROR,
        payload : error
    }
}


// THIS IS THE FUNCTION FOR DELETE DATA FROM REPORTS
export const deleteReport = (id)=> {
    return(dispatch) => {
        dispatch(deleteReportRequest())
       
        axios.delete(`https://strapi-production-f9be.up.railway.app/api/reports/${id}`,{
            headers:{
                Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
               }
        })
        .then(res => dispatch(deleteReportSuccess("Successfully"),
        dispatch(fetchReport())
        ))
        .catch(err => {
            dispatch(deleteReportError(err))
        })
    }
}
// FOR FETCHING REPORT ONE DATA FROM REPORT DATA BY ID FROM API
export const  fetchReportDetailRequest= () => {
    return {
        type : REPORT_DETAIL_REQUEST,

    }
}

// THIS AN ACTIONS FRO FETCHING ONE REPORT RECORD FROM REPORT DATAS
export const fetchReportDatailSuccess = (reports) => {
    return {
        type: REPORT_DETAIL_SUCCESS,
        payload: reports
    }
}

export const fetchReportDetailError = (error) => {
    return {
        type: REPORT_DETAIL_ERROR,
        payload: error
    }
}
export const reportDetail = (id) => {
   return(dispatch) => {
    dispatch(fetchReportDetailRequest())
    axios.get(`https://strapi-production-f9be.up.railway.app/api/reports/${id}`,{
        headers:{
            Authorization : "Bearer f564c165c5710acb3603f364bfd16269cda9770b1f3cadede2f936bb44d94ca093cbb961d604e5ac383a1b1b99e9135845167d86ef2d454aad844ab4042dc71628f8083bc9940ff4c6d64b03bce7b375d2f78ac26f7fa731a885f702973b54da98bf7f964f01b3ac09437e8e0a2a8a9862f3d8a18f1c5beeda328d142eb28576"
        }
    }).then((res) => {
       const respone = res.data
       dispatch(fetchReportDatailSuccess(respone))
    }).catch(err => {dispatch(fetchReportDetailError(err))})
   
    
}



}
