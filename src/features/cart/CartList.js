import { useSelector } from 'react-redux'

import VerticalSpace from "../../components/VerticalSpace";
import CartCard from "./CartCard";

export default function CartList() {
    const cartItems = useSelector(state => state.user.cart);
    const betweenLine = <VerticalSpace line={true} />

    return (
        <div>
            {cartItems.map((item, idx) => (
                <CartCard
                    key={item.productId}
                    isFirst={!Boolean(idx)}
                    name={item.name}
                    img={item.image}
                    note={item.note}
                    price={item.price}
                    netPrice={item.price - item.discount}
                    amount={item.amount}
                    productId={item.productId}
                />
            ))}
        </div>
    );
};