import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import {scaleHeight, scaleWidth} from '../../utils/DimensionEditor';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../components/Button';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';
import SuccessBottomSheet from './components/SuccessBottomSheet';
import Screens from '../../constants/Screens';
import {AppDispatch, useAppDispatch} from '../../store/addressStore';
import {addNewAddress} from '../../services/AddressService';
import {addAddress} from '../../store/reducer/addressListSlice';
import {Address, City} from '../../types/types';
import {useDispatch} from 'react-redux';
import {getCities} from '../../services/CitiesService';

const DEFAULT_ADDRESS_TITLE = 'Ev';
const DEFAULT_ADDRESS_DETAIL = 'Param ofis';
const BOTTOM_SHEET_VISIBLE_TIMEOUT = 4000;

const AddNewAddressScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();

  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [addressTitle, setAddressTitle] = useState<string>(
    DEFAULT_ADDRESS_TITLE,
  );
  const [addressDetail, setAddressDetail] = useState<string>(
    DEFAULT_ADDRESS_DETAIL,
  );
  const [selectedCity, setSelectedCity] = useState<City | undefined>();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const [cities, setCities] = useState<City[] | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getCities();
      setCities(citiesData);
    };
    fetchCities();
  });

  const containerStyle: ViewStyle = {
    paddingBottom,
  };

  useEffect(() => {
    if (!addressTitle || !addressDetail) {
      return;
    }
    if (
      addressTitle?.length >= 2 &&
      addressDetail?.length >= 2 &&
      selectedCity
    ) {
      setIsButtonDisabled(false);
      return;
    }
    setIsButtonDisabled(true);
  }, [addressTitle, addressDetail, selectedCity]);

  const onSaveButtonPress = async () => {
    const address: Address = {
      title: addressTitle,
      detail: addressDetail,
      location: selectedCity ? selectedCity.cityName : '',
    };
    await addNewAddress(address);
    dispatch(addAddress(address));
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
      navigation.navigate(Screens.ADDRESSES_LIST);
    }, BOTTOM_SHEET_VISIBLE_TIMEOUT);
  };

  const onAddressTitleChange = (text: string) => {
    setAddressTitle(text);
  };

  const onAddressDetailChange = (text: string) => {
    setAddressDetail(text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <SuccessBottomSheet isVisible={isModalVisible} />
      <View>
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>Adres başlığı (Ev, işyeri vs.)</Text>
          <TextInput
            style={styles.textInput}
            defaultValue={DEFAULT_ADDRESS_TITLE}
            onChangeText={onAddressTitleChange}
            value={addressTitle}
          />
        </View>
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>İl</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
            data={cities ?? []}
            maxHeight={300}
            labelField="cityName"
            valueField="id"
            placeholder="İl"
            value={selectedCity ? selectedCity : ''}
            onChange={selectedCity => {
              setSelectedCity(selectedCity);
            }}
            iconStyle={styles.dropdownIcon}
          />
        </View>
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>Adres detayı</Text>
          <TextInput
            style={styles.textInput}
            defaultValue={DEFAULT_ADDRESS_DETAIL}
            onChangeText={onAddressDetailChange}
            value={addressDetail}
          />
        </View>
      </View>
      <Button
        label="Kaydet"
        onPress={onSaveButtonPress}
        disabled={isButtonDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: scaleWidth(20),
    paddingTop: scaleHeight(18),
  },
  inputAndLabel: {
    height: scaleHeight(60),
    borderWidth: 1,
    borderColor: '#E6E9EE',
    borderRadius: scaleWidth(8),
    backgroundColor: '#FCFCFD',
    marginTop: scaleHeight(12),
  },
  inputLabel: {
    marginLeft: scaleWidth(16),
    top: scaleHeight(12),
    color: '#7D8E9F',
    lineHeight: scaleHeight(14),
    fontSize: scaleHeight(11),
    fontWeight: '500',
  },
  textInput: {
    paddingHorizontal: scaleWidth(16),
    color: '#3D2852',
    fontWeight: '300',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
    top: scaleHeight(16),
  },
  dropdown: {
    paddingHorizontal: scaleWidth(16),
    borderRadius: scaleWidth(8),
    marginTop: scaleHeight(12),
    marginBottom: scaleHeight(12),
  },
  dropdownTextStyle: {
    color: '#6F6085',
    fontWeight: '500',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(18),
  },
  dropdownIcon: {
    bottom: scaleHeight(12),
  },
});

export default AddNewAddressScreen;
