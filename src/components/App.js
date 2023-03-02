import Signup from "./Signup";
import { AuthProvider } from "../context/AuthContext";
import React from 'react'
import Login from "./Login";
import Dashboard from "./Dashboard"
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

function App() {
return(
  <Router>
 <AuthProvider>
   <Routes>
    <Route exact path="/" element={<Dashboard/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   
  </AuthProvider>
  </Router>
 
  
)
}

export default App;
