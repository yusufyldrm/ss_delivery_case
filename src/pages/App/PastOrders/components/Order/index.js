import React from 'react'
import PropTypes from 'prop-types';
import { dateFormatterWHours } from 'helpers/dateFormatter';
import {
  Card,
  TitleContainer,
  Date,
  RestaurantName,
  Badge,
  ItemsContainer,
  Item,
  InfoContainer,
  PriceContainer,
  Address
} from './style';

const ORDER_STATUS = {
  ORDER_COMPLETED: 'ORDER_COMPLETED',
  ORDER_CANCELLED: 'ORDER_CHECK_TIMEOUT'
}

const Seperator = ({ w = '90%' }) => <div style={{ width: w, height: '1px', backgroundColor: '#ccc', margin: '5px auto' }} />

const Order = ({
  address,
  items,
  deliveryFee,
  earnedPoints,
  orderDate,
  status,
  subTotal,
  total,
  tip,
  restaurant
}) => {
  const getSlug = (text) => text.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

  return (
    <Card>
      <TitleContainer>
        <RestaurantName to={`/restaurant/${getSlug(restaurant.name)}-${restaurant.uid}`}>{restaurant.name}</RestaurantName>
        <Badge
          $isSuccess={status === ORDER_STATUS.ORDER_COMPLETED}
        >{status === ORDER_STATUS.ORDER_COMPLETED ? `Completed +${earnedPoints} p.` : 'Canceled'}</Badge>
      </TitleContainer>
      <Date>
        <p>Order Date: {dateFormatterWHours(orderDate)}</p>
      </Date>
      <Seperator />
      <ItemsContainer>
        {items.map((item, index) => (
          <Item key={index}>
            <p><strong>{index + 1}-</strong> {item.name} (<strong>{item.quantity} x ${item.amount}</strong>)</p>
          </Item>
        ))}
      </ItemsContainer>
      <Seperator />
      <PriceContainer>
        {<p>Sub Total: <strong>${subTotal}</strong></p>}
        {!!tip.amount && <p>Tip: <strong>${tip.amount}</strong></p>}
        {!!deliveryFee && <p>Delivery Fee: <strong>${deliveryFee}</strong></p>}
        <p>Total: <strong>${total}</strong></p>
      </PriceContainer>
      <Seperator />
      <InfoContainer>
        <Address>
          <p>{address.fullName}</p>
          <p>{address.addressLine1}</p>
          <p>{address.addressLine2} flat:{address.flatNumber} PostalCode:{address.postalCode}</p>
        </Address>
      </InfoContainer>
    </Card>
  )
};

Order.propTypes = {
  address: PropTypes.shape({
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    flatNumber: PropTypes.string,
    fullName: PropTypes.string,
    geoEnabled: PropTypes.bool,
    id: PropTypes.number,
    postalCode: PropTypes.string,
    tips: PropTypes.string,
    title: PropTypes.string,
    userAddressId: PropTypes.number,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      description: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      note: PropTypes.string,
      oldAmount: PropTypes.number,
      quantity: PropTypes.number,
      totalAmount: PropTypes.number
    })
  ),
  deliveryFee: PropTypes.number,
  earnedPoints: PropTypes.number,
  orderDate: PropTypes.string,
  status: PropTypes.string,
  subTotal: PropTypes.number,
  total: PropTypes.number,
  tip: PropTypes.object,
  restaurant: PropTypes.shape({
    contactMobileNumber: PropTypes.string,
    name: PropTypes.string,
    uid: PropTypes.string,
  })
};

Order.defaultProps = {
  address: {
    addressLine1: '',
    addressLine2: '',
    flatNumber: '',
    fullName: '',
    geoEnabled: false,
    id: 0,
    postalCode: '',
    tips: '',
    title: '',
    userAddressId: 0
  },
  items: [
    {
      amount: 0,
      description: '',
      id: 0,
      name: '',
      note: '',
      oldAmount: 0,
      quantity: 0,
      totalAmount: 0
    }
  ],
  deliveryFee: 0,
  earnedPoints: 0,
  orderDate: '',
  status: '',
  subTotal: 0,
  total: 0,
  tip: {
    amount: 0,
    createdAt: ''
  },
  restaurant: {
    contactMobileNumber: '',
    name: '',
    uid: ''
  }
};

export default Order;
