import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/Logo.png";


export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/client/home");
    };

    return (
        <div className="min-h-screen bg-[#E8EBED] flex flex-col items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6">
                <div className="text-center mb-6">
                    <img src={logo} alt="Logo" className="w-1/3 mx-auto mb-2" />
                    <h2 className="text-3xl font-bold text-[#0033A0]">Log In</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
                    />


                    <button
                        type="submit"
                        className="w-full bg-[#0033A0] text-white font-semibold py-2 rounded-lg hover:bg-[#002B7F] transition"
                    >
                        Log In
                    </button>

                    <div className="text-right text-sm">
                        <Link to="/forgot-password" className="text-[#C11235] underline">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-[#0033A0] font-medium">
                            Don’t have an account?
                        </p>
                        <button
                            onClick={() => navigate("/signup")}
                            className="mt-2 text-white bg-[#C11235] hover:bg-[#A0102D] px-4 py-2 rounded-lg font-semibold transition w-full"
                        >
                            Create Account
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
