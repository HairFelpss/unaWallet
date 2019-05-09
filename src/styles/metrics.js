import { Dimensions } from "react-native";

// return width and height from the cellphone
const { width, height } = Dimensions.get("window");

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  iconSize: 35,

  //return the view of cellphone, landscape or portrait
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
