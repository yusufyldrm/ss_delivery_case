import { PropTypes } from 'prop-types';
import React from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'
import {
  Container,
  Image,
  Name,
  RestaurantTypeContainer,
  RestaurantType,
  NewBage,
  MinPrice,
  TopContent
} from './style';

const DELIVERY_TYPE = ['THIRD_PARTY_DELIVERY', 'IN_HOUSE_DELIVERY', 'HYBRID_DELIVERY']

const RestaurantCard = ({
  name,
  restaurantId,
  isOpen,
  hasMinOrder,
  minOrder,
  isNew,
  restaurantType,
  picture,
  deliveryType,
  slug
}) => {
  return (
    <Container
      to={`/restaurant/${slug}-${restaurantId}`}
      $isOpen={isOpen}
    >
      {isNew && <NewBage>New</NewBage>}
      {!isOpen && <NewBage>Closed</NewBage>}
      <Image
        src={picture}
        onError={(e) => { e.target.src = 'https://picsum.photos/500' }}
        alt={picture}
      />

      <TopContent>
        <MinPrice>Min: ${hasMinOrder ? minOrder : '0'}</MinPrice>
        {(deliveryType === DELIVERY_TYPE[1] || deliveryType === DELIVERY_TYPE[2]) && <MdDeliveryDining size={'20px'} />}
        {deliveryType === DELIVERY_TYPE[0] && <TbTruckDelivery size={'20px'} />}
      </TopContent>

      <Name>{name}</Name>
      <RestaurantTypeContainer>
        {restaurantType.map(type => (
          <RestaurantType key={type.name}>{type.name}</RestaurantType>
        ))}
      </RestaurantTypeContainer>
    </Container>
  )
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  restaurantId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  hasMinOrder: PropTypes.bool,
  minOrder: PropTypes.number,
  isNew: PropTypes.bool,
  restaurantType: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  picture: PropTypes.string,
  deliveryType: PropTypes.string,
  slug: PropTypes.string,
};

RestaurantCard.defaultProps = {
  name: '',
  restaurantId: '',
  isOpen: false,
  hasMinOrder: false,
  minOrder: 0,
  isNew: false,
  restaurantType: [],
  picture: '',
  deliveryType: '',
  slug: '',
};

export default RestaurantCard;
