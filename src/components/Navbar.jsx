import react from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { setAuth,setUser } from "../redux/notes/action";
import { useDispatch, useSelector } from "react-redux";


const NavbarWrapper=styled.div`
display:flex;
justify-content:center;
gap:20px;
background: #667292;
color:white;
padding:20px;
`;

const StyledLink=styled(Link)`
  color:white;
  cursor:pointer;
`;


export const Navbar=()=>{
    const {Auth,User}=useSelector((state)=>state.ndata);
    const dispatch=useDispatch();

    const handlelogout=()=>{
        dispatch(setAuth(false));
        dispatch(setUser([]));
    }
    
    return (
        <NavbarWrapper>
            <div style={{display:"flex",alignItems:"center",width:"80%",margin:"auto"}}>
            <div style={{display:"flex",alignItems:"center",width:"50%",margin:"auto"}}>
              <h4>Flight Ticket Booking App</h4>
            </div>
            <div style={{display:"flex",alignItems:"center",width:"30%",margin:"auto",justifyContent:"space-between"}}>
            <StyledLink to="/">Home</StyledLink>
            {
                Auth ? <><StyledLink to="#" onClick={handlelogout}>Logout</StyledLink></>:
                <> 
                  <StyledLink to="/register">Register</StyledLink>
                  <StyledLink to="/login">Login</StyledLink>
                </>
            }  
            </div>
            </div>
            
                
           
        </NavbarWrapper>
    )
}