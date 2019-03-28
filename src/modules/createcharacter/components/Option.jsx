import React from "react";

import * as CharacterTypeEnum from '../enum/CharacterEnum';

function Option(props) {
  return (
    <button
      className={
        "btn-minguri-".concat(props.colorType, "-", props.faceType)
      }
    >
      <img
        src={CharacterTypeEnum.getImageFromTypes(props.colorType, props.faceType)}
        alt={"Option"}
        className={
          "btn-minguri-img".concat(props.colorType, "-", props.faceType)
        }
        onClick={props.action}/>
    </button>
  );
}

export default Option;
