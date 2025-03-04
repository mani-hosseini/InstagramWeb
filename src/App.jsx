import {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App
