import React from 'react';

const Order = ({order}) => {
    return (
        <li>Order: {order.carId} {order.car} {Math.round(order.price)} zł / {order.howLong} days</li>
    );
};
export default Order;