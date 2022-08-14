import React from 'react';
import { observer } from 'mobx-react';
import userStore from 'store/user.store';
import { toJS } from 'mobx';
import Order from './components/Order';
import { Button } from 'components';
import {
  Container,
  OrderContainer
} from './style';

const PastOrders = observer(() => {
  const [isLoading, setLoading] = React.useState(true);
  const [hasNext, setHasNext] = React.useState(true);

  React.useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    userStore.pastOrders.length === 0 && await userStore.getPastOrders({});
    setLoading(false);
  };

  const nextPage = async () => {
    setLoading(true);
    const prevLen = userStore.pastOrders.length;
    await userStore.getPastOrders({ index: userStore.pastOrders.length });
    
    if (prevLen === userStore.pastOrders.length)
      setHasNext(false);

    setLoading(false);
  };

  return (
    <Container>

      <OrderContainer>
        {toJS(userStore.pastOrders).map((order, index) => (
          <Order
            key={index}
            address={order.address}
            deliveryFee={order.deliveryFee}
            earnedPoints={order.earnedPoints}
            items={order.items}
            orderDate={order.orderDate}
            status={order.status}
            subTotal={order.subTotal}
            total={order.total}
            tip={order.tip}
            restaurant={order.restaurant}
          />
        ))}
      </OrderContainer>

      <Button
        onClick={nextPage}
        isLoading={isLoading}
        disabled={!hasNext}
      >Get More Data</Button>

    </Container>
  )
})

export default PastOrders;
