import React, { useEffect, useState, useContext } from 'react';
import logo from '../assets/logo.png';
import Navigation from './Navigation.jsx';
import API from '../Utils/Api.jsx';
import { ContextData } from '../ContextAPI/Context.jsx';

export default function Home() {
    const [posts, setPosts] = useState(false);
    const { ApiData } = useContext(ContextData);

    useEffect(() => {
        console.log("The Data is here", ApiData);
    }, [ApiData]);

    function ShowPostBox() {
        setPosts(!posts);
    }

    if (!ApiData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-[#f2f4f7] min-h-screen text-gray-900 flex flex-col font-sans">
            {/* Top Bar */}
            <Navigation />
            <API />

            {/* Create Post Button */}
            <button
                onClick={ShowPostBox}
                className="bg-[#C11235] hover:bg-[#A0102D] text-white px-6 py-2 rounded-xl font-semibold transition w-[180px] mt-2 mx-auto"
            >
                Create a Post
            </button>

            <main className="flex-1 px-4 sm:px-8 py-6 max-w-2xl mx-auto space-y-6">
                {/* Post Box */}
                {posts && (
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
                )}

                {/* Posts List */}
                {ApiData.map((post, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center space-x-4 mb-4">
                            <img
                                src={post.user?.avatar || "https://i.pravatar.cc/150?img=1"}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{post.user?.name || "Anonymous"}</p>
                                <p className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="text-gray-800 text-base mb-4">
                            {post.content}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 gap-x-2">
                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-1 hover:text-blue-500">
                                    <span>{post.likes} Likes</span>
                                </button>
                                <span>·</span>
                                <span>{post.comments?.length || 0} Comments</span>
                            </div>
                            <button className="hover:text-blue-500">Share</button>
                        </div>
                    </div>
                ))}
            </main>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-600 py-4 border-t bg-white">
                © 2025 <span className="font-semibold text-[#0033A0]">Badhau Gyan</span>. All rights reserved.
            </footer>
        </div>
    );
}
