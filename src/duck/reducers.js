import { handleActions } from 'redux-actions';
import {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
} from './actions';

export const INITIAL_STATE = {
  flats: [],
  isFlatsFetching: false,
  city: 'minsk',
  roomsCount: '1',
  apartments: [],
};

const fetchRentApartmentsRequestHandler = state => ({
  ...state,
  isFlatsFetching: true,
});
const fetchRentApartmentsSuccessHandler = (state, { payload }) => ({
  ...state,
  apartments:
    state.apartments.length && state.apartments[0]._id === payload._id
      ? state.apartments
      : state.apartments.concat(payload),
  isFlatsFetching: false,
});

const fetchRentApartmentsFailureHandler = state => ({
  ...state,
  isFlatsFetching: false,
});

const reducer = handleActions(
  {
    [fetchRentApartmentsRequest]: fetchRentApartmentsRequestHandler,
    [fetchRentApartmentsSuccess]: fetchRentApartmentsSuccessHandler,
    [fetchRentApartmentsFailure]: fetchRentApartmentsFailureHandler,
  },
  INITIAL_STATE,
);

export default reducer;
