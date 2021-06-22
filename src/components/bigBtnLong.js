import React from 'react';

class BigBtnLong extends React.Component {

  render() {
    return (
      <div className={`bigBtnLong ${this.props.bgBtn}`} >
        <img src={this.props.icon} alt="bgBigBtnLong" className="icon" />
      </div>
      );
  }  
}

export default BigBtnLong;