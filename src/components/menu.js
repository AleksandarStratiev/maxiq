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

// import { actionTv } from '../actions'

function Menu(prop) {

  const [bgImg, setBgImg] = useState('default')    

    return (
      <div className="menu">
        <button onClick={this.props.action} >buttonTest</button>
        <span>MaxiQ - Smart home</span>
        <span>Последно използвана функция:</span>
        <div alt="Banner Menu" className={`bannerMenu ${bgImg}`} />
        <span className="slider-point"></span>
        <div className="btns">        
          <div onClick={() => {setBgImg('lamp')}}>
            <BigBtn icon={lamp} />
          </div>
          <div onClick={() => {setBgImg('klima')}}>
            <BigBtn icon={air} />
          </div>
          <div onClick={() => {setBgImg('tv')}}>
            <BigBtn icon={tv} />
          </div>
          <div onClick={() => {setBgImg('fan')}}>
            <BigBtn icon={fan} />
          </div>
          <div onClick={() => {setBgImg('blinds')}}>
            <MiniBtn icon={blinds} />
          </div>
          <div onClick={() => {setBgImg('contact')}}>
            <MiniBtn icon={contact} />
          </div>
          <div onClick={() => {setBgImg('garage')}}>
            <MiniBtn icon={garage} />
          </div>      
          <div>
            <LongBtn icon={camera} />
          </div>
          <div>
            <LongBtn icon={camera} />
          </div>
        </div>
        
      </div>
    );

}
export default Menu;
