import i18next from 'i18next';
import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../../store/reducers/languageSlice';
import {RootState} from '../../../store/reducers/rootReducer';
import {scaleHeight} from '../../../utils/DimensionEditor';

type LanguageSelectionProps = {
  /**
   * Optional prop for changing the style of component.
   */
  style?: ViewStyle;
};

/**
 *
 * @param {ViewStyle} style Optional prop for changing the style of component.
 * @returns {React.ReactElement} A language selection component with 2 available languages: English and Turkish.
 */
const LanguageSelection: React.FC<LanguageSelectionProps> = props => {
  const {style} = props;
  const dispatch = useDispatch();
  const languageState = useSelector((state: RootState) => state.language);

  const getButtonTitle = () => {
    if (languageState.language === 'tr') {
      return 'EN';
    }
    return 'TR';
  };

  const updateLanguage = () => {
    if (languageState.language === 'en') {
      i18next.changeLanguage('tr');
      dispatch(changeLanguage('tr'));
      return;
    }
    i18next.changeLanguage('en');
    dispatch(changeLanguage('en'));
  };
  return (
    <Pressable
      style={style}
      onPress={() => updateLanguage()}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
      <Text style={styles.languageTag}>{getButtonTitle()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  languageTag: {
    color: '#C2BBCF',
    lineHeight: scaleHeight(20),
    fontSize: scaleHeight(16),
    fontWeight: '300',
  },
});

export default LanguageSelection;
