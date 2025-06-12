import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing.jsx";
import Terms from "./Terms.jsx";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import ClientRouter from "./Clients/Routes.jsx";
import AdminRoute from "./Admin/AdminRoute.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Terms" element={<Terms />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/client/*" element={<ClientRouter />} />
                <Route path="/admin/*" element={<AdminRoute />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
