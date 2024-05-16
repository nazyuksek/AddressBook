import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {scaleHeight, scaleWidth} from '../utils/DimensionEditor';

type ButtonProps = {
  label: string;
  disabled: boolean;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  const {label, disabled, onPress} = props;

  const backgroundStyle: ViewStyle = {
    backgroundColor: disabled ? '#EEF0F4' : '#019693',
  };

  const textStyle: TextStyle = {
    color: disabled ? '#AAB5C1' : '#FFFFFF',
  };

  return (
    <View>
      <View style={styles.line} />
      <Pressable
        style={[styles.button, backgroundStyle]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleHeight(18),
    borderRadius: scaleWidth(8),
    marginTop: scaleHeight(15),
  },
  buttonText: {
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
  },
  line: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
});

export default Button;
