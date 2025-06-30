import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiMessageCircle, FiUsers, FiActivity, FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png';

export default function NavCompBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full backdrop-blur-md bg-white/60 shadow-lg px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-200">

            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-sm" />
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#0033A0] via-[#C11235] to-[#0033A0] text-transparent bg-clip-text animate-pulse">
                    Badhau Gyan
                </h1>

            </div>
            <nav className=" sm:hidden md:flex items-center gap-8">
                <NavLink icon={<FiHome />} label="Landing" to="/" />
                <NavLink icon={<FiActivity />} label="Login" to="/Login" />
                <NavLink icon={<FiUser />} label="SignUp" to="/signup" />
                <NavLink icon={<FiUser />} label="Terms&Conditions" to="/Terms" />
            </nav>

            <nav className="hidden md:flex items-center gap-8">
                <NavLink icon={<FiHome />} label="Landing" to="/" />
                <NavLink icon={<FiActivity />} label="Login" to="/Login" />
                <NavLink icon={<FiUser />} label="SignUp" to="/signup" />
                <NavLink icon={<FiUser />} label="Terms&Conditions" to="/Terms" />
            </nav>

            <button className="md:hidden text-[#0033A0] text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu />
            </button>


            {menuOpen && (
                <div className="absolute top-20 right-6 bg-white/90 shadow-xl rounded-lg p-4 flex flex-col gap-4 md:hidden">
                    <NavLink icon={<FiHome />} label="Home" to="/client/home" onClick={() => setMenuOpen(false)} />
                    <NavLink icon={<FiUsers />} label="Friends" to="/client/friends" onClick={() => setMenuOpen(false)} />
                    <NavLink icon={<FiMessageCircle />} label="Messages" to="/client/messages" onClick={() => setMenuOpen(false)} />
                    <NavLink icon={<FiActivity />} label="Discussions" to="/client/discussions" onClick={() => setMenuOpen(false)} />
                    <NavLink icon={<FiUser />} label="Profile" to="/client/profile" onClick={() => setMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}

function NavLink({ to, icon, label, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="flex items-center gap-2 text-[#0033A0] font-semibold relative group transition-all duration-300"
        >
            {icon}
            <span className="relative z-10">{label}</span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C11235] group-hover:w-full transition-all duration-300 rounded"></span>
        </Link>
    );
}
