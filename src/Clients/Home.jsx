import React from 'react'
import logo from '../assets/logo.png'
export default function Home() {
    return (
        <div className="h-screen bg-[rgb(232,235,237)] text-gray-800">

            <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10" />
                    <h1 className="text-2xl font-bold text-[#C11235]">
                        Badhau Gyan
                    </h1>
                </div>
                <div className="space-x-4">

                    <button className="bg-[#C11235] hover:bg-[#A0102D] text-white px-4 py-2 rounded-lg font-semibold">
                        Create Post
                    </button>
                    <button className="text-[#0033A0] font-semibold hover:underline">
                        Profile
                    </button>
                </div>
            </header>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-lg font-bold text-[#0033A0] mb-2">
                        Topics
                    </h2>
                    <ul className="space-y-1 text-sm">
                        <li className="text-[#C11235] font-semibold">#Education</li>
                        <li>#Health</li>
                        <li>#Agriculture</li>
                        <li>#LocalNews</li>
                        <li>#Jobs</li>
                        <li>#Technology</li>
                    </ul>
                </div>


                <main className="md:col-span-2 space-y-4">
                </main>


            </div>

            <footer className="bg-[#0033A0] text-white text-center p-4 text-sm mt-8">
                © 2025 Badhau Gyan. All rights reserved.
            </footer>
        </div>
    );
}
