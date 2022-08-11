import styled from "styled-components";
import react from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { setAuth,setUser } from "../redux/notes/action";
import { useDispatch, useSelector } from "react-redux";


const Logindiv=styled.div`
width:30%;
margin:auto;
display:flex;
flex-direction:column;
margin-top:50px;
padding:30px;
border:1px solid black;
border-radius:16px;
`;


export const Login=()=>{
    const [email,setEmail]=react.useState();
    const [password,setPassword]=react.useState();
    const navigate=useNavigate();
    const {Auth,User}=useSelector((state)=>state.ndata);
    const dispatch=useDispatch();
    
     console.log(Auth,User)
    const loginhandler=()=>{
        if(email && password){
          const logindata={
                "email":email,
                "password":password 
          } 
          fetch("https://fake-server-app-of-asos.herokuapp.com/users")
          .then((res)=>res.json())
          .then((res)=>{
            console.log(res);
            let userdetails=res.filter((ele)=>{
               if(ele.email===email && ele.password===password){
                return ele;
               }
            })
            console.log(userdetails[0]);
            if(userdetails[0]){
                dispatch(setAuth(true));
                dispatch(setUser(userdetails[0]));
                console.log(Auth,User);
                alert("login success");
                
                navigate("/")
            }
          });
          
        }else{
            alert("enter all the fields")
        }
    }
    
    return(
        <Logindiv>
            <h2>Login Form</h2>
            <input style={{height:"30px",marginBottom:"10px"}} type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input style={{height:"30px",marginBottom:"10px"}} type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button style={{height:"30px",marginBottom:"10px"}} onClick={()=>loginhandler()} >Login</button>
            <p>not registered yet?<Link to="/register">Register</Link></p>
        </Logindiv>
    )
}