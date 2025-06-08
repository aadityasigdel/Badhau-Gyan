import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function TopBar() {
    return (
        <header className="w-full bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-9 w-9 object-cover rounded-full" />
                <h1 className="text-xl font-bold text-[#C11235]">Badhau Gyan</h1>
            </div>

            <nav className="flex items-center gap-6">
                <Link to="/client/home" className="font-medium text-[#0033A0] hover:underline">Home</Link>
                <Link to="/client/friends" className="font-medium text-[#0033A0] hover:underline">Friends</Link>
                <Link to="/client/messages" className="font-medium text-[#0033A0] hover:underline">Messages</Link>
                <Link to="/client/discussions" className="font-medium text-[#0033A0] hover:underline">Discussions</Link>
                <Link to="/client/profile" className="font-medium text-[#0033A0] hover:underline">Profile</Link>
            </nav>
        </header>
    );
}
