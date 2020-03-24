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

  useComponentDidDisappear(() => {
    if (!(currentCity === city || CITIES[currentCity] === city)) {
      dispatchChangeCity(currentCity);
    }

    if (!isArraysEqual(checkedRooms, roomsCount)) {
      dispatchChangeRoomsCount(checkedRooms);
    }
  }, componentId);

  const changeCityHandler = useCallback(
    selectedCity => setCurrentCity(selectedCity),
    [],
  );

  return (
    <PropertyScreen
      city={currentCity}
      checkedRooms={checkedRooms}
      changeCityHandler={changeCityHandler}
      changeRoomsCountHandler={setCheckedRooms}
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
