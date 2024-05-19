import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../../../utils/DimensionEditor';

type CustomTextInputProps = {
  title: string;
  defaultValue: string;
  value: string;
  onChange: (val: string) => void;
};

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const {title, defaultValue, value, onChange} = props;
  return (
    <View style={styles.inputAndLabel}>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput
        style={styles.textInput}
        defaultValue={defaultValue}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    top: Platform.OS === 'android' ? scaleHeight(8) : scaleHeight(16),
  },
});

export default CustomTextInput;
