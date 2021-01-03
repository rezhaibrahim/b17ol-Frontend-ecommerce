/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React,{Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing components
import PrivateRoute from './components/PrivateRoute';

// importing pages

import HomePage from './pages/HomePage';
// eslint-disable-next-line import/no-named-as-default
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Customer/Mycart';
import ProductDetail from './pages/Customer/DetailItems';
import Profile from './pages/Customer/Profile'
import authAction from './redux/actions/auth'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.setToken(localStorage.getItem('token'));
    }
  }
  render(){
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
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <Route path="/items/:id" component={ProductDetail} />
              
            </Switch>
          </BrowserRouter>
      </>
    );
  }
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {
  setToken: authAction.auth,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);