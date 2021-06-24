import React from 'react';
import mobile from '../images/mobile.png';
import BigBtn from '../components/bigBtn';
import BigBtnLong from '../components/bigBtnLong';
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
import blindsGarage from '../images/icons/blindsGarage.png';
import blindsLivingroom from '../images/icons/blindsLivingroom.png';
import lampBedroom from '../images/icons/lampBedroom.png';
import lampLivingRoom from '../images/icons/lampLivingRoom.png';
import uninstallLamps from '../images/buttons/uninstall.png';
import uninstallBlinds from '../images/buttons/uninstallBlinds.png';

// import {cameraMoveLeft} from '../actions/'


class Mobile extends React.Component {
  constructor(props) {
    super(props)

    // this.cameraMoveLeft = cameraMoveLeft.bind(this);
    
    this.state = {
      phoneState: 'hide'
    };

  }

  // cameraMoveLeft() {
  //   if (this.state.bgCameraPosition > 0) {
  //     this.setState({
  //       bgCameraPosition: -50
  //     });
  //   } 
  // }

  componentDidMount() {
    setTimeout(() => {  
        this.setState({
        phoneState: "show"
      });
    });    
  }

  renderMenu(props)  {
    if (this.props.bgMenuLamp === true) {
      return (
        <div className="menu">
          <div className="btnBack" onClick={this.props.actionBack}>
            <span className="iconBack"></span>
            Назад
          </div>
          <span>MaxiQ - Smart home</span>
          <span>Осветление:</span>
          <div alt="Banner Menu" className={`bannerMenu ${this.props.bgBannerMobile}`} />
          <span className="slider-point"></span>
          <div className="btns">        
            <div onClick={this.props.actionLamp}>
              <div onClick={this.props.actionLampBedroom}>
                <BigBtnLong 
                  bgBtn={this.props.bgBigBtnLongBedroom}
                  icon={lampBedroom} 
                />
              </div>
              <div onClick={this.props.actionLampLivingroom}>
                <BigBtnLong 
                  bgBtn={this.props.bgBigBtnLongLivingroom}
                  icon={lampLivingRoom} 
                />
              </div>
              <img src={uninstallLamps} alt='uninstallLamps' className="uninstall" />
            </div>
          </div>            
        </div>
      )
    }

    if (this.props.bgMenuBlinnds === true) {
      return (
        <div className="menu blinds">
          <div className="btnBack" onClick={this.props.actionBackBlinds}>
            <span className="iconBack"></span>
            Назад
          </div>
          <span>MaxiQ - Smart home</span>
          <span>Щори:</span>
          <div alt="Banner Menu" className={`bannerMenu ${this.props.bgBannerMobile}`} />
          <span className="slider-point"></span>
          <div className="btns blinds">        
            <div onClick={this.props.actionBlinds}>
              <div onClick={this.props.actionBlindsGarage}>
                <BigBtnLong 
                  bgBtn={this.props.bgBigBtnLongBlindsGarage}
                  icon={blindsGarage} 
                />
              </div>
              <div onClick={this.props.actionBlindsLivingroom}>
                <BigBtnLong 
                  bgBtn={this.props.bgBigBtnLongBlindsLivingroom}
                  icon={blindsLivingroom} 
                />
              </div>
              <img src={uninstallBlinds} alt='uninstall' className="uninstall" />
            </div>
          </div>            
        </div>
      )
    }

    if (this.props.bgMenuCamera === true) {
      return (
        <div className="menu camera">
          <div className="btnBack" onClick={this.props.actionBackCamera}>
            <span className="iconBack" />
            <span className="textBack">Назад</span>
          </div>
          <span>MaxiQ - Smart home</span>
          <span>Камера кухня:</span>
          <div className="parentCameraBox" 
            style={{marginLeft: this.props.cameraPosition}}
          />
          <div className="bgCameraKitchen" />
          <button 
            onClick={this.props.actionCameraLeft} 
            className={`left ${this.props.cametaBtnLeft}`}
          >
            <span className="icon" /></button>
          <button 
            onClick={this.props.actionCameraRight}
            className={`right ${this.props.cametaBtnRight}`}
          >
            <span className="icon" /></button>
        </div>
      )
    }

    return (
      <div className="menu">
        <span>MaxiQ - Smart home</span>
        <span>Последно използвана функция:</span>
        <div alt="Banner Menu" className={`bannerMenu ${this.props.bgBannerMobile}`} />
        <span className="slider-point"></span>
        <div className="btns">        
          <div onClick={this.props.actionLamp}>
            <BigBtn 
              bgBtn={this.props.bgBigBtnLamp}
              icon={lamp} 
            />
          </div>
          <div onClick={this.props.actionKlima}>
            <BigBtn 
              bgBtn={this.props.bgBigBtnKlima}
              icon={air} 
            />
          </div>
          <div onClick={this.props.actionTv}>
            <BigBtn 
              bgBtn={this.props.bgBigBtnTv}
              icon={tv} 
            />
          </div>
          <div onClick={this.props.actionFan}>
            <BigBtn 
              bgBtn={this.props.bgBigBtnFan}
              icon={fan} />
          </div>
          <div onClick={this.props.actionBlinds}>
            <MiniBtn 
              bgBtn={this.props.bgBigBtnBlinds}
              icon={blinds} />
          </div>
          <div onClick={this.props.actionContact}>
            <MiniBtn 
              bgBtn={this.props.bgBigBtnContact}
              icon={contact} 
            />
          </div>
          <div onClick={this.props.actionGarage}>
            <MiniBtn 
              bgBtn={this.props.bgBigBtnGarage}
              icon={garage} />
          </div>      
          <div onClick={this.props.actionCamera}>
            <LongBtn icon={camera} />
          </div>
          <div className="disabled">
            <div className="seeAll" />
          </div>
        </div>            
      </div>
    )
  }
  render() {
    return (
        <div className="mobile">
          <img src={mobile} alt="phone" className={`bannerDefault ${this.state.phoneState}`} />
          {this.renderMenu()}
        </div>
      );
  }
}

export default Mobile;