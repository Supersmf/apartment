import axios from 'axios';

const LIMIT_ITEMS_COUNT = 10;

const api = axios.create({
  baseURL: 'https://scraped-api.herokuapp.com',
});

const fetchRentApartments = (city, roomCount, page) =>
  api.get(`/domovita?limit=${LIMIT_ITEMS_COUNT}&page=${page}`);

export default {
  fetchRentApartments,
};
