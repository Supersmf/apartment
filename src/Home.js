import React from 'react';
import {View, Text, Button, StyleSheet, AsyncStorage} from 'react-native';
import {goToAuth} from './navigation';
import {Navigation} from 'react-native-navigation';

import {USER_KEY} from './config';

const Home = ({componentId}) => {
  const logout = async () => {
    try {
      // await AsyncStorage.removeItem(USER_KEY);
      goToAuth();
    } catch (err) {
      console.log('error signing out...: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello from Home screen.</Text>
      <Button onPress={logout} title="Sign Out" />
      <Button
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: 'Screen2',
            },
          });
        }}
        title="View next screen"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
