import React from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';
import {scaleHeight, scaleWidth} from '../../utils/DimensionEditor';
import AddressRow from './components/AddressRow';

const MOCK_DATA = [
  {
    title: 'İkamet Adresim',
    detail: 'Adres detayı, lorem ipsum dolor sit amet',
    location: 'Üsküdar/İstanbul',
  },
  {
    title: 'Adres Başlığı',
    detail: 'Adres detayı, lorem ipsum dolor sit amet',
    location: 'Üsküdar/İstanbul',
  },
  {
    title: 'Adres Başlığı',
    detail: 'Adres detayı, lorem ipsum dolor sit amet',
    location: 'Üsküdar/İstanbul',
  },
];

const AddressesListScreen = () => {
  const paddingBottom = useScreenBottomDistance();

  const containerStyle: ViewStyle = {
    paddingBottom,
  };

  const onButtonPress = () => {};

  return (
    <View style={[styles.container, containerStyle]}>
      <>
        <Text style={styles.title}>Kayıtlı Adresler</Text>
        <FlatList
          contentContainerStyle={styles.addressesList}
          ItemSeparatorComponent={() => <ItemSeparatorComponent />}
          data={MOCK_DATA}
          renderItem={({item}) => (
            <AddressRow
              title={item.title}
              detail={item.detail}
              location={item.location}
            />
          )}
        />
      </>
      <>
        <View style={styles.line} />
        <Pressable style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>Yeni Adres Ekle</Text>
        </Pressable>
      </>
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
  },
  addressesList: {
    marginTop: scaleHeight(10),
    borderWidth: 1,
    borderColor: '#EEF0F4',
    borderRadius: scaleWidth(8),
  },
  separator: {
    height: 1,
    backgroundColor: '#EEF0F4',
    width: scaleWidth(288),
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#019693',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(18),
    borderRadius: scaleWidth(8),
    marginTop: scaleHeight(15),
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
  },
  line: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
});

export default AddressesListScreen;
