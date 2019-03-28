export const ColorType = {

    //Old
    DEFAULT: "default",

    //New
    BEIGE_H: "beigeh",
    BEIGE_Y: "beigey",

    BLACK_H: "blackh",

    GREEN_E: "greene",

    GREY_E: "greye",
    GREY_K: "greyk",
    GREY_S: "greys",

    PINK_E: "pinke",

    WHITE_E: "whitee",
    WHITE_K: "whitek",
    WHITE_S: "whites",

    YELLOW_K: "yellowk",
  }
;

export const FaceType = {

  //Old
  BLANK: "blank",

  //New
  KISS: "kiss",

  properties: {
    "blank": { prefix: "_" },
    "kiss": { prefix: "_" }
  }
};

const BASE_PATH = "/assets/minguri/";

export function getImageFromTypes(colorType, faceType) {
  let path = BASE_PATH.concat(colorType,
    "/",
    colorType,
    "_",
    faceType,
    ".JPG"
    )
  ;

  return path;
}