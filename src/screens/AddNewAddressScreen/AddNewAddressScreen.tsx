import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {scaleHeight, scaleWidth} from '../../utils/DimensionEditor';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../components/Button';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';
import Screens from '../../constants/Screens';
import {addNewAddress} from '../../services/AddressService';
import {Address, City} from '../../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {getCities} from '../../services/CitiesService';
import CustomTextInput from './components/CustomTextInput';
import {addAddress} from '../../store/reducers/addressListSlice';
import {useTranslation} from 'react-i18next';
import {RootState} from '../../store/reducers/rootReducer';

const AddNewAddressScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const DEFAULT_ADDRESS_TITLE = t('title_placeholder');
  const DEFAULT_ADDRESS_DETAIL = t('detail_placeholder');

  const [addressTitle, setAddressTitle] = useState<string>(
    DEFAULT_ADDRESS_TITLE,
  );
  const [addressDetail, setAddressDetail] = useState<string>(
    DEFAULT_ADDRESS_DETAIL,
  );
  const [selectedCity, setSelectedCity] = useState<City | undefined>();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const [cities, setCities] = useState<City[] | null>(null);

  const languageState = useSelector((state: RootState) => state.language);

  useEffect(() => {
    setAddressTitle(t('title_placeholder'));
    setAddressDetail(t('detail_placeholder'));
  }, [languageState.language]);

  useEffect(() => {
    const fetchCities = async () => {
      const citiesData = await getCities();
      setCities(citiesData);
    };
    fetchCities();
  }, []);

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
    navigation.navigate(Screens.SUCCESS_MODAL);
  };

  const onAddressTitleChange = (text: string) => {
    setAddressTitle(text);
  };

  const onAddressDetailChange = (text: string) => {
    setAddressDetail(text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <CustomTextInput
          title={t('address_title')}
          defaultValue={DEFAULT_ADDRESS_TITLE}
          onChange={onAddressTitleChange}
          value={addressTitle}
        />
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>{t('city')}</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
            data={cities ?? []}
            maxHeight={300}
            labelField="cityName"
            valueField="id"
            placeholder={t('select_item')}
            value={selectedCity ? selectedCity : ''}
            onChange={selectedCity => {
              setSelectedCity(selectedCity);
            }}
            iconStyle={styles.dropdownIcon}
          />
        </View>
        <CustomTextInput
          title={t('address_detail')}
          defaultValue={DEFAULT_ADDRESS_DETAIL}
          onChange={onAddressDetailChange}
          value={addressDetail}
        />
      </View>
      <Button
        label={t('save')}
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
