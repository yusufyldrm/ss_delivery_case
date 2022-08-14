import { observer } from 'mobx-react';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import restaurants from 'store/restaurants';
import { Button, Loader } from 'components';
import {
  Center,
  Container,
  Name,
  ImageContainer,
  IconContainer,
  Image,
  Description,
  Badge,
  Address,
  TypeContainer,
  Type
} from './style';

const Seperator = () => <div style={{ width: '100%', height: '1px', backgroundColor: '#eaeaea', margin: '10px 0' }} />;

const SingleRestaurant = observer(() => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();
  const [isLoaded, setLoaded] = React.useState(false);
  const [hasError, setError] = React.useState(false);
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(() => {
    setLoaded(false);
    getRestaurantData(restaurantId);
  }, [restaurantId]);

  const getRestaurantData = async (restaurantId) => {
    const { data, hasError } = await restaurants.getSingleRestaurant({ id: restaurantId.split('-').reverse()[0] });

    if (hasError) {
      setError(true);
    }
    setRestaurant(data.restaurant);
    setLoaded(true);
  };

  if (!isLoaded) {
    return (
      <Center>
        <Loader />
        <p>Loading</p>
      </Center>
    );
  };

  if (hasError) {
    return (
      <Center>
        <p>Error</p>
        <Button
          style={{ width: 'auto' }}
          onClick={() => navigate('/')}
        >
          Go Home
        </Button>
      </Center>
    );
  };

  return (
    <Container>
      <Name>{restaurant.name}</Name>
      {!restaurant.restaurantOpenStatus && <Badge>Closed</Badge>}
      <IconContainer>
        {restaurant.isFavorite ? <BsFillHeartFill size={'20px'} /> : <BsHeart size={'20px'} />}
      </IconContainer>
      <ImageContainer>
        {restaurant.pictures.map(picture => (
          <Image
            key={picture}
            src={picture}
            alt={picture}
            onError={(e) => { e.target.src = 'https://picsum.photos/500' }}
          />
        ))}
      </ImageContainer>
      <Description>{restaurant.info}</Description>
      <Address>
        Phone: {restaurant.contactMobileNumber}{<br />}
        {restaurant.address.addressLine1} {restaurant.address.addressLine2}{<br />}
        {restaurant.address.city.name}/{restaurant.address.country.name}
      </Address>

      <TypeContainer>
        {restaurant.types.map(type => (
          <Type key={type.name}>{type.name}</Type>
        ))}
      </TypeContainer>

      <Seperator />
    </Container>
  )
});

export default SingleRestaurant;
