import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Button from '../../components/Button';
import Screens from '../../constants/Screens';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';
import {scaleHeight, scaleWidth} from '../../utils/DimensionEditor';
import AddressRow from './components/AddressRow';
import {useSelector} from 'react-redux';
import {fetchAddresses} from '../../store/reducers/addressListSlice';
import {RootState} from '../../store/reducers/rootReducer';
import {AppDispatch, useAppDispatch} from '../../store/addressStore';

const AddressesListScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();
  const dispatch: AppDispatch = useAppDispatch();

  const addressListState = useSelector((state: RootState) => state.addressList);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const containerStyle: ViewStyle = {
    paddingBottom,
  };

  const onButtonPress = async () => {
    navigation.navigate(Screens.ADD_NEW_ADDRESS);
  };

  if (addressListState.error) {
    return <Text style={styles.emptyStateText}>{addressListState.error}</Text>;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Text style={styles.title}>Kayıtlı Adresler</Text>
        {addressListState.addressList.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.addressesList}
            style={styles.addressesListStyle}
            ItemSeparatorComponent={() => <ItemSeparatorComponent />}
            data={addressListState.addressList}
            keyExtractor={() => Math.random().toString()}
            renderItem={({item, index}) => (
              <AddressRow
                title={item.title}
                detail={item.detail}
                location={item.location}
                index={index}
              />
            )}
          />
        ) : (
          <Text style={styles.emptyStateText}>
            Henüz kayıtlı bir adresiniz bulunamamaktadır.
          </Text>
        )}
      </View>
      <Button label="Yeni Adres Ekle" onPress={onButtonPress} />
    </View>
  );
};

const ItemSeparatorComponent = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: scaleHeight(30),
    paddingHorizontal: scaleWidth(20),
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: '#3D2852',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    fontWeight: '500',
    paddingBottom: scaleHeight(10),
  },
  addressesList: {
    borderWidth: 1,
    borderColor: '#EEF0F4',
    borderRadius: scaleWidth(8),
  },
  addressesListStyle: {
    height: scaleHeight(450),
  },
  separator: {
    height: 1,
    backgroundColor: '#EEF0F4',
    width: scaleWidth(288),
    alignSelf: 'center',
  },
  emptyStateText: {
    color: '#3D2852',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    fontWeight: '500',
    marginTop: scaleHeight(30),
  },
});

export default AddressesListScreen;
