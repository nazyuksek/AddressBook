import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {scaleWidth} from '../../utils/DimensionEditor';
const ArrowLeft = (props: SvgProps) => (
  <Svg
    width={props.width || scaleWidth(8)}
    height={props.height || scaleWidth(14)}
    fill="none"
    {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="M7.619.256a.875.875 0 0 1 0 1.238L2.112 7l5.507 5.506a.875.875 0 1 1-1.238 1.238L.256 7.619a.875.875 0 0 1 0-1.238L6.381.256a.875.875 0 0 1 1.238 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowLeft;
