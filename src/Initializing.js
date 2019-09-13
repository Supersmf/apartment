import React, {useEffect} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';

import {goToAuth, goHome} from './navigation';

import {USER_KEY} from './config';

const Initialising = () => {
  useEffect(() => {
    try {
      const user = AsyncStorage.getItem(USER_KEY);
      // console.log('user: ', user);
      if (user) {
        goHome();
      } else {
        goToAuth();
      }
    } catch (err) {
      console.log('error: ', err);
      goToAuth();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Loading</Text>
    </View>
  );
};

export default Initialising;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
