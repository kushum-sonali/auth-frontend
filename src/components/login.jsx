import React from 'react';
import './signup.css';
function Login(){
    let ssub=((e)=>{
        e.preventDefault();
    });
    return(
        
        <div className="container signup my-5 ">
           <div className="container main  ">
           <div className="container-fluid"><h2 className=" container-fluid ">Login HERE</h2></div>

        <div className="container"><h5>Enter Your Email.</h5></div>
        <div className="container">
            <input type="email" placeholder="Enter Your password"/>
            
        </div>
        <div className="container-fluid" type="password"><h5>Set Password</h5></div>
        <div className="container-fluid">
        <input type="password" className="" placeholder="Set password"></input>
        </div>
       <div className="container-fluid">
       <button onClick={ssub}>Login</button>
       </div>
           </div>
        </div>
    );
}
export default Login;