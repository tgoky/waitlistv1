import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <h1></h1>
        <p>Join our waitlist to stay updated!</p>
        <div className="image-container">
          <img src="/sa1.png" alt="Image 1" style={{width: '200px', height: '200px'}}/>
          <img src="/sa2.png" alt="Image 2"style={{width: '200px', height: '200px'}} />
          <img src="/sa3.png" alt="Image 2" style={{width: '200px', height: '200px'}}/>
        </div>
      </div>
    </div>
  );
};

export default App;
