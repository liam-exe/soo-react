import React from "react";

import * as CharacterTypeEnum from '../enum/CharacterEnum';

function Option(props) {
  return (
    <button>
      <img
        src={CharacterTypeEnum.getImageFromTypes(props.colorType, props.faceType)}
        className={
          "btn-".concat(props.colorType, "-", props.faceType)
        }
        alt={"adsda"}
        onClick={props.action}/>
    </button>
  );
}

export default Option;
