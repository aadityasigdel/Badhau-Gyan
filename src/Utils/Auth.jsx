import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import React from 'react';
const clientID = "863308908711-0a7uiqslmaloru4eok3krqgr4jf7ehmc.apps.googleusercontent.com";

export default function Auth() {
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse) => {
        console.log("Google login success:", credentialResponse);

        const token = credentialResponse.credential;
        const user = jwtDecode(token);
        console.log(user);
        navigate("/client/home");
    };

    return (
        <>
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Failed to login")}
                size="large"
                text="continue_with"
                shape="square"
                theme="filled_blue"
                type="standard"
            />
        </>
    );
}
