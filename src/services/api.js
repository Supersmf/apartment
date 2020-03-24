import axios from 'axios';
import { LIMIT_ITEMS_COUNT } from '../constants';

const api = axios.create({
  baseURL: 'https://scraped-api.herokuapp.com',
});

const fetchRentApartments = (city, roomCount, page) =>
  console.log(
    `/domovita?city=${city}&roomsCount=${roomCount
      .map(({ value }) => value)
      .join()}&limit=${LIMIT_ITEMS_COUNT}&page=${page}`,
  ) ||
  api.get(
    `/domovita?city=${city}&roomsCount=${roomCount
      .map(({ value }) => value)
      .join()}&limit=${LIMIT_ITEMS_COUNT}&page=${page}`,
  );

export default {
  fetchRentApartments,
};
