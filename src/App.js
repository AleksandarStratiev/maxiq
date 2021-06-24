import React from 'react';
import './App.scss';
import House from './components/house';

function App() {

  return (
    <>
      <div className="header-img" />
      <div className="App">
          <div className="container">            
            <House />            
        </div>
      </div>
    </>
  );
}

export default App;
