import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import {scaleHeight, scaleWidth} from '../../utils/DimensionEditor';
import {Dropdown} from 'react-native-element-dropdown';
import Button from '../../components/Button';
import useScreenBottomDistance from '../../hooks/useScreenBottomDistance';

type DropdownProps = {
  label: string;
  value: string;
};

const data: DropdownProps[] = [
  {label: 'İstanbul', value: '1'},
  {label: 'Kocaeli', value: '2'},
  {label: 'Bursa', value: '3'},
];

const DEFAULT_ADDRESS_TITLE = 'Ev';
const DEFAULT_ADDRESS_DETAIL = 'Param ofis';

const AddNewAddressScreen = ({navigation}) => {
  const paddingBottom = useScreenBottomDistance();

  const [selectedCity, setSelectedCity] = useState<DropdownProps | undefined>();

  const containerStyle: ViewStyle = {
    paddingBottom,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>Adres başlığı (Ev, işyeri vs.)</Text>
          <TextInput
            style={styles.textInput}
            defaultValue={DEFAULT_ADDRESS_TITLE}
          />
        </View>
        <View style={styles.inputAndLabel}>
          <Text style={styles.inputLabel}>İl</Text>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.dropdownTextStyle}
            selectedTextStyle={styles.dropdownTextStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="İl"
            value={selectedCity ? selectedCity.value : ''}
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
          />
        </View>
      </View>
      <Button label="Kaydet" onPress={() => {}} />
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
