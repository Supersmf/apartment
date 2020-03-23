import { handleActions } from 'redux-actions';
import {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
  changeCity,
  changeRoomsCount,
} from './actions';
import { CITIES, ROOMS_COUNT } from '../constants';

export const INITIAL_STATE = {
  apartments: [],
  isFlatsFetching: false,
  city: CITIES.MINSK,
  roomsCount: ROOMS_COUNT,
  isFilterChanged: false,
};

const fetchRentApartmentsRequestHandler = state => ({
  ...state,
  isFlatsFetching: true,
});

const fetchRentApartmentsSuccessHandler = (
  state,
  { payload: { data, isRefresh } },
) => {
  let apartments;

  if (isRefresh) {
    apartments =
      state.apartments[0]._id === data[0]._id ? state.apartments : data;
  } else {
    apartments = state.isFilterChanged ? data : state.apartments.concat(data);
  }

  return {
    ...state,
    apartments,
    isFlatsFetching: false,
    isFilterChanged: false,
  };
};

const fetchRentApartmentsFailureHandler = state => ({
  ...state,
  isFlatsFetching: false,
});

const changeCityHandler = (state, { payload: city }) => ({
  ...state,
  city: CITIES[city] || city,
  isFilterChanged: true,
});

const changeRoomsCountHandler = (state, { payload: roomsCount }) => ({
  ...state,
  roomsCount,
  isFilterChanged: true,
});

const reducer = handleActions(
  {
    [fetchRentApartmentsRequest]: fetchRentApartmentsRequestHandler,
    [fetchRentApartmentsSuccess]: fetchRentApartmentsSuccessHandler,
    [fetchRentApartmentsFailure]: fetchRentApartmentsFailureHandler,
    [changeCity]: changeCityHandler,
    [changeRoomsCount]: changeRoomsCountHandler,
  },
  INITIAL_STATE,
);

export default reducer;
