import {
  fetchRentApartmentsRequest,
  fetchRentApartmentsSuccess,
  fetchRentApartmentsFailure,
} from './actions';
import api from '../services/api';

const fetchRentApartments = ({ onComplete, page, isRefresh }) => async (
  dispatch: Function,
  getState: Function,
) => {
  dispatch(fetchRentApartmentsRequest());

  try {
    const state = getState();
    const { city, roomsCount } = state.main;
    const { data } = await api.fetchRentApartments(city, roomsCount, page);
    dispatch(
      fetchRentApartmentsSuccess({
        data: data.data,
        isRefresh,
      }),
    );
  } catch (err) {
    console.error(err);
    dispatch(fetchRentApartmentsFailure());
  }

  if (onComplete) {
    onComplete();
  }
};

export { fetchRentApartments };
