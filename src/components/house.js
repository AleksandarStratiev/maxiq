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

// import { actionTv } from '../actions'



class House extends React.Component {
  constructor(props) {
    super(props)

    this.lamp = this.lamp.bind(this);
    this.klima = this.klima.bind(this);
    this.tv = this.tv.bind(this);
    this.fan = this.fan.bind(this);
    this.contact = this.contact.bind(this);
    this.garage = this.garage.bind(this);
    this.back = this.back.bind(this);
    this.backBlinds = this.backBlinds.bind(this);
    this.lampBedroom = this.lampBedroom.bind(this);
    this.lampLivingroom = this.lampLivingroom.bind(this)
    this.blinds = this.blinds.bind(this)
    this.blindsGarage = this.blindsGarage.bind(this)
    this.blindsLivingroom = this.blindsLivingroom.bind(this)

    

    this.state = {
        bgBannerMobile: 'default',
        lamp: 'off',
        klima: 'off',
        klimaOpen: 'off',
        tv: 'off',
        fan: 'off',
        contact: 'off',
        oven: 'off',
        blinds: 'off',
        garage: false,
        blindsGarage: false,
        blindsLivingroom: false,
        menulamp: false,
        menuBlinds: false,
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

  lamp() {
    if (this.state.lamp === 'off') {
      this.setState({
        lamp: 'on'
      });
    } else {
      this.setState({
        lamp: 'off'
      });
    }
    this.setState({bgBannerMobile: 'lamp'}); 

    if (this.state.menulamp === false) {
      this.setState({menulamp: true});
    }
  }

  back() {

    if (this.state.bgBigBtnLongBedroom === "on" || this.state.bgBigBtnLongLivingroom === "on") {
      this.setState({bgBigBtnLamp: "on"});
    } else {
      this.setState({bgBigBtnLamp: "off"});
    }

    this.setState({
      menulamp: false
    }); 

  }

  backBlinds() {

    if (this.state.bgBigBtnLongBlindsGarage === "on" || this.state.bgBigBtnLongBlindsLivingroom === "on") {
      this.setState({bgBigBtnBlinds: "on"});
    } else {
      this.setState({bgBigBtnBlinds: "off"});
    }

    this.setState({
      menuBlinds  : false
    }); 

  }
  

  klima() {
    if (this.state.klima === 'off') {
      this.setState({
        klima: 'on', 
        klimaOpen: {klimaOpen},
        bgBigBtnKlima: "on"
    });
    } else {
      this.setState({
        klima: 'off', 
        bgBigBtnKlima: 'off'
      });
    }
    this.setState({bgBannerMobile: 'klima'});
  }

  tv() {
    if (this.state.tv === 'off') {
      this.setState({
        tv: 'on', 
        bgBigBtnTv: "on"
      });
    } else {
      this.setState({
        tv: 'off', 
        bgBigBtnTv: 'off'
      });
    }
    this.setState({bgBannerMobile: 'tv'});   
  }

  fan() {
    if (this.state.fan === 'off') {
      this.setState({
        fan: 'on',
        bgBigBtnFan: "on"
      });
    } else {
      this.setState({
        fan: 'off',
        bgBigBtnFan: "off"
      });
    }
    this.setState({bgBannerMobile: 'fan'});   
  }

  contact() {
    if (this.state.contact === 'off') {
      this.setState({
        contact: 'on', 
        oven: {ovenOn},
        bgBigBtnContact: "on"
    });
    } else {
      this.setState({
        contact: 'off',
        bgBigBtnContact: "off"
      });
    }
    this.setState({bgBannerMobile: 'contact'});   
  }
  
  garage() {
    if (this.state.garage === false) {
      this.setState({
        garage: true,
        bgBigBtnGarage: "on"
      });
    } else {
      this.setState({
        garage: false,
        bgBigBtnGarage: "off"
      });
    }
    this.setState({bgBannerMobile: 'garage'});   
  }
  
  lampBedroom() {
    if (this.state.lampBedroom === false) {
      this.setState({
        lampBedroom: true,
        bgBigBtnLongBedroom: 'on'
      });
    } else {
      this.setState({
        lampBedroom: false,
        bgBigBtnLongBedroom: 'off'
      });
    }
  }

  lampLivingroom() {
    if (this.state.lampLivingroom === false) {
      this.setState({
        lampLivingroom: true,
        bgBigBtnLongLivingroom: 'on'
      });
    } else {
      this.setState({
        lampLivingroom: false,
        bgBigBtnLongLivingroom: 'off'
      });
    }
  }

  blinds() {
    this.setState({bgBannerMobile: 'blinds'});   

    if (this.state.menuBlinds === false) {
      this.setState({menuBlinds: true});
    }
  }

  blindsGarage() {
    if (this.state.blindsGarage === false) {
      this.setState({
        blindsGarage: true,
        bgBigBtnLongBlindsGarage: 'on'
      });
    } else {
      this.setState({
        blindsGarage: false,
        bgBigBtnLongBlindsGarage: 'off'
      });
    }
  }

  blindsLivingroom() {
    if (this.state.blindsLivingroom === false) {
      this.setState({
        blindsLivingroom: true,
        bgBigBtnLongBlindsLivingroom: 'on'
      });
    } else {
      this.setState({
        blindsLivingroom: false,
        bgBigBtnLongBlindsLivingroom: 'off'
      });
    }
  }

  
  render() {
    console.log(this.state.bgBigBtnLongBlindsLivingroom)
    return (
      <div className="house" >
        <img src={house} alt="house" className={`houseBackground show`} />
        <div className="actions">
          <img src={tvOn} alt="tvOn" className={`tvOn ${this.state.tv}`} />
          <img src={fanOn} alt="fanOn" className={`fanOn ${this.state.fan}`} />
          <img src={klimaOn} alt="klimaOn" className={`klimaOn ${this.state.klima}`} />
          <img src={klimaOpen} alt="klimaOpen" className={`klimaOpen ${this.state.klima}`} />
          <img src={contactOn} alt="contactOn" className={`contactOn ${this.state.contact}`} />
          <img src={ovenOn} alt="ovenOn" className={`ovenOn ${this.state.contact}`} />
          <img 
            src={this.state.garage == false ? `${garageDown}` : `${garageTop}`} 
            alt="garageOn" className={`garageOn garageTop`} 
          />
          <img src={lampBedroomOn} alt="lampBedroomOn" className={`lampBedroomOn ${this.state.lampBedroom}`} />
          <img src={lampLivingroomOn} alt="lampLivingroomOn" className={`lampLivingroomOn ${this.state.lampLivingroom}`} />
          <img 
            src={this.state.blindsGarage == false ? `${blindsGarageDown}` : `${blindsGarageTop}`} 
            alt="blindsGarage" className={`BlindsGarageOn`} 
          />
          <img 
            src={this.state.blindsLivingroom == false ? `${blindsLivingroomDown}` : `${blindsLivingroomTop}`} 
            alt="blindsLivingroom" className={`BlindsLivingroomOn`} 
          />

        </div> 
        <Slogan />
        <Mobile 
          actionLamp={this.lamp}
          actionKlima={this.klima}
          actionTv={this.tv}
          actionFan={this.fan}
          actionContact={this.contact}
          actionGarage={this.garage}
          actionBlinds={this.blinds}
          actionBack={this.back}       
          actionBackBlinds={this.backBlinds}       
          actionLampBedroom={this.lampBedroom}
          actionLampLivingroom={this.lampLivingroom}
          actionBlindsGarage={this.blindsGarage}
          actionBlindsLivingroom={this.blindsLivingroom}
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
          bgBigBtnLongBlindsGarage={this.state.bgBigBtnLongBlindsGarage}
          bgBigBtnLongBlindsLivingroom={this.state.bgBigBtnLongBlindsLivingroom}
          bgBigBtnLongLivingroom={this.state.bgBigBtnLongLivingroom}
        />
      </div>
    )
  }
}

export default House;