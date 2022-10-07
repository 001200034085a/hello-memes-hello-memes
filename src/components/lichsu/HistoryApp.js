import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext, autoLogin, generateInitialUsers} from "../Dangky/user";
import NavbarHistory from "./NavbarHistory";
import ThongTin from "./ThongTin";
import ChienTich from "./ChienTich";
import TrangChu from "./TrangChu";
import ThoiKy from "./ThoiKy";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import HistoryAdmin from "../phanquyen/HistoryAdmin";
import ContentHistory from "./ContentHistory";
import HistoryDetai from "./HistoryDetai";
import VideoItem from './VideoItem';
import { getToken, getUser, removeUserSession, setUserSession } from "../Utils/Common";
import axios from "axios";


export default function HistoryApp(){
  // generateInitialUsers();
  const user = getUser();
  // const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   const theUser = autoLogin();
  //   setCurrentUser(theUser);
  // }, []);
  

  
  

  return (
   <div>
    
    
    <BrowserRouter>
      <NavbarHistory></NavbarHistory>
      <Routes>
        <Route path="/tc" element={<TrangChu/>}></Route>
        <Route path="/tc/:_id" element={<VideoItem/>}></Route>  
        <Route path="/tt" element={<ThongTin></ThongTin>}></Route>
        <Route path="/tk" element={<ThoiKy></ThoiKy>}></Route>
        <Route path="/ct" element={<ChienTich></ChienTich>}></Route>
        <Route path="/login" element={<LoginForm ></LoginForm>}></Route>
        {user && <Route path="/aa" element={<HistoryAdmin/>}></Route>}
        <Route path="/signup" element={<SignupForm/>}></Route>
        <Route path="*" element={<h1>404 Not Found !!!</h1>}></Route>
        <Route path={"/nv"} element={<ContentHistory/>} ></Route>
        <Route path={"/nv/:_id"} element={<HistoryDetai/>} > </Route>
      </Routes>

    </BrowserRouter>
    
    
    
   </div> 
  )

  
}