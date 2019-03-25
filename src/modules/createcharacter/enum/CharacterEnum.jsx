export const ColorType = {
  DEFAULT: "default",
  RED: "red",
  GREEN: "green",
};

export const FaceType = {
  BLANK: "blank",
  DRAMATIC: "dramatic",
  SAD: "sad",
  SURPRISED: "surprised",

  properties: {
    "default": { prefix: "_" },
    "dramatic": { prefix: "_" },
    "sad": { prefix: "_" },
    "surprised": { prefix: "_" }
  }
};

const BASE_PATH = "/assets/";

export function getImageFromColor(colorType) {
  let path = BASE_PATH.concat(colorType.value,
    "/",
    FaceType.properties.prefix,
    FaceType.DEFAULT,
    ".png");

  console.log("Image Path: " + path);

  return path;
}

export function getImageFromFace(faceType) {
  let path = BASE_PATH.concat(ColorType.DEFAULT,
    "/",
    FaceType.properties.prefix,
    faceType.value,
    ".png");

  console.log("Image Path: " + path);

  return path;
}

export function getImageFromTypes(colorType, faceType) {
  let path = BASE_PATH.concat(colorType,
    "/",
    colorType,
    "_",
    faceType,
    ".png"
    )
  ;

  console.log("Image Path: " + path);

  return path;
}