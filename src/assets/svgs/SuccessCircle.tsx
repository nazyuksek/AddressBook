import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {scaleWidth} from '../../utils/DimensionEditor';
const SuccessCircle = (props: SvgProps) => (
  <Svg
    width={props.width || scaleWidth(24)}
    height={props.height || scaleWidth(24)}
    fill="none"
    {...props}>
    <Path
      fill={props.color || '#000'}
      fillRule="evenodd"
      d="M12 .625C5.717.625.625 5.717.625 12c0 6.281 5.092 11.375 11.375 11.375S23.375 18.281 23.375 12C23.375 5.717 18.283.625 12 .625ZM2.375 12A9.624 9.624 0 0 1 12 2.375 9.625 9.625 0 0 1 21.625 12c0 5.315-4.309 9.625-9.625 9.625S2.375 17.315 2.375 12Zm14.284-2.075a.875.875 0 0 0-1.238-1.237l-4.769 4.769-2.076-2.075a.875.875 0 0 0-1.237 1.237l2.695 2.694a.875.875 0 0 0 1.237 0l5.387-5.388Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SuccessCircle;
