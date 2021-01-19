import http from '../../helpers/http';
import qs from 'qs';
const {REACT_APP_API_URL} = process.env

export default {
  getCategory: () => ({
    type: 'GET_CATEGORY',
    payload: http().get(`${REACT_APP_API_URL}category`),
  }),
  getDetailCategory: (id) => ({
    type: 'GET_DETAIL_CATEGORY',
    payload: http().get(`${REACT_APP_API_URL}category/${id}`),
  }),
  clear: () => ({
    type: 'CLEAR',
  }),
};
