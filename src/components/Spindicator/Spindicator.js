import React from 'react';
import { Animated } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Fontisto';

const Spindicator = ({ value, style }) => (
  <Animated.View
    style={[
      styles.spindicator,
      style,
      {
        transform: [
          {
            rotate: value.interpolate({
              inputRange: [0, 5000],
              outputRange: ['0deg', '360deg'],
              extrapolate: 'extend',
            }),
          },
        ],
      },
    ]}>
    <Icon name="electronjs" size={25} backgroundColor="#3b5998" />
  </Animated.View>
);

export default Spindicator;
