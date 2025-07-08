import React from 'react';
import logo from '../assets/logo.png';
import Navigation from './Navigation.jsx';
import { useState } from 'react';

export default function Home() {

    const [posts, setPosts] = useState(false);

    function ShowPostBox() {
        setPosts(!posts);
    }

    return (
        <div className="bg-[#f2f4f7] min-h-screen text-gray-900 flex flex-col font-sans">
            {/* Top Bar */}
            <Navigation />

            {/* Main Content */}
            <button onClick={ShowPostBox} className="bg-[#C11235] hover:bg-[#A0102D] text-white px-6 py-2 rounded-xl font-semibold transition w-1/12 mt-2 mx-auto">
                Create a Post
            </button>
            <div className="flex flex-col flex-1">


                {posts && (<main className="flex-1 px-4 sm:px-8 py-6 max-w-2xl mx-auto space-y-6">
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
                </main>)}

                
                    <div className="flex-1 px-4 sm:px-8 py-6 max-w-2xl mx-auto space-y-6" >
                        content
                    </div>

            </div  >

            {/* Footer */}
            <footer className="text-center text-sm text-gray-600 py-4 border-t bg-white">
                © 2025 <span className="font-semibold text-[#0033A0]">Badhau Gyan</span>. All rights reserved.
            </footer>
        </div>
    );
}
