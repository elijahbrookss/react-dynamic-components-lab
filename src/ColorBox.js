import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {

    const opacityValue = this.props.opacity;

    if(opacityValue >= 0.2){
      return(
        <div className="color-box" style={{opacity: opacityValue /*replace null with the value*/}}>
        <ColorBox opacity={ opacityValue - 0.1 } />
      </div>
      );
    }else if(opacityValue < 0.2){
      return null;
    }
  }

}
