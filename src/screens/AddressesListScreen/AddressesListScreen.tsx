import React from 'react';
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

const AddressesListScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();

  const containerStyle: ViewStyle = {
    paddingBottom,
  };

  const onButtonPress = () => {
    navigation.navigate(Screens.ADD_NEW_ADDRESS);
  };

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
