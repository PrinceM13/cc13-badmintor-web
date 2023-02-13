import { useSelector } from "react-redux";

import ButtonGroup from "../../components/ButtonGroup";
import VerticalSpace from "../../components/VerticalSpace";
import InfoBox from "./InfoBox";

export default function ShipOrPickup({ pickupDate, setPickupDate, shippingInfo, setShippingInfo }) {

    // const userInfo = useSelector(state => state.user.profile);
    const isPickup = useSelector(state => state.user.isPickup);

    const userPhone = `${String(shippingInfo.phone).slice(0, 3)}-${String(shippingInfo.phone).slice(3, 7)}-${String(shippingInfo.phone).slice(7)}`

    const pickupDetail = `date: ${pickupDate.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
time: ${pickupDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
number: ${userPhone}`

    const shippingDetail = `name: ${shippingInfo.firstName} ${shippingInfo.lastName}
number: ${userPhone}
address: ${shippingInfo.address}`

    return (
        <>
            <ButtonGroup isSelectedFirstButton={isPickup} />
            <VerticalSpace />
            <InfoBox detail={pickupDetail} isSelected={isPickup}>pick-up detail:</InfoBox>
            <VerticalSpace />
            <InfoBox detail={shippingDetail} isSelected={!isPickup}>shipping detail:</InfoBox>
        </>
    );
};