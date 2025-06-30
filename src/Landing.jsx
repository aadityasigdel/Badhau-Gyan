import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { GoogleLogin ,googleLogout } from "@react-oauth/google";
const clientID = "863308908711-0a7uiqslmaloru4eok3krqgr4jf7ehmc.apps.googleusercontent.com"
export default function Landing() {

     const handleLoginSuccess = (credentialResponse) => {
        console.log("Google login success:", credentialResponse);
        navigate("/client/home");
    };

    const navigate = useNavigate();
    return (
        <>
            <div className=" flex flex-col md:flex h-screen bg-gray-100 m-0 p-0">
                <div className="flex md:flex-row w-full h-full">
                    <div className="md:w-2/3 w-full flex items-center justify-center bg-[#E8EBED]">
                        <div className="z-10 text-center px-4">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-1/2 mx-auto"
                            />
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[#C11235] mt-4">
                                Badhau Gyan
                            </h1>
                            <p className="text-xl text-[#0033A0] font-medium mt-2">
                                Ghau Ghar ko khabar
                            </p>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full flex flex-col items-center justify-center gap-6 p-6 bg-white text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#C11235] leading-snug">
                            Welcome to <br />
                            <span className="text-[#0033A0] text-2xl md:text-3xl">
                                Badhau Gyan
                            </span>
                        </h2>


                        <GoogleLogin
                            className="flex items-center justify-center gap-2 text-white bg-[#C11235] hover:bg-[#A0102D] px-6 py-3 rounded-xl w-full max-w-sm text-lg font-semibold transition shadow"
                            onSuccess={handleLoginSuccess}
                            onError={() => console.log("Failed to login")}
                        />


                        <span className="text-[#0033A0] font-semibold text-lg">
                            or
                        </span>

                        <button
                            onClick={() => navigate("/signup")}
                            className="text-white bg-[#0033A0] hover:bg-[#002B7F] px-6 py-3 rounded-xl w-full max-w-sm text-lg font-semibold transition shadow"
                        >
                            Create Account
                        </button>

                        <p className="text-sm text-gray-600">
                            By signing up, you agree to our{" "}
                            <Link
                                to="/Terms"
                                className="underline text-[#C11235]"
                            >
                                Terms of Service
                            </Link>
                        </p>

                        <p className="text-[#0033A0] font-medium text-base">
                            Already have an account?
                        </p>

                        <button
                            onClick={() => navigate("/login")}
                            className="text-[#0033A0] border-2 border-[#0033A0] hover:bg-[#E8EBED] px-6 py-3 rounded-xl w-full max-w-sm text-lg font-semibold transition shadow"
                        >
                            Log In
                        </button>
                    </div>
                </div>
                <footer className="text-center p-4 bg-[#0033A0] text-white text-sm">
                    © 2025 Badhau Gyan. All rights reserved.
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="w-4 h-4 bg-[#C11235] rounded-full inline-block"></span>
                        <span className="w-4 h-4 bg-white rounded-full inline-block"></span>
                        <span className="w-4 h-4 bg-[#0033A0] rounded-full inline-block"></span>
                    </div>
                </footer>
            </div>
        </>
    );
}
