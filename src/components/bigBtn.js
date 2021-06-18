import React, { useState } from 'react';

function BigBtn(props) {

  const [imgBG, setBg] = useState('bigBtnOff');

  function ChangeState() {
    if (imgBG === 'bigBtnOff') {
      setBg('bigBtnOn')
    } else {
      setBg('bigBtnOff')
    }
  }

    return (
      <div onClick={ChangeState} className={`bigBtn ${imgBG}`} >
        <img src={props.icon} alt="bg" className="icon" />
      </div>
      );
}

export default BigBtn;