import {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
} from './actions';
import api from '../services/api';

const fetchRentApartments = ({ onComplete, page }) => async (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(fetchRentApartmentsRequest());

  try {
    const state = getState();
    const { city, roomsCount } = state.main;
    const { data } = await api.fetchRentApartments(city, roomsCount, page);
    dispatch(fetchRentApartmentsSuccess(data.data));
  } catch (err) {
    console.error(err);
    dispatch(fetchRentApartmentsFailure());
  }
  onComplete();
};

export { fetchRentApartments };
