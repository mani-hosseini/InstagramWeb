import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Home from "./pages/home.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>

            <Route element={<Layout/>}>
                <Route path="home" element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
