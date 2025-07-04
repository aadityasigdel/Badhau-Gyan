import React from 'react';
import Navigation from './Navigation.jsx';

export default function Profile() {
    const posts = [
        { id: 1, content: "first post" },
        { id: 2, content: "first post" },
        { id: 3, content: "first post" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            <Navigation />
            <div className="flex flex-col items-center w-full pt-10">

                {/* Profile Info */}
                <div className="flex max-w-2xl flex-col items-center bg-white rounded-2xl shadow-lg p-8 w-11/12 ">
                    <h1 className="text-4xl font-bold text-[#0033A0] mb-4">Your Profile</h1>

                    <img
                        className="w-32 h-32 rounded-full bg-amber-50 border border-gray-300 mb-4 object-cover"
                        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                        alt="Profile"
                    />

                    <ul className="flex flex-col gap-3 text-lg text-gray-700 mb-6">
                        <li><strong>Name:</strong> Aditya Sigdel</li>
                        <li><strong>Username:</strong> aditya_s</li>
                        <li><strong>Email:</strong> aditya@example.com</li>
                        <li><strong>Phone:</strong> +977-98XXXXXXXX</li>
                        <li><strong>Address:</strong> Kathmandu, Nepal</li>
                    </ul>

                    <div className="w-w-11/12 mb-6">
                        <h2 className="text-2xl font-bold text-[#0033A0] mb-2">About Me</h2>
                        <p className="text-gray-600">
                            Hi, my name is Aditya. I’m passionate about web development and constantly learning new technologies to improve my skills.
                        </p>
                    </div>
                </div>

                {/* Posts Section */}
                <div className="w-11/12  bg-white rounded-2xl shadow-lg mt-8 p-6">
                    <h2 className="text-2xl font-bold text-[#0033A0] mb-4">My Posts</h2>
                    <ul className="flex flex-col gap-3 text-gray-700">
                        {posts.map((post) => (
                            <li key={post.id} className="border-b pb-2">{`Post #${post.id} - ${post.content}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
