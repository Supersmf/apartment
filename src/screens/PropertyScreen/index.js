import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropertyScreen from './PropertyScreen';
import { changeCity } from '../../duck/actions';

const PropertyScreenContainer = ({ city, roomsCount, dispatchChangeCity }) => {
  const [currentCity, setCurrentCity] = useState(city);
  const [checkedRooms, setCheckedRooms] = useState(roomsCount);

  const handleCheckBoxChange = currentLabel => {
    const newCheckedRooms = checkedRooms.slice();
    const currentRoomIndex = checkedRooms.findIndex(
      ({ label }) => label === currentLabel,
    );

    newCheckedRooms.splice(currentRoomIndex, 1, {
      ...checkedRooms[currentRoomIndex],
      isAvailable: !checkedRooms[currentRoomIndex].isAvailable,
    });

    setCheckedRooms(newCheckedRooms);
  };

  const changeCityHandler = useCallback(
    selectedCity => {
      dispatchChangeCity(selectedCity);
      setCurrentCity(selectedCity);
    },
    [dispatchChangeCity],
  );

  return (
    <PropertyScreen
      city={currentCity}
      checkedRooms={checkedRooms}
      changeCityHandler={changeCityHandler}
      handleCheckBoxChange={handleCheckBoxChange}
    />
  );
};

const mapStateToProps = state => ({
  city: state.main.city,
  roomsCount: state.main.roomsCount,
});

const mapDispatchToProps = {
  dispatchChangeCity: changeCity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropertyScreenContainer);
