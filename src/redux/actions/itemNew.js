import {default as axios} from 'axios'

export default {
    getDataNew: ()=>({
    type: 'GET_DATA_NEW',
    payload: axios.get('http://localhost:8080/items/new?limit=10')
  })
}