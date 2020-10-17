import {default as axios} from 'axios'

export default {
    getDataPopular: ()=>({
    type: 'GET_DATA_POPULAR',
    payload: axios.get('http://localhost:8080/items/popular?limit=10')
  })
}