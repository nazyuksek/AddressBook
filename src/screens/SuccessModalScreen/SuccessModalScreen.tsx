import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import SuccessCircle from '../../assets/svgs/SuccessCircle';
import Screens from '../../constants/Screens';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';
import {
  scaleHeight,
  scaleWidth,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../utils/DimensionEditor';

const BOTTOM_SHEET_VISIBLE_TIMEOUT = 4000;

const SuccessModalScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();
  const {t} = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Screens.ADDRESSES_LIST);
    }, BOTTOM_SHEET_VISIBLE_TIMEOUT);
  });

  const padding: ViewStyle = {
    paddingBottom: scaleHeight(32) + paddingBottom,
    paddingTop: scaleHeight(56),
  };
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={[styles.modalView, padding]}>
          <View style={styles.circleContainer}>
            <SuccessCircle color="#019693" />
          </View>
          <Text style={styles.modalText}>{t('successfully_saved')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(24, 17, 64, 0.3)',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    width: SCREEN_WIDTH,
    paddingVertical: scaleHeight(32),
    alignItems: 'center',
    borderTopRightRadius: scaleWidth(16),
    borderTopLeftRadius: scaleWidth(16),
  },
  modalText: {
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    marginTop: scaleHeight(16),
  },
  circleContainer: {
    padding: scaleWidth(16),
    backgroundColor: '#E3F7F7',
    borderRadius: scaleWidth(99),
  },
});

export default SuccessModalScreen;
