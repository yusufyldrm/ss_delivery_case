import api, { config } from 'api';
import errorHandler from 'helpers/errorHandler';
import {
  USER_QUERY,
  PAST_ORDER_QUERY
} from 'graphql/queries';

import {
  action,
  observable,
  makeObservable,
  // runInAction
} from 'mobx';
import { LOGIN_MUTATION } from 'graphql/mutations';

class UserStore {
  isAuthenticated = false;
  userData = null;
  authToken = null;
  pastOrders = [];

  constructor() {
    makeObservable(this, {
      isAuthenticated: observable,
      userData: observable,
      authToken: observable,
      pastOrders: observable,
      login: action,
      getUser: action,
      logout: action,
    });
    this.initialize();
  }

  initialize = async () => {
    const token = window.localStorage.getItem('authToken');
    if (token) {
      this.setAuthToken(token);
      this.setAuthStatus(true);
      this.getUser();
    }
  };

  setAuthStatus = (isAuthenticated) => {
    this.isAuthenticated = isAuthenticated;
  };

  setAuthToken = (token) => {
    this.authToken = token;
  };

  setPastOrders = (pastOrders) => {
    this.pastOrders = this.pastOrders.concat(pastOrders);
  };

  setUserData = (user) => {
    this.userData = user;
  };

  login = async ({ email, password }) => {
    try {
      const { data: { data, errors } } = await api.post('', {
        query: LOGIN_MUTATION,
        variables: {
          email: email,
          password: password
        }
      });

      if (errors)
        throw new Error(errors[0].message);
      this.getUser();
      const token = data.loginWithEmail.token;

      window.localStorage.setItem('authToken', token);
      this.setAuthToken(token);
      this.setAuthStatus(true);
      return { hasError: false, data: token };
    } catch (error) {
      const err = errorHandler(error)
      console.log(err.message);
      return { hasError: true, data: err.message };
    }
  };

  getUser = async () => {
    try {
      const { data: { data: { user }, errors } } = await api.post('',
        { query: USER_QUERY },
        config()
      );
      if (errors)
        throw new Error(errors[0].message);

      this.setUserData(user);
    } catch (error) {
      const err = errorHandler(error)
      console.log(err.message);
    }
  };

  getPastOrders = async ({ index = 0, limit = 10 }) => {
    try {
      const { data: { data: { pastOrders }, errors } } = await api.post('',
        {
          query: PAST_ORDER_QUERY,
          variables: {
            index: index,
            limit: limit
          }
        },
        config()
      );
      if (errors)
        throw new Error(errors[0].message);

      this.setPastOrders(pastOrders);
      return { hasError: false, data: pastOrders };
    } catch (error) {
      const err = errorHandler(error)
      return { hasError: true, data: err.message };
    }
  };

  logout = () => {
    window.localStorage.removeItem('authToken');
    this.setAuthToken(null);
    this.setAuthStatus(false);
  };

};

export default new UserStore();
