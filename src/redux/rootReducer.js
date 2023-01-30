import { combineReducers } from "redux";
import reportReducer from './ReportReducer'
import UserReducer from "./UserReducer";
import deletereportReducer from "./ReportDeleteReducer";
import detailofreportReducer from './ReportDetailReducer'
import postsReducer from './PostsReducer'
import postDetailReducer from './PostsDetailReducer'
import deletepostReducer from './PostDeleteReducer'
import postingReducer from './PostPostingReducer'
import announcementReducer from './AnnouncementReducer'
import deleteAnnouncementReducer from "./AnnoumentDeleteReducer";
import viewAnnouncementReducer from "./AnouncementDetailReducer";
import postAnnouncementReducer from "./AnnounmentPostingReducer";

const rootReducer = combineReducers({
    report:  reportReducer,
    users : UserReducer,
    deletereport : deletereportReducer,
    detailofreport :  detailofreportReducer,
    posts : postsReducer,
    postDetail : postDetailReducer,
    postDelete : deletepostReducer,
    postingPost : postingReducer,
    annoncement : announcementReducer,
    deleteAnnouncement : deleteAnnouncementReducer,
    viewAnnouncement : viewAnnouncementReducer,
    postAnnouncement : postAnnouncementReducer
})
export default rootReducer