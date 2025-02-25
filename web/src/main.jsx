import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from './App';  // Import the App component correctly
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
