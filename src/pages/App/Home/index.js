import React from 'react'
import { observer } from 'mobx-react';
import restaurants from 'store/restaurants';
import RestaurantCard from './components/RestaurantCard';
import { RestaurantArea } from './style';

const Home = observer(() => {

  React.useEffect(() => {
    restaurants.getAllRestaurants({
      index: 1,
      limit: 10,
      delivery: false
    });
  }, [])

  return (
    <>
      <RestaurantArea>
        {restaurants.allRestaurants.data.filter(e => e.open).map(restaurant => (
          <RestaurantCard
            key={restaurant.uid}
            name={restaurant.name}
            restaurantId={restaurant.uid}
            isOpen={restaurant.open}
            hasMinOrder={restaurant.minOrderEnabled}
            minOrder={restaurant.minOrderAmount}
            isNew={restaurant.isNew}
            restaurantType={restaurant.types}
            picture={restaurant.picture.url}
            deliveryType={restaurant.deliveryType}
            slug={restaurant.slugName}
          />
        ))}
        {restaurants.allRestaurants.data.filter(e => !e.open).map(restaurant => (
          <RestaurantCard
            key={restaurant.uid}
            name={restaurant.name}
            restaurantId={restaurant.uid}
            isOpen={restaurant.open}
            hasMinOrder={restaurant.minOrderEnabled}
            minOrder={restaurant.minOrderAmount}
            isNew={restaurant.isNew}
            restaurantType={restaurant.types}
            picture={restaurant.picture.url}
            deliveryType={restaurant.deliveryType}
            slug={restaurant.slugName}
          />
        ))}
      </RestaurantArea>
    </>
  )
});

export default Home;
