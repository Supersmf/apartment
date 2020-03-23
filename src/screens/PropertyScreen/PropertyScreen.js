import React from 'react';
import { View, Text, Picker } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { CITIES } from '../../constants';
import styles from './styles';

const PropertyScreen = ({
  city,
  changeCityHandler,
  checkedRooms,
  handleCheckBoxChange,
}) => (
  <View>
    <Text>PropertyScreen</Text>
    <View style={styles.cityContainer}>
      <Text>City: </Text>
      <Picker
        selectedValue={city}
        style={{ height: 50, width: 200 }}
        onValueChange={changeCityHandler}>
        {Object.keys(CITIES).map(cityItem => (
          <Picker.Item
            key={cityItem}
            label={CITIES[cityItem]}
            value={cityItem}
          />
        ))}
      </Picker>
    </View>
    <View style={styles.checkBoxContainer}>
      <Text style={styles.checkBoxContainerTitle}>Rooms count:</Text>
      {checkedRooms.map(({ label, isAvailable }) => (
        <View key={label} style={styles.checkBoxField}>
          <Text>{label}</Text>
          <CheckBox
            value={isAvailable}
            onValueChange={() => handleCheckBoxChange(label)}
          />
        </View>
      ))}
    </View>
  </View>
);

export default PropertyScreen;
