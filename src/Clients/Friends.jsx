import React from 'react';
import Navigation from './Navigation.jsx';

export default function Friends() {
    return (
        <div className="h-screen bg-gray-100">
            <Navigation />
            <div className="w-11/12 mx-auto mt-10 rounded-2xl flex h-10/12 justify-evenly gap-6">

                {/* Left: Search Section */}
                <div className="w-full bg-white rounded-xl shadow-md p-6 shadow-gray-500">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Friends</h2>
                    <input
                        type="text"
                        placeholder="Search for a user..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm  focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Right: Friends List */}
                <div className="w-full bg-white rounded-xl shadow-md p-6 shadow-gray-500">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Friends List</h2>
                    <ul className="divide-y divide-gray-200 bg-gray-50 rounded-md shadow-md ">
                        {['Friend 1', 'Friend 2', 'Friend 3', 'Friend 4', 'Friend 5'].map((friend, index) => (
                            <li
                                key={index}
                                className="px-4 py-3 shadow-md hover:bg-blue-200  mt-2 text-gray-800"
                            >
                                {friend}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
