import React from "react";
import { Navigate,Outlet } from "react-router-dom";
function PrivateComponents(){
    const auth= localStorage.getItem('result')
    return auth? <Outlet/> : <Navigate to="/signup"/>
       
}
export default PrivateComponents;