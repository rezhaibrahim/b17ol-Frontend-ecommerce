import http from '../../helpers/http';
import qs from 'qs';
const {REACT_APP_API_URL} = process.env
export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post(`${REACT_APP_API_URL}auth/login/customer`, qs.stringify(data)),
  }),
  register: (data) => ({
    type: 'SIGNUP',
    payload: http().post(`${REACT_APP_API_URL}auth/register/customer`, qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
  setToken: (payload) => ({
    type: 'SET_TOKEN',
    payload,
  })
};
