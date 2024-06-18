import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer.jsx";
import Cookies from "js-cookie";


// Components
import Header from "./Components/Header.jsx";
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Publish from './pages/Publish.jsx';

function App() {

  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {

  if (token){

    Cookies.set("userToken", token, {expires:10});
    setToken(token)
  }
  else {
    Cookies.remove("userToken")
    setToken(null)
  }

};


  return ( 
  <Router>
  <Header  handleToken={handleToken}/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/offers/:id" element={<Offer />} />
    <Route path="/signup" element= {<Signup handleToken={handleToken} />  }  />
    <Route path='/login' element= {<Login handleToken={handleToken} />} />
    <Route path = "/publish" element = {<Publish />} />
  </Routes> 
</Router> 
)}
  
export default App
