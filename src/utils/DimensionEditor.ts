import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

/* 
This is a class implemented for implementing UIs with responsive design across the project.
*/
class DimensionEditor {
  protected SCALE_FACTOR_HORIZONTAL: number;
  protected SCALE_FACTOR_VERTICAL: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.SCALE_FACTOR_HORIZONTAL = screenWidth / 375;
    this.SCALE_FACTOR_VERTICAL = screenHeight / 812;
  }

  scaleWidth = (width: number) => {
    return width * this.SCALE_FACTOR_HORIZONTAL;
  };

  scaleHeight = (height: number) => {
    return height * this.SCALE_FACTOR_VERTICAL;
  };
}

const SharpcakeDimensionEditor = new DimensionEditor(
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
);

export const scaleWidth = SharpcakeDimensionEditor.scaleWidth;
export const scaleHeight = SharpcakeDimensionEditor.scaleHeight;

export {SCREEN_HEIGHT, SCREEN_WIDTH, SharpcakeDimensionEditor};
