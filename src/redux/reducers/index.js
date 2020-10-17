import { combineReducers } from 'redux';
import newItems from './item'
import listCategory from './category'
import auth from './auth';
import profile from './profile'
import itemNew from './itemNew'
import itemPopular from './itemPopular'

export default combineReducers({
  auth,
  newItems,
  itemNew,
  itemPopular,
  listCategory,
  profile
});
