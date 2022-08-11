import React from "react"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import emailjs from "emailjs-com";
import { v4 as uuidv4 } from 'uuid';


export const Home=()=>{
    const [source,setSource]=React.useState("");
    const [destination,setDestination]=React.useState("");
    const [date,setDate]=React.useState("");
    const [month,setMonth]=React.useState(0);
    const [price,setPrice]=React.useState(10000);
    const [discount,setDiscount]=React.useState(1);
    const ticketid=useRef();
    const navigate=useNavigate();
    const {Auth,User}=useSelector((state)=>state.ndata);
    const dispatch=useDispatch();
   

    const handlesearchbtn=()=>{
        var today = new Date();

       // var currdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        //console.log(source,destination,date,currdate,date-currdate);
        ticketid.current.style.display="block"
        console.log(ticketid.current.style.display)
       setPrice(Math.floor(Math.random() * (50000 - 20000) + 20000));
       if(month-(today.getMonth()+1)>0){
        setDiscount(Math.abs(month-(today.getMonth()+1)*10));
       }else{
        setDiscount(1);
       }    
    }
    const handleclose=()=>{
        ticketid.current.style.display="none"
    }
    const handlebooking=()=>{
       alert(`Email has been sent to:${User.email}`)
       console.log(User);
       let id=uuidv4();
       let message=`You have booked you ticket from ${source} to ${destination} on ${date}.
       The departure of the flight will be on 2pm .The ticket id is ${id}`;
       let info={
        name:User.username,
        User_email:User.email,
        message:message
       }
       emailjs.sendForm('service_7ceyqwe','template_r2lbw0h',info,'XbZFssMNOnbJPeoNg')
       .then(res=>{console.log(res)})
       .catch(err=>console.log(err));
    }
    return (
        <div>
            <div className="maincontainer" >
               <div className="flightdetails">
                 <h1 className="fl-box-head">Flight Ticket</h1>
                 <div className="From">
                 <label htmlFor="">From (Source) &nbsp;  : &nbsp; 
                   <select onChange={(e)=>setSource(e.target.value)} name="" id="">
                    <option value="">Select-City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="NewDelhi">NewDelhi</option>
                    <option value="Benguluru">Benguluru</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Ahmadabad">Ahmadabad</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Chennai">Chennai</option>
                   </select>
                 </label>
                 </div>
                 <div className="To">
                 <label htmlFor="">To (Destination): &nbsp; 
                   <select onChange={(e)=>setDestination(e.target.value)} name="" id="">
                    <option value="">Select-City</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="NewDelhi">NewDelhi</option>
                    <option value="Benguluru">Benguluru</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Ahmadabad">Ahmadabad</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Chennai">Chennai</option>
                   </select>
                 </label>
                 </div>
                 <div className="Journeydate">
                 <label htmlFor="">JourneyDate &nbsp; &nbsp;  : &nbsp; 
                   <input onChange={(e)=>{
                    setDate(e.target.value);
                    //console.log(e.target.valueAsDate)
                     let today=e.target.valueAsDate;
                     //console.log(today.getMonth()+1);
                     setMonth(today.getMonth()+1)
                    }
                    } type="date" />
                 </label>
                 </div>
                 <button onClick={()=>handlesearchbtn()} className="search-btn">Search</button>

                 <div ref={ticketid}  className="ticketdetails">
                   <h3>Ticket Details</h3>
                   <p>From:{source}</p>
                   <p>To:{destination}</p>
                   <p>Actual Price:{ price }</p>
                   <p>Discount:{discount}</p>
                   <p>currentBookingPrice:{(price*discount/100)}</p>
                   <p>Booking Date:{date}</p>
                   <button onClick={()=>handleclose()} style={{color:"blue",width:"100px",height:"30px",background:"white"}}>
                    close
                   </button>
                   <button onClick={()=>handlebooking()} style={{color:"blue",width:"100px",height:"30px",background:"white"}}>
                    book
                   </button>
                 </div>
                 
                 
               </div>
            </div>
        </div>
    )
}