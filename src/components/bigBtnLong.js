import React, { useState } from 'react';

function BigBtnLong(props) {

  const [imgBG, setBg] = useState('bigBtnLongOff');

  function ChangeState() {
    if (imgBG === 'bigBtnLongOff') {
      setBg('bigBtnLongOn')
    } else {
      setBg('bigBtnLongOff')
    }
  }

    return (
      <div onClick={ChangeState} className={`bigBtnLong ${imgBG}`} >
        <img src={props.icon} alt="bgBigBtnLong" className="icon" />
      </div>
      );
}

export default BigBtnLong;