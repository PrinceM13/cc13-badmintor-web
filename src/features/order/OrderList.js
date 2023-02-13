import { useSelector } from 'react-redux';

import OrderCard from "./OrderCard";

export default function OrderList() {
    const orderItems = useSelector(state => state.user.orderItems);

    return (
        <div>
            {orderItems.map((item, idx) => (
                <OrderCard
                    key={item.productId}
                    name={item.name}
                    totalPrice={item.amount * (item.price - item.discount)}
                    idx={idx}
                    last={orderItems.length - 1}
                />
            ))}
        </div>
    );
};