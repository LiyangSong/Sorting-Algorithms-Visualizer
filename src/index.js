import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Main entry of application.
// Render component 'App' within div 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);