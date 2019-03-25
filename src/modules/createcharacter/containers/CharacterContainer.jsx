import React, { Component } from "react";
import './css/CharacterContainer.css';
import * as CharacterEnum from '../enum/CharacterEnum';

import Option from "../components/Option";
import Button from '../../userform/components/Button';

class CharacterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorType: CharacterEnum.ColorType.DEFAULT,
      faceType: CharacterEnum.FaceType.BLANK,
    };

    this.handleOption = this.handleOption.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  handleOption(e, colorType, faceType) {
    let colorValue = colorType;
    let faceValue = faceType;

    if (faceValue === CharacterEnum.FaceType.BLANK) {
      faceValue = this.state.faceType;
    }

    if (colorValue === CharacterEnum.ColorType.DEFAULT) {
      colorValue = this.state.colorType;
    }

    this.setState({
        colorType: colorValue,
        faceType: faceValue,
      },
      () => console.log("result " + this.state.colorType + " " + this.state.faceType)
    );
  }

  render() {
    return (
      <div className="frame">
        <div className="container-buttonsLeft">
          <Option
            colorType={CharacterEnum.ColorType.DEFAULT}
            faceType={CharacterEnum.FaceType.DRAMATIC}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.DEFAULT,
              CharacterEnum.FaceType.DRAMATIC)}
          />{" "}
          <Option
            colorType={CharacterEnum.ColorType.DEFAULT}
            faceType={CharacterEnum.FaceType.SAD}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.DEFAULT,
              CharacterEnum.FaceType.SAD)}
          />{" "}
          <Option
            colorType={CharacterEnum.ColorType.DEFAULT}
            faceType={CharacterEnum.FaceType.SURPRISED}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.DEFAULT,
              CharacterEnum.FaceType.SURPRISED)}
          />{" "}
        </div>
        <div className="content">
          <img className={"character"}
               src={CharacterEnum.getImageFromTypes(this.state.colorType, this.state.faceType)}/>
        </div>

        <div className="container-buttonsRight">
          <Option
            colorType={CharacterEnum.ColorType.RED}
            faceType={CharacterEnum.FaceType.BLANK}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.RED,
              CharacterEnum.FaceType.BLANK)}
          />{" "}
          <Option
            colorType={CharacterEnum.ColorType.GREEN}
            faceType={CharacterEnum.FaceType.BLANK}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.GREEN,
              CharacterEnum.FaceType.BLANK)}
          />{" "}
        </div>
      </div>
    );
  }
}

export default CharacterContainer;
