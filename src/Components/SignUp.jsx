import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SignUp() {
    const navigate = useNavigate();

    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {

        setSuccess("Account created!");

    };

    return (
        <div className="min-h-screen bg-[#E8EBED] flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6">
                <div className="text-center mb-6">
                    <img src={logo} alt="Logo" className="w-1/3 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-[#C11235]">
                        Create Account
                    </h2>
                    <p className="text-[#0033A0] text-sm">
                        Ghau Ghar ko khabar
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C11235]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C11235]"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C11235]"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C11235]"
                    />


                    <button
                        type="submit"
                        className="w-full bg-[#C11235] text-white font-semibold py-2 rounded-lg hover:bg-[#A0102D] transition"
                    >
                        Sign Up
                    </button>

                    <p className="text-xs text-gray-600 mt-2 text-center">
                        By signing up, you agree to our{" "}
                        <Link to="/Terms" className="underline text-[#C11235]">
                            Terms of Service
                        </Link>
                    </p>

                    <div className="text-center mt-4">
                        <p className="text-[#0033A0] font-medium">
                            Already have an account?
                        </p>
                        <button
                            onClick={() => navigate("/login")}
                            className="mt-2 text-[#0033A0] border-2 border-[#0033A0] hover:bg-[#E8EBED] px-4 py-2 rounded-lg font-semibold transition w-full"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>

            <footer className="text-center text-sm text-[#0033A0] mt-6">
                © 2025 Badhau Gyan. All rights reserved.
            </footer>
        </div>
    );
}
