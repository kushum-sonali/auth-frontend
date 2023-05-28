import React, { useEffect }  from 'react';
import { useState } from 'react';

import './signup.css';
import {  useNavigate } from 'react-router-dom';
function SignUp(){
   const [username , setUsername]=useState("");
   const [phone,setPhone]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [auth,setAuth] = useState(null);
   const navigate= useNavigate();
   useEffect(()=>{
    setAuth(JSON.parse(localStorage.getItem('result')));
    if(auth){
        navigate('/')
    }
   })
   const collectData= async()=>{
console.log(username,phone,email,password);
let result= await fetch('http://localhost:5000/register',{
    method:'Post',
    body:JSON.stringify({username,phone,email,password}),
    headers:{
        'content-type':'application/json'
    },
})
result= await result.json();
console.log( result);

localStorage.setItem("user",JSON.stringify(result));
if(result){
 navigate('/home')
}

   };
    return(
        
        <div className="container signup my-5 ">
           <div className="container main  ">
           <div className="container-fluid"><h2 className=" container-fluid ">SIGNUP HERE</h2></div>
        
        
            <div className="container-fluid"><h5>Enter Username </h5></div>
            <div className="container-fluid">
        <input className="form-control" type="text" placeholder="Enter username" name="username" required onChange={((e)=>setUsername(e.target.value))}></input>
        </div>
        <div className="container-fluid"><h5>Enter Phone No. </h5></div>
        <div className="container-fluid">
        <input className="form-control" type="Number" name="phone" required placeholder="Enter phone Number" onChange={((e)=>setPhone(e.target.value))}></input>
        </div>
       <div className="container"><h5>Enter Your Email.</h5></div>
        <div className="container">
            <input type="email" name="email" className="form-control" required placeholder="Enter Your password" onChange={((e)=>setEmail(e.target.value))}/>
            
        </div>
        <div className="container-fluid" type="password"><h5>Set Password</h5></div>
        <div className="container-fluid">
        <input type="password" name="password" className="form-control" required  placeholder="Set password"onChange={((e)=>setPassword(e.target.value))}></input>
        </div>
       <div className="container-fluid">
       <button onClick={collectData} className="text-center">Signup</button>
       </div>
           </div>
        </div>
    );
}
export default SignUp;