import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Navigation from './Navigation.jsx';
import Friends from './Friends.jsx';
import Messages from './Messages.jsx';
import Discussions from './Discussions.jsx';
import Profile from './Profile.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/discussions" element={<Discussions />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}
