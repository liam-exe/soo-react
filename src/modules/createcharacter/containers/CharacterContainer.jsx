import React, { Component } from "react";
import * as CharacterEnum from '../enum/CharacterEnum';

import './css/CharacterContainer.scss';

import Option from "../components/Option";
import ScrollButton from '../components/ScrollButton';

class CharacterContainer extends Component {

  constructor(props) {
    super(props);

    //Default state values.
    this.state = {
      currentColorTypeOptions: [1, 2],
    };


    //Handling button click.
    this.handleOption = this.handleOption.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  handleOption(e, colorType, faceType) {

    e.preventDefault();

    let colorValue = colorType;
    let faceValue = faceType;

    if (faceValue === CharacterEnum.FaceType.BLANK && colorValue === CharacterEnum.ColorType.DEFAULT) {
      colorValue = this.props.colorType;
    } else {
      if (faceValue === CharacterEnum.FaceType.BLANK) {
        faceValue = this.props.faceType;
      }

      if (colorValue === CharacterEnum.ColorType.DEFAULT) {
        colorValue = this.props.colorType;
      }
    }

    this.props.onFaceChange(faceValue);
    this.props.onColorChange(colorValue);
  }

  /* This lifecycle hook gets executed when the component mounts */
  handleScroll(e, scrollType) {
    e.preventDefault();

    let currentOptions = this.state.currentColorTypeOptions;

    if (scrollType === "up") {
      if (this.state.currentColorTypeOptions[0] === 1) {
        //Can't scroll further up
        return;
      } else {
        //Scroll Up
        this.setState({
            currentColorTypeOptions: [currentOptions[0] - 1, currentOptions[0]]
          }
        );
      }

    } else {
      if (this.state.currentColorTypeOptions[1] === Object.values(CharacterEnum.ColorType).length - 1) {
        //Can't scroll further down.
        return;
      } else {
        //Scroll Down.
        this.setState({
            currentColorTypeOptions: [currentOptions[0] + 1, currentOptions[1] + 1]
          }
        );
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <div className="container-buttonsLeft">

          <ScrollButton
            type={"up"}
            title={"Up Button"}
          />

          <Option
            colorType={CharacterEnum.ColorType.DEFAULT}
            faceType={CharacterEnum.FaceType.BLANK}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.DEFAULT,
              CharacterEnum.FaceType.BLANK)}
          />

          <Option
            colorType={CharacterEnum.ColorType.DEFAULT}
            faceType={CharacterEnum.FaceType.KISS}
            title={""}
            action={(e) => this.handleOption(e,
              CharacterEnum.ColorType.DEFAULT,
              CharacterEnum.FaceType.KISS)}
          />

          <ScrollButton
            type={"down"}
            title={"Down Button"}
          />

        </div>


        <div className="content">
          <img className={"character"}
               src={CharacterEnum.getImageFromTypes(this.props.colorType, this.props.faceType)}
               alt={"Minguri"}/>
        </div>


        <div className="container-buttonsRight">

          <ScrollButton
            action={(e) => this.handleScroll(e, "up")}
            type={"up"}
            title={"Up Button"}
          />

          <Option
            colorType={Object.values(CharacterEnum.ColorType)[this.state.currentColorTypeOptions[0]]}
            faceType={CharacterEnum.FaceType.BLANK}
            title={""}
            action={(e) => this.handleOption(e,
              Object.values(CharacterEnum.ColorType)[this.state.currentColorTypeOptions[0]],
              CharacterEnum.FaceType.BLANK)}
          />
          <Option
            colorType={Object.values(CharacterEnum.ColorType)[this.state.currentColorTypeOptions[1]]}
            faceType={CharacterEnum.FaceType.BLANK}
            title={""}
            action={(e) => this.handleOption(e,
              Object.values(CharacterEnum.ColorType)[this.state.currentColorTypeOptions[1]],
              CharacterEnum.FaceType.BLANK)}
          />

          <ScrollButton
            action={(e) => this.handleScroll(e, "down")}
            type={"down"}
            title={"Down Button"}
          />

        </div>
      </div>
    );
  }
}

export default CharacterContainer;
