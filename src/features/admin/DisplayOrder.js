import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllOrder } from '../../redux/admin-action';
import TableOrder from "./TableOrder";

export default function DisplayAdmin() {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.admin.orders);

    useEffect(() => { dispatch(getAllOrder()) }, [])

    const tableHead = ['Id', 'Ship / Pickup', 'Status'];
    const tableBody = orders?.map(el => [el.id, el.isPickup ? 'PICKUP' : 'SHIP', el.status]);
    const mapObjOrders = orders?.map(el => ({ orderId: el.id, status: el.status, isPickup: el.isPickup }));

    return (
        <TableOrder tableHead={tableHead} tableBody={tableBody} mapObjOrders={mapObjOrders} />
    );
};