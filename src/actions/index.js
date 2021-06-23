import klimaOpen from '../images/actions/klima-open.gif';
import ovenOn from '../images/actions/oven-on.gif';

// on/off Lamp - change mobile banner - on/off mobile menu with lamps
export function lamp() {
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

// btn back from mobile Lamp menu - change mobile banner
export function back() {
    if (this.state.bgBigBtnLongBedroom === "on" || this.state.bgBigBtnLongLivingroom === "on") {
      this.setState({bgBigBtnLamp: "on"});
    } else {
      this.setState({bgBigBtnLamp: "off"});
    }
    this.setState({menulamp: false}); 
}

// btn back from Blinds menu - change mobile banner
export function backBlinds() {
    if (this.state.bgBigBtnLongBlindsGarage === "on" || this.state.bgBigBtnLongBlindsLivingroom === "on") {
      this.setState({bgBigBtnBlinds: "on"});
    } else {
      this.setState({bgBigBtnBlinds: "off"});
    }
    this.setState({menuBlinds  : false}); 
}

// on/off Klima - change mobile banner 
export function klima() {
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

// on/off tv - change mobile banner 
export function tv() {
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

// on/off fan - change mobile banner 
export function fan() {
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

// on/off contact - change mobile banner 
export function contact() {
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
  
// on/off garage - change mobile banner 
export function garage() {
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
  
// on/off lamp in bedroom - change mobile banner 
export function lampBedroom() {
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

// on/off lamp in livingroom - change mobile banner 
export function lampLivingroom() {
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

// blinds - change mobile banner - on/off mobile menu with blinds
export function blinds() {
    this.setState({bgBannerMobile: 'blinds'});   

    if (this.state.menuBlinds === false) {
      this.setState({menuBlinds: true});
    }
}

// on/off blinds in garage - change mobile btn background 
export function blindsGarage() {
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

// on/off blinds in livingroom - change mobile btn background 
export function blindsLivingroom() {
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

// action camera 
export function camera() {
    if (this.state.menuCamera === false) {
      this.setState({
        menuCamera: true
      });
    } else {
      this.setState({
        menuCamera: false
      });
    }
}