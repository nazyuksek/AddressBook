import React, {useEffect, useMemo} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ArrowLeft from '../../assets/svgs/ArrowLeft';
import {STATUS_BAR_HEIGHT} from '../../constants/constants';
import {
  scaleHeight,
  scaleWidth,
  SCREEN_WIDTH,
} from '../../utils/DimensionEditor';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import LanguageSelection from './components/LanguageSelection';

/**
 * @returns {React.ReactElement} A custom header for navigation.
 */
const Header = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const absoluteViewStyle: ViewStyle = {
    top: STATUS_BAR_HEIGHT,
  };

  const onBackButtonPressed = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <>
      <LinearGradient
        style={styles.headerGradient}
        colors={['#220C45', '#440E85']}
      />
      <View style={[styles.absoluteView, absoluteViewStyle]}>
        <View style={styles.buttonAndHeadlineContainer}>
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>{t('my_addresses')}</Text>
          </View>
          <Pressable
            onPress={onBackButtonPressed}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            style={styles.backButton}>
            <ArrowLeft color="#C2BBCF" />
          </Pressable>
          <LanguageSelection style={styles.languageContainer} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('address_info')}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    width: SCREEN_WIDTH,
    height: scaleHeight(180),
  },
  absoluteView: {
    position: 'absolute',
    alignItems: 'center',
  },
  buttonAndHeadlineContainer: {
    flexDirection: 'row',
    paddingVertical: scaleHeight(16),
  },
  headlineContainer: {
    width: SCREEN_WIDTH,
  },
  headline: {
    color: '#C2BBCF',
    lineHeight: scaleHeight(20),
    fontSize: scaleHeight(16),
    fontWeight: '300',
    alignSelf: 'center',
  },
  backButton: {
    position: 'absolute',
    left: scaleWidth(20),
    top: scaleHeight(16),
    paddingVertical: scaleWidth(5),
    paddingHorizontal: scaleWidth(5),
  },
  titleContainer: {
    marginTop: scaleHeight(5),
    paddingVertical: scaleHeight(16),
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(25),
  },
  languageContainer: {
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(20),
  },
});

export default Header;
