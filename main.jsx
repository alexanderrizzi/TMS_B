import React from 'react';
import ReactDOM from 'react-dom/client';
import StoryGenerator from './StoryGenerator';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoryGenerator />
  </React.StrictMode>
);
