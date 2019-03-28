import React, { Component } from "react";

import './css/ButtonContainer.scss';

import * as CharacterEnum from '../enum/CharacterEnum';

class ButtonContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"container-bottom"}>
        <a href={CharacterEnum.getImageFromTypes(this.props.colorType, this.props.faceType)}
           download="minguri.jpg">

          <img className={"download-action"} src={"/assets/download-action.png"}/>
        </a>
        <img className={"instagram-logo"} src={"/assets/instagram-logo.png"}/>
      </div>
    );
  }
}

export default ButtonContainer;
