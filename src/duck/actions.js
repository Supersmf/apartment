import { createActions } from 'redux-actions';

export const {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
  changeCity,
  changeRoomsCount,
} = createActions(
  'FETCH_RENT_APARTMENTS_REQUEST',
  'FETCH_RENT_APARTMENTS_SUCCESS',
  'FETCH_RENT_APARTMENTS_FAILURE',
  'CHANGE_CITY',
  'CHANGE_ROOMS_COUNT',
);
