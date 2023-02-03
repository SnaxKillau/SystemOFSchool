
import './App.css';


import Singin from './component/Singin';
import Signup from './component/Signup';

import ContactUs from './component/Form'
import Reportpage from './component/Reportpage';
import Menu from './component/Menu'
import Post_Public from './component/Post_Public';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Loading from './component/Loading';
import PostDetail from './component/PostDetail';
import Users from './component/Users';
import { Provider } from 'react-redux';
import store from './redux/store';
import Annoument from './component/Announment';
import Form from './component/Form'
import UserProfile from './component/UserProfile';
import PostPosting from './component/PostPosting';
import LostorFoundingPage from './component/LostorFoundingPage';
import LostorFoundPosting from './component/LostorFoundPosting';
import AdminSignIn from './component/AdminSignIn';
import ReportDetail from './component/ReportDetail';
import { useSelector } from 'react-redux';
import AnnoumentDetail from './component/AnnoumentDetail';
import AnnouncementPosting from './component/AnnouncementPosting';
import LostorFoundDetail from './component/LostorFoundDetail';
import InformationDetail from './component/InformationDetail';




function App() {
 
    
  return (


  
     <div>
      
      <Router basename='/SystemOFSchool'>
      
        <Routes>
         
          
          <Route path='/SignIn' element = {<Singin></Singin>}></Route>
          <Route path='/Admin/SignIn' element = {<AdminSignIn></AdminSignIn>}></Route>
        
          <Route path='/Public' element = {<Post_Public></Post_Public>}></Route>
          <Route path='/Users' element = {<Users></Users>}></Route>
          <Route path='/SignUp' element = {<Signup></Signup>}></Route>
          <Route path='/ReportPost' element = {<Form></Form>}></Route>
          <Route path = "/LostorFound" element = {<LostorFoundingPage></LostorFoundingPage>}></Route>
          <Route path = "/LostorFound/:id" element ={<LostorFoundDetail></LostorFoundDetail>}></Route>
          <Route path="/NewPost" element = {<PostPosting></PostPosting>}></Route>
          <Route path='/LostorFound/Posting' element = {<LostorFoundPosting></LostorFoundPosting>}></Route>
          <Route path = "/PublicPost/PostDetail/:id" element = {<PostDetail></PostDetail>}></Route>
          <Route path='/Announment' element = {<Annoument></Annoument>}></Route>
          <Route path='/Profile' element = {<UserProfile></UserProfile>}></Route>
          <Route path='/Posting' element = {<PostPosting></PostPosting>}></Route>
          <Route path='/reportDetail/:id' element = {<ReportDetail></ReportDetail>}></Route>
          <Route path='/announcementdetail/:id' element ={<AnnoumentDetail></AnnoumentDetail>}></Route>
          <Route path='/infomationDetail/:id' element = {<InformationDetail></InformationDetail>}></Route>
          <Route path='/announcementPosting' element = {<AnnouncementPosting></AnnouncementPosting>}></Route>
          <Route path='/ReportandInfoPosting' element = {<Form></Form>}></Route>
          <Route path='/' element = {<Reportpage></Reportpage>}></Route>
        
         
         
        
          

         
        </Routes>
      </Router>
   
     
    
    
       
       
       
   
    </div>
  
  );
}

export default App;
