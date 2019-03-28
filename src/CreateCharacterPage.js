import React, { Component } from "react";
import { render } from "react-dom";

import './CreateCharacterPage.scss';

import CharacterContainer from './modules/createcharacter/containers/CharacterContainer';
import ButtonContainer from './modules/createcharacter/containers/ButtonContainer';
import * as CharacterEnum from './modules/createcharacter/enum/CharacterEnum';

class CreateCharacterPage extends Component {

  constructor(props) {
    super(props);

    this.handleFaceChange = this.handleFaceChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);

    this.state = {
      colorType: CharacterEnum.ColorType.DEFAULT,
      faceType: CharacterEnum.FaceType.BLANK,
    }
  }

  handleFaceChange(faceType) {
    this.setState({
      faceType: faceType,
    });
  }

  handleColorChange(colorType) {
    this.setState({
      colorType: colorType
    });
  }

  render() {
    return (
      <div className={"container-parent"}>
        <CharacterContainer

          colorType={this.state.colorType}
          faceType={this.state.faceType}

          onFaceChange={this.handleFaceChange}
          onColorChange={this.handleColorChange}
        />

        <ButtonContainer
          colorType={this.state.colorType}
          faceType={this.state.faceType}
        />
      </div>
    );
  }
}

render(<CreateCharacterPage/>,
  document.getElementById("root")
)
;

export default CreateCharacterPage;
