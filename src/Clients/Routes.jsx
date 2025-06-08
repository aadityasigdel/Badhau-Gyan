import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Navigation from './Navigation.jsx';
import Friends from './Friends.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/navigation" element={<Navigation />} />
        </Routes>
    );
}
