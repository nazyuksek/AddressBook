import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scaleHeight} from '../utils/DimensionEditor';

const useScreenBottomDistance = (): number => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  return bottomInset ? bottomInset + scaleHeight(8) : scaleHeight(24);
};

export default useScreenBottomDistance;
