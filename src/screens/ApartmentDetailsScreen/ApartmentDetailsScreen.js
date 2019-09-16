// @flow
import React from 'react';
import {View, Text} from 'react-native';
// import { Button } from 'react-native-elements';
// import {Navigation} from 'react-native-navigation';

const ApartmentDetailScreen = ({city, street, apartment}) => {
  return (
    <View>
      <Text>
        {city} {street} {apartment}
      </Text>
    </View>
  );
};

export default ApartmentDetailScreen;
