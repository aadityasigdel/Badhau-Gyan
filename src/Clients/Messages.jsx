import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Messages() {
    const [messages, setMessages] = useState([]);

    return (
        <div className="h-screen bg-white">
            <Navigation />

            <div className="flex flex-col w-11/12 mx-auto h-[85%] mt-4 bg-white rounded-xl shadow-xl">

                <div className="flex flex-1 h-full">

                    {/* Friends List */}
                    <div className="w-1/3 shadow-xl rounded-2xl p-4">
                        <h3 className="text-xl font-semibold mb-4 ">Friends</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 rounded px-2 py-2">
                                <div className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center text-sm font-bold">F1</div>
                                <span className="text-gray-800">Friend1</span>
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:bg-blue-100 rounded px-2 py-2">
                                <div className="w-8 h-8 rounded-full bg-pink-400 text-white flex items-center justify-center text-sm font-bold">F2</div>
                                <span className="text-gray-800">Friend2</span>
                            </li>
                        </ul>
                    </div>

                    {/* Chat Area */}
                    <div className="w-2/3 flex flex-col shadow-2xl rounded-md">
                        {/* Header */}
                        <div className="p-4  text-base font-medium bg-white shadow-2xl rounded">Friend1</div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-200">
                            {/* Chat messages will appear here */}
                        </div>

                        {/* Message Input */}
                        <div className="p-3  bg-white flex gap-2 shadow-md shadow-gray-400 rounded-sm">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 px-3 py-2 rounded-xl text-sm shadow-[inset_0_2px_1px_rgba(0,0,0,0.3)] shadow-gray-400"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
