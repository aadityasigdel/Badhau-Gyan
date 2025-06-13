import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Discussions() {
  const [topic, setTopic] = useState('');
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = () => {
    if (topic && post.trim()) {
      setPosts([...posts, { topic, content: post }]);
      setPost('');
    }
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6"> Local Discussions</h2>

        <label className="block text-gray-700 font-medium mb-2">Select Topic/Location:</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Choose a Discussion Topic --</option>
          <option value="Local Khabar - Itahari">Local Khabar - Itahari</option>
          <option value="Local Khabar - Kathmandu">Local Khabar - Kathmandu</option>
          <option value="Local Khabar - Pokhara">Local Khabar - Pokhara</option>
          <option value="Local Khabar - Dharan">Local Khabar - Dharan</option>
          <option value="Local Khabar - Biratnagar">Local Khabar - Biratnagar</option>
          <option value="Educational News">Educational News</option>
          <option value="Tech Updates">Tech Updates</option>
        </select>

        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Share your thoughts here..."
          className="w-full p-3 border border-gray-300 rounded-lg h-28 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Post
        </button>

        <div className="border-t border-gray-200 my-6"></div>

        <h3 className="text-xl font-semibold text-gray-800 mb-4"> Recent Discussions</h3>
        {posts.map((p, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4"
          >
            <h4 className="text-blue-600 font-semibold">{p.topic}</h4>
            <p className="text-gray-700 mt-2">{p.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
