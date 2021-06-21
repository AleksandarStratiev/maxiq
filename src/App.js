import React from 'react';
import './App.scss';
import House from './components/house';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions'


function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div className="header-img" />
      <div className="App">
          <div className="container">            
            <House />            
        </div>
        {/* <button style={{position: 'absolute', top: '500px', left: '20px'}} onClick={() => {dispatch(increment())}}>+</button>
        <button style={{position: 'absolute', top: '500px'}} onClick={() => {dispatch(decrement())}}>-</button> 
        <h1 style={{position: 'absolute', top: '500px'}}>Caunter {counter}</h1>*/}
      </div>
    </>
  );
}

export default App;
