import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropertyScreen from './PropertyScreen';
import { changeCity, changeRoomsCount } from '../../duck/actions';
import { isArraysEqual } from '../../common/utils/arrayUtils';
import { useComponentDidDisappear } from '../../common/hooks/useNavigationEvent';
import { CITIES } from '../../constants';

const PropertyScreenContainer = ({
  city,
  roomsCount,
  componentId,
  dispatchChangeCity,
  dispatchChangeRoomsCount,
}) => {
  const [currentCity, setCurrentCity] = useState(city);
  const [checkedRooms, setCheckedRooms] = useState(roomsCount);

  const onUnMount = useCallback(() => {
    if (!(currentCity === city || CITIES[currentCity] === city)) {
      dispatchChangeCity(currentCity);
    }

    if (!isArraysEqual(checkedRooms, roomsCount)) {
      dispatchChangeRoomsCount(checkedRooms);
    }
  }, [
    checkedRooms,
    city,
    currentCity,
    dispatchChangeCity,
    dispatchChangeRoomsCount,
    roomsCount,
  ]);

  useComponentDidDisappear(onUnMount, componentId);

  const handleCheckBoxChange = currentLabel => {
    const newCheckedRooms = [...checkedRooms];
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
    selectedCity => setCurrentCity(selectedCity),
    [],
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
  dispatchChangeRoomsCount: changeRoomsCount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PropertyScreenContainer);
