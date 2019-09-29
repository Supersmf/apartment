import axios from 'axios';

const api = axios.create({
  baseURL: 'https://scraped-api.herokuapp.com',
});

const fetchRentApartments = (city, roomCount) => api.get(`/domovita`);

export default {
  fetchRentApartments,
};
