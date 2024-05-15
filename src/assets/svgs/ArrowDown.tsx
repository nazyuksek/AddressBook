import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {scaleWidth} from '../../utils/DimensionEditor';
const ArrowDown = (props: SvgProps) => (
  <Svg
    width={props.width || scaleWidth(10)}
    height={props.height || scaleWidth(6)}
    fill="none"
    {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="M9.496.504a.583.583 0 0 0-.825 0L5 4.175 1.33.505a.583.583 0 1 0-.826.824l4.084 4.083a.583.583 0 0 0 .824 0L9.496 1.33a.583.583 0 0 0 0-.825Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowDown;
