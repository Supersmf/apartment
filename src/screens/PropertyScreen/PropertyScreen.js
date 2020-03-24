import React from 'react';
import { View, Text, Picker } from 'react-native';
import { CITIES } from '../../constants';
import styles from './styles';
import ButtonGroup from '../../common/components/ButtonGroup';

const PropertyScreen = ({
  city,
  changeCityHandler,
  checkedRooms,
  changeRoomsCountHandler,
}) => (
  <View>
    <Text>PropertyScreen</Text>
    <View style={styles.cityContainer}>
      <Text>City: </Text>
      <Picker
        selectedValue={city}
        style={styles.cityPicker}
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
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonBoxContainerTitle}>Rooms count:</Text>
      <ButtonGroup
        buttons={checkedRooms}
        changeButtonsHandler={changeRoomsCountHandler}
      />
    </View>
  </View>
);

export default PropertyScreen;
