import * as userApi from '../apis/user-api';
import { setCart, setProfile, setOrder, updateCartWithDeleteId, setOrders } from './user-slice';

export const getMyCart = () => async dispatch => {
    try {
        const res = await userApi.getMyCart();
        dispatch(setCart(res.data.carts));
    } catch (err) {
        console.error(err);
    }
};

export const getMyInfo = () => async dispatch => {
    try {
        const res = await userApi.getMyInfo();
        dispatch(setProfile(res.data.user));
    } catch (err) {
        console.error(err);
    }
};

export const deleteFromMyCart = productId => async dispatch => {
    try {
        await userApi.deleteItemInCart(productId);      // server
        dispatch(updateCartWithDeleteId([productId]));    // update front-end cart
    } catch (err) {
        console.log(err);
    }
};

const manageDeleteItemInCart = async productId => {
    try {
        await userApi.deleteItemInCart(productId);
    } catch (err) {
        console.error(err);
    }
};
export const createOrder = (rewardId, note, shippingInfo, pickupDate, orderItems) => async dispatch => {
    try {
        const myOrder = {
            // userId: should add at server-side
            rewardId: rewardId,      // dummy 0 for now should edit to optional (allow null)
            discount: 0,                            // (check from rewardId) dicount from reward not promotion, skip for now lol
            includedRewardItem: false,              // skip reward for now
            status: 'WAITING_FOR_PAYMENT',
            paymentReceipt: null,
            paymentDateTime: null,
            isPickup: true,
            address: `name: ${shippingInfo.firstName} ${shippingInfo.lastName}\naddress: ${shippingInfo.address}\nphone: ${shippingInfo.phone}`,
            expectedDate: pickupDate,
            userNote: note
        }
        dispatch(setOrder(myOrder));
        // create order
        const res = await userApi.createOrder(myOrder);
        const orderId = res.data.order.id;
        const newOrderItems = orderItems.map(item => ({ ...item, orderId }));
        const orders = await userApi.getMyOrders();
        dispatch(setOrders(orders.data.orders));  // set state
        // create order items
        await userApi.createOrderItems(newOrderItems);
        // delete cart
        const deleteProductIds = [];
        orderItems.forEach(item => {
            manageDeleteItemInCart(item.productId); // server
            deleteProductIds.push(item.productId);  // to update front-end
        });
        dispatch(updateCartWithDeleteId(deleteProductIds));     // update front-end cart
    } catch (err) {
        console.error(err);
    }
}