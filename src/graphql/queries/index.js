
export const USER_QUERY = `
{
  user {
    addresses {
      addressIconId
      addressLine1
      addressLine2
      adminWard
      default
      flatNumber
      fullName
      geoEnabled
      id
      lat
      lon
      postalCode
      slugAdminWard
      tips
      title
    }
    createdAt
    email
    emailVerified
    firstName
    lastName
    mobileNumber
    smsVerified
    profilePicture {
      url
    }
  }
}
`;

export const RESTAURANTS_QUERY = `
query GetRestaurants($delivery: Boolean!, $index: Int!, $limit: Int!) {
  restaurants(
    delivery: $delivery
    index: $index
    limit: $limit
  ) {
    name
    slugName
    uid
    avgScore
    deliveryType
    types {
      name
    }
		isNew
    reOpenDate
		open
    minOrderEnabled
    minOrderAmount
    picture {
      bundle
      height
      url
      width
    }
    restaurantAddressPostalCode
    restaurantAddressSlugCityName
    restaurantAddressSlugAdminWard
  } 
}

`;

export const SINGLE_RESTAURANT_QUERY = `
query restaurant($id: String!, $delivery: Boolean!) {
  restaurant(restaurantUid: $id, delivery: $delivery) {
    name
    info
    distance
    deliveryFee {
      amount
      freeDeliveryMoreThanAmount
      freeDeliveryMoreThanEnabled
    }
    openingHours {
      fri {
        end_time
        open
        start_time
      }
      mon {
        end_time
        open
        start_time
      }
      sat {
        end_time
        open
        start_time
      }
      sun {
        end_time
        open
        start_time
      }
      thu {
        end_time
        open
        start_time
      }
      tue {
        end_time
        open
        start_time
      }
      wed {
        end_time
        open
        start_time
      }
    }
    address {
      addressLine1
      addressLine2
      city {
        name
        timezone
      }
      country {
        isoCode
        name
      }
      flatNumber
      postalCode
      slugAdminWard
    }
    contactMobileNumber
    types {
      name
    }
		isClosingSoon
    isFavorite
    isNew
    restaurantOpenStatus
    restaurantNextVacationStatus
    restaurantDeliveryDriverStatus
    pictures {
      height
      url
      width
    }
  }
}
`;

export const PAST_ORDER_QUERY = `
query pastOrders($index: Int!, $limit: Int!) {
  pastOrders(index: $index, limit: $limit) {
    address {
      id
      userAddressId
      addressLine1
      addressLine2
      flatNumber
      fullName
      geoEnabled
      postalCode
      tips
      title 
    }
    deliveryDriver {
      avgScore
      email
      firstName
      lastName
      mobileNumber
      uid
    }
    deliveryFee
    deliveryTime
    deliveryType
    earnedPoints
    items {
      amount
      description
      id
      name
      note
      oldAmount
      quantity
      totalAmount
    }
    orderCheckDeadline
    orderCompletedRewardPoints
    orderDate
    orderDeclineReason
    orderDeliveryDeadline
    orderEarliestDeliveryDeadline
    orderEarliestPreparingDeadline
    orderLatestDeliveryDeadline
    orderLatestPreparingDeadline
    orderPreparingDeadline
    orderPreparingDelay
    preOrder
    preparationTime
    promoCode {
      afterGainAmount
      beforeGainAmount
      code
      createdAt
      description
      expiryAt
      gainAmount
      gainStage
      gainType
      id
      minOrderAmount
      restaurantName
      restaurantUID
      title
      type
      useAble
      useAbleForRestaurant
      usedAt
    }
    refund {
      amount
    }
    restaurant {
      contactMobileNumber
      name
      uid
    }
    restaurantDeliveryType
    review {
      createdAt
      id
      pointsEarned
    }
    smallAmountFee
    status
    subTotal
    tip {
      amount
      createdAt
    }
    total
    totalPromoCodeAmount
    uid
    usedPoints
    userCanCall
    userCanRate
    userCanReOrder
    userCanTip
  }
}
`;
