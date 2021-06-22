import React from 'react';

class BigBtn extends React.Component {

  render() {
     return (
      <div className={`bigBtn ${this.props.bgBtn}`} >
        <img src={this.props.icon} alt="bgBtn" className="icon" />
      </div>
    );
  }
   
}

export default BigBtn;