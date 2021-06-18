import React, { useState } from 'react';

function MiniBtn(props) {

  const [imgBG, setBg] = useState('miniBtnOff');

  function ChaneState() {
    if (imgBG === 'miniBtnOff') {
      setBg('miniBtnOn')
    } else {
      setBg('miniBtnOff')
    }
  }

    return (
      <div onClick={ChaneState} className={`miniBtn ${imgBG}`} >
        <img src={props.icon} alt="bg" className="icon" />
      </div>
      );
}

export default MiniBtn;