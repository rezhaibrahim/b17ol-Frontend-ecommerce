/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React,{useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing components
import PrivateRoute from './components/PrivateRoute';

// importing pages

import HomePage from './pages/HomePage';
// eslint-disable-next-line import/no-named-as-default
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Customer/Mycart';
import ProductDetail from './pages/itemDetail';
import Profile from './pages/Customer/Profile'
import authAction from './redux/actions/auth'
import {useDispatch} from 'react-redux'

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authAction.setToken(localStorage.getItem('token')));
    }
  }, []);
  return (
    <>
      
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/mybag">
              <Cart />
            </PrivateRoute>
            <Route path="/profile" component={Profile} />
            <Route path="/mycart" component={Cart} />
            <Route path="/items/detail" component={ProductDetail} />
            
          </Switch>
        </BrowserRouter>
    </>
  );
}
