import React from 'react';
import house from '../images/house.png';
import tvOn from '../images/actions/tv-on.gif';
import fanOn from '../images/actions/fan-on.gif';
import klimaOn from '../images/actions/klima-on.gif';
import klimaOpen from '../images/actions/klima-open.gif';
import contactOn from '../images/actions/contact-on.gif';
import ovenOn from '../images/actions/oven-on.gif';
import garageDown from '../images/actions/garage-down.gif';
import garageTop from '../images/actions/garage-top.gif';
import blindsGarageTop from '../images/actions/blindsGarageTop.gif';
import blindsGarageDown from '../images/actions/blindsGarageDown.gif';
import blindsLivingroomDown from '../images/actions/blindsLivingroomDown.gif';
import blindsLivingroomTop from '../images/actions/blindsLivingroomTop.gif';
import lampBedroomOn from '../images/actions/lampBedroomOn.png'
import lampLivingroomOn from '../images/actions/lampLivingroomOn.png'
import Mobile from './mobile';
import Slogan from './slogan';

import { 
  lamp, 
  back, 
  backBlinds, 
  backCamera, 
  klima, 
  tv, 
  fan, 
  contact, 
  garage, 
  camera,
  cameraMoveLeft,
  cameraMoveRight,
  lampBedroom, 
  lampLivingroom, 
  blinds, 
  blindsGarage, 
  blindsLivingroom 
} from '../actions/'

class House extends React.Component {
  constructor(props) {
    super(props)

    this.lamp = lamp.bind(this);
    this.klima = klima.bind(this);
    this.tv = tv.bind(this);
    this.camera = camera.bind(this);
    this.cameraMoveLeft = cameraMoveLeft.bind(this);
    this.cameraMoveRight = cameraMoveRight.bind(this);
    this.fan = fan.bind(this);
    this.contact = contact.bind(this);
    this.garage = garage.bind(this);
    this.back = back.bind(this);
    this.backBlinds = backBlinds.bind(this);
    this.backCamera = backCamera.bind(this);
    this.lampBedroom = lampBedroom.bind(this);
    this.lampLivingroom = lampLivingroom.bind(this)
    this.blinds = blinds.bind(this)
    this.blindsGarage = blindsGarage.bind(this)
    this.blindsLivingroom = blindsLivingroom.bind(this)

    

    this.state = {
        bgBannerMobile: 'default',
        bgHouse: "hide",
        lamp: 'off',
        klima: 'off',
        klimaOpen: 'off',
        tv: 'off',
        fan: 'off',
        contact: 'off',
        oven: 'off',
        blinds: 'off',
        camera: 'off',
        garage: false,
        blindsGarage: false,
        blindsLivingroom: false,
        menulamp: false,
        menuBlinds: false,
        menuCamera: false,
        bgCameraPosition: 130,
        btnCameraLeft: true,
        btnCameraRight: true,
        lampBedroom: false,
        lampLivingroom: false,
        bgBigBtnKlima: "off",
        bgBigBtnTv: "off",
        bgBigBtnFan: "off",
        bgBigBtnContact: "off",
        bgBigBtnGarage: "off",
        bgBigBtnBlinds: "off",
        bgBigBtnLongBedroom: "off",    
        bgBigBtnLongBlindsGarage: "off",  
        bgBigBtnLongBlindsLivingroom: "off",  
        bgBigBtnLongLivingroom: "off",    
        bgBigBtnLamp: "off", 
        bgBigBtnLongBlinds: "off", 
    };

  }  

  componentDidMount() {
    setTimeout(() => {  
        this.setState({bgHouse: "show"});
    });    
  }


 
  render() {
    console.log("camera state left is: " + this.state.bgCameraPosition)
    return (
      <div className="house" >
        <img src={house} alt="house" className={`houseBackground ${this.state.bgHouse}`} />
        <div className={`actions ${this.state.bgHouse}`}>
          <img src={tvOn} alt="tvOn" className={`tvOn ${this.state.tv}`} />
          <img src={fanOn} alt="fanOn" className={`fanOn ${this.state.fan}`} />
          <img src={klimaOn} alt="klimaOn" className={`klimaOn ${this.state.klima}`} />
          <img src={klimaOpen} alt="klimaOpen" className={`klimaOpen ${this.state.klima}`} />
          <img src={contactOn} alt="contactOn" className={`contactOn ${this.state.contact}`} />
          <img src={ovenOn} alt="ovenOn" className={`ovenOn ${this.state.contact}`} />
          <img 
            src={this.state.garage === false ? `${garageDown}` : `${garageTop}`} 
            alt="garageOn" className={`garageOn garageTop`} 
          />
          <img 
          src={lampBedroomOn} 
          alt="lampBedroomOn" 
          className={`lampBedroomOn ${this.state.lampBedroom}`} />
          <img 
            src={lampLivingroomOn} 
            alt="lampLivingroomOn" 
            className={`lampLivingroomOn ${this.state.lampLivingroom}`} />
          <img 
            src={this.state.blindsGarage === false ? `${blindsGarageDown}` : `${blindsGarageTop}`} 
            alt="blindsGarage" 
            className={`BlindsGarageOn`} 
          />
          <img 
            src={this.state.blindsLivingroom === false ? `${blindsLivingroomDown}` : `${blindsLivingroomTop}`} 
            alt="blindsLivingroom" 
            className={`BlindsLivingroomOn`} 
          />
        </div> 
        <div className="containerBgBlack">
          <div className="bgBlack" />
        </div>
        <Slogan />
        <Mobile 
          actionLamp={this.lamp}
          actionKlima={this.klima}
          actionTv={this.tv}
          actionFan={this.fan}
          actionContact={this.contact}
          actionGarage={this.garage}
          actionCamera={this.camera}
          actionBlinds={this.blinds}
          actionBack={this.back}       
          actionBackBlinds={this.backBlinds} 
          actionBackCamera={this.backCamera}      
          actionLampBedroom={this.lampBedroom}
          actionLampLivingroom={this.lampLivingroom}
          actionBlindsGarage={this.blindsGarage}
          actionBlindsLivingroom={this.blindsLivingroom}
          actionCameraLeft={this.cameraMoveLeft}          
          actionCameraRight={this.cameraMoveRight}          
          cameraPosition={this.state.bgCameraPosition}
          cametaBtnLeft={this.state.btnCameraLeft}
          cametaBtnRight={this.state.btnCameraRight}
          bgMenuCamera={this.state.menuCamera}
          bgBannerMobile={this.state.bgBannerMobile}
          bgMenuLamp={this.state.menulamp}
          bgMenuBlinnds={this.state.menuBlinds}
          bgBigBtnKlima={this.state.bgBigBtnKlima}
          bgBigBtnLamp={this.state.bgBigBtnLamp}
          bgBigBtnTv={this.state.bgBigBtnTv}
          bgBigBtnFan={this.state.bgBigBtnFan}
          bgBigBtnBlinds={this.state.bgBigBtnBlinds}
          bgBigBtnContact={this.state.bgBigBtnContact}
          bgBigBtnGarage={this.state.bgBigBtnGarage}
          bgBigBtnLongBedroom={this.state.bgBigBtnLongBedroom}
          bgBigBtnLongLivingroom={this.state.bgBigBtnLongLivingroom}
          bgBigBtnLongBlindsGarage={this.state.bgBigBtnLongBlindsGarage}
          bgBigBtnLongBlindsLivingroom={this.state.bgBigBtnLongBlindsLivingroom}
        />
      </div>
    )
  }
}

export default House; 