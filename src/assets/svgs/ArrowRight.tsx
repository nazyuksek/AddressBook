import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {scaleWidth} from '../../utils/DimensionEditor';
const ArrowRight = (props: SvgProps) => (
  <Svg
    width={props.width || scaleWidth(6)}
    height={props.height || scaleWidth(10)}
    fill="none"
    {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="M.504.504a.583.583 0 0 0 0 .825L4.175 5 .505 8.67a.583.583 0 0 0 .824.826l4.083-4.084a.583.583 0 0 0 0-.824L1.33.504a.583.583 0 0 0-.825 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowRight;
