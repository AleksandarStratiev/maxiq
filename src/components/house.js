import React, { useState, useEffect } from 'react';
import house from '../images/house.png';
import tvOn from '../images/actions/tv-on.gif';

import { actionTv } from '../actions'

class House extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      tv : "off"
    }

    this.actionTv = actionTv.bind(this);

  }



  render() {
    console.log(this.state.tv)
    return (
        <div className="house">
          <img src={house} alt="house" className={`houseBackground show`} />
          <div className="actions">
            <img src={tvOn} alt="tvOn" className={`tvOn on`} />

          </div> 
        </div>
    )
  }
}

export default House;