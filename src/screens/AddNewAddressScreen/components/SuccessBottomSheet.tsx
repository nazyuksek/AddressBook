import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import SuccessCircle from '../../../assets/svgs/SuccessCircle';
import {
  scaleHeight,
  scaleWidth,
  SCREEN_WIDTH,
} from '../../../utils/DimensionEditor';
import useScreenBottomDistance from '../../../hooks/useScreenBottomDistance';
import {useTranslation} from 'react-i18next';

export type ModalRefProps = {
  isVisible: boolean;
};

const SuccessBottomSheet: React.FC<ModalRefProps> = props => {
  const {isVisible} = props;
  const paddingBottom = useScreenBottomDistance();
  const {t} = useTranslation();

  const padding: ViewStyle = {
    paddingBottom: scaleHeight(32) + paddingBottom,
    paddingTop: scaleHeight(56),
  };
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      coverScreen={false}
      backdropColor="rgba(24, 17, 64, 0.3)"
      backdropOpacity={1}>
      <View style={[styles.modalView, padding]}>
        <View style={styles.circleContainer}>
          <SuccessCircle color="#019693" />
        </View>
        <Text style={styles.modalText}>{t('successfully_saved')}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
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

export default SuccessBottomSheet;
