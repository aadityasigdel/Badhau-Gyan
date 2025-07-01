import React, { useState } from 'react';
import Navigation from './Navigation.jsx';

export default function Discussions() {
  const [UserList, setUserList] = useState('');


  const handleSubmit = () => {
    if (topic && post.trim()) {
      setPosts([...posts, { topic, content: post }]);
      setPost('');
    }
  };

  return (
    <div>
      <Navigation />
     </div>
  );
}
