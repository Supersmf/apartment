// @flow
import {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
} from './actions';
import api from '../services/api';

const fetchRentApartments = ({onSuccess, onFailure}) => async (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(fetchRentApartmentsRequest());

  try {
    const state = getState();
    const {city, roomsCount} = state.main;
    const {data} = await api.fetchRentApartments(city, roomsCount);

    dispatch(fetchRentApartmentsSuccess(data));

    onSuccess();
  } catch (err) {
    console.error(err);
    dispatch(fetchRentApartmentsFailure());
    onFailure();
  }
};

export {fetchRentApartments};
