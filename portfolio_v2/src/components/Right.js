import React, { Component } from 'react';
import rotating_img from "../components/assets/Curve1output_slow.gif"

class Right extends Component {
  render() {
    return (
      <div className="right">
        <img src={rotating_img} style={{height:"100%", alignContent:"center", justifyContent:"center", maxHeight:"100px"}}/>
      </div>
    );
  }
}

export default Right;
