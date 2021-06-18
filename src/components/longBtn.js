import React, { useState } from 'react';

function LongBtn(props) {

  const [imgBG, setBg] = useState('longBtnOff');

  function ChaneState() {
    if (imgBG === 'longBtnOff') {
      setBg('longBtnOn')
    } else {
      setBg('longBtnOff')
    }
  }

    return (
      <div onClick={ChaneState} className={`longBtn ${imgBG}`} >
        <img src={props.icon} alt="bg" className="icon" />
      </div>
      );
}

export default LongBtn;