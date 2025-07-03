import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Discussions() {
  const [topic, setTopic] = useState('');
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = () => {
    if (topic.trim() && post.trim()) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          topic,
          content: post,
        },
      ]);
      setTopic('');
      setPost('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <Navigation />

      {/* Post Creation */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-indigo-700">Start a Discussion</h2>
        <input
          className="w-full border p-3 rounded-lg focus:outline-indigo-500"
          placeholder="Discussion Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          className="w-full border p-3 rounded-lg focus:outline-indigo-500"
          placeholder="Write your thoughts here..."
          rows="4"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          onClick={handleSubmit}
        >
          Post Discussion
        </button>
      </div>

      {/* Posts List */}
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-md border hover:scale-[1.01] transition-transform"
          >
            <h3 className="text-lg font-bold text-indigo-600 mb-2">{item.topic}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}

        {posts.length === 0 && (
          <p className="text-center text-gray-400">No discussions yet. Start one above!</p>
        )}
      </div>
    </div>
  );
}
