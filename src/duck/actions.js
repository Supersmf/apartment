import {createActions} from 'redux-actions';

export const {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
} = createActions(
  'FETCH_RENT_APARTMENTS_REQUEST',
  'FETCH_RENT_APARTMENTS_SUCCESS',
  'FETCH_RENT_APARTMENTS_FAILURE',
);
