import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {scaleHeight, scaleWidth} from '../utils/DimensionEditor';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  const {label, onPress} = props;
  return (
    <View>
      <View style={styles.line} />
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Button;
