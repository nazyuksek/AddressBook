import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight} from '../utils/DimensionEditor';

/**
 *
 * @returns {number} If bottom inset is calculated, adds additional padding for preventing overlap, and returns the new value, otherwise returns 24 as optimal value.
 */
const useScreenBottomDistance = (): number => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  return bottomInset ? bottomInset + scaleHeight(8) : scaleHeight(24);
};

export default useScreenBottomDistance;
