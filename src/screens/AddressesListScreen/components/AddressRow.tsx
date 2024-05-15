import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ArrowRight from '../../../assets/svgs/ArrowRight';
import Location from '../../../assets/svgs/Location';
import {scaleHeight, scaleWidth} from '../../../utils/DimensionEditor';

type AddressRowProps = {
  title: string;
  detail: string;
  location: string;
};

const AddressRow: React.FC<AddressRowProps> = props => {
  const {title, detail, location} = props;

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <View style={styles.locationIcon}>
          <Location color="#450D87" />
        </View>
        <View style={styles.titleAndDescriptionContainer}>
          <Text style={styles.addressTitle}>{title}</Text>
          <Text style={styles.addressDetail} numberOfLines={1}>
            {detail}
          </Text>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <ArrowRight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: scaleHeight(20),
    paddingHorizontal: scaleWidth(16),
    justifyContent: 'space-between',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  locationIcon: {
    padding: scaleWidth(10),
    backgroundColor: '#F1EEF7',
    borderRadius: scaleWidth(20),
    marginRight: scaleWidth(12),
  },
  addressTitle: {
    color: '#000000',
    fontWeight: '500',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
  },
  addressDetail: {
    color: '#6F6085',
    fontWeight: '300',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(15),
    marginTop: scaleHeight(4),
  },
  titleAndDescriptionContainer: {
    maxWidth: scaleWidth(100),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  locationText: {
    marginRight: scaleWidth(12),
    fontWeight: '300',
    color: '#3D2852',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(15),
  },
});

export default AddressRow;
