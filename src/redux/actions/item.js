import http from '../../helpers/http';
import qs from 'qs';

const {REACT_APP_URL} = process.env
// console.log(http());
export default {
  getNewItem: () => ({
    type: 'GET_NEW_ITEM',
    payload: http().get(`${REACT_APP_URL}items/new`),
  }),
  getPopularItem: () => ({
    type: 'GET_POPULAR_ITEM',
    payload: http().get(`${REACT_APP_URL}items/popular`),
  }),
  getDetailItem: (id) => ({
    type: 'GET_DETAIL_ITEM',
    payload: http().get(`${REACT_APP_URL}items/${id}`),
  }),
};
