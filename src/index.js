import React from 'react';
import ReactDOM from 'react-dom/client'; // Sử dụng 'react-dom/client' thay vì 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Tạo root mới
root.render(
  <Router> {/* Bao bọc App bằng Router */}
    <App />
  </Router>
);
