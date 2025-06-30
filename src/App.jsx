import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing.jsx";
import Terms from "./Components/Terms.jsx";
import SignUp from "./Components/SignUp.jsx";
import Login from "./Components/Login.jsx";
import ClientRouter from "./Clients/Routes.jsx";
import AdminRoute from "./Admin/AdminRoute.jsx";
import API from "./Utils/Api.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
                <API />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/Terms" element={<Terms />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/client/*" element={<ClientRouter />} />
                    <Route path="/admin/*" element={<AdminRoute />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
