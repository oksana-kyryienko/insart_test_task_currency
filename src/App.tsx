import React from 'react';
import './App.css';
import { Currency } from './components/Currency';

export const App = () => {
  return (
    <div className="App" id='app'>
      <div className="header">Header</div>
      <div className='main'><Currency /></div>
      <div style={{ height: '80px'  }}></div>
      <div className="footer">Footer</div>
    </div>
  );
};


