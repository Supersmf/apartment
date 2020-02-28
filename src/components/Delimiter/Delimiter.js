// @flow
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

// const {width: screenWidth} = Dimensions.get('window');

const Delimiter = () => <View style={styles.delimiter} />;

export default Delimiter;

const styles = StyleSheet.create({
  delimiter: {
    borderBottomColor: '#e2e2e2',
    borderBottomWidth: 1.5,
  },
});
