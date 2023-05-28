
import NavBar from './components/navbar';
import Home from './components/homepage';
import SignUp from './components/signup';
import Login from './components/login';
import Logout from './components/logout';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import PrivateComponents from './components/privatecomponents';
function App() {
  return (
    <div>
    {/* <h1>hello</h1> */}
    <NavBar/>
     
    {/* <Home/> */}
    <Routes>
 
     <Route path='/' element={<Home/>}/>
     <Route path='/logout' element={<Logout/>} />
     <Route path='/home' element={<Home/>}/>
     <Route path='/login'  element={<Login/>} />
     <Route path='/signup' element={<SignUp/>} />
    </Routes>
    
    {/* <SignUp/> */}
    {/* <Login/> */}
   {/* <Footer/> */}
    </div>
  );
}

export default App;
