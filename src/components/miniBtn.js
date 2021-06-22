import React from 'react';

class MiniBtn extends React.Component {

  render() {
    return (
      <div className={`miniBtn ${this.props.bgBtn}`} >
        <img src={this.props.icon} alt="bg" className="icon" />
      </div>
      );
  }    
}

export default MiniBtn;