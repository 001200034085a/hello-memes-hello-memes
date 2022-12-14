import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../Utils/Common";
import axios from "axios";





const LoginForm = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setErrror] = useState(null);
  const navigate = useNavigate();
  

  const handleLogin = async(e)=>{
    e.preventDefault();
   

    setErrror(null)
    axios.post("https://history-mindx1.herokuapp.com/api/users/login",{
      email:email, 
      password:password
    }).then((response)=>{
      setUserSession(response.data.token, response.data)
      navigate("/tc")
    }).catch(err=>{
      if(err.response.status === 400 || err.response.status === 401){
        setErrror(err.response.data.message)
      }
      else{
        setErrror("Something went wrong. Please try again later")
      }
    })
  }

  return(
   <div style={{marginLeft:"20%"}}>
    <h1>Login</h1><br/>
    <div>
      Email<br/>
      <input type ="email" style={{border:"1px solid black", width:"60%", height:"50px"}} onChange={(e)=>setEmail(e.target.value)} />
    </div><br/>
    <div>
      PassWord<br/>
      <input type ="password" style={{border:"1px solid black", width:"60%", height:"50px"}} onChange={(e)=>setPassword(e.target.value)}/>
    </div><br/>
    {error && <div style={{color:"red"}}>{error}</div>}
    <div>
      <input onClick={handleLogin} type="button" value="Login" style={{border:"1px solid black", width:"60%", height:"50px"}} />
    </div>
   </div>
  )
};

export default LoginForm;