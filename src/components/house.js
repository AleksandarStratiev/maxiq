import React, { useState, useEffect } from 'react';
import house from '../images/house.png';
import tvOn from '../images/actions/tv-on.gif';
import Mobile from './mobile';
import Slogan from './slogan';

// import { actionTv } from '../actions'


function House() {

  const [houseBg, setHouseBg] = useState('');

  useEffect(() => {
    setHouseBg("show");
  });


  return (
    <div className="house">
      <img src={house} alt="house" className={`houseBackground ${houseBg}`} />
      <div className="actions">
        <img src={tvOn} alt="tvOn" className={`tvOn on`} />
      </div> 
      <Slogan />
      {/* <button onClick={() => setCount(count + 1)}></button> */}
      <Mobile />
    </div>
  )
}

export default House;