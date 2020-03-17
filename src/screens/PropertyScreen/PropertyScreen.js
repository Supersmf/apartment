import React from 'react';
import { View, Text, Picker } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { CITIES } from '../../constants';

const PropertyScreen = ({
  city,
  changeCityHandler,
  checkedRooms,
  handleCheckBoxChange,
}) => (
  <View>
    <Text>PropertyScreen</Text>
    <Picker
      selectedValue={city}
      style={{ height: 50, width: 200 }}
      onValueChange={changeCityHandler}>
      {Object.keys(CITIES).map(cityItem => (
        <Picker.Item key={cityItem} label={CITIES[cityItem]} value={cityItem} />
      ))}
    </Picker>
    {checkedRooms.map(({ label, isAvailable }) => (
      <View key={label}>
        <CheckBox
          value={isAvailable}
          onValueChange={() => handleCheckBoxChange(label)}
        />
        <Text style={{ marginTop: 5 }}>{label}</Text>
      </View>
    ))}
  </View>
);

export default PropertyScreen;
