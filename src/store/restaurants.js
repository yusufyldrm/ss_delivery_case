import {
  action,
  observable,
  makeObservable,
  runInAction
} from 'mobx';
import api, { config } from 'api';
import errorHandler from 'helpers/errorHandler';
import { RESTAURANTS_QUERY, SINGLE_RESTAURANT_QUERY } from 'graphql/queries';

class RestaurantStore {
  allRestaurants = {
    data: [],
    loading: false,
    error: null,
    hasNextPage: false,
  };

  constructor() {
    makeObservable(this, {
      allRestaurants: observable,
      getAllRestaurants: action,
      getSingleRestaurant: action
    });
  };

  setAllRestaurants = (restaurants) => {
    this.allRestaurants.data = restaurants;
  };

  getAllRestaurants = async ({ idx = 0, limit = 10, delivery = false }) => {
    runInAction(() => {
      this.allRestaurants.loading = true;
      this.allRestaurants.error = null;
    });

    try {
      const { data: { data, errors } } = await api.post('', {
        query: RESTAURANTS_QUERY,
        variables: {
          index: idx,
          limit,
          delivery
        }
      }, config());

      if (errors)
        throw new Error(errors[0].message);

      runInAction(() => {
        this.allRestaurants.data = data.restaurants;
        this.allRestaurants.error = null;
        this.allRestaurants.hasNextPage = data.restaurants.length === limit;
      });
    } catch (error) {
      runInAction(() => {
        this.allRestaurants.error = errorHandler(error);
      });
    }

    runInAction(() => {
      this.allRestaurants.loading = false;
    });
  };

  getSingleRestaurant = async ({ id, delivery = false }) => {
    runInAction(() => {
      this.allRestaurants.loading = true;
      this.allRestaurants.error = null;
    });

    try {
      const { data: { data, errors } } = await api.post('', {
        query: SINGLE_RESTAURANT_QUERY,
        variables: {
          id,
          delivery
        }
      });

      if (errors)
        throw new Error(errors[0].message);

      return { data: data, hasError: false }

    } catch (error) {
      return { data: errorHandler(error), hasError: true }
    }

  };


};

export default new RestaurantStore();
