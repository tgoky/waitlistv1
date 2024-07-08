import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <h1>Welcome to the Waitlist App</h1>
        <p>Join our waitlist to stay updated!</p>
      </div>
    </div>
  );
};

export default App;
