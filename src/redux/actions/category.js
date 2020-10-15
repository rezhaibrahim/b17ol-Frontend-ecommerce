import {default as axios} from 'axios'

export default {
    getCategory: ()=>({
    type: 'GET_CATEGORY',
    payload: axios.get('http://localhost:8080/category')
  })
}