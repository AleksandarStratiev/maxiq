import React, { useState } from 'react';
import BigBtn from '../components/bigBtn';
import MiniBtn from '../components/miniBtn';
import LongBtn from '../components/longBtn';
import lamp from '../images/icons/lamp.png';
import air from '../images/icons/air.png';
import tv from '../images/icons/tv.png';
import fan from '../images/icons/fan.png';
import blinds from '../images/icons/blinds.png';
import contact from '../images/icons/contact.png';
import garage from '../images/icons/garage.png';
import camera from '../images/icons/camera.png';

import { actionTv } from '../actions'

class Menu extends React.Component {

    // const [bannerBg, setBannerBg] = useState('default');

  render() {
    return (
      <div className="menu">
        <span>MaxiQ - Smart home</span>
        <span>Последно използвана функция:</span>
        {/* <div alt="Banner Menu" className={`bannerMenu ${bannerBg}`} /> */}
        <div alt="Banner Menu" className={`bannerMenu show`} />
        <span className="slider-point"></span>
        <div className="btns">
          <div >
            <BigBtn icon={lamp} />
          </div>
          <div >
            <BigBtn icon={air} />
          </div>
          <div >
            <BigBtn icon={tv} />
          </div>
          <div >
            <BigBtn icon={fan} />
          </div>
          <div>
            <MiniBtn icon={blinds} />
          </div>
          <div >
            <MiniBtn icon={contact} />
          </div>
          <div >
            <MiniBtn icon={garage} />
          </div>      
          <div onClick={() => actionTv()}>
            <LongBtn icon={camera} />
          </div>
          <div>
            <LongBtn icon={camera} />
          </div>
        </div>
        
      </div>
    );
  }
}
export default Menu;
