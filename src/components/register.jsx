import styled from "styled-components";
import react from "react";
import { useNavigate } from "react-router-dom";

const Registerdiv=styled.div`
width:30%;
margin:auto;
display:flex;
flex-direction:column;
margin-top:50px;
padding:30px;
border:1px solid black;
border-radius:16px;
`;


export const Register=()=>{
    const [username,setUsername]=react.useState();
    const [email,setEmail]=react.useState();
    const [password,setPassword]=react.useState();
    const navigate=useNavigate();

    
    const registerhandler=()=>{
        if(username && email && password){
          //console.log(username,email,password);
          const registerdata={
            
                "username":username,
                "email":email,
                "password":password,
            
          } 
          //console.log(registerdata)
          fetch("https://fake-server-app-of-asos.herokuapp.com/users",{
            method:"POST",
            body:JSON.stringify(registerdata),
            headers:{
                "Content-Type":"application/json"
            }
          })
          .then((res)=>res.json())
          .then((res)=>{
            console.log(res);
            const {user}=res;
            
                alert("user registered successfully...");
                navigate("/login")
            
          });
          
        }else{
            alert("enter all the fields")
        }
    }

    return(
        <Registerdiv>
            <h2>Register Form</h2>
            <input style={{height:"30px",marginBottom:"10px"}} type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} />
            <input style={{height:"30px",marginBottom:"10px"}} type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input style={{height:"30px",marginBottom:"10px"}} type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button style={{height:"30px",marginBottom:"10px"}} onClick={()=>registerhandler()} >Register</button>
        </Registerdiv>
    )
}