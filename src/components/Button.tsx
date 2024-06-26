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
  /**
   Label of button.
   */
  label: string;
  /**
   @default false
   If set to true, button style changes and becomes unclickable.
   */
  disabled?: boolean;
  /**
   Gets triggered when button is pressed.
   */
  onPress: () => void;
};

/**
 * @component
 * @param {string} label
 * @param {boolean} disabled
 * @param {() => void} onPress
 * @returns {React.ReactElement} A simple button with custom style and given properties.
 */
const Button: React.FC<ButtonProps> = props => {
  const {label, disabled = false, onPress} = props;

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
