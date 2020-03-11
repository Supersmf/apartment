import axios from 'axios';
import { LIMIT_ITEMS_COUNT } from '../constants';

const api = axios.create({
  baseURL: 'https://scraped-api.herokuapp.com',
});

const fetchRentApartments = (city, roomCount, page) =>
  console.log(`/domovita?limit=${LIMIT_ITEMS_COUNT}&page=${page}`) ||
  api.get(`/domovita?limit=${LIMIT_ITEMS_COUNT}&page=${page}`);

export default {
  fetchRentApartments,
};
