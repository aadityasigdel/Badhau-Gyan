import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextAPI from './ContextAPI/Context.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientID = "863308908711-0a7uiqslmaloru4eok3krqgr4jf7ehmc.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAPI>
    <GoogleOAuthProvider clientId={clientID} locale="en">
    <App />
    </GoogleOAuthProvider>
    </ContextAPI>
  </StrictMode>
);
