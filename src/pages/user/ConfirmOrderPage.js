import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

// import { createOrder } from '../../redux/user-slice';
import { getMyInfo, createOrder } from '../../redux/user-action';
import Button from "../../components/Button";
import PageTitle from "../../components/PageTitile";
import VerticalSpace from "../../components/VerticalSpace";
import LabelInput from "../../features/auth/LabelInput";
import OrderList from "../../features/order/OrderList";
import ContentLayout from "../../layouts/ContentLayout";
import ShipOrPickup from '../../features/order/ShipOrPickup';

const InitialPickupDate = new Date();
InitialPickupDate.setDate(InitialPickupDate.getDate() + 1);
InitialPickupDate.setHours(10, 30, 0, 0);

export default function ConfirmOrderPage() {
    const userInfo = useSelector(state => state.user.profile);
    const isPickup = useSelector(state => state.user.isPickup);
    const [shippingInfo, setShippingInfo] = useState({});
    useEffect(() => {
        setShippingInfo({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            address: userInfo.address,
            phone: userInfo.phone
        });
    }, [userInfo]);

    const [rewardId, setRewardId] = useState(1);
    const [note, setNote] = useState('green one please');
    const [pickupDate, setPickupDate] = useState(InitialPickupDate);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderItems = useSelector(state => state.user.orderItems);
    const total = orderItems.reduce((acc, item) => {
        acc += item.amount * (item.price - item.discount);
        return acc;
    }, 0);

    const handleChoosePayment = () => {
        dispatch(createOrder(rewardId, note, shippingInfo, pickupDate.toISOString(), orderItems, isPickup));
        console.log(pickupDate.toISOString())
        navigate('/user/payment');
    };

    const handleBack = () => { navigate('/user/cart') };

    // user info (update to make sure)
    useEffect(() => { dispatch(getMyInfo()) }, []);

    return (
        <ContentLayout>
            <PageTitle>CONFIRM ORDER</PageTitle>
            <OrderList />
            <VerticalSpace />
            {/* will change input to text from db */}
            <LabelInput
                placeholder='reward code ?'
                type='number'
                needLabel={false}
                value={rewardId}
                onChange={e => setRewardId(+e.target.value)}
            >
                hello
            </LabelInput>
            <VerticalSpace />
            <ShipOrPickup
                pickupDate={pickupDate}
                setPickupDate={setPickupDate}
                shippingInfo={shippingInfo}
                setShippingInfo={setShippingInfo}
            />
            <VerticalSpace />
            <div className="w-full bg-my-mint rounded-lg py-2 text-my-gray-3 text-center"> Total = ฿{total}</div>
            <VerticalSpace />
            <div onClick={handleChoosePayment}>
                <Button width="w-full" theme="my-mint" rounded="rounded-full">GO TO PAYMENT</Button>
            </div>
            <VerticalSpace />
            <div onClick={handleBack}>
                <Button width="w-full" theme="my-gray-1" rounded="rounded-full" >BACK</Button>
            </div>
        </ContentLayout>
    );
};