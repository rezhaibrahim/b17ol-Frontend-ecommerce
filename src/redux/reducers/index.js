import { combineReducers } from 'redux';
import newItems from './item'
import listCategory from './category'
import auth from './auth';
import profile from './profile'

export default combineReducers({
  auth,
  newItems,
  listCategory,
  profile
});
