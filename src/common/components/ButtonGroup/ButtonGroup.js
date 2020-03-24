import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const ButtonGroup = ({ buttons, handleButtonChange }) => (
  <>
    {buttons.map(({ isAvailable, label, value }, index) => (
      <TouchableOpacity
        key={label}
        onPress={() => handleButtonChange(value)}
        style={[
          styles.button,
          isAvailable ? styles.validButton : styles.invalidButton,
          !index && styles.leftButton,
          buttons.length - 1 === index && styles.rightButton,
        ]}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    ))}
  </>
);

export default ButtonGroup;
