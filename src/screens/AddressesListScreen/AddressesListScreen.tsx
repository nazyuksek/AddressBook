import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
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
  return (
    <View style={styles.container}>
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
});

export default AddressesListScreen;