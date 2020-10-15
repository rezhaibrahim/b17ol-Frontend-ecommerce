import http from '../../helpers/http'
import qs from 'querystring'
export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: http().post('http://localhost:8080/auth/login/customer',qs.stringify(data))
  }),
  logout: () => ({
    type: 'LOGOUT_USER',
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  setToken: (payload) =>({
    type : 'SET_TOKEN',
    payload
  })
};
