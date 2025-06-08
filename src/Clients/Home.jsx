import React from 'react';
import logo from '../assets/logo.png';
import Navigation from './Navigation.jsx';


export default function Home() {
    return (
        <div className="bg-[#f2f4f7] min-h-screen text-gray-900 flex flex-col font-sans">
            {/* Top Bar */}
            <Navigation />

            {/* Main Content */}
            <div className="flex flex-1">

                {/* Main Section */}
                <main className="flex-1 px-4 sm:px-8 py-6 max-w-2xl mx-auto space-y-6">
                    <div className="bg-white shadow rounded-2xl p-5">
                        <textarea
                            placeholder="What's on your mind?"
                            className="w-full h-28 resize-none border-none focus:outline-none text-lg placeholder:text-gray-400"
                        />
                        <div className="text-right mt-4">
                            <button className="bg-[#C11235] hover:bg-[#A0102D] text-white px-6 py-2 rounded-full font-semibold transition">
                                Post
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm text-center text-gray-500">
                        No posts yet. Be the first to share your thoughts!
                    </div>
                </main>

                {/* Right Panel */}
                <aside className="hidden lg:block w-80 p-6">
                    <div className="bg-white rounded-2xl shadow p-5">
                        <h3 className="text-lg font-semibold text-[#0033A0] mb-3">Trending Tags</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-[#C11235] cursor-pointer">#Environment</li>
                            <li className="hover:text-[#C11235] cursor-pointer">#Startups</li>
                            <li className="hover:text-[#C11235] cursor-pointer">#Politics</li>
                        </ul>
                    </div>
                </aside>
            </div>

            {/* Floating Button */}
            <button className="fixed bottom-6 right-6 bg-[#C11235] hover:bg-[#A0102D] text-white px-6 py-3 rounded-full shadow-lg font-semibold transition md:hidden">
                +
            </button>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-600 py-4 border-t bg-white">
                © 2025 <span className="font-semibold text-[#0033A0]">Badhau Gyan</span>. All rights reserved.
            </footer>
        </div>
    );
}
