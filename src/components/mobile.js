import React, { useState, useEffect } from 'react';
import mobile from '../images/mobile.png';
import Menu from './menu';

function Mobile() {

    const [state, setState] = useState('hide');
    
    useEffect(() => {
        setState( 'show' );
    }, []);

    return (
        <div className="mobile">
          <img src={mobile} alt="phone" className={`bannerDefault ${state}`} />
          <Menu />
        </div>
      );
}

export default Mobile;