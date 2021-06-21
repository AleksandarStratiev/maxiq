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
    this.lampBedroom = this.lampBedroom.bind(this);
    this.lampLivingroom = this.lampLivingroom.bind(this)

    

    this.state = {
        bgBannerMobile: 'default',
        lamp: 'off',
        klima: 'off',
        klimaOpen: 'off',
        tv: 'off',
        fan: 'off',
        contact: 'off',
        oven: 'off',
        garage: false,
        menulamp: false,
        lampBedroom: false,
        lampLivingroom: false,
    };

  }

  lamp() {
    if (this.state.lamp === 'off') {
      this.setState({lamp: 'on'});
    } else {
      this.setState({lamp: 'off'});
    }
    this.setState({bgBannerMobile: 'lamp'}); 

    if (this.state.menulamp === false) {
      this.setState({menulamp: true});
    }
  }

  back() {
      this.setState({menulamp: false});
  }

  klima() {
    if (this.state.klima === 'off') {
      this.setState({klima: 'on', klimaOpen: {klimaOpen}});
    } else {
      this.setState({klima: 'off'});
    }
    this.setState({bgBannerMobile: 'klima'});
  }

  tv() {
    if (this.state.tv === 'off') {
      this.setState({tv: 'on'});
    } else {
      this.setState({tv: 'off'});
    }
    this.setState({bgBannerMobile: 'tv'});   
  }

  fan() {
    if (this.state.fan === 'off') {
      this.setState({fan: 'on'});
    } else {
      this.setState({fan: 'off'});
    }
    this.setState({bgBannerMobile: 'fan'});   
  }

  contact() {
    if (this.state.contact === 'off') {
      this.setState({contact: 'on', oven: {ovenOn}});
    } else {
      this.setState({contact: 'off'});
    }
    this.setState({bgBannerMobile: 'contact'});   
  }

  garage() {
    if (this.state.garage === false) {
      this.setState({garage: true});
    } else {
      this.setState({garage: false});
    }
    this.setState({bgBannerMobile: 'garage'});   
  }

  lampBedroom() {
    if (this.state.lampBedroom === false) {
      this.setState({lampBedroom: true});
    } else {
      this.setState({lampBedroom: false});
    }
  }

  lampLivingroom() {
    if (this.state.lampLivingroom === false) {
      this.setState({lampLivingroom: true});
    } else {
      this.setState({lampLivingroom: false});
    }
  }



  
  render() {
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


        </div> 
        <Slogan />
        <Mobile 
          actionLamp={this.lamp}
          actionKlima={this.klima}
          actionTv={this.tv}
          actionFan={this.fan}
          actionContact={this.contact}
          actionGarage={this.garage}
          actionBack={this.back}       
          actionLampBedroom={this.lampBedroom}
          actionLampLiviingroom={this.lampLivingroom}
          bgBannerMobile={this.state.bgBannerMobile}
          bgMenuLamp={this.state.menulamp}
        />
      </div>
    )
  }
}

export default House;